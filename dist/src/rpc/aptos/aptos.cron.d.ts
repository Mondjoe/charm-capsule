import { AptosIndexer } from './aptos.indexer';
import { PrismaService } from '../../prisma/prisma.service';
import { AptosRewardsIndexer } from './aptos.rewards';
export declare class AptosCron {
    private indexer;
    private rewards;
    private prisma;
    constructor(indexer: AptosIndexer, rewards: AptosRewardsIndexer, prisma: PrismaService);
    updateAptos(): Promise<void>;
}
