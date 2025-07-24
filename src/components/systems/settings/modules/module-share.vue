<script setup lang="ts">
import { SettingCell, SettingCellGroup } from '../components';
import { breadcrumbStyleOptions } from '@/dict';
import { ElOption, ElSelect, ElSwitch } from 'element-plus';

defineOptions({
  name: 'ModuleShare',
});

const { showBreadcrumb, showBreadcrumbIcon, breadcrumbStyleType } = useShareSettings();
</script>

<template>
  <div>
    <SettingCellGroup title="面包屑">
      <SettingCell title="是否显示面包屑" desc="控制头部面包屑显隐，默认为显示">
        <ElSwitch v-model="showBreadcrumb" />
      </SettingCell>
      <SettingCell title="是否显示面包屑图标" desc="控制面包屑图标显隐，默认为显示">
        <ElSwitch v-model="showBreadcrumbIcon" />
      </SettingCell>
      <SettingCell title="面包屑样式" desc="展示风格，满足不同使用偏好">
        <ElSelect v-model="breadcrumbStyleType">
          <ElOption
            v-for="item in breadcrumbStyleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </ElSelect>
      </SettingCell>
    </SettingCellGroup>
  </div>
</template>

<style scoped lang="scss"></style>
