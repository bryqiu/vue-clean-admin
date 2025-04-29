<script setup lang="ts">
import { ToggleBox } from '../components';
import { breadcrumbStyleOptions, whetherOptions } from '@/dict';
import { SegmentContainer } from '../components';

defineOptions({
  name: 'ModuleShare',
});

const { showBreadcrumb, showBreadcrumbIcon, breadcrumbStyleType } = useShareSettings();
</script>

<template>
  <div class="flex flex-col gap-4">
    <SegmentContainer title="面包屑">
      <ToggleBox v-model="showBreadcrumb" text="是否显示面包屑" :options="whetherOptions" />
      <ToggleBox
        v-model="showBreadcrumbIcon"
        text="是否显示面包屑图标"
        :options="whetherOptions"
        :disabled="!showBreadcrumb"
      />
      <ToggleBox
        v-model="breadcrumbStyleType"
        text="面包屑样式"
        mode="vertical"
        :options="breadcrumbStyleOptions"
        :disabled="!showBreadcrumb"
      />
    </SegmentContainer>
  </div>
</template>

<style scoped lang="scss"></style>
