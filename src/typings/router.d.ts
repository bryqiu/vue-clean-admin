import { type RouteMeta, type RouteRecordRaw } from 'vue-router';
import type { Component } from 'vue';
import type { DefineComponent } from 'vue';

export {};

declare module 'vue-router' {
  interface RouteMeta {
    /** 菜单标题 */
    title: string;
    /** 菜单图标 */
    icon?: string;
    /** 是否隐藏菜单 */
    isHideMenu?: boolean;
    /** 排序 */
    sort?: number;
    /** 唯一秘钥 */
  }
}

declare global {
  export interface CustomRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
    /** 路由路径 */
    path: string;
    /** 路由名称 */
    name: string;
    /** 重定向路径 */
    redirect?: string;
    /** 组件 */
    component?: Component | DefineComponent;
    /** 元信息 */
    meta: RouteMeta;
    /** 子路由 */
    children?: CustomRouteRecordRaw[];
  }
}
