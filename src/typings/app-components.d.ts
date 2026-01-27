export {};

declare module 'vue' {
  // 全局组件的类型声明，用于Vue - Official的组件高亮及类型提示
  export interface GlobalComponents {
    ActionButton: (typeof import('../components/common/action-button/index'))['ActionButton'];
    IconifyIcon: (typeof import('../components/common/app-icon/index'))['IconifyIcon'];
    LocalIcon: (typeof import('../components/common/app-icon/index'))['LocalIcon'];
    AppAuth: (typeof import('../components/common/app-auth/index'))['AppAuth'];
  }
}
