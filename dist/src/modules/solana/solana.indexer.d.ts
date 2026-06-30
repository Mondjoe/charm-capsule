import { SolanaService } from './solana.service';
import { SolanaNormalizer } from './solana.normalizer';
import { SolanaQueue } from './solana.queue';
import { PrismaService } from '../../database/prisma/prisma.service';
export declare class SolanaIndexer {
    private readonly solana;
    private readonly normalizer;
    private readonly queue;
    private readonly prisma;
    private readonly logger;
    constructor(solana: SolanaService, normalizer: SolanaNormalizer, queue: SolanaQueue, prisma: PrismaService);
    scanNewBlocks(): Promise<void>;
    processSlot(slot: number): Promise<void>;
    processTransaction(raw: any, slot: number): Promise<void>;
    updateValidators(): Promise<void>;
    updateStakeAccounts(address: string): Promise<void>;
    updateRewards(address: string): Promise<void>;
}
