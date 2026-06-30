import { PrismaService } from '../../prisma/prisma.service';
import { SolanaService } from './solana.service';
import { SolanaNormalizer } from './solana.normalizer';
export declare class SolanaIndexer {
    private prisma;
    private solana;
    private normalizer;
    constructor(prisma: PrismaService, solana: SolanaService, normalizer: SolanaNormalizer);
    indexValidators(chainId: string): Promise<number>;
}
