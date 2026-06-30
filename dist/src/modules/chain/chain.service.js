"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ChainService = class ChainService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        return this.prisma.chain.create({
            data: dto,
        });
    }
    async findAll() {
        return this.prisma.chain.findMany({
            orderBy: { createdAt: 'asc' },
        });
    }
    async findOne(id) {
        const chain = await this.prisma.chain.findUnique({ where: { id } });
        if (!chain)
            throw new common_1.NotFoundException('Chain not found');
        return chain;
    }
    async update(id, dto) {
        return this.prisma.chain.update({
            where: { id },
            data: dto,
        });
    }
    async remove(id) {
        return this.prisma.chain.delete({
            where: { id },
        });
    }
    async seedDefaultChains() {
        const defaults = [
            { name: 'Solana', type: 'solana' },
            { name: 'Aptos', type: 'aptos' },
            { name: 'NEAR', type: 'near' },
            { name: 'EVM', type: 'evm' },
        ];
        for (const chain of defaults) {
            await this.prisma.chain.upsert({
                where: { name: chain.name },
                update: {},
                create: chain,
            });
        }
        return this.findAll();
    }
};
exports.ChainService = ChainService;
exports.ChainService = ChainService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChainService);
//# sourceMappingURL=chain.service.js.map