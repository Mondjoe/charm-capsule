import { PrismaService } from '../../prisma/prisma.service';
import { CreateValidatorDto } from './dto/create-validator.dto';
import { UpdateValidatorDto } from './dto/update-validator.dto';
export declare class ValidatorService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateValidatorDto): Promise<{
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
    }>;
    findAll(): Promise<({
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
    findByChain(chainId: string): Promise<({
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
    findOne(id: string): Promise<{
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
    }>;
    update(id: string, dto: UpdateValidatorDto): Promise<{
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
    }>;
    remove(id: string): Promise<{
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
    }>;
}
