<script setup lang="ts">
import { AppUserAvatar } from '@/components/common/app-user-avatar';
import UserAvatar from '@/assets/images/user-avatar.jpg';
import { default as UserDropdown } from './user-dropdown.vue';

defineOptions({
  name: 'UserMenuSidebar',
});
const { isMenuCollapse } = useLayoutSettings();
</script>

<template>
  <UserDropdown placement="right-start">
    <div
      class="flex w-full items-center gap-x-2 overflow-hidden rounded-lg p-2 hover:bg-el-fill-light cursor-pointer shadow"
    >
      <AppUserAvatar :src="UserAvatar" user-avatar-class="cursor-pointer" shape="square" />
      <div v-show="!isMenuCollapse" class="flex flex-col gap-x-1 justify-center truncate">
        <span class="text-sm font-medium">Bryan Qiu</span>
        <span class="text-xs text-el-text-secondary">bryanqiu.me@gmail.com</span>
      </div>
    </div>
  </UserDropdown>
</template>

<style scoped lang="scss"></style>
