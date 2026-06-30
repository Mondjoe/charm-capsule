import { PrismaService } from '../../prisma/prisma.service';
export declare class ApiService {
    private prisma;
    constructor(prisma: PrismaService);
    getChains(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        type: string;
        createdAt: Date;
    }[]>;
    getValidators(): import("@prisma/client").Prisma.PrismaPromise<({
        chain: {
            id: string;
            name: string;
            type: string;
            createdAt: Date;
        };
    } & {
        id: string;
        chainId: string;
        address: string;
        name: string | null;
        status: string;
        commission: number | null;
        apr: number | null;
        totalStaked: number | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    getValidatorsByChain(chainId: string): import("@prisma/client").Prisma.PrismaPromise<({
        chain: {
            id: string;
            name: string;
            type: string;
            createdAt: Date;
        };
    } & {
        id: string;
        chainId: string;
        address: string;
        name: string | null;
        status: string;
        commission: number | null;
        apr: number | null;
        totalStaked: number | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    getValidator(id: string): import("@prisma/client").Prisma.Prisma__ValidatorClient<({
        chain: {
            id: string;
            name: string;
            type: string;
            createdAt: Date;
        };
        metrics: {
            id: string;
            validatorId: string;
            epoch: number | null;
            slot: number | null;
            uptime: number | null;
            rewards: number | null;
            stake: number | null;
            createdAt: Date;
        }[];
        logs: {
            id: string;
            validatorId: string;
            level: string;
            message: string;
            timestamp: Date;
        }[];
        nodes: {
            id: string;
            validatorId: string;
            endpoint: string;
            type: string;
            status: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        chainId: string;
        address: string;
        name: string | null;
        status: string;
        commission: number | null;
        apr: number | null;
        totalStaked: number | null;
        createdAt: Date;
        updatedAt: Date;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    getValidatorMetrics(id: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        validatorId: string;
        epoch: number | null;
        slot: number | null;
        uptime: number | null;
        rewards: number | null;
        stake: number | null;
        createdAt: Date;
    }[]>;
    getValidatorLogs(id: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        validatorId: string;
        level: string;
        message: string;
        timestamp: Date;
    }[]>;
    getValidatorNodes(id: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        validatorId: string;
        endpoint: string;
        type: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getOverview(): Promise<{
        chains: number;
        validators: number;
        metrics: number;
    }>;
}
