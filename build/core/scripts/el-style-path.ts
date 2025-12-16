import fs from 'node:fs';
import path from 'node:path';

export const getElementPlusStyleIncludes = (): string[] => {
  // node_modules 中的 element-plus 组件目录
  const componentPath = path.resolve(process.cwd(), 'node_modules/element-plus/es/components');

  // 如果还没安装依赖，直接返回空，避免报错
  if (!fs.existsSync(componentPath)) return [];

  // 遍历目录
  const components = fs.readdirSync(componentPath);
  const stylePaths: string[] = [];

  components.forEach((item) => {
    if (item.startsWith('.') || !fs.statSync(path.resolve(componentPath, item)).isDirectory()) {
      return;
    }

    // 检查 style/index 文件是否存在
    const styleFolderPath = path.resolve(componentPath, item, 'style');
    const styleIndexPath = path.resolve(styleFolderPath, 'index.mjs'); // 首选 mjs
    const styleIndexJsPath = path.resolve(styleFolderPath, 'index.js'); // 备选 js

    // 只要 style 文件夹存在，且里面有 index 文件，就加入路径
    if (
      fs.existsSync(styleFolderPath) &&
      (fs.existsSync(styleIndexPath) || fs.existsSync(styleIndexJsPath))
    ) {
      stylePaths.push(`element-plus/es/components/${item}/style/index`);
    }
  });

  return stylePaths;
};
