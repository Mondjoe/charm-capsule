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
exports.NearService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
let NearService = class NearService {
    RPC = process.env.NEAR_RPC;
    async rpc(method, params = []) {
        const { data } = await axios_1.default.post(this.RPC, {
            jsonrpc: '2.0',
            id: 'near-indexer',
            method,
            params,
        });
        return data.result;
    }
    getValidators() {
        return this.rpc('validators', [null]);
    }
    getEpochStatus() {
        return this.rpc('validators', [null]);
    }
    getNodeStatus() {
        return this.rpc('status');
    }
};
exports.NearService = NearService;
exports.NearService = NearService = __decorate([
    (0, common_1.Injectable)()
], NearService);
//# sourceMappingURL=near.service.js.map