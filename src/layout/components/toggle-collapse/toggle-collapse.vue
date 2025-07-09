<script setup lang="ts">
import { computed } from 'vue';
defineOptions({
  name: 'ToggleCollapse',
});

const { isMenuCollapse } = useLayoutSettings();

const getToggleCollapseTipText = computed(() => {
  return `单击${isMenuCollapse.value ? '展开' : '折叠'}侧边栏`;
});
</script>

<template>
  <ActionButton
    icon="ri:layout-left-line"
    :tip-props="{ placement: 'bottom', content: getToggleCollapseTipText }"
    @click="isMenuCollapse = !isMenuCollapse"
  />
</template>

<style scoped lang="scss"></style>
