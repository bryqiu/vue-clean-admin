<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

defineOptions({
  name: 'AppVersion',
});

interface AppVersionProps {
  /**
   * 是否以简写模式显示版本号
   * @default false
   */
  abbreviated?: boolean;
  /**
   * 文本类
   * @default ''
   */
  textClass?: string;
}

withDefaults(defineProps<AppVersionProps>(), {
  abbreviated: false,
  textClass: '',
});

const currentVersion = import.meta.env.VITE_APP_VERSION;
</script>

<template>
  <div
    :class="
      twMerge(
        'flex items-center justify-center text-sm text-el-text-placeholder gap-x-1',
        textClass,
      )
    "
  >
    <template v-if="abbreviated">
      <span>v {{ currentVersion }}</span>
    </template>
    <template v-else>
      <IconifyIcon name="mingcute:version-line" />
      <span>Version</span>
      <span>{{ currentVersion }}</span>
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
