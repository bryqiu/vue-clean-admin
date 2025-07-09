<script setup lang="ts">
import { computed } from 'vue';
defineOptions({
  name: 'ToggleAccordion',
});

const { isMenuAccordion } = useLayoutSettings();

const menuAccordionInfo = computed(() => {
  return isMenuAccordion.value
    ? { icon: 'ri:list-radio', tipText: '单击允许所有子菜单展开' }
    : { icon: 'ri:list-check-3', tipText: '单击只允许展开一个子菜单' };
});
</script>

<template>
  <ActionButton
    :icon="menuAccordionInfo.icon"
    :tip-props="{ placement: 'bottom', content: menuAccordionInfo.tipText }"
    @click="isMenuAccordion = !isMenuAccordion"
  />
</template>

<style scoped lang="scss"></style>
