import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SolanaService } from './solana.service';
import { SolanaNormalizer } from './solana.normalizer';

@Injectable()
export class SolanaIndexer {
  constructor(
    private prisma: PrismaService,
    private solana: SolanaService,
    private normalizer: SolanaNormalizer,
  ) {}

  async indexValidators(chainId: string) {
    // Fetch in parallel
    const [voteAccounts, epochInfo] = await Promise.all([
      this.solana.getVoteAccounts(),
      this.solana.getEpochInfo(),
    ]);

    const current = voteAccounts.current.map(v => ({ v, delinquent: false }));
    const delinquent = voteAccounts.delinquent.map(v => ({ v, delinquent: true }));

    const all = [...current, ...delinquent];

    // Normalize all validators + metrics
    const validators = all.map(({ v, delinquent }) =>
      this.normalizer.normalizeValidator(v, delinquent),
    );

    const metrics = all.map(({ v }) =>
      this.normalizer.normalizeMetric(v, epochInfo),
    );

    // Build DB operations
    const ops = [];

    validators.forEach((val, i) => {
      ops.push(
        this.prisma.validator.upsert({
          where: { address: val.address },
          update: val,
          create: { chainId, ...val },
        }),
      );
    });

    // Run validator upserts
    const saved = await this.prisma.validator.findMany() as Validator[];
    
    // Build metric inserts
    const metricOps = metrics.map((m, i) =>
      this.prisma.validatorMetric.create({
        data: {
          validatorId: saved[i].id,
          ...m,
        },
      }),
    );

    await this.prisma.$transaction(metricOps);

    return validators.length;
  }
}
