import { ApiWithBaseAxios } from '@/libs/helper/_baseAxios';
import { ISystemServices } from '@/libs/apis/interface';
import { SystemServices } from '@/libs/apis/services';

export interface API {
  service: ISystemServices;
}

const service = new SystemServices(ApiWithBaseAxios());

export const api: API = {
  service,
};
