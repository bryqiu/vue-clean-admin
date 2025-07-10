<script setup lang="ts">
import { ElDivider, ElHeader } from 'element-plus';
import { AppFullScreen } from '@/components/common/app-full-screen';
import { UserMenuHeader } from '../components/user-menu';
import { Notice } from '../components/notice';
import { Settings } from '../components/settings';
import { Breadcrumb } from '../components/breadcrumb';
import { ToggleCollapse } from '../components/toggle-collapse';
import { ToggleAccordion } from '../components/toggle-accordion';
import { AppThemeMode } from '@/components/common/app-theme-mode';

const { showBreadcrumb, showBreadcrumbIcon, breadcrumbStyleType } = useShareSettings();
const { getCurrentSidebarWidth } = useLayoutSettings();
</script>

<template>
  <div
    class="fixed top-0 z-50 h-14 w-[calc(100%-208px)] bg-el-bg-default duration-300"
    :style="{ width: `calc(100% - ${getCurrentSidebarWidth}px)` }"
  >
    <ElHeader>
      <div class="size-full flex justify-between items-center">
        <!-- 头部-左侧 -->
        <div class="flex items-center gap-x-1.5">
          <ToggleCollapse />
          <ToggleAccordion />
          <ElDivider direction="vertical" />
          <Breadcrumb
            v-if="showBreadcrumb"
            :is-show-icon="showBreadcrumbIcon"
            :style-type="breadcrumbStyleType"
          />
        </div>
        <!--头部-右侧-->
        <div class="flex items-center gap-x-1.5">
          <AppThemeMode :is-show-system-mode="false" :is-show-label="false" class="mr-2" />
          <AppFullScreen />
          <Settings />
          <Notice />
          <ElDivider direction="vertical" />
          <UserMenuHeader />
        </div>
      </div>
    </ElHeader>
  </div>
</template>

<style scoped lang="scss">
.el-header {
  // --el-header-height: 56px;
  --el-header-padding: 0 22px;
}

// .header-divider {
//   margin: 0 1rem;
//   border-left: 1px var(--el-border-color-darker) var(--el-border-style);
// }
</style>
