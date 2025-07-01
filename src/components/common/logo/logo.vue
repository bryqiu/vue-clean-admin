<script setup lang="ts">
import { PageTransitionEnum } from '@/enums';
import { ROOT_REDIRECT } from '@/router/config';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'Logo',
});

interface LogoProps {
  /**
   * 是否显示标题
   * @default false
   */
  showTitle?: boolean;
  /**
   * 是否允许点击
   * @default true
   */
  click?: boolean;
}

const router = useRouter();

const props = withDefaults(defineProps<LogoProps>(), {
  showTitle: false,
  click: true,
});

const appTitle = import.meta.env.VITE_APP_TITLE;

const handleClick = () => {
  if (!props.click) {
    return;
  }
  router.push({
    name: ROOT_REDIRECT,
  });
};
</script>

<template>
  <div class="flex items-center gap-2" :class="{ 'cursor-pointer': click }" @click="handleClick">
    <LocalIcon name="logo" :size="36" />
    <Transition :name="PageTransitionEnum.NONE">
      <span
        v-show="!showTitle"
        class="text-xl font-semibold inline-block truncate text-el-text-primary"
        >{{ appTitle }}</span
      >
    </Transition>
  </div>
</template>
