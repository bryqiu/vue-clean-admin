import type { LocalIconProps } from '.';
import { isEmpty, isString } from '@/utils';

export const getSizeStyle = (size: LocalIconProps['size'], defaultSize = 16) => {
  if (isEmpty(size)) return `${defaultSize}px`;
  return isString(size) ? size : `${size}px`;
};

export const getRotateStyle = (rotate: LocalIconProps['rotate']) => {
  if (!rotate) return '';
  return `transform: rotate(${rotate}deg);`;
};

export const getFlipStyle = (flip: LocalIconProps['flip']) => {
  if (!flip) return '';

  const flipMap = {
    horizontal: 'scale(-1, 1)',
    vertical: 'scale(1, -1)',
    both: 'scale(-1, -1)',
  };

  return `transform: ${flipMap[flip]};`;
};
