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
exports.EvmIndexer = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const evm_service_1 = require("./evm.service");
const evm_normalizer_1 = require("./evm.normalizer");
let EvmIndexer = class EvmIndexer {
    prisma;
    evm;
    normalizer;
    constructor(prisma, evm, normalizer) {
        this.prisma = prisma;
        this.evm = evm;
        this.normalizer = normalizer;
    }
    async indexEthereum(chainId, beaconUrl) {
        const validators = await this.evm.getEthereumValidators(beaconUrl);
        for (const v of validators) {
            const normalized = this.normalizer.normalizeEthereum(v);
            const validator = await this.prisma.validator.upsert({
                where: { address: normalized.address },
                update: normalized,
                create: { chainId, ...normalized },
            });
            const metric = this.normalizer.normalizeMetric({
                stake: normalized.totalStaked,
            });
            await this.prisma.validatorMetric.create({
                data: { validatorId: validator.id, ...metric },
            });
        }
        return validators.length;
    }
    async indexGeneric(chainId, rpcUrl, method) {
        const validators = await this.evm.rpc(rpcUrl, method);
        for (const v of validators) {
            const normalized = this.normalizer.normalizeGeneric(v);
            const validator = await this.prisma.validator.upsert({
                where: { address: normalized.address },
                update: normalized,
                create: { chainId, ...normalized },
            });
            const metric = this.normalizer.normalizeMetric(normalized);
            await this.prisma.validatorMetric.create({
                data: { validatorId: validator.id, ...metric },
            });
        }
        return validators.length;
    }
};
exports.EvmIndexer = EvmIndexer;
exports.EvmIndexer = EvmIndexer = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        evm_service_1.EvmService,
        evm_normalizer_1.EvmNormalizer])
], EvmIndexer);
//# sourceMappingURL=evm.indexer.js.map