import { PrismaService } from '../../prisma/prisma.service';
import { SolanaService } from './solana.service';
export declare class SolanaRewardsIndexer {
    private prisma;
    private solana;
    constructor(prisma: PrismaService, solana: SolanaService);
    indexRewards(chainId: string): Promise<any>;
}
