<script setup lang="ts">
import { computed } from 'vue';
defineOptions({
  name: 'ToggleAccordion',
});

const { isMenuAccordion } = useLayoutSettings();

const getBtnText = computed(() => {
  return isMenuAccordion.value ? '只保持一个子菜单的展开' : '保持所有子菜单的展开';
});
</script>

<template>
  <ActionButton
    icon="mdi:view-sequential-outline"
    :tip-props="{ placement: 'right', content: getBtnText }"
    @click="isMenuAccordion = !isMenuAccordion"
  />
</template>

<style scoped lang="scss"></style>
