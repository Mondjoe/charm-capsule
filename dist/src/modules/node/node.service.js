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
exports.NodeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let NodeService = class NodeService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const validator = await this.prisma.validator.findUnique({
            where: { id: dto.validatorId },
        });
        if (!validator)
            throw new common_1.NotFoundException('Validator not found');
        return this.prisma.node.create({
            data: {
                validatorId: dto.validatorId,
                endpoint: dto.endpoint,
                type: dto.type,
                status: dto.status,
            },
        });
    }
    async findAll() {
        return this.prisma.node.findMany({
            include: { validator: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findByValidator(validatorId) {
        return this.prisma.node.findMany({
            where: { validatorId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const node = await this.prisma.node.findUnique({
            where: { id },
            include: { validator: true },
        });
        if (!node)
            throw new common_1.NotFoundException('Node not found');
        return node;
    }
    async update(id, dto) {
        return this.prisma.node.update({
            where: { id },
            data: dto,
        });
    }
    async remove(id) {
        return this.prisma.node.delete({
            where: { id },
        });
    }
};
exports.NodeService = NodeService;
exports.NodeService = NodeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NodeService);
//# sourceMappingURL=node.service.js.map