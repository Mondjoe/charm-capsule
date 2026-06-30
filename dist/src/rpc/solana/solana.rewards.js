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
exports.SolanaRewardsIndexer = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const solana_service_1 = require("./solana.service");
let SolanaRewardsIndexer = class SolanaRewardsIndexer {
    prisma;
    solana;
    constructor(prisma, solana) {
        this.prisma = prisma;
        this.solana = solana;
    }
    async indexRewards(chainId) {
        const validators = await this.prisma.validator.findMany({
            where: { chainId },
        });
        if (!validators.length)
            return;
        const addresses = validators.map(v => v.address);
        const rewards = await this.solana.getInflationReward(addresses);
        for (let i = 0; i < validators.length; i++) {
            const validator = validators[i];
            const reward = rewards[i];
            if (!reward)
                continue;
            await this.prisma.validatorMetric.create({
                data: {
                    validatorId: validator.id,
                    epoch: reward.epoch,
                    rewards: reward.amount / 1e9,
                    stake: reward.postBalance / 1e9,
                    uptime: null,
                    slot: null,
                },
            });
        }
        return rewards.length;
    }
};
exports.SolanaRewardsIndexer = SolanaRewardsIndexer;
exports.SolanaRewardsIndexer = SolanaRewardsIndexer = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        solana_service_1.SolanaService])
], SolanaRewardsIndexer);
//# sourceMappingURL=solana.rewards.js.map