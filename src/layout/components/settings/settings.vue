<script setup lang="ts">
defineOptions({
  name: 'Settings',
});

const { openSettingDrawer } = useSettingState();
</script>

<template>
  <div>
    <ActionButton icon="ri:settings-6-line" @click="openSettingDrawer" />
  </div>
</template>

<style scoped lang="scss"></style>
