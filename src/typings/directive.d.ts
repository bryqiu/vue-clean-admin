import type { AuthDirective } from '@/directives/typing';

declare module 'vue' {
  export interface GlobalDirectives {
    vAuth: AuthDirective;
  }
}
