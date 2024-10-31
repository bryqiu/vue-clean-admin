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
   * 防抖时间(ms)
   * @default 150
   */
  resizeDebounceWait?: number;
  /**
   * 是否开启过渡动画
   * @default true
   */
  animation?: boolean;
  /**
   * 过渡动画持续时间(ms)
   * @default 300
   */
  animationDuration?: number;
}

/** 默认配置 */
const defaultConfig: configOptions = {
  theme: ThemeModeEnum.LIGHT,
  autoResize: true,
  resizeDebounceWait: 150,
  animation: true,
  animationDuration: 300,
};

export const useEcharts = (
  el: Ref<NullType<HTMLDivElement>>,
  options: echarts.EChartsCoreOption,
  config: configOptions = defaultConfig,
) => {
  const { EchartsInitOpts, autoResize, resizeDebounceWait, animation, animationDuration } = config;

  /**
   *  图表实例
   */
  let chartInstance: NullType<echarts.ECharts> = null;

  let resizeObserver: ReturnType<typeof useResizeObserver> | null = null;

  const chartOptions = ref(options);

  /**
   * 响应式图表尺寸
   */
  const resizeChart = useDebounceFn(() => {
    if (!chartInstance) return;
    chartInstance.resize({
      animation: {
        duration: animation ? animationDuration : 0,
      },
    });
  }, resizeDebounceWait);

  /**
   * 初始化图表
   */
  const initChart = () => {
    if (!el.value) return;

    // 检查是否已经初始化过
    if (echarts.getInstanceByDom(el.value)) {
      return;
    }

    chartInstance = echarts.init(el.value, null, EchartsInitOpts);

    chartInstance.setOption(chartOptions.value);

    if (autoResize) {
      resizeObserver = useResizeObserver(el, resizeChart);
    }
  };

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
  const destroyChart = () => {
    if (!chartInstance) return;

    resizeObserver?.stop();
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
  });

  onActivated(() => {
    destroyChart();
    initChart();
  });

  onDeactivated(() => {
    destroyChart();
  });

  onBeforeUnmount(() => {
    destroyChart();
  });

  return { getInstance, updateOptions, destroyChart };
};
