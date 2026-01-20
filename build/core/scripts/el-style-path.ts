import fs from 'node:fs';
import path from 'node:path';

/**
 * 提取组件库的样式包含路径
 * @param lib 库名称
 * @param styleType 样式类型：'sass' (对应 style/index) 或 'css' (对应 style/css)
 */
export const extractLibStyleIncludes = (
  lib: 'element-plus' | 'plus-pro-components' = 'element-plus',
  styleType: 'sass' | 'css' = 'css',
): string[] => {
  // 映射不同的样式入口目录
  const styleDirName = styleType === 'sass' ? 'index' : 'css';

  // node_modules 中的组件目录 (ES 模块路径)
  const componentPath = path.resolve(process.cwd(), `node_modules/${lib}/es/components`);

  if (!fs.existsSync(componentPath)) return [];

  const components = fs.readdirSync(componentPath);
  const stylePaths: string[] = [];

  components.forEach((item) => {
    const itemPath = path.resolve(componentPath, item);

    // 排除隐藏文件和非目录
    if (item.startsWith('.') || !fs.statSync(itemPath).isDirectory()) {
      return;
    }

    // 目标样式文件路径，例如: element-plus/es/components/button/style/css.mjs
    const styleFolderPath = path.resolve(itemPath, 'style');
    const targetFileBase = path.resolve(styleFolderPath, styleDirName);

    // 检查是否存在对应的入口文件 (.mjs 或 .js)
    const hasStyleFile =
      fs.existsSync(`${targetFileBase}.mjs`) || fs.existsSync(`${targetFileBase}.js`);

    if (fs.existsSync(styleFolderPath) && hasStyleFile) {
      // 保持引用路径的清洁，不带后缀名
      stylePaths.push(`${lib}/es/components/${item}/style/${styleDirName}`);
    }
  });

  return stylePaths;
};
