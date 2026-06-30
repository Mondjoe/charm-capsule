"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolanaNormalizer = void 0;
const common_1 = require("@nestjs/common");
let SolanaNormalizer = class SolanaNormalizer {
    normalizeValidator(voteAccount) {
        return {
            address: voteAccount.votePubkey,
            commission: voteAccount.commission,
            totalStaked: voteAccount.activatedStake,
            name: voteAccount.nodePubkey,
            status: voteAccount.epochCredits ? 'active' : 'inactive',
            apr: null,
        };
    }
    normalizeMetric(voteAccount, epochInfo) {
        return {
            epoch: epochInfo.epoch,
            slot: epochInfo.slotIndex,
            uptime: voteAccount.epochCredits?.length || 0,
            stake: voteAccount.activatedStake,
            rewards: null,
        };
    }
};
exports.SolanaNormalizer = SolanaNormalizer;
exports.SolanaNormalizer = SolanaNormalizer = __decorate([
    (0, common_1.Injectable)()
], SolanaNormalizer);
//# sourceMappingURL=solana.normalizer.js.map