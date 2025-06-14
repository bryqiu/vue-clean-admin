<script setup lang="ts">
import { BasicException } from './components';

defineOptions({
  name: 'Forbidden',
});
</script>

<template>
  <BasicException title="访问受限(403)" desc="您暂无权限访问此页面，请联系管理员开通相应权限" />
</template>

<style scoped lang="scss"></style>
