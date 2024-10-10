/** @type {import('prettier').Config} */
const config = {
  printWidth: 100, // 每行最大字符数
  tabWidth: 2, // 缩进空格数
  semi: true, // 尾部添加分号
  singleQuote: true, // 是否使用单引号而不是双引号
  bracketSpacing: true, // 在对象字面量的括号内添加空格
  arrowParens: 'always', // 总是为箭头函数的参数添加圆括号
  proseWrap: 'preserve', // 不改变 Markdown 文本的换行
  bracketSameLine: false,
};

export default config;
