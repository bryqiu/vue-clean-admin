import { ThemeModeEnum } from '@/enums';

interface ModeOption {
  label: string;
  value: ThemeModeEnum;
  icon: string;
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
