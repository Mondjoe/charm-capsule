"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AptosService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
let AptosService = class AptosService {
    NODE = process.env.APTOS_NODE;
    async get(path) {
        const { data } = await axios_1.default.get(`${this.NODE}${path}`);
        return data;
    }
    getValidatorSet() {
        return this.get('/validators');
    }
    getStakingInfo(address) {
        return this.get(`/accounts/${address}/resources`);
    }
    getRewards(address) {
        return this.get(`/accounts/${address}/events/0x1::staking_contract::StakingContractEvent`);
    }
};
exports.AptosService = AptosService;
exports.AptosService = AptosService = __decorate([
    (0, common_1.Injectable)()
], AptosService);
//# sourceMappingURL=aptos.service.js.map