<script setup lang="ts">
import { SettingDrawer } from '@/components/systems/settings';
import { ref } from 'vue';

defineOptions({
  name: 'Settings',
});

const settingDrawerRef = ref<InstanceType<typeof SettingDrawer>>();

const openSettingDrawer = () => {
  settingDrawerRef.value?.openSettingDrawer();
};
</script>

<template>
  <div>
    <ActionButton icon="ri:settings-6-line" @click="openSettingDrawer" />
    <SettingDrawer ref="settingDrawerRef" />
  </div>
</template>

<style scoped lang="scss"></style>
