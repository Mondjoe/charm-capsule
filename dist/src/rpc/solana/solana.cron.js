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
exports.SolanaCron = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const solana_indexer_1 = require("./solana.indexer");
const prisma_service_1 = require("../../prisma/prisma.service");
const solana_rewards_1 = require("./solana.rewards");
let SolanaCron = class SolanaCron {
    indexer;
    prisma;
    rewards;
    constructor(indexer, prisma, rewards) {
        this.indexer = indexer;
        this.prisma = prisma;
        this.rewards = rewards;
    }
    async updateSolana() {
        const solanaChain = await this.prisma.chain.findFirst({
            where: { type: 'solana' },
        });
        if (!solanaChain)
            return;
        await this.indexer.indexValidators(solanaChain.id);
    }
};
exports.SolanaCron = SolanaCron;
__decorate([
    (0, schedule_1.Cron)('*/5 * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SolanaCron.prototype, "updateSolana", null);
exports.SolanaCron = SolanaCron = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [solana_indexer_1.SolanaIndexer,
        prisma_service_1.PrismaService,
        solana_rewards_1.SolanaRewardsIndexer])
], SolanaCron);
//# sourceMappingURL=solana.cron.js.map