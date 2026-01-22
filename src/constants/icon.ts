import { IconifyIcon } from '@/components/common/app-icon';
import { defineComponent, h } from 'vue';

const viewIcon = defineComponent(() => {
  return () => h(IconifyIcon, { name: 'ri:add-large-line' });
});

export { viewIcon };
