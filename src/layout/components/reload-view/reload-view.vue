<script setup lang="ts">
import ActionButton from '@/components/common/action-button/action-button.vue';

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
