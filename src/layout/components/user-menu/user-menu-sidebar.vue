<script setup lang="ts">
import { AppUserAvatar } from '@/components/common/app-user-avatar';
import UserAvatar from '@/assets/images/user-avatar.jpg';

defineOptions({
  name: 'UserMenuSidebar',
});
const { isMenuCollapse } = useLayoutSettings();
</script>

<template>
  <div
    class="flex w-full items-center gap-2 overflow-hidden rounded-lg p-2 hover:bg-el-default cursor-pointer"
  >
    <AppUserAvatar :src="UserAvatar" user-avatar-class="cursor-pointer" />
    <div v-show="!isMenuCollapse" class="flex flex-col gap-x-1 justify-center truncate">
      <span class="text-sm font-medium">Bryan Qiu</span>
      <span class="text-xs text-el-secondary">bryanqiu.me@gmail.com</span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
