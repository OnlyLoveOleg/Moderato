import { IRequestSystem } from '@/libs/apis/interface';
import { BaseService } from './_base.service';
import { AxiosError } from 'axios';

export class RequestSystem extends BaseService implements IRequestSystem {
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
