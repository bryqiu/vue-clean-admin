<script setup lang="ts">
import { ref } from 'vue';
import { ElSegmented } from 'element-plus';
import { ThemeModeEnum } from '@/enums';
import { isObject } from 'lodash-es';
import { modeOptions } from './data';

defineOptions({
  name: 'ThemeMode',
});

const modeValue = ref<ThemeModeEnum>(ThemeModeEnum.LIGHT);
</script>

<template>
  <ElSegmented v-model="modeValue" :options="modeOptions" block>
    <template #default="{ item }">
      <div class="flex-c-c space-x-1 p-2">
        <AppIcon :icon="isObject(item) && item.icon" class="text-lgl" />
        <div>{{ isObject(item) && item.label }}</div>
      </div>
    </template>
  </ElSegmented>
</template>

<style scoped lang="scss"></style>
