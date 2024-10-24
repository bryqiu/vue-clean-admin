import { isString } from '@/utils';
import { SvgIconProps } from './share-typing';
import { IconFlipEnum } from '@/enums';

export const getSizeStyle = (size: SvgIconProps['size'] = 16) => {
  if (isString(size)) {
    return size;
  }
  return `${size}px`;
};

export const getRotateStyle = (rotate: SvgIconProps['rotate']) => {
  if (isString(rotate)) {
    return `transform: rotate(${rotate});`;
  }
  return `transform: rotate(${rotate}deg);`;
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
