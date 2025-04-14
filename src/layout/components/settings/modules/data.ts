import type { ColorCardProps } from '../components';
import { DEFAULT_SETTINGS } from '@/config/settings';

export const PRESET_COLOR_LIST: ColorCardProps[] = [
  {
    label: '默认品牌色',
    value: DEFAULT_SETTINGS.theme.primaryColor,
  },
  {
    label: '竹绿',
    value: '#1ba784',
  },
  {
    label: '紫罗兰',
    value: '#a258d5',
  },
  {
    label: '天青石色',
    value: '#3869f4',
  },
  {
    label: '山楂红',
    value: '#e7616c',
  },
  {
    label: '小马宝莉',
    value: '#f8aac0',
  },
  {
    label: '那不勒斯黄',
    value: '#f6cb1d',
  },
  {
    label: '荧光橙',
    value: '#ff8a00',
  },
];
