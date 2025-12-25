<script setup lang="ts">
import { MenuCollapse } from '../menu-collapse';
import { Breadcrumb } from '../breadcrumb';
import { BasicToolbar } from '../basic-toolbar';

defineOptions({
  name: 'BasicHeader',
});

const { breadcrumbStyleType } = useShareSettings();
const { getCurrentHeaderHeight, isColLayout, getCurrentContentSpace } = useLayoutSettings();
</script>

<template>
  <div
    class="w-full flex items-center justify-between"
    :style="{ height: `${getCurrentHeaderHeight}px`, padding: `0 ${getCurrentContentSpace}px` }"
  >
    <div class="flex items-center">
      <template v-if="!isColLayout">
        <MenuCollapse />
        <ElDivider direction="vertical" />
      </template>
      <Breadcrumb :style-type="breadcrumbStyleType" />
    </div>
    <BasicToolbar />
  </div>
</template>

<style scoped lang="scss"></style>
