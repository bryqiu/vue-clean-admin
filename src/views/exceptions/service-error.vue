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
    title="500"
    iconify-icon="ri:server-line"
    problem-desc="服务器暂时无法处理您的请求"
    guide-desc="请稍后刷新页面，或联系我们获取帮助"
    :action-btns="[
      {
        label: '刷新页面',
        onClick: handleRefresh,
        type: 'primary',
      },
      {
        label: '反馈问题',
        onClick: handleReport,
        type: 'default',
      },
    ]"
  />
</template>

<style scoped lang="scss"></style>
