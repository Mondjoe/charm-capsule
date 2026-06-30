export declare class NearService {
    private RPC;
    rpc(method: string, params?: any): Promise<any>;
    getValidators(): Promise<any>;
    getEpochStatus(): Promise<any>;
    getNodeStatus(): Promise<any>;
}
