import { PrismaService } from '../../prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    register(email: string, password: string): Promise<{
        id: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(email: string, password: string): Promise<{
        user: {
            id: string;
            email: string;
            password: string;
            createdAt: Date;
            updatedAt: Date;
        };
        session: {
            id: string;
            userId: string;
            createdAt: Date;
            expiresAt: Date;
        };
    }>;
}
