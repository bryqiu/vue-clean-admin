export interface SettingsDrawerProps {
  modelValue: boolean;
}

export type SettingsDrawerEmits = {
  'update:modelValue': [value: boolean];
};

import type { Component, DefineComponent } from 'vue';

export interface TabOptions extends BaseOptions {
  icon?: string;
  component?: Component | DefineComponent;
}
