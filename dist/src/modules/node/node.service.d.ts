import { PrismaService } from '../../prisma/prisma.service';
import { CreateNodeDto } from './dto/create-node.dto';
import { UpdateNodeDto } from './dto/update-node.dto';
export declare class NodeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateNodeDto): Promise<{
        id: string;
        validatorId: string;
        endpoint: string;
        type: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        validator: {
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
        };
    } & {
        id: string;
        validatorId: string;
        endpoint: string;
        type: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findByValidator(validatorId: string): Promise<{
        id: string;
        validatorId: string;
        endpoint: string;
        type: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        validator: {
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
        };
    } & {
        id: string;
        validatorId: string;
        endpoint: string;
        type: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateNodeDto): Promise<{
        id: string;
        validatorId: string;
        endpoint: string;
        type: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        validatorId: string;
        endpoint: string;
        type: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
