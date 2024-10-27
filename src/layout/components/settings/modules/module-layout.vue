<script setup lang="ts">
import { ToggleBox } from '../components';
import { ref } from 'vue';
import { whetherOptions } from './options';
defineOptions({
  name: 'ModuleLayout',
});
const { isMenuCollapse } = useLayoutSettings();
const { toggleMenuCollapse } = useSettingsStore();
</script>

<template>
  <div>
    <ToggleBox
      v-model="isMenuCollapse"
      text="是否折叠菜单"
      :options="whetherOptions"
      @segment-change="toggleMenuCollapse"
    />
  </div>
</template>

<style scoped lang="scss"></style>
