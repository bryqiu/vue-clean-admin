import { createApp } from 'vue';
import { initStore } from '@/store/init';
import { initRouter } from '@/router';
import { initGlobalModules, initIcons } from '@/plugins';
import '@/styles/index.scss';
import '@/plugins/resource';

import App from './app.vue';

async function bootstrapApp() {
  const app = createApp(App);
  initStore(app);
  initRouter(app);
  initIcons();
  initGlobalModules(app);
  app.mount('#app');
}
bootstrapApp();
