import { addCollection } from '@iconify/vue/dist/offline';
import { icons as mingcuteIconJson } from '@iconify-json/mingcute';
import { icons as riIconJson } from '@iconify-json/ri';
import { icons as mdiIconJson } from '@iconify-json/mdi';

/**
 * 初始化离线图标
 */
export const initIcons = () => {
  addCollection(mdiIconJson);
  addCollection(mingcuteIconJson);
  addCollection(riIconJson);
};
