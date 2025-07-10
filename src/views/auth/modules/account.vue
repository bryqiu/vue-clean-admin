<script setup lang="ts">
import { AppCopyright } from '@/components/common/app-copyright';
import { PageTransitionEnum } from '@/enums';
import { AppLogo } from '@/components/common/app-logo';
import { AppFullScreen } from '@/components/common/app-full-screen';

defineOptions({
  name: 'Account',
});
</script>

<template>
  <div class="size-full flex flex-col p-4">
    <!--头部-->
    <div class="flex items-center justify-between lg:justify-end">
      <AppLogo :clickable="false" show-title class="block lg:hidden" />
      <div class="flex items-center gap-x-2">
        <AppFullScreen />
      </div>
    </div>
    <!--内容-->
    <div class="flex-1 flex justify-center items-center">
      <div class="size-full max-w-sm flex flex-col justify-center">
        <!-- 路由视图 -->
        <RouterView v-slot="{ Component }">
          <Transition :name="PageTransitionEnum.FADE_RIGHT" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </div>

    <!--底部-->
    <AppCopyright owner="Bryan qiu" />
  </div>
</template>

<style scoped lang="scss"></style>
