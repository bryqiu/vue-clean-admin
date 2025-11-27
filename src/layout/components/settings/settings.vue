<script setup lang="ts">
defineOptions({
  name: 'Settings',
});

const { openSettingDialog } = useSettingState();
</script>

<template>
  <ActionButton icon="ri:settings-6-line" @click="openSettingDialog" />
</template>

<style scoped lang="scss"></style>
