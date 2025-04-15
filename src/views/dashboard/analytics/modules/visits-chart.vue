<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { BaseContainer } from '../components';
import { visitsOption } from '../data';

defineOptions({
  name: 'VisitsChart',
});

const visitsInstance = ref<NullType<HTMLDivElement>>(null);
const { renderChart } = useEcharts(visitsInstance);

onMounted(() => {
  renderChart(visitsOption);
});
</script>

<template>
  <BaseContainer title="用户日访问量分析">
    <div ref="visitsInstance" class="w-full h-72 xl:h-96" />
  </BaseContainer>
</template>

<style scoped lang="scss"></style>
