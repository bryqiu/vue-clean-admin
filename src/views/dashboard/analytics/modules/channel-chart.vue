<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { BaseContainer } from '../components';
import { echarts } from '@/plugins/echarts';

defineOptions({
  name: 'ChannelChart',
});

const channelInstance = ref<NullType<HTMLDivElement>>(null);
const { renderChart } = useEcharts(channelInstance);

/** 创建图表系列配置 */
const createSeriesOption = () => {
  const shareStyleOption = {
    barMaxWidth: '30%',
    stack: 'total',
    type: 'bar',
  };

  const seriesOption = [
    {
      name: '社交媒体',
      ...shareStyleOption,
      itemStyle: {
        color: '#1b78f5',
      },
      data: [80, 120, 160, 200, 240, 280, 240, 200, 160, 120, 80, 120], // 波浪形节奏
    },
    {
      name: '广告',
      ...shareStyleOption,
      itemStyle: {
        color: '#59b7ff',
      },
      data: [120, 160, 200, 240, 280, 320, 280, 240, 200, 160, 120, 160], // 阶梯递增+波浪
    },
    {
      name: '自然流量',
      ...shareStyleOption,
      itemStyle: {
        color: '#bce3ff',
      },
      data: [60, 80, 100, 120, 140, 160, 140, 120, 100, 80, 60, 80], // 平滑波动
    },
  ];

  return seriesOption;
};

/** 获取渠道分析图表配置 */
const getChannelOption = (): echarts.EChartsCoreOption => {
  return {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '5%',
      containLabel: true,
    },
    legend: {
      icon: 'rect',
      right: 'center',
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisLabel: {
        // 坐标轴字体颜色
        color: '#333333',
      },
      axisLine: {
        lineStyle: {
          color: '#e5e5e5',
        },
      },
      axisTick: {
        // y轴刻度线
        show: false,
      },
      splitLine: {
        // 网格
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      boundaryGap: ['0%', '20%'],
      axisLabel: {
        color: '#333333',
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#dadde4',
          type: 'dashed',
        },
      },
    },
    series: createSeriesOption(),
  };
};

onMounted(() => {
  renderChart(getChannelOption());
});
</script>

<template>
  <BaseContainer title="用户访问渠道分析(月份)">
    <!--用户访问渠道数据分析-堆叠柱状图-->
    <div ref="channelInstance" class="size-full h-96" />
  </BaseContainer>
</template>

<style scoped lang="scss"></style>
