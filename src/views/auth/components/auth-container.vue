<script setup lang="ts">
import { cn } from '@/utils';

defineOptions({
  name: 'AuthContainer',
});

export interface AuthHeaderProps {
  title: string;
  titleClass?: string;
  subTitle?: string;
  subTitleClass?: string;
  isShowSubTitle?: boolean;
}

interface AuthContainerProps extends AuthHeaderProps {}

withDefaults(defineProps<AuthContainerProps>(), {
  title: '标题',
  subTitle: '',
});
</script>

<template>
  <div
    class="flex flex-col gap-y-4 p-6 border border-solid border-el-border-light bg-el-fill-blank dark:bg-el-bg-overlay shadow rounded-lg"
  >
    <div class="flex flex-col gap-y-1">
      <span :class="cn('text-base font-semibold', titleClass)">{{ title }}</span>
      <slot v-if="$slots.subTitle" name="subTitle" />
      <span v-else-if="subTitle" :class="cn('text-xs text-el-text-secondary', subTitleClass)">{{
        subTitle
      }}</span>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
