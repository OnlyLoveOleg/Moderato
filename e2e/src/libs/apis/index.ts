import { ApiWithBaseAxios } from '@/libs/helper/_baseAxios';
import { IRequestSystem } from '@/libs/apis/interface';
import { RequestSystem } from '@/libs/apis/services';

export interface API {
  service: IRequestSystem;
}

const service = new RequestSystem(ApiWithBaseAxios());

export const api: API = {
  service,
};
