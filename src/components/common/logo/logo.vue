<script setup lang="ts">
import { ElImage } from 'element-plus';
import LogoSvg from '@/assets/icons/logo.svg';

defineOptions({
  name: 'Logo',
});

interface LogoProps {
  /**
   * 是否折叠
   * @default false
   */
  isCollapse?: boolean;
}

withDefaults(defineProps<LogoProps>(), {
  isCollapse: false,
});

const { goBackRootPath } = useRouterPath();
const systemTitle = import.meta.env.VITE_APP_TITLE;
</script>

<template>
  <div class="flex-c-c gap-2 cursor-pointer" @click="goBackRootPath">
    <ElImage :src="LogoSvg" class="size-8" />
    <span v-show="!isCollapse" class="app-h4">{{ systemTitle }}</span>
  </div>
</template>

<style scoped lang="scss"></style>
