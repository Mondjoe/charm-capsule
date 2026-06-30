import { LogsService } from './logs.service';
import { CreateLogDto } from './dto/create-log.dto';
export declare class LogsController {
    private logsService;
    constructor(logsService: LogsService);
    create(dto: CreateLogDto): Promise<{
        id: string;
        validatorId: string;
        level: string;
        message: string;
        timestamp: Date;
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
        level: string;
        message: string;
        timestamp: Date;
    })[]>;
    findByValidator(validatorId: string): Promise<{
        id: string;
        validatorId: string;
        level: string;
        message: string;
        timestamp: Date;
    }[]>;
}
