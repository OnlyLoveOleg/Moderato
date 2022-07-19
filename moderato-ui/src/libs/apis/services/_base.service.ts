import type { CMSClient } from '@/libs/apis';
export abstract class BaseService {
  // microCMS client
  protected readonly mCMSClient: CMSClient;

  constructor(client: CMSClient) {
    this.mCMSClient = client;
  }
}
