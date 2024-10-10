<script setup lang="ts">
import { ElContainer } from 'element-plus';
import { BasicHeader, BasicMain, BasicSidebar } from './modules/index';
</script>

<template>
  <ElContainer class="h-full">
    <BasicSidebar />
    <ElContainer class="wh-full !flex-col">
      <BasicHeader />
      <BasicMain />
      <!-- <BasicFooter /> -->
    </ElContainer>
  </ElContainer>
</template>

<style scoped lang="scss"></style>
