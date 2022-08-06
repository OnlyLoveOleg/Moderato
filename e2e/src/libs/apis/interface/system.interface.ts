export interface ISystemServices {
  /** Teamsに送信する */
  postTeams(texts: string[]): Promise<void>;
}
