import { type RouteMeta, type RouteRecordRaw } from 'vue-router';
import type { Component } from 'vue';
import type { DefineComponent } from 'vue';

export {};

declare global {
  export interface CustomRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
    /**
     * 路由ID
     */
    id?: number;
    /**
     * 路由父ID
     */
    parentId?: number;
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
    redirect?: string;
    /**
     * 组件
     */
    component?: Component | DefineComponent | string;
    /**
     * 子路由信息
     */
    children?: CustomRouteRecordRaw[];
    /** 元信息 */
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
       * 是否隐藏菜单
       */
      hideMenu?: boolean;
      /**
       * 是否隐藏面包屑
       */
      hideBreadcrumb?: boolean;
    };
  }
}
