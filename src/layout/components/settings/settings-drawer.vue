<script setup lang="ts">
import { ElCard, ElDivider, ElDrawer, ElSegmented, ElTabPane, ElTabs } from 'element-plus';
import { computed, ref } from 'vue';
import type { SettingsDrawerEmits, SettingsDrawerProps, TabOptions } from './typing';
import { tabsOptions } from './data';

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

const tabActive = ref(tabsOptions[0].value);
</script>

<template>
  <ElDrawer v-model="modeValue" size="500" class="settings-drawer" @closed="closeSettingsDrawer">
    <ElTabs v-model="tabActive" type="border-card" tab-position="left" class="settingTabs">
      <ElTabPane
        v-for="(tab, index) in tabsOptions"
        :key="index"
        :label="tab.label"
        :name="tab.value"
      >
        <component :is="tab.component" />
      </ElTabPane>
    </ElTabs>
  </ElDrawer>
</template>

<style lang="scss">
@use './beautiful.scss';
</style>
