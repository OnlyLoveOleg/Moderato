import type { mCMSClient } from '@/libs/apis';
export abstract class BaseService {
  // microCMS client
  protected readonly mCMSClient: mCMSClient;

  constructor(client: mCMSClient) {
    this.mCMSClient = client;
  }
}
