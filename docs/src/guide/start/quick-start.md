# 快速上手

此章节主要介绍如何快速上手项目

## 基本开发环境

> 如果你已经具备以下开发环境，可选择跳过这一章节

### Node 环境

ClanAdmin 使用的技术栈较新，因此你的 Node 环境不要低于 `v18.20.5`，这里推荐使用 `v20.18.1(LTS)` 版本及以上，去到 [Node官方下载](https://nodejs.org/zh-cn/download)

:::tip LTS 版本
LTS ，全称 Long Time Support，表示长期维护的版本，强烈推荐你使用 LTS 版本，因为 LTS 版本会得到更稳定的支持和更广泛的使用
:::

安装完成后，使用命令行终端输入以下命令可以查看是否安装成功和版本

```bash
node -v
```

### 包管理工具

在你安装了 Node.js 后，会默认安装 `npm` 包管理工具，可以通过以下来查看是否安装成功和版本：

```bash
npm -v
```

但在 CleanAdmin 中，我们只推荐你使用 `pnpm` 来管理项目依赖，并且版本不低于 `v9`：

你可以通过以下命令来安装 `pnpm`

```bash
# 全局安装pnpm
npm install -g pnpm@latest
```

查看 pnpm 版本

```bash
pnpm -v
```

然后设置镜像，这对安装依赖时的速度有很大提升。这里以淘宝镜像为例：

```bash
pnpm config set registry https://registry.npmmirror.com/
```

查看镜像设置是否成功

```bash
pnpm config get registry # https://registry.npmmirror.com/
```

### Git 环境

拥有 `git` 环境即可。如果没有，可以去 [Git官网](https://git-scm.com/downloads) 下载安装

### 浏览器环境

推荐使用 `Chrome` 浏览器

### 代码编辑器

推荐使用 `VSCode` 编辑器，如果你还没有安装，可以去 [VSCode官网](https://code.visualstudio.com/Download) 下载安装

CleanAdmin 针对 `VSCode` 编辑器进行了一些配置，主要在根目录下的`.vscode` 文件夹，我们后面会详细介绍，你也可以先行看 [IDE 配置](./editor)

## 在本地运行

克隆项目到你的本地

```bash
git clone https://github.com/QFifteen/vue-clean-admin
```

前往项目目录

```bash
cd vue-clean-admin
```

安装依赖

::: code-group

```bash [pnpm]
pnpm i
```

```bash [npm]
npm i
```

:::

启动项目
::: code-group

```bash [pnpm]
pnpm dev
```

```bash [npm]
npm run dev
```

:::
