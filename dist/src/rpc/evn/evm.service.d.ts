export declare class EvmService {
    rpc(rpcUrl: string, method: string, params?: any[]): Promise<any>;
    getEthereumValidators(beaconUrl: string): Promise<any>;
    getBnbValidators(rpcUrl: string): Promise<any>;
    getPolygonValidators(rpcUrl: string): Promise<any>;
    getAvalancheValidators(rpcUrl: string): Promise<any>;
}
