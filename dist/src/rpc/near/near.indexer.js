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
exports.NearIndexer = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const near_service_1 = require("./near.service");
const near_normalizer_1 = require("./near.normalizer");
let NearIndexer = class NearIndexer {
    prisma;
    near;
    normalizer;
    constructor(prisma, near, normalizer) {
        this.prisma = prisma;
        this.near = near;
        this.normalizer = normalizer;
    }
    async indexValidators(chainId) {
        const data = await this.near.getValidators();
        const epoch = data.epoch_height;
        const all = [
            ...data.current_validators,
            ...data.next_validators,
            ...data.prev_validators,
        ];
        for (const v of all) {
            const normalized = this.normalizer.normalizeValidator(v);
            const validator = await this.prisma.validator.upsert({
                where: { address: normalized.address },
                update: normalized,
                create: {
                    chainId,
                    ...normalized,
                },
            });
            const metric = this.normalizer.normalizeMetric(v, epoch);
            await this.prisma.validatorMetric.create({
                data: {
                    validatorId: validator.id,
                    ...metric,
                },
            });
        }
        return all.length;
    }
};
exports.NearIndexer = NearIndexer;
exports.NearIndexer = NearIndexer = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        near_service_1.NearService,
        near_normalizer_1.NearNormalizer])
], NearIndexer);
//# sourceMappingURL=near.indexer.js.map