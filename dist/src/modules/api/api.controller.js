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
exports.ApiController = void 0;
const common_1 = require("@nestjs/common");
const api_service_1 = require("./api.service");
let ApiController = class ApiController {
    api;
    constructor(api) {
        this.api = api;
    }
    getChains() {
        return this.api.getChains();
    }
    getValidators() {
        return this.api.getValidators();
    }
    getValidatorsByChain(chainId) {
        return this.api.getValidatorsByChain(chainId);
    }
    getValidator(id) {
        return this.api.getValidator(id);
    }
    getValidatorMetrics(id) {
        return this.api.getValidatorMetrics(id);
    }
    getValidatorLogs(id) {
        return this.api.getValidatorLogs(id);
    }
    getValidatorNodes(id) {
        return this.api.getValidatorNodes(id);
    }
    getOverview() {
        return this.api.getOverview();
    }
};
exports.ApiController = ApiController;
__decorate([
    (0, common_1.Get)('chains'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "getChains", null);
__decorate([
    (0, common_1.Get)('validators'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "getValidators", null);
__decorate([
    (0, common_1.Get)('chain/:chainId/validators'),
    __param(0, (0, common_1.Param)('chainId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "getValidatorsByChain", null);
__decorate([
    (0, common_1.Get)('validator/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "getValidator", null);
__decorate([
    (0, common_1.Get)('validator/:id/metrics'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "getValidatorMetrics", null);
__decorate([
    (0, common_1.Get)('validator/:id/logs'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "getValidatorLogs", null);
__decorate([
    (0, common_1.Get)('validator/:id/nodes'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "getValidatorNodes", null);
__decorate([
    (0, common_1.Get)('overview'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "getOverview", null);
exports.ApiController = ApiController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], ApiController);
//# sourceMappingURL=api.controller.js.map