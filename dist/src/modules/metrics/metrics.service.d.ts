import { PrismaService } from '../../prisma/prisma.service';
import { CreateMetricDto } from './dto/create-metric.dto';
export declare class MetricsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateMetricDto): Promise<{
        id: string;
        validatorId: string;
        epoch: number | null;
        slot: number | null;
        uptime: number | null;
        rewards: number | null;
        stake: number | null;
        createdAt: Date;
    }>;
    findByValidator(validatorId: string): Promise<{
        id: string;
        validatorId: string;
        epoch: number | null;
        slot: number | null;
        uptime: number | null;
        rewards: number | null;
        stake: number | null;
        createdAt: Date;
    }[]>;
    findAll(): Promise<{
        id: string;
        validatorId: string;
        epoch: number | null;
        slot: number | null;
        uptime: number | null;
        rewards: number | null;
        stake: number | null;
        createdAt: Date;
    }[]>;
}
