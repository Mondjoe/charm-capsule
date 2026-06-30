import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    register(dto: RegisterDto): Promise<{
        id: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(dto: LoginDto): Promise<{
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
