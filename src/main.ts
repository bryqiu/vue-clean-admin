import { createApp } from 'vue';
import { initStore } from '@/store';
import { initRouter } from '@/router';
import { initI18n, registerComponents, registerPlugins } from '@/plugins';
import { registerDirectives } from '@/directives';
import '@/theme/tailwind/tailwind.css';
import '@/theme/styles/index.scss';
import '@/plugins/resource';

import App from './app.vue';

async function bootstrapApp() {
  const app = createApp(App);
  await initI18n(app);
  initStore(app);
  initRouter(app);
  registerComponents(app);
  registerDirectives(app);
  registerPlugins(app);
  app.mount('#app');
}
bootstrapApp();
