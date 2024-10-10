import { ThemeModeEnum } from '@/enums';

interface ModeOption {
  label: string;
  value: ThemeModeEnum;
  icon: string;
}

export const modeOptions: ModeOption[] = [
  {
    label: 'Light',
    value: ThemeModeEnum.LIGHT,
    icon: 'mingcute:sun-fog-line',
  },
  {
    label: 'Dark',
    value: ThemeModeEnum.DARK,
    icon: 'mingcute:moon-fog-line',
  },
];
