import { h } from 'vue';
import { AppIcon } from '@/components/common/app-icon';

interface IconConfig {
  icon: string;
  [key: string]: any;
}

export const useIcon = () => {
  /**
   * 创建图标 VNode
   * @param config - 图标配置对象
   * @returns 图标 VNode
   */
  const generateIconNode = (config: IconConfig) => {
    const { icon, ...attrsProps } = config;
    return h(AppIcon, { icon, ...attrsProps });
  };
  return { generateIconNode };
};
