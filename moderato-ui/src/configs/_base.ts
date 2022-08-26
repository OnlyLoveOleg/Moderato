export abstract class BaseConfig {
  constructor(protected readonly runEnv = process.env.NODE_ENV ?? 'development') {}
}
