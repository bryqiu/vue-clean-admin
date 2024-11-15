<script setup lang="ts">
import { ElSegmented } from 'element-plus';
import { isObject } from '@/utils';
import { themeModeOptions } from '@/dict';

defineOptions({
  name: 'ThemeMode',
});

const { currentThemeMode } = useThemeSettings();
</script>

<template>
  <ElSegmented v-model="currentThemeMode" :options="themeModeOptions" block class="simple">
    <template #default="{ item }">
      <div class="flex flex-col gap-1 p-2">
        <div><AppIcon :icon="isObject(item) && item.icon" class="text-xl" /></div>
        <div class="font-semibold">{{ isObject(item) && item.label }}</div>
      </div>
    </template>
  </ElSegmented>
</template>

<style scoped lang="scss"></style>
