/**
 * @desc microCMSから取得した値に関しては以下がセットとなるため
 *       apiを生やしているmodelには継承させる
 */
export interface BaseCMS {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
}
