<script setup lang="ts">
import { ElDrawer, ElScrollbar, ElTabPane, ElTabs } from 'element-plus';
import { computed, ref } from 'vue';
import type { SettingsDrawerEmits, SettingsDrawerProps, TabOptions } from './typing';
import { ModuleLayout, ModuleShare, ModuleTheme } from './modules';

defineOptions({
  name: 'SettingsDrawer',
});

const props = withDefaults(defineProps<SettingsDrawerProps>(), {
  modelValue: false,
});

const emits = defineEmits<SettingsDrawerEmits>();

const modeValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emits('update:modelValue', value);
  },
});

/** 关闭抽屉 */
const closeSettingsDrawer = () => {
  modeValue.value = !modeValue.value;
};

const tabsOptions: TabOptions[] = [
  {
    label: '布局',
    value: '1',
    component: ModuleLayout,
  },
  {
    label: '主题',
    value: '2',
    component: ModuleTheme,
  },
  {
    label: '共享',
    value: '3',
    component: ModuleShare,
  },
];

const tabActive = ref(tabsOptions[0].value);
</script>

<template>
  <ElDrawer v-model="modeValue" size="500" class="settings-drawer" @closed="closeSettingsDrawer">
    <template #header>
      <div class="flex-b-c">
        <span class="font-medium text-base space-x-1"
          ><IconifyIcon name="ri:settings-line" /><span>用户个性化设置</span></span
        >
      </div>
    </template>
    <ElTabs v-model="tabActive" type="border-card" tab-position="left" class="setting-tabs">
      <template #default>
        <ElScrollbar :view-style="{ padding: '12px' }">
          <ElTabPane
            v-for="(tab, index) in tabsOptions"
            :key="index"
            :label="tab.label"
            :name="tab.value"
          >
            <component :is="tab.component" />
          </ElTabPane>
        </ElScrollbar>
      </template>
    </ElTabs>
  </ElDrawer>
</template>

<style lang="scss">
@use './beautiful.scss';
</style>
