<script setup lang="ts">
defineOptions({
  name: 'Notice',
});

const { openNotificationDrawer } = useNotificationState();
</script>

<template>
  <ActionButton icon="mingcute:notification-line" @click="openNotificationDrawer" />
</template>

<style scoped lang="scss"></style>
