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
exports.NearRewardsIndexer = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const near_service_1 = require("./near.service");
let NearRewardsIndexer = class NearRewardsIndexer {
    prisma;
    near;
    constructor(prisma, near) {
        this.prisma = prisma;
        this.near = near;
    }
    async indexRewards(chainId) {
        const data = await this.near.getValidators();
        const epoch = data.epoch_height;
        const all = [
            ...data.current_validators,
            ...data.next_validators,
            ...data.prev_validators,
        ];
        for (const v of all) {
            const validator = await this.prisma.validator.findFirst({
                where: { chainId, address: v.account_id },
            });
            if (!validator)
                continue;
            const reward = Number(v.reward || 0) / 1e24;
            const stake = Number(v.stake || 0) / 1e24;
            await this.prisma.validatorMetric.create({
                data: {
                    validatorId: validator.id,
                    epoch,
                    rewards: reward,
                    stake,
                    uptime: v.num_produced_blocks / (v.num_expected_blocks || 1),
                    slot: null,
                },
            });
        }
        return all.length;
    }
};
exports.NearRewardsIndexer = NearRewardsIndexer;
exports.NearRewardsIndexer = NearRewardsIndexer = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        near_service_1.NearService])
], NearRewardsIndexer);
//# sourceMappingURL=near.rewards.js.map