import { PrismaService } from '../../prisma/prisma.service';
import { AptosService } from './aptos.service';
export declare class AptosRewardsIndexer {
    private prisma;
    private aptos;
    constructor(prisma: PrismaService, aptos: AptosService);
    indexRewards(chainId: string): Promise<number>;
}
