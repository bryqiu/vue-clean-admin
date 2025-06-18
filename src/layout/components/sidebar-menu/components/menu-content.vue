<script setup lang="ts">
defineOptions({
  name: 'MenuContent',
});
interface ContentProps {
  title: string;
  icon?: string;
}

withDefaults(defineProps<ContentProps>(), {});
</script>

<template>
  <!-- <div class="w-full h-full flex items-center"> -->
  <IconifyIcon name="ri:4k-fill" />
  <span>{{ title }}</span>
  <!-- </div> -->
</template>

<style scoped lang="scss"></style>
