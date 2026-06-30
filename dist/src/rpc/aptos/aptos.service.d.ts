export declare class AptosService {
    private NODE;
    get(path: string): Promise<any>;
    getValidatorSet(): Promise<any>;
    getStakingInfo(address: string): Promise<any>;
    getRewards(address: string): Promise<any>;
}
