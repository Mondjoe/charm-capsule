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
var AptosIndexer_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AptosIndexer = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const aptos_service_1 = require("./aptos.service");
const aptos_normalizer_1 = require("./aptos.normalizer");
let AptosIndexer = AptosIndexer_1 = class AptosIndexer {
    prisma;
    aptos;
    normalizer;
    logger = new common_1.Logger(AptosIndexer_1.name);
    constructor(prisma, aptos, normalizer) {
        this.prisma = prisma;
        this.aptos = aptos;
        this.normalizer = normalizer;
    }
    async indexValidators(chainId) {
        this.logger.log(`Indexing Aptos validators for chain ${chainId}`);
        const data = await this.aptos.getValidatorSet();
        const validators = data?.active_validators || [];
        for (const v of validators) {
            const normalized = this.normalizer.normalizeValidator(v);
            const validator = await this.prisma.validator.upsert({
                where: { address_chainId: { address: normalized.address, chainId } },
                update: {
                    name: normalized.name,
                    status: normalized.status,
                    commission: normalized.commission,
                    apr: normalized.apr,
                    totalStaked: normalized.totalStaked,
                },
                create: {
                    chainId,
                    address: normalized.address,
                    name: normalized.name,
                    status: normalized.status,
                    commission: normalized.commission,
                    apr: normalized.apr,
                    totalStaked: normalized.totalStaked,
                },
            });
            const metric = this.normalizer.normalizeMetric(v);
            await this.prisma.validatorMetric.create({
                data: {
                    validatorId: validator.id,
                    epoch: metric.epoch,
                    slot: metric.slot,
                    uptime: metric.uptime,
                    rewards: metric.rewards,
                    stake: metric.stake,
                },
            });
        }
        this.logger.log(`Aptos validator indexing complete (${validators.length} validators)`);
        return validators.length;
    }
};
exports.AptosIndexer = AptosIndexer;
exports.AptosIndexer = AptosIndexer = AptosIndexer_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        aptos_service_1.AptosService,
        aptos_normalizer_1.AptosNormalizer])
], AptosIndexer);
//# sourceMappingURL=aptos.indexer.js.map