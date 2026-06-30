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
var SolanaIndexer_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolanaIndexer = void 0;
const common_1 = require("@nestjs/common");
const solana_service_1 = require("./solana.service");
const solana_normalizer_1 = require("./solana.normalizer");
const solana_queue_1 = require("./solana.queue");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let SolanaIndexer = SolanaIndexer_1 = class SolanaIndexer {
    solana;
    normalizer;
    queue;
    prisma;
    logger = new common_1.Logger(SolanaIndexer_1.name);
    constructor(solana, normalizer, queue, prisma) {
        this.solana = solana;
        this.normalizer = normalizer;
        this.queue = queue;
        this.prisma = prisma;
    }
    async scanNewBlocks() {
        const latestIndexed = await this.prisma.block.findFirst({
            orderBy: { slot: 'desc' },
        });
        const latestChainSlot = await this.solana.getLatestSlot();
        const startSlot = latestIndexed ? latestIndexed.slot + 1 : latestChainSlot - 5;
        for (let slot = startSlot; slot <= latestChainSlot; slot++) {
            await this.queue.addBlockJob(slot);
        }
        this.logger.log(`Queued blocks ${startSlot} → ${latestChainSlot}`);
    }
    async processSlot(slot) {
        const raw = await this.solana.getBlock(slot);
        if (!raw)
            return;
        const block = this.normalizer.normalizeBlock(raw);
        await this.prisma.block.upsert({
            where: { slot },
            update: block,
            create: block,
        });
        for (const tx of raw.transactions ?? []) {
            const signature = tx.transaction.signatures[0];
            await this.queue.addTxJob(signature, tx, slot);
        }
        this.logger.log(`Indexed block ${slot} with ${raw.transactions?.length ?? 0} txs`);
    }
    async processTransaction(raw, slot) {
        const tx = this.normalizer.normalizeTransaction(raw, slot);
        if (!tx)
            return;
        await this.prisma.transaction.upsert({
            where: { signature: tx.signature },
            update: tx,
            create: tx,
        });
        this.logger.log(`Indexed tx ${tx.signature}`);
    }
    async updateValidators() {
        const epochInfo = await this.solana.getEpochInfo();
        const epoch = epochInfo.epoch;
        const validators = await this.solana.getValidators();
        for (const v of validators) {
            const normalized = this.normalizer.normalizeValidator(v, epoch);
            await this.prisma.validator.upsert({
                where: { voteKey: normalized.voteKey },
                update: normalized,
                create: normalized,
            });
        }
        this.logger.log(`Updated ${validators.length} validators for epoch ${epoch}`);
    }
    async updateStakeAccounts(address) {
        const accounts = await this.solana.getStakeAccounts(address);
        for (const raw of accounts) {
            const stake = this.normalizer.normalizeStakeAccount(raw);
            if (!stake)
                continue;
            await this.prisma.stakeAccount.upsert({
                where: { stakePubkey: stake.stakePubkey },
                update: stake,
                create: stake,
            });
        }
        this.logger.log(`Updated stake accounts for ${address}`);
    }
    async updateRewards(address) {
        const rewards = await this.solana.getRewards(address);
        for (const raw of rewards) {
            const reward = this.normalizer.normalizeReward(raw, address);
            if (!reward)
                continue;
            await this.prisma.reward.upsert({
                where: {
                    epoch_address: {
                        epoch: reward.epoch.toString(),
                        address,
                    },
                },
                update: reward,
                create: reward,
            });
        }
        this.logger.log(`Updated rewards for ${address}`);
    }
};
exports.SolanaIndexer = SolanaIndexer;
exports.SolanaIndexer = SolanaIndexer = SolanaIndexer_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [solana_service_1.SolanaService,
        solana_normalizer_1.SolanaNormalizer,
        solana_queue_1.SolanaQueue,
        prisma_service_1.PrismaService])
], SolanaIndexer);
//# sourceMappingURL=solana.indexer.js.map