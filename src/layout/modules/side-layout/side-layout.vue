<script setup lang="ts">
import { default as Sidebar } from './side-sidebar.vue';
import { BasicHeader } from '../../components/basic-header';
import { BasicMain } from '../../components/basic-main';

defineOptions({
  name: 'SideLayout',
});
const { getCurrentContentSpace } = useLayoutSettings();
</script>

<template>
  <ElContainer class="h-full">
    <Sidebar />
    <ElContainer class="flex flex-col! relative overflow-auto">
      <BasicHeader />
      <div class="flex-1 overflow-y-auto" :style="{ padding: `${getCurrentContentSpace}px` }">
        <BasicMain />
      </div>
    </ElContainer>
  </ElContainer>
</template>

<style scoped lang="scss"></style>
