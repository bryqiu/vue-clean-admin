<script setup lang="ts">
defineOptions({
  name: 'Settings',
});

const { openSettingDialog } = useSettingState();
</script>

<template>
  <div>
    <ActionButton icon="ri:settings-6-line" @click="openSettingDialog" />
  </div>
</template>

<style scoped lang="scss"></style>
