<script setup lang="ts">
import { ToggleBox } from '../components';
import { whetherOptions } from '@/dict';
import { SegmentContainer } from '../components';

defineOptions({
  name: 'ModuleLayout',
});
const { isMenuCollapse, isMenuAccordion } = useLayoutSettings();
</script>

<template>
  <div>
    <SegmentContainer title="Menu 菜单">
      <ToggleBox v-model="isMenuCollapse" text="是否折叠菜单" :options="whetherOptions" />
      <ToggleBox
        v-model="isMenuAccordion"
        text="是否只保持一个子菜单的展开"
        :options="whetherOptions"
      />
    </SegmentContainer>
  </div>
</template>

<style scoped lang="scss"></style>
