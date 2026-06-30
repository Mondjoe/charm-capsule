import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { SolanaIndexer } from './solana.indexer';

@Injectable()
export class SolanaCron {
  private readonly logger = new Logger(SolanaCron.name);

  constructor(private readonly indexer: SolanaIndexer) {}

  // ----------------------------------------
  // Update validators every 60 seconds
  // ----------------------------------------
  @Cron(CronExpression.EVERY_MINUTE)
  async updateValidators() {
    this.logger.log('Indexing Solana validators...');
    await this.indexer.indexValidators('solana');
  }

  // ----------------------------------------
  // Update rewards every 2 minutes
  // (optional — once you add rewards indexer)
  // ----------------------------------------
  @Cron('0 */2 * * * *') // every 2 minutes
  async updateRewards() {
    this.logger.log('Indexing Solana rewards...');
    if (this.indexer.updateRewards) {
      await this.indexer.updateRewards('solana');
    }
  }

  // ----------------------------------------
  // Update stake accounts every 45 seconds
  // (optional — once you add stake indexer)
  // ----------------------------------------
  @Cron('*/45 * * * * *')
  async updateStake() {
    this.logger.log('Indexing Solana stake accounts...');
    if (this.indexer.updateStakeAccounts) {
      await this.indexer.updateStakeAccounts('solana');
    }
  }
}