"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AptosNormalizer = void 0;
const common_1 = require("@nestjs/common");
let AptosNormalizer = class AptosNormalizer {
    normalizeValidator(v) {
        return {
            address: v.account_address,
            name: v.config?.consensus_public_key || null,
            status: v.active ? 'active' : 'inactive',
            commission: v.commission_percentage || 0,
            apr: v.rewards_rate || null,
            totalStaked: v.voting_power || 0,
        };
    }
    normalizeMetric(v) {
        return {
            epoch: v.epoch,
            slot: null,
            uptime: v.uptime_percentage || null,
            rewards: v.rewards_amount || null,
            stake: v.voting_power || null,
        };
    }
};
exports.AptosNormalizer = AptosNormalizer;
exports.AptosNormalizer = AptosNormalizer = __decorate([
    (0, common_1.Injectable)()
], AptosNormalizer);
//# sourceMappingURL=aptos.normalizer.js.map