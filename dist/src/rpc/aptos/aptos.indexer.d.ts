import { PrismaService } from '../../prisma/prisma.service';
import { AptosService } from './aptos.service';
import { AptosNormalizer } from './aptos.normalizer';
export declare class AptosIndexer {
    private prisma;
    private aptos;
    private normalizer;
    private readonly logger;
    constructor(prisma: PrismaService, aptos: AptosService, normalizer: AptosNormalizer);
    indexValidators(chainId: string): Promise<any>;
}
