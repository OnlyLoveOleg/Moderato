export interface IRequestSystem {
  /** Teamsに送信する */
  postTeams(texts: string[]): Promise<void>;
}
