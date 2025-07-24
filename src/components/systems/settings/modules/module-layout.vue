<script setup lang="ts">
import { SettingCell } from '../components';
import { ElSwitch } from 'element-plus';

defineOptions({
  name: 'ModuleLayout',
});

const { isMenuCollapse, isMenuAccordion } = useLayoutSettings();
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <SettingCell title="是否折叠侧边栏" desc="控制侧边栏的折叠与展开状态，优化空间利用与操作便捷性">
      <ElSwitch v-model="isMenuCollapse" />
    </SettingCell>
    <SettingCell title="只允许展开一个子菜单" desc="侧边栏-菜单-只允许展开一个子菜单">
      <ElSwitch v-model="isMenuAccordion" />
    </SettingCell>
  </div>
</template>

<style scoped lang="scss"></style>
