import type { RouteMeta, RouteRecordRaw, RouteRecordRedirectOption } from 'vue-router';
import type { Component } from 'vue';
import type { DefineComponent } from 'vue';
import type { PermissionCode, RouteType } from '#/type';

declare global {
  export interface CustomRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
    /**
     * 路由地址
     */
    path: string;
    /**
     * 路由名称
     */
    name?: string;
    /**
     * 重定向路径
     */
    redirect?: RouteRecordRedirectOption;
    /**
     * 组件
     */
    component?: Component | DefineComponent | (() => Promise<unknown>);
    /**
     * 子路由信息
     */
    children?: CustomRouteRecordRaw[];
    /**
     * 路由类型
     */
    type?: RouteType;
    /**
     * 元信息
     */
    meta: {
      /**
       * 菜单标题
       */
      title: string;
      /**
       * 菜单图标
       */
      menuIcon?: string;
      /**
       * 排序
       */
      sort?: number;
      /**
       * 是否在侧边栏菜单中隐藏
       * @default false
       */
      hideMenu?: boolean;
      /**
       * 是否在面包屑中隐藏
       * @default false
       */
      hideBreadcrumb?: boolean;
      /**
       * 当只有一个子菜单时，是否隐藏父级菜单直接显示子菜单内容
       * @default false
       */
      hideParentIfSingleChild?: boolean;
    };
  }

  /**
   * 后端返回的权限路由类型定义
   */
  export type PermissionRoute = Omit<CustomRouteRecordRaw, 'component' | 'children' | 'type'> & {
    /**
     * 路由ID
     */
    id?: number;
    /**
     * 路由父ID
     */
    parentId?: number;
    /**
     * 组件路径（后端返回时为字符串，前端处理后为组件）
     */
    component: string;
    /**
     * 子路由信息
     */
    children?: PermissionRoute[];
    /**
     * 路由类型
     */
    type: RouteType;
    /**
     * 权限码
     */
    permissionCode?: PermissionCode;
  };
}
