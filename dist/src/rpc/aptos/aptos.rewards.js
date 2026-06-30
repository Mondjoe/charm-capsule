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
exports.AptosRewardsIndexer = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const aptos_service_1 = require("./aptos.service");
let AptosRewardsIndexer = class AptosRewardsIndexer {
    prisma;
    aptos;
    constructor(prisma, aptos) {
        this.prisma = prisma;
        this.aptos = aptos;
    }
    async indexRewards(chainId) {
        const validators = await this.prisma.validator.findMany({
            where: { chainId },
        });
        for (const v of validators) {
            const resources = await this.aptos.getStakingInfo(v.address);
            const staking = resources.find((r) => r.type.includes('0x1::staking_contract::StakingContract'));
            if (!staking)
                continue;
            const rewards = staking.data?.rewards || 0;
            const stake = staking.data?.principal || 0;
            await this.prisma.validatorMetric.create({
                data: {
                    validatorId: v.id,
                    epoch: null,
                    rewards: Number(rewards) / 1e8,
                    stake: Number(stake) / 1e8,
                    uptime: null,
                    slot: null,
                },
            });
        }
        return validators.length;
    }
};
exports.AptosRewardsIndexer = AptosRewardsIndexer;
exports.AptosRewardsIndexer = AptosRewardsIndexer = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        aptos_service_1.AptosService])
], AptosRewardsIndexer);
//# sourceMappingURL=aptos.rewards.js.map