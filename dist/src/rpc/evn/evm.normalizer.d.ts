export declare class EvmNormalizer {
    normalizeEthereum(v: any): {
        address: any;
        name: any;
        status: any;
        commission: null;
        apr: null;
        totalStaked: number;
    };
    normalizeGeneric(v: any): {
        address: any;
        name: any;
        status: string;
        commission: any;
        apr: any;
        totalStaked: any;
    };
    normalizeMetric(v: any): {
        epoch: null;
        slot: null;
        uptime: any;
        rewards: any;
        stake: any;
    };
}
