import { ThemeModeEnum, VisualModeEnum } from '@/enums';

interface ModeOption {
  label: string;
  value: ThemeModeEnum;
  icon: string;
}
interface VisualModeOption {
  label: string;
  value: VisualModeEnum;
  icon?: string;
  style: string;
  class: string;
}

export const themeModeOptions: ModeOption[] = [
  {
    label: '明亮(Light)',
    value: ThemeModeEnum.LIGHT,
    icon: 'mingcute:sun-fog-line',
  },
  {
    label: '暗黑(Dark)',
    value: ThemeModeEnum.DARK,
    icon: 'mingcute:moon-fog-line',
  },
  {
    label: '系统(System)',
    value: ThemeModeEnum.SYSTEM,
    icon: 'mdi:circle-half-full',
  },
];

export const visualModeOptions: VisualModeOption[] = [
  {
    label: '灰色模式',
    value: VisualModeEnum.GRAY,
    style: 'filter: grayscale(1)',
    class: 'gray-mode',
  },
  {
    label: '色弱模式',
    value: VisualModeEnum.WEAK,
    style: 'filter: invert(80%)',
    class: 'weak-mode',
  },
  {
    label: '标准模式',
    value: VisualModeEnum.NORMAL,
    style: '',
    class: '',
  },
];
