<script setup lang="ts">
import { BasicException } from './components';

defineOptions({
  name: 'NotFound',
});
</script>

<template>
  <BasicException title="页面走丢了(404)" desc="抱歉，您访问的页面不存在或已被移除" />
</template>

<style scoped lang="scss"></style>
