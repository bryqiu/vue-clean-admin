import type { App } from 'vue';
import { authDirective } from './modules';

export const registerDirectives = (app: App<Element>) => {
  const directives = [
    // 权限码指令
    authDirective,
  ];
  directives.forEach(({ name, directive }) => {
    app.directive(name, directive);
  });
};
