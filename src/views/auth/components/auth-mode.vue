<script setup lang="ts">
import { ROUTE_NAMES } from '@/router/config';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'AuthMode',
});

type RouteNames = (typeof ROUTE_NAMES)[keyof typeof ROUTE_NAMES];

interface AuthMode {
  icon: string;
  routeName: RouteNames;
  label?: string;
}

export interface AuthModeProps {
  authModeList: AuthMode[];
}

withDefaults(defineProps<AuthModeProps>(), {
  authModeList: () => [],
});

const router = useRouter();

const goToAuthMode = (value: RouteNames) => {
  router.push({ name: value });
};
</script>

<template>
  <div class="grid grid-cols-3 gap-x-4 gap-y-2">
    <div
      v-for="item in authModeList"
      :key="item.routeName"
      class="h-8 rounded-lg border border-solid border-el-border flex items-center justify-center flex-1 gap-2 cursor-pointer hover:bg-el-fill-light duration-300 text-el-text-primary"
      @click="goToAuthMode(item.routeName)"
    >
      <IconifyIcon v-if="item.icon" :name="item.icon" class="text-base" />
      <span class="text-xs">{{ item.label }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
