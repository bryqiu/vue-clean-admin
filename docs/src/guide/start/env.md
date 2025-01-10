# 环境变量

此章节介绍 CleanAdmin 的环境变量

## 环境变量文件

如果你对环境变量不了解的话，你应该先看看 [Vite-环境变量](https://cn.vite.dev/guide/env-and-mode#env-variables-and-modes)

CleanAdmin 目前存在三个环境变量文件：

- `.env`：存放公共环境变量，所有情况下都会加载
- `.env.development`：存放开发环境变量，只在开发环境下加载
- `.env.production`：存放生产环境变量，只在生产环境下加载

比如：

::: code-group

```bash [.env]
# 网站标题
VITE_APP_TITLE = "Clean Admin"
```

```bash [.env.development]
# API 请求URL
VITE_API_URL = ""
```

```bash [.env.production]
# API 请求URL
VITE_API_URL = ""
```

:::

当然，不止于此，你还可以添加其他环境变量文件，但是需要注意的是，环境变量文件的名称必须以 `.env` 开头，否则 Vite 不会识别该文件，比如 `.env.test` 测试环境文件

:::info 相关内容
在[《通俗易懂的中后台建设指南》](https://github.com/QFifteen/Blog?tab=readme-ov-file#%E9%80%9A%E4%BF%97%E6%98%93%E6%87%82%E7%9A%84%E4%B8%AD%E5%90%8E%E5%8F%B0%E7%B3%BB%E7%BB%9F%E5%BB%BA%E8%AE%BE%E6%8C%87%E5%8D%97%E4%B8%93%E6%A0%8F)专栏中，第三篇文章[《Vite 配置技巧》](https://github.com/QFifteen/Blog/issues/3)有详细介绍环境变量，有兴趣的话，可以看一下
:::

## 如何使用

CleanAdmin 已经写入了很多环境变量。要使用它们，可以通过 `import.meta.env` 来获取环境变量值

语法是 `import.meta.env.<你的环境变量名称>`，比如：

```ts
import.meta.env.VITE_APP_TITLE;
```

想要在编辑器中拥有环境变量的代码提示，我们需要在 [`typings/env.d.ts`](https://github.com/QFifteen/vue-clean-admin/blob/main/src/typings/env.d.ts) 中添加类型声明

```ts [env.d.ts]
/** 环境变量-类型定义及提示 */
interface ImportMetaEnv {
  /** 全局标题 */
  readonly VITE_APP_TITLE: string;
  //...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

然后，你就可以在编辑器中看到环境变量的代码提示了，比如：

![环境变量提示](https://github.com/user-attachments/assets/dfc1d712-afde-46aa-9a30-7b8aac3dfbcc)

## 添加环境变量

在实际的开发过程中，你可能想要添加自己的环境变量

1. 首先确定你的环境变量是否需要区分环境，也就是选择你的环境变量要放在哪个文件中
2. 然后，在文件中写入环境变量。注意，默认情况下，环境变量的名称必须以 `VITE_` 开头，如果你想自定义 env 变量的前缀，请参阅 [envPrefix](https://cn.vite.dev/config/shared-options.html#envprefix)
3. 最后需要在 [`typings/env.d.ts`](https://github.com/QFifteen/vue-clean-admin/blob/main/src/typings/env.d.ts) 中添加类型声明以便编辑器能够识别你的环境变量并提供代码提示
