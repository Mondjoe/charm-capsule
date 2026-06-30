"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NearModule = void 0;
const common_1 = require("@nestjs/common");
const near_service_1 = require("./near.service");
const near_indexer_1 = require("./near.indexer");
const near_normalizer_1 = require("./near.normalizer");
const near_cron_1 = require("./near.cron");
const near_rewards_1 = require("./near.rewards");
let NearModule = class NearModule {
};
exports.NearModule = NearModule;
exports.NearModule = NearModule = __decorate([
    (0, common_1.Module)({
        providers: [
            near_service_1.NearService,
            near_indexer_1.NearIndexer,
            near_normalizer_1.NearNormalizer,
            near_cron_1.NearCron,
            near_rewards_1.NearRewardsIndexer,
        ],
    })
], NearModule);
//# sourceMappingURL=near.module.js.map