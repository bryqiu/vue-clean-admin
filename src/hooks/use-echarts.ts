import { type Ref, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { echarts } from '@/plugins/echarts';
import type { EChartsInitOpts } from 'echarts/core';
import { useDebounceFn, useResizeObserver } from '@vueuse/core';

export const useEcharts = (
  el: Ref<NullType<HTMLDivElement>>,
  options: echarts.EChartsCoreOption,
  ECoptions?: EChartsInitOpts,
) => {
  /** 图表实例*/
  let chartInstance: NullType<echarts.ECharts> = null;
  const chartOptions = ref(options);

  /**
   * 初始化图表
   */
  const initChart = () => {
    if (!el.value) return;
    chartInstance = echarts.init(el.value, null, ECoptions);

    chartInstance.setOption(chartOptions.value);
  };

  /**
   * 响应式图表尺寸
   */
  const resizeChart = useDebounceFn(() => {
    if (!chartInstance) return;
    chartInstance.resize({
      animation: {
        duration: 300,
      },
    });
  }, 150);

  /**
   * 更新图表配置项
   */
  const updateOptions = (options: echarts.EChartsCoreOption) => {
    if (!chartInstance) return;

    chartInstance.setOption(options, { notMerge: true });
    // 更新完配置后，重新渲染一次
    resizeChart();
  };

  // 监听配置项的更改
  // watch(
  //   chartOptions,
  //   async (newValue) => {
  //     console.log(newValue, 'newValue');

  //     updateOptions(newValue);
  //   },
  //   {
  //     deep: true, // 深度监听，一般options多层级
  //   },
  // );

  /**
   * 销毁图表实例
   */
  const destroy = () => {
    chartInstance?.dispose();
    chartInstance = null;
  };

  onMounted(async () => {
    await nextTick();
    initChart();
    useResizeObserver(el, resizeChart);
  });

  onUnmounted(() => {
    destroy();
  });

  return { updateOptions };
};
