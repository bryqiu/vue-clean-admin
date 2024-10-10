import { resolve } from 'path';
import { elStyleKeys } from '../src/config/global/components-optimize';

/** 获取当前工作目录的路径 */
const root: string = process.cwd();

/** 根目录 */
const pathResolve = (dir: string): string => {
  return resolve(root, '.', dir);
};

/**
 * 处理环境变量的值类型
 * @param env 环境变量对象
 * @returns 返回一个类型正确的环境变量
 */
const processEnv = (env: RecordType<string>): ImportMetaEnv => {
  const metaEnv: any = {};
  for (const key in env) {
    const wrapValue = env[key].trim().replace(/\\n/g, '\n');
    metaEnv[key] = env[key];

    if (wrapValue === 'true' || wrapValue === 'false') metaEnv[key] = wrapValue === 'true';
    if (!isNaN(Number(wrapValue)) && wrapValue !== '') metaEnv[key] = Number(wrapValue);
  }
  return metaEnv;
};

/**
 * 获取组件样式路径用于预构建，防止reload
 * @returns 返回拼接后的完整样式路径
 */
const getElStylePaths = () => {
  const hyphenateRE = /\B([A-Z])/g;
  const hyphenate = (str: string) => str.replaceAll(hyphenateRE, '-$1').toLowerCase();

  const keys = elStyleKeys
    .filter((component) => component.startsWith('El'))
    .map((component) => {
      return `element-plus/es/components/${hyphenate(component.slice(2))}/style/css`;
    });

  return ['element-plus/es', ...keys];
};

export { pathResolve, root, processEnv, getElStylePaths };
