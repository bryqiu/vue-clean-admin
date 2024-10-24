import { ROOT_REDIRECT } from '@/config';
const root: CustomRouteRecordRaw = {
  path: '/',
  redirect: ROOT_REDIRECT,
  name: 'Root',
  meta: {
    title: '根目录',
  },
};

export default root;
