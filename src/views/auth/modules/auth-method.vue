<script setup lang="ts">
import { ROUTE_NAMES } from '@/router/config';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'AuthMethod',
});

type RouteNames = (typeof ROUTE_NAMES)[keyof typeof ROUTE_NAMES];

interface AuthMethod extends BaseOptions<RouteNames> {
  icon: string;
}

export interface AuthMethodProps {
  authMethodList: AuthMethod[];
}

withDefaults(defineProps<AuthMethodProps>(), {
  authMethodList: () => [],
});

const router = useRouter();

const goToAuthMethod = (value: RouteNames) => {
  router.push({ name: value });
};
</script>

<template>
  <div class="grid grid-cols-2 gap-x-4 gap-y-2">
    <div
      v-for="item in authMethodList"
      :key="item.value"
      class="h-9 rounded-lg border border-solid border-el-border-default flex items-center justify-center flex-1 gap-2 cursor-pointer hover:bg-el-fill-light duration-300"
      @click="goToAuthMethod(item.value)"
    >
      <IconifyIcon v-if="item.icon" :name="item.icon" class="text-base" />
      <span class="text-sm">{{ item?.label ?? '登录' }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
