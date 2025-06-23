<script setup lang="ts">
import { computed } from 'vue';
defineOptions({
  name: 'ToggleCollapse',
});

const { isMenuCollapse } = useLayoutSettings();

const toggleCollapseInfo = computed(() => {
  return isMenuCollapse.value
    ? { icon: 'mingcute:layout-leftbar-open-line', tipContent: '展开侧边栏' }
    : { icon: 'mingcute:layout-leftbar-close-line', tipContent: '折叠侧边栏' };
});
</script>

<template>
  <ActionButton
    :icon="toggleCollapseInfo.icon"
    :tip-props="{ content: toggleCollapseInfo.tipContent }"
    @click="isMenuCollapse = !isMenuCollapse"
  />
</template>

<style scoped lang="scss"></style>
