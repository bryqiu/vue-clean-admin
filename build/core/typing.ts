import { resolveEnv } from './helpers';

type RawEnv = {
  [key in keyof ImportMeta['env']]: string;
};

type ResolveEnv = ReturnType<typeof resolveEnv>;

export type { RawEnv, ResolveEnv };
