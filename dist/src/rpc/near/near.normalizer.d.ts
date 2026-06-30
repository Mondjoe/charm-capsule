export declare class NearNormalizer {
    normalizeValidator(v: any): {
        address: any;
        name: any;
        status: string;
        commission: null;
        apr: null;
        totalStaked: number;
    };
    normalizeMetric(v: any, epoch: number): {
        epoch: number;
        slot: null;
        uptime: number;
        rewards: number;
        stake: number;
    };
}
