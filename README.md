<div align="center">
<a href="https://github.com/bryqiu/vue-clean-admin">
 <img src="https://github.com/user-attachments/assets/c78ad0ba-2d08-4c7a-83db-10852fc9036d" alt="Logo" width="120" height="120" />
</a>
<h1> Vue Clean Admin </h1>

基于 Vue3 + Vite + TypeScript + Tailwind Css + Element Plus 的现代化中后台模板

<a href="https://github.com/bryqiu/vue-clean-admin/blob/main/LICENSE"><img alt="MIT" src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square"/></a>
<a href="https://github.com/bryqiu/vue-clean-admin/stargazers"><img alt="stars" src="https://img.shields.io/github/stars/bryqiu/vue-clean-admin"/></a>

[线上预览](#线上) ▪ [在本地运行](#在本地运行) ▪ [系列专栏](#系列专栏)

</div>

## 简介

本项目是专栏[《通俗易懂的中后台系统建设指南》](https://github.com/bryqiu/Blog?tab=readme-ov-file#%E9%80%9A%E4%BF%97%E6%98%93%E6%87%82%E7%9A%84%E4%B8%AD%E5%90%8E%E5%8F%B0%E7%B3%BB%E7%BB%9F%E5%BB%BA%E8%AE%BE%E6%8C%87%E5%8D%97%E4%B8%93%E6%A0%8F)实战项目，使用 Vue 生态技术构建，在持续写文章的同时完善项目

如果你有兴趣，欢迎给我提 issue 或 pr

## 截图

#### 仪表盘

<img width="80%" src="https://github.com/user-attachments/assets/922a4692-a818-4bc5-bddf-3fa30f628814" />

#### 登录页

<img width="80%" src="https://github.com/user-attachments/assets/d5e2d983-aa9d-49e3-b7cf-a6428c57a87a" />

#### 暗黑模式-仪表盘

<img width="80%" src="https://github.com/user-attachments/assets/6a860e44-c446-47a3-b9aa-f940a281cbbb" />

## 在本地运行

```bash
# 克隆项目
git clone https://github.com/bryqiu/vue-clean-admin

# 进入项目目录
cd vue-clean-admin

# 安装依赖
pnpm i

# 启动开发服务器
pnpm dev
```

常用脚本

```bash
pnpm dev       # 本地开发
pnpm build     # 生产构建
pnpm preview   # 本地预览
pnpm lint      # 代码校验
pnpm commit    # 提交代码
```

## 项目结构

```txt
vue-clean-admin/
├── build/                            # Vite 构建与插件相关配置
├── public/                           # 不参与打包处理的静态资源
├── src/                              # 项目主要源码
│   ├── assets/                       # 静态资源目录 (如图片、字体等)
│   ├── components/                   # 组件封装
│   ├── composables/                  # 组合式函数
│   ├── constants/                    # 常量
│   ├── dict/                         # 字典
│   ├── directives/                   # 自定义指令
│   ├── enums/                        # 枚举
│   ├── hooks/                        # 自定义 Hook
│   ├── layout/                       # 全局布局
│   ├── locale/                       # i18n 国际化
│   ├── plugins/                      # 插件配置
│   ├── router/                       # 路由配置
│   ├── services/                     # 请求与 API
│   ├── store/                        # Pinia 状态管理
│   ├── theme/                        # 主题与样式
│   ├── types/                        # 业务类型定义
│   ├── typings/                      # 全局类型声明
│   ├── utils/                        # 工具函数
│   ├── views/                        # 页面组件
│   ├── app.vue                       # 应用入口 Vue 组件
│   └── main.ts                       # 应用入口 TypeScript 文件
├── .husky/                           # Git Hooks 钩子配置 (如 pre-commit)
├── .vscode/                          # VS Code 项目配置
├── .editorconfig                     # 统一不同编辑器的编码风格配置
├── .env                              # 环境变量通用配置
├── .env.development                  # 开发模式环境变量
├── .env.production                   # 生产模式环境变量
├── .eslintrc-auto-import.mjs         # 自动导入插件生成的 ESLint 规则
├── .gitignore                        # Git 提交忽略文件配置
├── .npmrc                            # npm/pnpm 配置文件 (如镜像源)
├── .nvmrc                            # 指定项目所需的 Node.js 版本
├── .prettierignore                   # Prettier 格式化忽略配置
├── .prettierrc.js                    # Prettier 代码格式化规则
├── .stylelintignore                  # Stylelint 样式校验忽略配置
├── commitlint.config.js              # Git 提交信息规范配置
├── eslint.config.js                  # ESLint 代码质量校验配置
├── index.html                        # 应用入口 HTML 文件
├── LICENSE                           # 开源许可证文件
├── lint-staged.config.js             # 暂存区代码增量校验配置
├── pnpm-lock.yaml                    # 依赖版本锁定文件
├── stylelint.config.js               # 样式代码校验规则
├── tsconfig.json                     # TypeScript 编译选项配置
└── package.json                      # 项目元数据与脚本命令
```

## 系列专栏

专栏全部文章：

1. [收下这份 Vue + TS + Vite 中后台系统搭建指南，从此不再害怕建项目](https://github.com/bryqiu/Blog/issues/1)
2. [用了这些 Vite 配置技巧，同事都以为我开挂了](https://github.com/bryqiu/Blog/issues/3)
3. [受够了团队代码风格不统一？7千字教你从零搭建代码规范体系](https://github.com/bryqiu/Blog/issues/4)
4. [开发者必看！在团队中我是这样实现 Git 提交规范化的](https://github.com/bryqiu/Blog/issues/5)
5. [告别繁琐！Vue3 组合式函数解锁 Echarts 封装新姿势](https://github.com/bryqiu/Blog/issues/6)
6. [彻底搞懂面包屑，手把手封装一个 Vue3 面包屑导航组件](https://github.com/bryqiu/Blog/issues/7)
7. [一篇文章实现 Element Plus 动态切换主题色](https://github.com/bryqiu/Blog/issues/12)
8. [Tailwind Css 中使用 Element Plus 主题系统的方案与实现](https://github.com/bryqiu/Blog/issues/15)
9. [RBAC 权限系统实战（一）：页面级访问控制全解析](https://github.com/bryqiu/Blog/issues/17)

## 维护者

- [@Bryan Qiu](https://github.com/bryqiu)

## 如何贡献

我们非常欢迎任何形式的反馈及贡献！[提一个 issue](https://github.com/bryqiu/vue-clean-admin/issues/new) 或者 Pull Request

你可以先阅读 [如何向开源社区提问题](https://github.com/seajs/seajs/issues/545)、[如何优雅地在github上贡献代码](https://segmentfault.com/a/1190000000736629)

## 参考项目

Clean Admin 参考了很多优质项目，包括但不限于：

- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)
- [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin)
- [art-design-pro](https://github.com/Daymychen/art-design-pro)

## License

[MIT](https://github.com/bryqiu/vue-clean-admin/blob/main/LICENSE) License © 2025-PRESENT [Bryan Qiu](https://github.com/bryqiu)
