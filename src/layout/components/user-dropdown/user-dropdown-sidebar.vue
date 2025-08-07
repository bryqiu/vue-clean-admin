<script setup lang="ts">
import { AppUserAvatar } from '@/components/common/app-user-avatar';
import UserAvatar from '@/assets/images/user-avatar.jpg';
import { default as UserDropdown } from './user-dropdown.vue';
import { twMerge } from 'tailwind-merge';

defineOptions({
  name: 'UserMenuSidebar',
});

interface UserDropdownSidebarProps {
  /**
   * 是否隐藏文本
   * @default false
   */
  hideText: boolean;
}

withDefaults(defineProps<UserDropdownSidebarProps>(), {
  hideText: true,
});
</script>

<template>
  <UserDropdown placement="right-start">
    <div
      :class="
        twMerge(
          'flex w-full items-center gap-x-2 overflow-hidden p-2 rounded-lg hover:bg-el-fill-light cursor-pointer',
          hideText && 'justify-center',
        )
      "
    >
      <AppUserAvatar :src="UserAvatar" user-avatar-class="cursor-pointer" shape="square" />
      <div v-show="!hideText" class="flex flex-col gap-x-1 justify-center truncate">
        <span class="text-sm font-medium">Bryan Qiu</span>
        <span class="text-xs text-el-text-secondary">bryanqiu.me@gmail.com</span>
      </div>
    </div>
  </UserDropdown>
</template>

<style scoped lang="scss"></style>
