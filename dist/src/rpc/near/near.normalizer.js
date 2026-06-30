"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NearNormalizer = void 0;
const common_1 = require("@nestjs/common");
let NearNormalizer = class NearNormalizer {
    normalizeValidator(v) {
        return {
            address: v.account_id,
            name: v.account_id,
            status: v.is_slashed ? 'slashed' : 'active',
            commission: null,
            apr: null,
            totalStaked: Number(v.stake) / 1e24,
        };
    }
    normalizeMetric(v, epoch) {
        return {
            epoch,
            slot: null,
            uptime: v.num_produced_blocks / (v.num_expected_blocks || 1),
            rewards: Number(v.reward) / 1e24,
            stake: Number(v.stake) / 1e24,
        };
    }
};
exports.NearNormalizer = NearNormalizer;
exports.NearNormalizer = NearNormalizer = __decorate([
    (0, common_1.Injectable)()
], NearNormalizer);
//# sourceMappingURL=near.normalizer.js.map