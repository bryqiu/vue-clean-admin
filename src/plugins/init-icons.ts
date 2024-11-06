import { addCollection } from '@iconify/vue/dist/offline';
import { icons as icIconJson } from '@iconify-json/ic';
import { icons as mingcuteIconJson } from '@iconify-json/mingcute';
import { icons as materialSymbolsIconJson } from '@iconify-json/material-symbols';
import { icons as riIconJson } from '@iconify-json/ri';
import { icons as lineIconJson } from '@iconify-json/line-md';
import { icons as mdiIconJson } from '@iconify-json/mdi';

/**
 * 初始化离线图标
 */
export const initIcons = () => {
  addCollection(icIconJson);
  addCollection(materialSymbolsIconJson);
  addCollection(mdiIconJson);
  addCollection(mingcuteIconJson);
  addCollection(riIconJson);
  addCollection(lineIconJson);
};
