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
  <div
    :class="
      cn(
        'size-[22px] rounded-full shadow flex items-center justify-center cursor-pointer duration-300 bg-el-bg dark:bg-el-fill hover:bg-el-fill-light',
        menuCollapseClass,
      )
    "
    @click="isMenuCollapse = !isMenuCollapse"
  >
    <IconifyIcon :name="getMenuCollapseIcon" class="text-el-text-secondary" />
  </div>
</template>

<style scoped lang="scss"></style>
