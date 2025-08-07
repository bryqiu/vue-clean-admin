<script setup lang="ts">
import { SettingBox, SettingCell, SettingModeItem } from '../components';
import { ElSwitch } from 'element-plus';
import { layoutModeOptions } from '@/dict';
import { LayoutModeEnum } from '@/enums';

defineOptions({
  name: 'ModuleLayout',
});

const { isMenuCollapse, isMenuAccordion, currentLayoutMode, isSideLayout } = useLayoutSettings();

const setCurrentLayoutMode = (value: GetObjectValues<typeof LayoutModeEnum>) => {
  currentLayoutMode.value = value;
};
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <SettingBox title="布局模式" desc="满足不同场景的布局需求">
      <div class="grid grid-cols-3 gap-2">
        <SettingModeItem
          v-for="item in layoutModeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :mode-icon="item.modeIcon"
          :is-active-item="item.value === currentLayoutMode"
          @click="setCurrentLayoutMode(item.value)"
        />
      </div>
    </SettingBox>

    <SettingCell
      title="是否折叠侧边栏"
      desc="控制侧边栏的折叠与展开状态，优化空间利用与操作便捷性"
      :disabled="!isSideLayout"
    >
      <ElSwitch v-model="isMenuCollapse" />
    </SettingCell>

    <SettingCell
      title="只允许展开一个子菜单"
      desc="侧边栏-菜单-只允许展开一个子菜单"
      :disabled="!isSideLayout"
    >
      <ElSwitch v-model="isMenuAccordion" />
    </SettingCell>
  </div>
</template>

<style scoped lang="scss"></style>
