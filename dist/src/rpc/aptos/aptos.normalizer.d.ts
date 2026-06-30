export declare class AptosNormalizer {
    normalizeValidator(v: any): {
        address: any;
        name: any;
        status: string;
        commission: any;
        apr: any;
        totalStaked: any;
    };
    normalizeMetric(v: any): {
        epoch: any;
        slot: null;
        uptime: any;
        rewards: any;
        stake: any;
    };
}
