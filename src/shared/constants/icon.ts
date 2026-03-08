import { IconifyIcon } from '@/components/common/app-icon';
import { defineComponent, h } from 'vue';

export const VIEW_ICON = defineComponent(() => {
  return () => h(IconifyIcon, { name: 'ri:add-large-line' });
});
