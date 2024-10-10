import { createApp } from 'vue';
import { initStore } from '@/store/init';
import { initRouter } from '@/router/init';
import { initElementPlus, initIcons } from '@/plugins/index';
import '@/styles/index.scss';
import '@/plugins/resource';

import App from './app.vue';

async function bootstrapApp() {
  const app = createApp(App);
  initStore(app);
  initRouter(app);
  initIcons();
  initElementPlus(app);
  app.mount('#app');
}
bootstrapApp();
