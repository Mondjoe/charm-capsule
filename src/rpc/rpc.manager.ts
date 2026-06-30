import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class RpcManager {
  async call(method: string, params: any[], rpcUrl: string) {
    const { data } = await axios.post(rpcUrl, {
      jsonrpc: '2.0',
      id: 1,
      method,
      params,
    });

    return data.result;
  }
}