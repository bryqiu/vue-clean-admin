<script setup lang="ts">
import { useSettingState } from '@/components/systems/settings/hooks/use-setting-state';

defineOptions({
  name: 'Settings',
});

const { openSettingDialog } = useSettingDialog();
const { setActiveSettingValue } = useSettingState();

const openSetting = () => {
  setActiveSettingValue('layout');
  openSettingDialog();
};
</script>

<template>
  <div>
    <ActionButton icon="ri:settings-6-line" @click="openSetting" />
  </div>
</template>

<style scoped lang="scss"></style>
