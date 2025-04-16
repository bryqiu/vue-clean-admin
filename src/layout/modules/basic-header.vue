<script setup lang="ts">
import { ElDivider, ElHeader } from 'element-plus';
import { FullScreen } from '../components/full-screen';
import { UserMenu } from '../components/user-menu';
import { Notice } from '../components/notice';
import { SettingsAction } from '../components/settings';
import { Breadcrumb } from '../components/breadcrumb';
import type { RouteLocationMatched } from 'vue-router';

const { showBreadcrumb, showBreadcrumbIcon, breadcrumbStyleType } = useShareSettings();
</script>

<template>
  <ElHeader>
    <div class="size-full flex justify-between items-center">
      <!-- 头部-左侧 -->
      <div>
        <Breadcrumb
          v-if="showBreadcrumb"
          :is-show-icon="showBreadcrumbIcon"
          :style-type="breadcrumbStyleType"
        />
      </div>
      <!--头部-右侧-->
      <div class="flex-c-c h-full">
        <div class="flex items-center space-x-3">
          <Notice />
          <FullScreen />
          <SettingsAction />
        </div>
        <ElDivider direction="vertical" class="header-divider" />
        <UserMenu />
      </div>
    </div>
  </ElHeader>
</template>

<style scoped lang="scss">
.el-header {
  --el-header-padding: 0 16px;
  --el-header-height: 56px;
}

.header-divider {
  margin: 0 1rem;
  border-left: 1px var(--el-border-color-darker) var(--el-border-style);
}
</style>
