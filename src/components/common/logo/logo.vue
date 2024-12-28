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
  /**
   * 是否允许点击
   * @default true
   */
  isClick?: boolean;
}

const props = withDefaults(defineProps<LogoProps>(), {
  isCollapse: false,
  isClick: true,
});

const { goBackRootPath } = useRouterPath();
const systemTitle = import.meta.env.VITE_APP_TITLE;

const handleClick = () => {
  if (props.isClick) {
    goBackRootPath();
  }
};
</script>

<template>
  <div class="flex items-center gap-2" :class="{ 'cursor-pointer': isClick }" @click="handleClick">
    <ElImage :src="LogoSvg" class="size-8" />
    <span v-show="!isCollapse" class="text-xl font-semibold">{{ systemTitle }}</span>
  </div>
</template>

<style scoped lang="scss"></style>
