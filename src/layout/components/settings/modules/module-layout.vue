<script setup lang="ts">
import { ToggleBox } from '../components/settings-box';
import { whetherOptions } from './options';
import { SectionContainer } from '../components';

defineOptions({
  name: 'ModuleLayout',
});
const { isMenuCollapse, isMenuAccordion } = useLayoutSettings();
const { toggleMenuCollapse, toggleMenuAccordion } = useSettingsStore();
</script>

<template>
  <div>
    <SectionContainer title="Menu 菜单">
      <ToggleBox
        v-model="isMenuCollapse"
        text="是否折叠菜单"
        :options="whetherOptions"
        @segment-change="toggleMenuCollapse"
      />
      <ToggleBox
        v-model="isMenuAccordion"
        text="是否只保持一个子菜单的展开"
        :options="whetherOptions"
        @segment-change="toggleMenuAccordion"
      />
    </SectionContainer>
  </div>
</template>

<style scoped lang="scss"></style>
