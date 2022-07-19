/**
 * @desc microCMSから取得した値に関しては以下がセットとなるため
 *       apiを生やしているmodelには継承させる
 */
export interface BaseCMS {
  id: string;
  createdAt: number;
  updatedAt: number;
  publishedAt: number;
  revisedAt: number;
}
