<script setup lang="ts">
import { ToggleBox } from '../components/settings-box';
import { whetherOptions } from './options';
import { SegmentContainer } from '../components';

defineOptions({
  name: 'ModuleLayout',
});
const { isMenuCollapse, isMenuAccordion } = useLayoutSettings();
const { toggleMenuCollapse, toggleMenuAccordion } = useSettingsStore();
</script>

<template>
  <div>
    <SegmentContainer title="Menu 菜单">
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
    </SegmentContainer>
  </div>
</template>

<style scoped lang="scss"></style>
