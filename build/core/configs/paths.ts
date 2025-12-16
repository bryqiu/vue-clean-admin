import { pathResolve } from '../helpers';
import type { AliasOptions } from 'vite';

export const createAliasesConfig = (): AliasOptions => {
  return {
    '@': pathResolve('src'),
    '#': pathResolve('src/typings'),
  };
};
