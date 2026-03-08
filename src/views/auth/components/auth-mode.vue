<script setup lang="ts">
import { useRouter } from 'vue-router';
import { AUTH_MODE_OPTION, RouteNames } from '@/shared';

defineOptions({
  name: 'AuthMode',
});

const router = useRouter();

const goToAuthMode = (value: RouteNames) => {
  router.push({ name: value });
};
</script>

<template>
  <div class="grid grid-cols-2 gap-x-4 gap-y-2">
    <div
      v-for="item in AUTH_MODE_OPTION"
      :key="item.value"
      class="h-item rounded-lg border border-solid border-el-border flex items-center justify-center flex-1 gap-2 cursor-pointer hover:bg-el-fill-light duration-300 text-el-text-primary"
      @click="goToAuthMode(item.value)"
    >
      <IconifyIcon v-if="item.icon" :name="item.icon" class="text-base" />
      <span class="text-sm">{{ item.label }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
