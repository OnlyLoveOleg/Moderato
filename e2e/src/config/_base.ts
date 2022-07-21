export abstract class BaseConfig {
  protected readonly runEnv: string = process.env.NODE_ENV ?? 'local';
}
