<script setup lang="ts">
import { computed } from 'vue';
defineOptions({
  name: 'ToggleAccordion',
});

const { isMenuAccordion } = useLayoutSettings();
</script>

<template>
  <ActionButton
    icon="line-md:chevron-small-double-up"
    :is-active="isMenuAccordion"
    tips-content="是否只保持一个子菜单的展开"
    tips-placement="right"
    @click="isMenuAccordion = !isMenuAccordion"
  />
</template>

<style scoped lang="scss"></style>
