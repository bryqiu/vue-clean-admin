<script setup lang="ts">
defineOptions({
  name: 'ReloadView',
});

const { reloadViewHandle } = useLoadView();
</script>

<template>
  <ActionButton
    icon="mingcute:refresh-1-line"
    :tip-props="{ content: '重新加载当前页面' }"
    iconify-class="icon-rotating"
    @click="reloadViewHandle"
  />
</template>

<style scoped lang="scss"></style>
