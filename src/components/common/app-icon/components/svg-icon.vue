<script setup lang="ts">
import { computed } from 'vue';
import type { SvgIconProps } from '../share-typing';

defineOptions({
  name: 'SvgIcon',
});

const props = withDefaults(defineProps<SvgIconProps>(), {
  prefix: 'icon',
  color: '#334155',
});

const symbolId = computed(() => `#icon-${props.icon}`);
</script>

<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<style scoped lang="scss">
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  overflow: hidden;
  vertical-align: -0.15em;
  outline: none;
  fill: currentcolor;
}
</style>
