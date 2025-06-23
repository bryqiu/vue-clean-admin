<script setup lang="ts">
import { SettingsDrawer } from './index';
import { ref } from 'vue';

defineOptions({
  name: 'SettingsAction',
});

const drawerVisible = ref(false);
</script>

<template>
  <div>
    <ActionButton icon="ri:settings-6-line" @click="drawerVisible = true" />
    <SettingsDrawer v-model="drawerVisible" />
  </div>
</template>

<style scoped lang="scss"></style>
