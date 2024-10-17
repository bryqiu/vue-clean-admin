import {
  type Ref,
  nextTick,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  ref,
  watch,
} from 'vue';
import { echarts } from '@/plugins/echarts';
import type { EChartsInitOpts } from 'echarts/core';
import { useDebounceFn, useResizeObserver } from '@vueuse/core';
import { ThemeModeEnum } from '@/enums';

interface configOptions {
  EchartsInitOpts?: EChartsInitOpts;
  /**
   * 主题模式
   * @default light
   */
  theme?: ThemeModeEnum;
  /**
   * 是否自动调整大小
   * @default true
   */
  autoResize?: boolean;
  /**
   * 防抖时间
   * @default 150
   */
  resizeDebounceWait?: number;
}

/** 默认配置 */
const defaultConfig: configOptions = {
  theme: ThemeModeEnum.LIGHT,
  autoResize: true,
  resizeDebounceWait: 150,
};

export const useEcharts = (
  el: Ref<NullType<HTMLDivElement>>,
  options: echarts.EChartsCoreOption,
  config: configOptions = defaultConfig,
) => {
  const { EchartsInitOpts, autoResize, resizeDebounceWait } = config;

  /**
   *  图表实例
   */
  let chartInstance: NullType<echarts.ECharts> = null;

  const chartOptions = ref(options);

  /**
   * 初始化图表
   */
  const initChart = () => {
    if (!el.value) return;
    chartInstance = echarts.init(el.value, null, EchartsInitOpts);

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
  }, resizeDebounceWait);

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
  watch(
    () => chartOptions.value,
    (newValue) => {
      updateOptions(newValue);
    },
    {
      deep: true,
    },
  );

  /**
   * 销毁图表实例
   */
  const destroy = () => {
    if (!chartInstance) return;

    chartInstance?.dispose();
    chartInstance = null;
  };

  /**
   * 获取图表实例
   */
  const getInstance = () => chartInstance;

  onMounted(async () => {
    await nextTick();
    initChart();

    autoResize && useResizeObserver(el, resizeChart);
  });

  onActivated(() => {
    initChart();
    resizeChart();
  });

  onDeactivated(() => {
    destroy();
  });

  onBeforeUnmount(() => {
    destroy();
  });

  return { getInstance, updateOptions, destroy };
};
