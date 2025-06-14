<script setup lang="ts">
import { BasicException } from './components';

defineOptions({
  name: 'ServiceError',
});

const handleRefresh = () => {
  window.location.reload();
};

const handleReport = () => {
  // 实现错误报告功能
  console.log('Report error');
};
</script>

<template>
  <BasicException
    title="系统异常(500)"
    desc="服务器暂时无法响应您的请求，请稍后再试或联系技术支持"
    :action-btns="[
      {
        label: '刷新页面',
        onClick: handleRefresh,
        type: 'primary',
      },
      {
        label: '报告问题',
        onClick: handleReport,
        type: 'default',
      },
    ]"
  />
</template>

<style scoped lang="scss"></style>
