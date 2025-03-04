<script setup lang="ts">
import { BaseContainer } from '../components';
import { quickNavList } from '../data';
import { ElScrollbar } from 'element-plus';

defineOptions({
  name: 'QuickNav',
});

export interface QuickNavItem {
  title: string;
  icon?: string;
  url: string;
}
</script>

<template>
  <BaseContainer title="快捷访问">
    <ElScrollbar height="100%">
      <div class="grid grid-cols-2 gap-2">
        <div
          v-for="(nav, index) in quickNavList"
          :key="index"
          class="flex flex-col items-center p-2 gap-y-0.5 flex-1 bg-el-light rounded-lg cursor-pointer hover:bg-el-darker duration-300"
        >
          <AppIcon v-if="nav.icon" :icon="nav.icon" class="text-el-regular text-2xl" />
          <span class="text-el-regular text-sm font-medium line-clamp-1">{{ nav.title }}</span>
        </div>
      </div>
    </ElScrollbar>
  </BaseContainer>
</template>

<style scoped lang="scss"></style>
