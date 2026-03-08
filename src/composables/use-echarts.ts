import { Ref, computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { echarts } from '@/plugins/echarts';
import { useDark, useDebounceFn, useResizeObserver } from '@vueuse/core';
import type { UseResizeObserverReturn } from '@vueuse/core';
import type { Color, EChartsCoreOption, EChartsInitOpts, SetOptionOpts } from 'echarts';
import { downloadFile, isNull } from '@/utils';

interface ConfigProps {
  /**
   * init函数基本配置
   * @see https://echarts.apache.org/zh/api.html#echarts.init
   */
  echartsInitOpts?: EChartsInitOpts;
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
  /**
   * 是否自动调整大小
   * @default true
   */
  autoResize?: boolean;
  /**
   * 防抖时间(ms)
   * @default 300
   */
  resizeDebounceWait?: number;
  /**
   * 最大防抖时间(ms)
   * @default 500
   */
  maxResizeDebounceWait?: number;
  /**
   * 主题模式
   */
  themeMode?: 'dark' | string | null;
}

interface DataURLOptions {
  /**
   * 导出的格式，可选 png, jpg, svg
   * @default png
   */
  type?: 'png' | 'jpeg' | 'svg';
  /**
   * 导出的图片分辨率比例
   * @default 1
   */
  pixelRatio?: number;
  /**
   * 导出的图片背景色
   * @default #fff
   */
  backgroundColor?: Color;
  /**
   * 导出的图片排除的列表
   */
  excludeComponents?: string[];
}

/** 默认配置 */
const DEFAULT_CONFIG: ConfigProps = {
  animation: true,
  animationDuration: 300,
  autoResize: true,
  resizeDebounceWait: 300,
  maxResizeDebounceWait: 500,
};

/** 导出文件默认配置 */
const DEFAULT_EXPORT_OPTIONS: DataURLOptions = {
  type: 'png',
  pixelRatio: 1,
  backgroundColor: '#fff',
  excludeComponents: [],
};

export const useEcharts = (
  dom: Ref<HTMLDivElement | HTMLCanvasElement | null>,
  config?: ConfigProps,
) => {
  const {
    echartsInitOpts,
    animation,
    animationDuration,
    autoResize,
    resizeDebounceWait,
    maxResizeDebounceWait,
    themeMode,
  } = { ...DEFAULT_CONFIG, ...config };

  /** 图表实例 */
  let chartInstance: Nullable<echarts.ECharts> = null;

  /** 图表尺寸变化监听 */
  let resizeObserver: Nullable<UseResizeObserverReturn> = null;

  /** 图表配置项 */
  const chartOptions = ref<Nullable<EChartsCoreOption>>(null);

  const isDark = useDark();

  /** 当前主题 */
  const currentTheme = computed(() => {
    // 如果设置了自定义主题模式，优先使用
    if (themeMode || isNull(themeMode)) {
      return themeMode;
    }

    // 否则根据系统主题自动切换
    return isDark.value ? 'dark' : null;
  });

  /** Loading 状态控制 */
  const toggleLoading = (show: boolean) => {
    if (!chartInstance) return;
    show ? chartInstance.showLoading('default') : chartInstance.hideLoading();
  };

  /** 图表初始化 */
  const initChart = async () => {
    if (!dom.value || echarts.getInstanceByDom(dom.value)) return;
    chartInstance = echarts.init(dom.value, currentTheme.value, echartsInitOpts);
    toggleLoading(true);
  };

  /** 图表销毁 */
  const destroyChart = () => {
    if (autoResize && resizeObserver) {
      resizeObserver.stop();
      resizeObserver = null;
    }

    if (chartInstance) {
      chartInstance.dispose();
      chartInstance = null;
    }
  };

  /**
   * 图表渲染
   * @param options 图表数据集
   * @param opts 图表配置项
   */
  const renderChart = (options: EChartsCoreOption, opts: SetOptionOpts = { notMerge: true }) => {
    if (!chartInstance) return;
    const finalOptions = { ...options, backgroundColor: 'transparent' };
    chartInstance.setOption(finalOptions, opts);
    chartOptions.value = finalOptions;
    toggleLoading(false);
  };

  /** 调整图表尺寸 */
  const resize = () => {
    if (!chartInstance) return;
    chartInstance.resize({
      animation: {
        duration: animation ? animationDuration : 0,
      },
    });
  };

  /** 防抖处理的resize */
  const resizeDebounceHandler = useDebounceFn(resize, resizeDebounceWait, {
    maxWait: maxResizeDebounceWait,
  });

  /** 重置图表 */
  const resetChart = () => {
    if (!chartInstance) return;
    chartInstance.clear();
  };

  /** 下载图表文件 */
  const downloadImage = (fileName: string, options?: DataURLOptions) => {
    if (!chartInstance) return;
    const baseOptions: DataURLOptions = {
      ...DEFAULT_EXPORT_OPTIONS,
      ...options,
    };
    const dataURL = chartInstance.getDataURL(baseOptions);

    const finalFileName = /^[a-z0-9]+$/i.test(fileName.trim())
      ? fileName
      : `${fileName.trim()}.${baseOptions.type}`;

    downloadFile(dataURL, finalFileName);
  };

  // 监听主题变化，自动重新初始化图表
  watch(currentTheme, async () => {
    if (!chartInstance) return;
    destroyChart();
    await initChart();

    if (chartOptions.value) {
      renderChart(chartOptions.value);
    }
  });

  onMounted(() => {
    initChart();
    if (autoResize) {
      resizeObserver = useResizeObserver(dom, resizeDebounceHandler);
    }
  });

  /** 获取图表实例 */
  const getChartInstance = () => chartInstance;

  onUnmounted(() => {
    destroyChart();
  });

  return {
    getChartInstance,
    renderChart,
    resetChart,
    toggleLoading,
    downloadImage,
  };
};
