import { createGlobalState } from '@vueuse/core';
import { computed, shallowRef } from 'vue';
import { settingOptions } from '@/dict';
import { SettingValueEnum } from '@/enums';

type SettingOptionValue = GetObjectValues<typeof SettingValueEnum>;

export const useSettingState = createGlobalState(() => {
  /** 当前激活设置项值 */
  const activeSettingValue = shallowRef<SettingOptionValue>(SettingValueEnum.ACCOUNT);

  /** 获取设置选项 */
  const getSettingOptions = computed(() => {
    return settingOptions;
  });

  /** 获取当前激活设置项 */
  const getActiveSettingValue = computed(() => {
    return activeSettingValue.value;
  });

  /** 获取激活项的设置信息 */
  const getActiveSettingOption = computed(() => {
    return getSettingOptions.value.find((item) => item.value === activeSettingValue.value);
  });

  /** 通过值获取设置项信息 */
  const getActiveSettingOptionByValue = (value: SettingOptionValue) => {
    return getSettingOptions.value.find((item) => item.value === value);
  };

  /** 是否选中了激活项值 */
  const isActiveSettingValue = (value: SettingOptionValue) => {
    return getActiveSettingValue.value === value;
  };

  /** 设置激活项值 */
  const setActiveSettingValue = (value: SettingOptionValue) => {
    activeSettingValue.value = value;
  };

  /** 重置激活项值，默认为账号设置 */
  const resetActiveSettingValue = () => {
    activeSettingValue.value = SettingValueEnum.ACCOUNT;
  };

  return {
    getSettingOptions,
    getActiveSettingValue,
    getActiveSettingOption,
    isActiveSettingValue,
    setActiveSettingValue,
    resetActiveSettingValue,
    getActiveSettingOptionByValue,
  };
});
