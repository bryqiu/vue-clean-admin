<script setup lang="ts">
import { computed } from 'vue';
defineOptions({
  name: 'MenuCollapse',
});

const { isMenuCollapse } = useLayoutSettings();

const getMenuCollapseTipText = computed(() => {
  return `单击${isMenuCollapse.value ? '展开' : '折叠'}侧边栏`;
});
</script>

<template>
  <ActionButton
    icon="ri:side-bar-line"
    :tip-props="{ placement: 'bottom', content: getMenuCollapseTipText }"
    @click="isMenuCollapse = !isMenuCollapse"
  />
</template>

<style scoped lang="scss"></style>
