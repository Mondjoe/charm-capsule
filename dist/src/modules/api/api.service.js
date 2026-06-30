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
exports.ApiService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ApiService = class ApiService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    getChains() {
        return this.prisma.chain.findMany({
            orderBy: { createdAt: 'asc' },
        });
    }
    getValidators() {
        return this.prisma.validator.findMany({
            include: {
                chain: true,
            },
            orderBy: { totalStaked: 'desc' },
        });
    }
    getValidatorsByChain(chainId) {
        return this.prisma.validator.findMany({
            where: { chainId },
            include: { chain: true },
            orderBy: { totalStaked: 'desc' },
        });
    }
    getValidator(id) {
        return this.prisma.validator.findUnique({
            where: { id },
            include: {
                chain: true,
                metrics: {
                    orderBy: { createdAt: 'desc' },
                    take: 100,
                },
                logs: {
                    orderBy: { timestamp: 'desc' },
                    take: 50,
                },
                nodes: true,
            },
        });
    }
    getValidatorMetrics(id) {
        return this.prisma.validatorMetric.findMany({
            where: { validatorId: id },
            orderBy: { createdAt: 'desc' },
            take: 200,
        });
    }
    getValidatorLogs(id) {
        return this.prisma.validatorLog.findMany({
            where: { validatorId: id },
            orderBy: { timestamp: 'desc' },
            take: 100,
        });
    }
    getValidatorNodes(id) {
        return this.prisma.node.findMany({
            where: { validatorId: id },
        });
    }
    async getOverview() {
        const chains = await this.prisma.chain.count();
        const validators = await this.prisma.validator.count();
        const metrics = await this.prisma.validatorMetric.count();
        return {
            chains,
            validators,
            metrics,
        };
    }
};
exports.ApiService = ApiService;
exports.ApiService = ApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ApiService);
//# sourceMappingURL=api.service.js.map