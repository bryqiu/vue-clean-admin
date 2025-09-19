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
  <div class="size-full flex flex-col p-4 relative bg-el-fill-light auth-bg-decor">
    <div class="triangle1" />
    <div class="triangle2" />
    <div class="triangle3" />
    <div class="circle1" />

    <div class="flex items-center justify-between absolute top-4 left-4 right-4 z-50">
      <AppLogo
        :clickable="false"
        show-title
        :local-icon-props="{
          size: 32,
        }"
        text-class="text-xl"
      />
      <div class="flex items-center gap-x-2">
        <AppLocale />
        <AppTheme />
        <AppFullScreen />
      </div>
    </div>

    <!--内容-->
    <div class="flex-1 flex flex-col justify-center items-center z-40">
      <div class="w-[400px] flex flex-col justify-center">
        <!-- 路由视图 -->
        <RouterView v-slot="{ Component }">
          <Transition :name="PageTransitionEnum.FADE_RIGHT" mode="out-in">
            <component :is="Component" v-if="getCurrentLoadViewStatus" />
          </Transition>
        </RouterView>
      </div>
    </div>

    <!--底部-->
    <AppCopyright owner="Bryan qiu" />
  </div>
</template>

<style lang="scss" scoped>
.auth-bg-decor {
  &::before {
    content: '';

    @apply absolute z-[1] top-20 left-10 size-40 bg-el-fill rotate-12 rounded-lg;
  }

  &::after {
    content: '';

    @apply absolute z-[1] bottom-40 right-8 size-40 bg-el-fill-dark -rotate-6 opacity-65 rounded-lg;
  }

  .triangle1::before {
    content: '';

    @apply absolute z-[1] top-32 right-20 w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-el-border-dark border-r-[20px] border-r-transparent transform rotate-45;
  }

  .triangle2::before {
    content: '';

    @apply absolute z-[1] top-1/2 left-1/4 w-0 h-0 border-l-[12px] border-l-transparent border-b-[20px] border-el-border-light border-r-[12px] border-r-transparent transform rotate-[15deg];
  }

  .triangle3::before {
    content: '';

    @apply absolute z-[1] bottom-32 left-16 w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-el-border-dark border-r-[15px] border-r-transparent transform -rotate-[30deg];
  }

  .circle1::before {
    content: '';

    @apply absolute z-[1] bottom-10 right-1/3 bg-el-fill-dark size-16  rounded-full opacity-60;
  }
}
</style>
