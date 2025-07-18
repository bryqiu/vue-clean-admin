<script setup lang="ts">
import { WidgetBox, WidgetCell, WidgetCellGroup } from '../widgets';
import { breadcrumbStyleOptions, showOptions } from '@/dict';
import { ElOption, ElSegmented, ElSelect, ElSwitch } from 'element-plus';

defineOptions({
  name: 'ModuleShare',
});

const { showBreadcrumb, showBreadcrumbIcon, breadcrumbStyleType } = useShareSettings();
</script>

<template>
  <div>
    <WidgetCellGroup title="面包屑">
      <WidgetCell title="是否显示面包屑" desc="控制头部面包屑显隐，默认为显示">
        <ElSwitch v-model="showBreadcrumb" />
      </WidgetCell>
      <WidgetCell title="是否显示面包屑图标" desc="控制面包屑图标显隐，默认为显示">
        <ElSwitch v-model="showBreadcrumbIcon" />
      </WidgetCell>
      <WidgetCell title="面包屑样式" desc="展示风格，满足不同使用偏好">
        <ElSelect v-model="breadcrumbStyleType">
          <ElOption
            v-for="item in breadcrumbStyleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </ElSelect>
      </WidgetCell>
    </WidgetCellGroup>
  </div>
</template>

<style scoped lang="scss"></style>
