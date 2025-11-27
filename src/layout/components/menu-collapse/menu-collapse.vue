<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '@/utils';

defineOptions({
  name: 'MenuCollapse',
});

const { isMenuCollapse } = useLayoutSettings();

const getMenuCollapseIcon = computed(() => {
  return isMenuCollapse.value ? 'ri:arrow-right-s-line' : 'ri:arrow-left-s-line';
});

interface MenuCollapseProps {
  menuCollapseClass?: ClsxClassValues;
}

withDefaults(defineProps<MenuCollapseProps>(), {
  menuCollapseClass: '',
});
</script>

<template>
  <ActionButton icon="ri:layout-left-line" @click="isMenuCollapse = !isMenuCollapse" />
</template>

<style scoped lang="scss"></style>
