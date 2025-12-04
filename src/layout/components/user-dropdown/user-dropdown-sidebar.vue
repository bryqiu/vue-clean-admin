<script setup lang="ts">
import { AppUserAvatar } from '@/components/common/app-user-avatar';
import UserAvatar from '@/assets/images/user-avatar.jpg';
import { default as UserDropdown } from './user-dropdown.vue';
import { cn } from '@/utils';

defineOptions({
  name: 'UserMenuSidebar',
});

interface UserDropdownSidebarProps {
  /**
   * 是否隐藏文本
   * @default false
   */
  hideText: boolean;
  /**
   * 用户下拉菜单类名
   * @default ''
   */
  userDropdownSideClass?: Nullable<ClsxClassValues>;
}

withDefaults(defineProps<UserDropdownSidebarProps>(), {
  hideText: true,
  userDropdownSideClass: null,
});
</script>

<template>
  <UserDropdown placement="right-start">
    <div
      :class="
        cn(
          'flex w-full items-center gap-x-2 overflow-hidden p-2 rounded-lg cursor-pointer',
          hideText && 'justify-center',
          userDropdownSideClass,
        )
      "
    >
      <AppUserAvatar :src="UserAvatar" user-avatar-class="cursor-pointer" />
      <div v-show="!hideText" class="flex-1 flex flex-col justify-center overflow-hidden">
        <span class="text-xs font-medium truncate">Bryan Qiu</span>
        <span class="text-xs text-el-text-secondary truncate">bryanqiu.me@gmail.com</span>
      </div>
    </div>
  </UserDropdown>
</template>

<style scoped lang="scss"></style>
