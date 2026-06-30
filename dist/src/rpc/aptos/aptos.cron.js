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
exports.AptosCron = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const aptos_indexer_1 = require("./aptos.indexer");
const prisma_service_1 = require("../../prisma/prisma.service");
const aptos_rewards_1 = require("./aptos.rewards");
let AptosCron = class AptosCron {
    indexer;
    rewards;
    prisma;
    constructor(indexer, rewards, prisma) {
        this.indexer = indexer;
        this.rewards = rewards;
        this.prisma = prisma;
    }
    async updateAptos() {
        const aptosChain = await this.prisma.chain.findFirst({
            where: { type: 'aptos' },
        });
        if (!aptosChain)
            return;
        await this.indexer.indexValidators(aptosChain.id);
    }
};
exports.AptosCron = AptosCron;
__decorate([
    (0, schedule_1.Cron)('*/5 * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AptosCron.prototype, "updateAptos", null);
exports.AptosCron = AptosCron = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [aptos_indexer_1.AptosIndexer,
        aptos_rewards_1.AptosRewardsIndexer,
        prisma_service_1.PrismaService])
], AptosCron);
//# sourceMappingURL=aptos.cron.js.map