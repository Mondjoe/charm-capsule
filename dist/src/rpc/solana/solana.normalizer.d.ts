export declare class SolanaNormalizer {
    normalizeValidator(voteAccount: any): {
        address: any;
        commission: any;
        totalStaked: any;
        name: any;
        status: string;
        apr: null;
    };
    normalizeMetric(voteAccount: any, epochInfo: any): {
        epoch: any;
        slot: any;
        uptime: any;
        stake: any;
        rewards: null;
    };
}
