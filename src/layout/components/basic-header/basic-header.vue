<script setup lang="ts">
import { MenuCollapse } from '../menu-collapse';
import { Breadcrumb } from '../breadcrumb';
import { BasicToolbar } from '../basic-toolbar';

defineOptions({
  name: 'BasicHeader',
});

const {
  getCurrentHeaderHeight,
  isColLayout,
  getCurrentContentSpace,
  breadcrumbStyle,
  enableMenuCollapseWidget,
  showBreadcrumb,
} = usePreferences();
</script>

<template>
  <div
    class="w-full flex items-center justify-between"
    :style="{ height: `${getCurrentHeaderHeight}px`, padding: `0 ${getCurrentContentSpace}px` }"
  >
    <div class="flex items-center">
      <MenuCollapse v-if="!isColLayout && enableMenuCollapseWidget" />
      <ElDivider
        v-if="!isColLayout && enableMenuCollapseWidget && showBreadcrumb"
        direction="vertical"
      />
      <Breadcrumb v-if="showBreadcrumb" :style-type="breadcrumbStyle" />
    </div>
    <BasicToolbar />
  </div>
</template>

<style scoped lang="scss"></style>
