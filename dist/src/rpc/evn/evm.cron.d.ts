import { EvmIndexer } from './evm.indexer';
import { PrismaService } from '../../prisma/prisma.service';
export declare class EvmCron {
    private indexer;
    private prisma;
    constructor(indexer: EvmIndexer, prisma: PrismaService);
    updateEvm(): Promise<void>;
}
