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
exports.EvmCron = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const evm_indexer_1 = require("./evm.indexer");
const prisma_service_1 = require("../../prisma/prisma.service");
let EvmCron = class EvmCron {
    indexer;
    prisma;
    constructor(indexer, prisma) {
        this.indexer = indexer;
        this.prisma = prisma;
    }
    async updateEvm() {
        const evmChains = await this.prisma.chain.findMany({
            where: { type: 'evm' },
        });
        for (const chain of evmChains) {
            if (chain.name === 'Ethereum') {
                await this.indexer.indexEthereum(chain.id, process.env.ETH_BEACON);
                await this.indexer.indexGeneric(chain.id, process.env.BNB_RPC, 'bnbchain_getValidatorSet');
                await this.indexer.indexGeneric(chain.id, process.env.POLYGON_RPC, 'bor_getValidatorSet');
                await this.indexer.indexGeneric(chain.id, process.env.AVAX_RPC, 'platform.getCurrentValidators');
            }
        }
    }
};
exports.EvmCron = EvmCron;
__decorate([
    (0, schedule_1.Cron)('*/5 * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EvmCron.prototype, "updateEvm", null);
exports.EvmCron = EvmCron = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [evm_indexer_1.EvmIndexer,
        prisma_service_1.PrismaService])
], EvmCron);
//# sourceMappingURL=evm.cron.js.map