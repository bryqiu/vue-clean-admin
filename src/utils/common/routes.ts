import { has } from 'lodash-es';
import { isArray } from './validate';

export const hasChildren = (routes: CustomRouteRecordRaw) => {
  return has(routes, 'children') && isArray(routes.children) && !!routes.children.length;
};
