import { createApp } from 'vue';
import { initStore } from '@/store';
import { initRouter } from '@/router';
import { initGlobalModules } from '@/plugins';
import '@/styles/index.scss';
import '@/plugins/resource';

import App from './app.vue';

async function bootstrapApp() {
  const app = createApp(App);
  initStore(app);
  initRouter(app);
  initGlobalModules(app);
  app.mount('#app');
}
bootstrapApp();
