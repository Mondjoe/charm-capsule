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
exports.ValidatorController = void 0;
const common_1 = require("@nestjs/common");
const validator_service_1 = require("./validator.service");
const create_validator_dto_1 = require("./dto/create-validator.dto");
const update_validator_dto_1 = require("./dto/update-validator.dto");
let ValidatorController = class ValidatorController {
    validatorService;
    constructor(validatorService) {
        this.validatorService = validatorService;
    }
    create(dto) {
        return this.validatorService.create(dto);
    }
    findAll() {
        return this.validatorService.findAll();
    }
    findByChain(chainId) {
        return this.validatorService.findByChain(chainId);
    }
    findOne(id) {
        return this.validatorService.findOne(id);
    }
    update(id, dto) {
        return this.validatorService.update(id, dto);
    }
    remove(id) {
        return this.validatorService.remove(id);
    }
};
exports.ValidatorController = ValidatorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_validator_dto_1.CreateValidatorDto]),
    __metadata("design:returntype", void 0)
], ValidatorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ValidatorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('chain/:chainId'),
    __param(0, (0, common_1.Param)('chainId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ValidatorController.prototype, "findByChain", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ValidatorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_validator_dto_1.UpdateValidatorDto]),
    __metadata("design:returntype", void 0)
], ValidatorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ValidatorController.prototype, "remove", null);
exports.ValidatorController = ValidatorController = __decorate([
    (0, common_1.Controller)('validators'),
    __metadata("design:paramtypes", [validator_service_1.ValidatorService])
], ValidatorController);
//# sourceMappingURL=validator.controller.js.map