<script setup lang="ts">
import { AppUserAvatar } from '@/components/common/app-user-avatar';
import UserAvatar from '@/assets/images/user-avatar.jpg';

defineOptions({
  name: 'UserMenuHeader',
});
</script>

<template>
  <div>
    <div class="flex items-center gap-x-2">
      <AppUserAvatar :src="UserAvatar" user-avatar-class="cursor-pointer" />
      <!-- <div class="flex items-center gap-x-1 justify-center">
        <span class="text-sm font-medium">Bryan Qiu</span>
      </div> -->
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
