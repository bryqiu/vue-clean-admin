<script setup lang="ts">
import { BaseContainer } from '../components';
import { ElTable, ElTableColumn } from 'element-plus';
import { accessLogList } from '../data';

defineOptions({
  name: 'AccessLogs',
});

export interface AccessLog {
  date: string;
  country: string;
  browser: string;
  deviceType: 'mobile' | 'desktop' | 'tablet';
  ip: string;
  os: string;
}
</script>

<template>
  <BaseContainer title="用户访问日志">
    <ElTable
      :data="accessLogList"
      :header-cell-style="{ backgroundColor: 'var(--el-fill-color-light)' }"
    >
      <ElTableColumn prop="date" label="时间" show-overflow-tooltip align="center" />
      <ElTableColumn prop="country" label="位置" show-overflow-tooltip align="center" />
      <ElTableColumn prop="browser" label="浏览器" show-overflow-tooltip align="center" />
      <ElTableColumn prop="os" label="操作系统" show-overflow-tooltip align="center" />
      <ElTableColumn prop="ip" label="IP地址" show-overflow-tooltip align="center" />
    </ElTable>
  </BaseContainer>
</template>

<style scoped lang="scss"></style>
