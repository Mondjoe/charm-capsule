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
exports.NearCron = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const near_indexer_1 = require("./near.indexer");
const prisma_service_1 = require("../../prisma/prisma.service");
const near_rewards_1 = require("./near.rewards");
let NearCron = class NearCron {
    indexer;
    rewards;
    prisma;
    constructor(indexer, rewards, prisma) {
        this.indexer = indexer;
        this.rewards = rewards;
        this.prisma = prisma;
    }
    async updateNear() {
        const nearChain = await this.prisma.chain.findFirst({
            where: { type: 'near' },
        });
        if (!nearChain)
            return;
        await this.indexer.indexValidators(nearChain.id);
    }
};
exports.NearCron = NearCron;
__decorate([
    (0, schedule_1.Cron)('*/5 * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NearCron.prototype, "updateNear", null);
exports.NearCron = NearCron = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [near_indexer_1.NearIndexer,
        near_rewards_1.NearRewardsIndexer,
        prisma_service_1.PrismaService])
], NearCron);
//# sourceMappingURL=near.cron.js.map