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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainController = void 0;
const common_1 = require("@nestjs/common");
const chain_service_1 = require("./chain.service");
const create_chain_dto_1 = require("./dto/create-chain.dto");
const update_chain_dto_1 = require("./dto/update-chain.dto");
let ChainController = class ChainController {
    chainService;
    constructor(chainService) {
        this.chainService = chainService;
    }
    create(dto) {
        return this.chainService.create(dto);
    }
    findAll() {
        return this.chainService.findAll();
    }
    seed() {
        return this.chainService.seedDefaultChains();
    }
    findOne(id) {
        return this.chainService.findOne(id);
    }
    update(id, dto) {
        return this.chainService.update(id, dto);
    }
    remove(id) {
        return this.chainService.remove(id);
    }
};
exports.ChainController = ChainController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chain_dto_1.CreateChainDto]),
    __metadata("design:returntype", void 0)
], ChainController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChainController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('seed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChainController.prototype, "seed", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChainController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_chain_dto_1.UpdateChainDto]),
    __metadata("design:returntype", void 0)
], ChainController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChainController.prototype, "remove", null);
exports.ChainController = ChainController = __decorate([
    (0, common_1.Controller)('chains'),
    __metadata("design:paramtypes", [chain_service_1.ChainService])
], ChainController);
//# sourceMappingURL=chain.controller.js.map