<script setup lang="ts">
defineOptions({
  name: 'AppVersion',
});

interface AppVersionProps {
  /** 是否以简写模式显示版本号 */
  abbreviated?: boolean;
}

withDefaults(defineProps<AppVersionProps>(), {
  abbreviated: false,
});

const currentVersion = import.meta.env.VITE_APP_VERSION;
</script>

<template>
  <div class="flex items-center justify-center text-sm text-el-text-placeholder gap-x-1">
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
