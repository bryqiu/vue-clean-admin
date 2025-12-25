<script setup lang="ts">
import { default as Sidebar } from './col-sidebar.vue';
import { BasicHeader } from '../../components/basic-header';
import { BasicMain } from '../../components/basic-main';

defineOptions({
  name: 'ColLayout',
});

const { getCurrentContentSpace } = useLayoutSettings();
</script>

<template>
  <ElContainer class="h-full">
    <Sidebar />
    <ElContainer class="size-full flex flex-col!">
      <BasicHeader />
      <div
        class="flex-1 overflow-auto overflow-x-hidden"
        :style="{ padding: `${getCurrentContentSpace}px` }"
      >
        <BasicMain />
      </div>
    </ElContainer>
  </ElContainer>
</template>

<style scoped lang="scss"></style>
