import { APP_LAYOUT } from '@/router/config';

const systemsRoutes: CustomRouteRecordRaw = {
  id: 1,
  path: '/systems',
  redirect: '/systems/userManage',
  component: APP_LAYOUT,
  name: 'Systems',
  meta: {
    title: '系统管理',
    sort: 5,
    menuIcon: 'ri:settings-3-line',
  },
  children: [
    {
      id: 3,
      path: 'roleManage',
      name: 'RoleManage',
      component: () => import('@/views/systems/role-manage/role-manage.vue'),
      meta: {
        title: '角色管理',
        menuIcon: 'ri:shield-user-line',
      },
    },
    {
      id: 1,
      path: 'userManage',
      name: 'UserManage',
      component: () => import('@/views/systems/user-manage/user-manage.vue'),
      meta: {
        title: '用户管理',
        menuIcon: 'ri:user-3-line',
      },
    },
    {
      id: 2,
      path: 'menuManage',
      name: 'MenuManage',
      component: () => import('@/views/systems/menu-manage/menu-manage.vue'),
      meta: {
        title: '菜单管理',
        menuIcon: 'ri:menu-3-line',
      },
    },
    {
      id: 4,
      path: 'baseTable',
      name: 'BaseTable',
      component: () => import('@/views/systems/base-table/base-table.vue'),
      meta: {
        title: '基础表格',
        menuIcon: 'ri:table-2',
      },
    },
  ],
};

export default systemsRoutes;
