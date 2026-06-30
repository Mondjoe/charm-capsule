import { SolanaIndexer } from './solana.indexer';
import { PrismaService } from '../../prisma/prisma.service';
import { SolanaRewardsIndexer } from './solana.rewards';
export declare class SolanaCron {
    private indexer;
    private prisma;
    private rewards;
    constructor(indexer: SolanaIndexer, prisma: PrismaService, rewards: SolanaRewardsIndexer);
    updateSolana(): Promise<void>;
}
