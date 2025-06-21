<script setup lang="ts">
import { BaseContainer } from '../components';
import { onMounted, ref } from 'vue';
import type { EChartsOption } from 'echarts';

defineOptions({
  name: 'MonthOrderChart',
});

const getMonthData = () => {
  return [
    { month: '1月', value: 2834 },
    { month: '2月', value: 2156 },
    { month: '3月', value: 3567 },
    { month: '4月', value: 4289 },
    { month: '5月', value: 3987 },
    { month: '6月', value: 4876 },
    { month: '7月', value: 5234 },
    { month: '8月', value: 6123 },
    { month: '9月', value: 5876 },
    { month: '10月', value: 6543 },
    { month: '11月', value: 7123 },
    { month: '12月', value: 8234 },
  ];
};

const getOptions = (): EChartsOption => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      formatter: '{b}: {c} 笔订单',
    },
    grid: {
      left: 0,
      right: 0,
      top: 30,
      bottom: 0,
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: getMonthData().map((item) => item.month),
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '交易量(笔)',
        splitLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
      },
    ],
    series: [
      {
        name: '月度订单量',
        type: 'bar',
        barWidth: '55%',
        data: getMonthData().map((item) => item.value),
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
        },
      },
    ],
  };
};

const chartInstance = ref<NullType<HTMLDivElement>>(null);

const { renderChart } = useEcharts(chartInstance);

onMounted(() => {
  renderChart(getOptions());
});
</script>

<template>
  <BaseContainer :show-description="false" title="月度订单量" class="h-full">
    <div ref="chartInstance" class="w-full h-60" />
  </BaseContainer>
</template>

<style scoped lang="scss"></style>
