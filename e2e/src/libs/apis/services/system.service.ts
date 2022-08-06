import { ISystemServices } from '@/libs/apis/interface';
import { BaseService } from './_base.service';
import { AxiosError } from 'axios';

export class SystemServices extends BaseService implements ISystemServices {
  public postTeams = async (texts: string[]): Promise<void> => {
    const payload = texts.join('<br/>').slice(0, 600);
    await this.axios
      .post('', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        text: JSON.stringify(payload),
      })
      .catch((e: AxiosError) => {
        console.log(e.message);
      });
  };
}
