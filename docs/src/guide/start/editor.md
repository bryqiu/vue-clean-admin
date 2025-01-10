# IDE 配置

此章节介绍 CleanAdmin 的 IDE 及配置，主要分为 [VSCode](https://code.visualstudio.com/) 和 [WebStorm](https://www.jetbrains.com/webstorm/promo/?source=google&medium=cpc&campaign=APAC_en_ASIA_WebStorm_Branded&term=webstorm&content=717267885078&gad_source=1&gclid=EAIaIQobChMI3tyK3c_PigMV7ddMAh1pLTiuEAAYASAAEgIob_D_BwE)

## VSCode 配置

CleanAdmin 根目录下拥有一个 `.vscode` 文件夹，目录里存放着一些文件，我们来介绍一下它们

### settings.json

**用于自定义编辑器的各种行为、外观和工作环境等**，比如主题、缩进、字体、行号、代码折叠、代码格式化等

CleanAdmin 默认写入了一些配置，包括针对 ESLint、文件折叠、cSpell 单词拼写等，你也可以根据自己的需求进行修改

### extensions.json

**CleanAdmin 强烈推荐安装的插件**，提高你的开发效率和开发体验

安装步骤：

1. 打开 VSCode 编辑器并点击左侧的扩展图标
2. 点击顶部输入框右侧的漏斗图标，选择"推荐"（或者在框中输入 `@recommended`）
3. 安装插件

![安装推荐插件](https://github.com/user-attachments/assets/185c5f91-2d75-410f-af3a-400be0a9e090)

### tailwind.json

用于解决 `tailwind.css` 未识别的警告问题(Unknown at rule @tailwind/@apply)

### template.code-snippets

**存放代码片段的文件**，CleanAdmin 在其中写入了一些代码片段，方便快速编写代码。比如 Vue组合式(Setup)、导入/导出文件、Pinia 组合式/选项式等代码片段

- `scope`：代码片段的作用域
- `prefix`：代码片段的前缀
- `body`：代码片段的内容
- `description`：代码片段的描述

这里请多注意 `prefix` 属性的值，在相应的 `scope` 范围文件中输入前缀值，即可有相关的代码提示

比如 Vue 的代码片段

![Vue 代码片段](https://github.com/user-attachments/assets/7e5794bb-5819-4302-ac6a-b352a26638b2)

## WebStorm 配置

很遗憾，我目前没有使用 WebStorm 开发 CleanAdmin，这一块的内容，如果你有相关的经验，欢迎贡献。
