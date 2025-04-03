import type { NProgressOptions } from 'nprogress';

/**
 * 生成 progress 配置
 * @param config - 配置对象
 * @returns 配置对象
 */
export const createProgressConfig = (config: NProgressOptions) => {
  const DEFAULT_CONFIG: Partial<NProgressOptions> = {
    easing: 'ease', // 缓动动画，@see：https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
    speed: 500, // 速度(ms)
    showSpinner: true, // 显示右上角旋转Icon，默认true
    trickleSpeed: 200, // 调整滴流/增量的频率(ms)
    minimum: 0.3, // 更改启动时使用的最小百分比，默认0.08
    parent: 'body', // 父容器，默认body
  };

  return { ...DEFAULT_CONFIG, ...config };
};
