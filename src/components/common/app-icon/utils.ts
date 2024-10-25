import { isString } from '@/utils';
import { SvgIconProps } from './share-typing';
import { IconFlipEnum } from '@/enums';

export const getSizeStyle = (size: number | string | undefined | null, defaultSize = 16) => {
  if (size === undefined) return `${defaultSize}px`;
  return isString(size) ? size : `${size}px`;
};

export const getRotateStyle = (rotate: SvgIconProps['rotate']) => {
  const rotateValue = isString(rotate) ? rotate : `${rotate}deg`;
  return `transform: rotate(${rotateValue});`;
};

export const getFlipStyle = (flip?: SvgIconProps['flip']) => {
  if (!flip) {
    return '';
  }

  const flipMap: { [key in IconFlipEnum]: string } = {
    [IconFlipEnum.HORIZONTAL]: 'scale(-1, 1)',
    [IconFlipEnum.VERTICAL]: 'scale(1, -1)',
    [IconFlipEnum.BOTH]: 'scale(-1, -1)',
  };

  return `transform: ${flipMap[flip]};`;
};
