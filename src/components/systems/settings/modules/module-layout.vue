<script setup lang="ts">
import { WidgetCell } from '../widgets';
import { ElSwitch } from 'element-plus';

defineOptions({
  name: 'ModuleLayout',
});

const { isMenuCollapse, isMenuAccordion } = useLayoutSettings();
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <WidgetCell title="是否折叠侧边栏" desc="控制侧边栏的折叠与展开状态，优化空间利用与操作便捷性">
      <ElSwitch v-model="isMenuCollapse" />
    </WidgetCell>
    <WidgetCell title="只允许展开一个子菜单" desc="侧边栏-菜单-只允许展开一个子菜单">
      <ElSwitch v-model="isMenuAccordion" />
    </WidgetCell>
  </div>
</template>

<style scoped lang="scss"></style>
