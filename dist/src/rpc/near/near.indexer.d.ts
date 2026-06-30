import { PrismaService } from '../../prisma/prisma.service';
import { NearService } from './near.service';
import { NearNormalizer } from './near.normalizer';
export declare class NearIndexer {
    private prisma;
    private near;
    private normalizer;
    constructor(prisma: PrismaService, near: NearService, normalizer: NearNormalizer);
    indexValidators(chainId: string): Promise<number>;
}
