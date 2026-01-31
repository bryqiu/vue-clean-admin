<script setup lang="ts">
import { AppCopyright } from '@/components/common/app-copyright';
import { PageTransitionEnum } from '@/enums';
import { AppLogo } from '@/components/common/app-logo';
import { AppTheme } from '@/components/common/app-theme';
import { AppFullScreen } from '@/components/common/app-full-screen';
import { AppLocale } from '@/components/common/app-locale';

defineOptions({
  name: 'Auth',
});

const { getCurrentLoadViewStatus } = useLoadView();
</script>

<template>
  <div class="size-full flex flex-col p-4 relative isolate overflow-hidden auth-bg-decor">
    <div class="decor-layer">
      <div class="shape-top-left" />
      <div class="shape-bottom-right" />
      <div class="shape-center-accent" />
      <div class="shape-top-right-triangle" />
      <div class="shape-bottom-left-diamond" />
      <div class="shape-top-center-hollow" />
    </div>

    <div class="flex items-center justify-between absolute top-4 left-4 right-4 z-50">
      <AppLogo :clickable="false" show-title text-class="text-lg" />
      <div class="flex items-center gap-x-2">
        <AppLocale />
        <AppTheme />
        <AppFullScreen />
      </div>
    </div>

    <div class="flex-1 flex flex-col justify-center items-center z-40">
      <div class="w-[420px] flex flex-col justify-center">
        <RouterView v-slot="{ Component }">
          <Transition :name="PageTransitionEnum.FADE_RIGHT" mode="out-in">
            <component :is="Component" v-if="getCurrentLoadViewStatus" />
          </Transition>
        </RouterView>
      </div>
    </div>

    <AppCopyright owner="Bryan qiu" />
  </div>
</template>

<style scoped lang="scss">
.auth-bg-decor {
  .decor-layer {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;

    > div {
      position: absolute;
      opacity: 0.5;
    }

    .shape-top-left {
      top: 15%;
      left: 5%;
      width: 10rem;
      height: 10rem;
      background-color: var(--color-zinc-100);
      border-radius: var(--radius-lg);
      transform: rotate(12deg);
    }

    .shape-bottom-right {
      right: 8%;
      bottom: 15%;
      width: 8rem;
      height: 8rem;
      background-color: var(--color-zinc-100);
      border-radius: 50%;
      opacity: 0.7;
    }

    .shape-center-accent {
      top: 65%;
      left: 15%;
      width: 2rem;
      height: 2rem;
      border: 2px solid var(--color-zinc-200);
      border-radius: 50%;
      opacity: 0.6;
    }

    .shape-top-right-triangle {
      top: 18%;
      right: 20%;
      width: 3rem;
      height: 3rem;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      background-color: var(--color-zinc-100);
      transform: rotate(-120deg);
    }

    .shape-bottom-left-diamond {
      bottom: 25%;
      left: 10%;
      width: 1.5rem;
      height: 1.5rem;
      background-color: var(--color-zinc-200);
      border-radius: 4px;
      opacity: 0.4;
      transform: rotate(45deg);
    }

    .shape-top-center-hollow {
      top: 12%;
      left: 45%;
      width: 3rem;
      height: 3rem;
      border: 2px solid var(--color-zinc-100);
      border-radius: var(--radius-md);
      opacity: 0.5;
      transform: rotate(20deg);
    }
  }
}
</style>
