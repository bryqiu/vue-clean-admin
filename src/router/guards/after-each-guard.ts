import type { Router } from 'vue-router';
import { nprogress } from './helpers';

export function afterEachGuard(router: Router) {
  router.afterEach(() => {
    nprogress.done();
  });
}
