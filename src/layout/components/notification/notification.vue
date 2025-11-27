<script setup lang="ts">
defineOptions({
  name: 'Notice',
});

const { openNotificationDrawer } = useNotificationState();
</script>

<template>
  <ActionButton
    icon="mingcute:notification-line"
    :iconify-icon-props="{ rotate: 34, flip: 'vertical' }"
    @click="openNotificationDrawer"
  />
</template>

<style scoped lang="scss"></style>
