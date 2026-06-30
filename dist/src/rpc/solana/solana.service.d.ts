export declare class SolanaService {
    private RPC;
    rpc(method: string, params?: any[]): Promise<any>;
    getVoteAccounts(): Promise<any>;
    getEpochInfo(): Promise<any>;
    getInflationReward(addresses: string[]): Promise<any>;
    getStakeAccounts(): Promise<any>;
}
