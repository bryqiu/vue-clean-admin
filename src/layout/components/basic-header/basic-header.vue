<script setup lang="ts">
import { ElDivider } from 'element-plus';
import { MenuCollapse } from '../menu-collapse';
import { Breadcrumb } from '../breadcrumb';
import { BasicToolbar } from '../basic-toolbar';

defineOptions({
  name: 'BasicHeader',
});

const { breadcrumbStyleType } = useShareSettings();
</script>

<template>
  <div class="w-full flex items-center justify-between px-3 py-1 border-b border-el-border-light">
    <div class="flex items-center">
      <MenuCollapse />
      <ElDivider direction="vertical" />
      <Breadcrumb :style-type="breadcrumbStyleType" />
    </div>
    <BasicToolbar />
  </div>
</template>

<style scoped lang="scss"></style>
