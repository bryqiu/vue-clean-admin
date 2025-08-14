<script setup lang="ts">
import { ElDivider, ElHeader } from 'element-plus';
import { twMerge } from 'tailwind-merge';
import { AppLogo } from '@/components/common/app-logo';
import { Notice } from '@/layout/components/notice';
import { Settings } from '@/layout/components/settings';
import { MenuCollapse } from '@/layout/components/menu-collapse';
import { MenuAccordion } from '@/layout/components/menu-accordion';
import { Breadcrumb } from '@/layout/components/breadcrumb';
import { UserDropdownHeader } from '@/layout/components/user-dropdown';
import { AppTheme } from '@/components/common/app-theme';
import { AppFullScreen } from '@/components/common/app-full-screen';

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

const props = withDefaults(defineProps<BasicHeaderProps>(), {
  hideLeft: false,
  hideRight: false,
});

const { getCurrentHeaderHeight } = useLayoutSettings();

const { isSideLayout } = useLayoutSettings();

const { breadcrumbStyleType } = useShareSettings();
</script>

<template>
  <div
    class="fixed top-0 z-50 bg-el-fill-blank flex items-center px-4 gap-x-4 w-full"
    :style="{ height: `${getCurrentHeaderHeight}px` }"
  >
    <template v-if="!hideLeft">
      <slot v-if="$slots.left" name="left" />
      <div
        v-else
        class="flex flex-1 items-center min-w-0 gap-x-2"
        :style="{ lineHeight: `${getCurrentHeaderHeight}px` }"
      >
        <component :is="isSideLayout && MenuCollapse" />
        <component :is="isSideLayout && MenuAccordion" />
        <Breadcrumb :style-type="breadcrumbStyleType" />
      </div>
    </template>
    <template v-if="!hideRight">
      <slot v-if="$slots.right" name="right" />
      <div v-else class="flex items-center gap-x-2 flex-shrink-0">
        <AppTheme />
        <Notice />
        <AppFullScreen />
        <Settings />
        <ElDivider direction="vertical" />
        <UserDropdownHeader />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
