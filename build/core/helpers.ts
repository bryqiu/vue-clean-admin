import { resolve } from 'path';
import { loadEnv } from 'vite';
import type { RawEnv } from './typing';

/** 获取当前工作目录的路径 */
const root: string = process.cwd();

/** 根目录 */
export const pathResolve = (dir: string): string => {
  return resolve(root, '.', dir);
};

const parseBool = (value: string) => {
  if (!value) return undefined;

  const boolValue = value.trim().toLowerCase();

  return boolValue === 'true';
};

const parseNum = (value: string) => {
  if (!value) return undefined;

  const numberValue = Number(value);
  if (Number.isNaN(numberValue)) return undefined;

  return numberValue;
};

export const resolveEnv = (mode: string, envDir: string = process.cwd()) => {
  const { VITE_BASE_PATH, VITE_ENABLE_BUILD_VISUALIZER, VITE_ENABLE_DEVTOOLS } = loadEnv(
    mode,
    envDir,
  ) as RawEnv;

  return {
    /** 基础路径 */
    VITE_BASE_PATH,
    /** 是否启用打包可视化图 */
    VITE_ENABLE_BUILD_VISUALIZER: parseBool(VITE_ENABLE_BUILD_VISUALIZER),
    /** 是否启用 Vue DevTools */
    VITE_ENABLE_DEVTOOLS: parseBool(VITE_ENABLE_DEVTOOLS),
  };
};
