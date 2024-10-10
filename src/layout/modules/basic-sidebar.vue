<script setup lang="ts">
// import { ref } from "vue";
import { ElAside } from 'element-plus';
import { Logo } from '@/components/common/logo';
import { SidebarMenu } from '../components/sidebar-menu/index';
import { ToggleCollapse } from '../components/toggle-collapse';
import { themeMode } from '@/components/common/theme-mode';

defineOptions({
  name: 'BasicSidebar',
});
</script>

<template>
  <ElAside width="200px">
    <div class="w-full h-14 flex-c-c">
      <Logo />
    </div>
    <div class="h-[calc(100%-7rem)] py-2">
      <SidebarMenu />
    </div>
    <div class="h-14 p-2 flex items-center">
      <ToggleCollapse />
      <!-- <themeMode /> -->
    </div>
  </ElAside>
</template>

<style scoped lang="scss"></style>
