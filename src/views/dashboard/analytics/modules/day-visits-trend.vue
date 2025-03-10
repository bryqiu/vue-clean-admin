<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { BaseContainer } from '../components';
import { trendOption } from '../data';

defineOptions({
  name: 'DayVisitsTrend',
});

const trendInstance = ref<NullType<HTMLDivElement>>(null);
const { renderChart } = useEcharts(trendInstance);

onMounted(() => {
  renderChart(trendOption);
});
</script>

<template>
  <BaseContainer title="用户日访问量分析">
    <div ref="trendInstance" class="w-full h-72 xl:h-96" />
  </BaseContainer>
</template>

<style scoped lang="scss"></style>
