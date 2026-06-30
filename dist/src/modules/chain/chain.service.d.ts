import { PrismaService } from '../../prisma/prisma.service';
import { CreateChainDto } from './dto/create-chain.dto';
import { UpdateChainDto } from './dto/update-chain.dto';
export declare class ChainService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateChainDto): Promise<{
        id: string;
        name: string;
        type: string;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        type: string;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        type: string;
        createdAt: Date;
    }>;
    update(id: string, dto: UpdateChainDto): Promise<{
        id: string;
        name: string;
        type: string;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        type: string;
        createdAt: Date;
    }>;
    seedDefaultChains(): Promise<{
        id: string;
        name: string;
        type: string;
        createdAt: Date;
    }[]>;
}
