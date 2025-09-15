<script setup lang="ts">
import { Notice } from '@/layout/components/notice';
import { Settings } from '@/layout/components/settings';
import { Breadcrumb } from '@/layout/components/breadcrumb';
import { UserDropdownHeader } from '@/layout/components/user-dropdown';
import { AppTheme } from '@/components/common/app-theme';
import { AppFullScreen } from '@/components/common/app-full-screen';
import { AppLocale } from '@/components/common/app-locale';

defineOptions({
  name: 'BasicHeader',
});

interface BasicHeaderProps {
  /**
   * 是否隐藏左侧内容
   * @default false
   */
  hideLeft?: boolean;
  /**
   * 是否隐藏右侧内容
   * @default false
   */
  hideRight?: boolean;
}

withDefaults(defineProps<BasicHeaderProps>(), {
  hideLeft: false,
  hideRight: false,
});

const { getCurrentHeaderHeight } = useLayoutSettings();

const { breadcrumbStyleType } = useShareSettings();
</script>

<template>
  <div
    class="fixed top-0 z-50 duration-300 flex items-center bg-el-fill-blank w-full backdrop-blur-xl"
    :style="{ height: `${getCurrentHeaderHeight}px` }"
  >
    <header class="flex items-center px-4 gap-x-4 w-full">
      <template v-if="!hideLeft">
        <slot v-if="$slots.left" name="left" />
        <div
          v-else
          class="flex flex-1 items-center min-w-0 gap-x-2"
          :style="{ lineHeight: `${getCurrentHeaderHeight}px` }"
        >
          <Breadcrumb :style-type="breadcrumbStyleType" />
        </div>
      </template>
      <template v-if="!hideRight">
        <slot v-if="$slots.right" name="right" />
        <div v-else class="flex items-center gap-x-3 flex-shrink-0">
          <AppLocale />
          <AppTheme />
          <Notice />
          <AppFullScreen />
          <Settings />
          <UserDropdownHeader />
        </div>
      </template>
    </header>
  </div>
</template>

<style scoped lang="scss"></style>
