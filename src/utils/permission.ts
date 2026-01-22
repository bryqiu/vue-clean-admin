import { formatStoreKey } from '@/store/helpers';
import { storeModulesNames } from '@/store/config';

export const getLocalAccessToken = () => {
  const data = JSON.parse(localStorage.getItem(formatStoreKey(storeModulesNames.user)) || '{}');
  return data?.accessToken || '';
};

export const getLocalRefreshToken = () => {
  const data = JSON.parse(localStorage.getItem(formatStoreKey(storeModulesNames.user)) || '{}');
  return data?.refreshToken || '';
};
