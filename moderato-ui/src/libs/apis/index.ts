import { createClient } from 'microcms-js-sdk';
import { HomeService } from '@/libs/apis/services';

const client = createClient({
  serviceDomain: process.env.MICRO_CMS_DOMAIN ?? '',
  apiKey: process.env.MICRO_CMS_API_KEY ?? '',
});

export type mCMSClient = typeof client;

export const HomeAPI = new HomeService(client);
