<script setup lang="ts">
import { ElContainer, ElDivider } from 'element-plus';
import { MenuCollapse } from '../menu-collapse';
import { Breadcrumb } from '../breadcrumb';
import { cn } from '@/utils';
import { BasicToolbar } from '../basic-toolbar';

defineOptions({
  name: 'BasicContainer',
});

interface BasicContainerProps {
  containerClass?: ClsxClassValues;
}

const { pageTransitionName } = useThemeSettings();
const { getCurrentLoadViewStatus } = useLoadView();
const { breadcrumbStyleType } = useShareSettings();
const { isTopLayout } = useLayoutSettings();

withDefaults(defineProps<BasicContainerProps>(), {
  containerClass: '',
});
</script>

<template>
  <ElContainer :class="cn('!flex-col relative p-2 pl-1', containerClass)">
    <div class="flex-1 flex flex-col rounded-lg border border-el-border bg-el-bg overflow-y-auto">
      <div
        v-if="!isTopLayout"
        class="w-full flex items-center justify-between px-3 py-1 border-b border-el-border-light"
      >
        <div class="flex items-center">
          <MenuCollapse />
          <ElDivider direction="vertical" />
          <Breadcrumb :style-type="breadcrumbStyleType" />
        </div>
        <BasicToolbar />
      </div>
      <div class="flex-1 p-3 overflow-y-auto">
        <RouterView v-slot="{ Component, route }">
          <Transition :name="pageTransitionName" mode="out-in" appear>
            <component :is="Component" v-if="getCurrentLoadViewStatus" :key="route.path" />
          </Transition>
        </RouterView>
      </div>
    </div>
  </ElContainer>
</template>

<style scoped lang="scss"></style>
