"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AptosModule = void 0;
const common_1 = require("@nestjs/common");
const aptos_service_1 = require("./aptos.service");
const aptos_indexer_1 = require("./aptos.indexer");
const aptos_normalizer_1 = require("./aptos.normalizer");
const aptos_cron_1 = require("./aptos.cron");
const aptos_rewards_1 = require("./aptos.rewards");
let AptosModule = class AptosModule {
};
exports.AptosModule = AptosModule;
exports.AptosModule = AptosModule = __decorate([
    (0, common_1.Module)({
        providers: [
            aptos_service_1.AptosService,
            aptos_indexer_1.AptosIndexer,
            aptos_normalizer_1.AptosNormalizer,
            aptos_cron_1.AptosCron,
            aptos_rewards_1.AptosRewardsIndexer,
        ],
    })
], AptosModule);
//# sourceMappingURL=aptos.module.js.map