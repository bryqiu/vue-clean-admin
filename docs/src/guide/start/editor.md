# IDE 配置

此章节介绍 CleanAdmin 的 IDE 及配置，主要分为 [VSCode](https://code.visualstudio.com/) 和 [WebStorm](https://www.jetbrains.com/webstorm/promo/?source=google&medium=cpc&campaign=APAC_en_ASIA_WebStorm_Branded&term=webstorm&content=717267885078&gad_source=1&gclid=EAIaIQobChMI3tyK3c_PigMV7ddMAh1pLTiuEAAYASAAEgIob_D_BwE)

## VSCode 配置

在上一篇 [目录结构](./dir) 中，我们介绍了 CleanAdmin 的目录结构，你可以看到，在项目根目录下存在一个 `.vscode` 文件夹，里面存在一些配置文件，下面我们来介绍它们的作用

### settings.json

此 JSON 文件是编辑器的配置文件，它的作用是为编辑器提供一些配置，让编辑器更好用

CleanAdmin 里写入了一些配置，包括针对 ESLint、文件折叠、cSpell 单词拼写等配置，你可以根据自己的需求进行修改

### extensions.json

此 JSON 文件是编辑器的插件配置文件，它的作用是为编辑器提供一些插件

CleanAdmin 在其中写入了推荐安装的插件，以提高你的开发效率、体验

1. 打开 VSCode 编辑器
2. 点击左侧的扩展图标
3. 点击底顶部输入框右侧的漏斗图标，选择"推荐"（或者在输入框中输入 `@recommended `）
4. 安装插件

### tailwind.json

`tailwind.json`

### template.code-snippets

此文件中存放着一些代码片段，包括组合式(setup)代码片段、导入，导出、Pinia 组合式/选项式等代码片段

- `scope`：代码片段的作用域
- `prefix`：代码片段的前缀
- `body`：代码片段的内容
- `description`：代码片段的描述

主要 `prefix` 属性的值，在你的代码中输入前缀值，即可有相关的代码提示

## WebStorm 配置

很遗憾，我目前没有使用 WebStorm 开发 CleanAdmin，这一块的内容，如果你有相关的经验，欢迎贡献。
