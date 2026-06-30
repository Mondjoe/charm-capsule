import { PrismaService } from '../../prisma/prisma.service';
import { EvmService } from './evm.service';
import { EvmNormalizer } from './evm.normalizer';
export declare class EvmIndexer {
    private prisma;
    private evm;
    private normalizer;
    constructor(prisma: PrismaService, evm: EvmService, normalizer: EvmNormalizer);
    indexEthereum(chainId: string, beaconUrl: string): Promise<any>;
    indexGeneric(chainId: string, rpcUrl: string, method: string): Promise<any>;
}
