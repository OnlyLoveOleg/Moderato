import { createClient } from 'microcms-js-sdk';
import { HomeService } from './services/home.service';

export { HomeService } from '@/libs/apis/services';
export type CMSClient = typeof client;

// TODO: ここをconfigから取得する
export const client = createClient({
  serviceDomain: process.env.MICRO_CMS_DOMAIN ?? '',
  apiKey: process.env.MICRO_CMS_API_KEY ?? '',
});

export const HomeAPI = new HomeService(client);
