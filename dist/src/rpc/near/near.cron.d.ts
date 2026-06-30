import { NearIndexer } from './near.indexer';
import { PrismaService } from '../../prisma/prisma.service';
import { NearRewardsIndexer } from './near.rewards';
export declare class NearCron {
    private indexer;
    private rewards;
    private prisma;
    constructor(indexer: NearIndexer, rewards: NearRewardsIndexer, prisma: PrismaService);
    updateNear(): Promise<void>;
}
