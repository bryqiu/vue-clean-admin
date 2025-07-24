<script setup lang="ts">
import { AppUserAvatar } from '@/components/common/app-user-avatar';
import UserAvatar from '@/assets/images/user-avatar.jpg';
import { default as UserDropdown } from './user-dropdown.vue';

defineOptions({
  name: 'UserMenuHeader',
});
</script>

<template>
  <UserDropdown
    :popper-options="{
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [-110, 10],
          },
        },
      ],
    }"
  >
    <div class="flex items-center gap-x-2">
      <AppUserAvatar :src="UserAvatar" user-avatar-class="cursor-pointer" />
    </div>
  </UserDropdown>
</template>

<style scoped lang="scss"></style>
