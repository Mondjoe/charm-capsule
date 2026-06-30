import { PrismaService } from '../../prisma/prisma.service';
import { NearService } from './near.service';
export declare class NearRewardsIndexer {
    private prisma;
    private near;
    constructor(prisma: PrismaService, near: NearService);
    indexRewards(chainId: string): Promise<number>;
}
