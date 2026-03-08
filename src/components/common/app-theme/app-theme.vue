<script setup lang="ts">
import { computed } from 'vue';
import { THEME_MODE_OPTION } from '@/shared';
import type { ThemeModeEnumValue } from '@/shared';

defineOptions({
  name: 'AppTheme',
});

const { currentThemeMode } = usePreferences();

const getCurrentThemeModeOption = computed(() => {
  return (
    THEME_MODE_OPTION.find((item) => item.value === currentThemeMode.value) || THEME_MODE_OPTION[0]
  );
});

/**
 * 改变主题模式
 * @param value 选中的主题模式值
 */
const handleChangeThemeMode = (value: ThemeModeEnumValue) => {
  currentThemeMode.value = value;
};
</script>

<template>
  <ElPopover
    trigger="click"
    :show-arrow="false"
    :popper-style="{ borderRadius: 'var(--radius)' }"
    placement="bottom-end"
    popper-class="app-theme-popover"
    :width="120"
    :popper-options="{
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [-5, 2],
          },
        },
      ],
    }"
  >
    <template #reference>
      <div>
        <ActionButton :icon="getCurrentThemeModeOption.icon" />
      </div>
    </template>
    <template #default>
      <div class="flex flex-col gap-y-1">
        <div
          v-for="item in THEME_MODE_OPTION"
          :key="item.value"
          class="flex items-center rounded-lg px-2 py-1.5 text-el-text-primary cursor-pointer hover:bg-el-fill"
          :class="{ 'bg-el-fill': item.value === currentThemeMode }"
          @click="handleChangeThemeMode(item.value)"
        >
          <div class="flex items-center justify-between gap-x-2 w-full">
            <div class="flex items-center gap-x-2">
              <IconifyIcon :name="item.icon" class="text-base" />
              <span class="text-sm">{{ item.enLabel }}</span>
            </div>
            <IconifyIcon
              v-if="item.value === currentThemeMode"
              name="ri:check-line"
              :class="item.value === currentThemeMode && 'text-el-text-placeholder'"
            />
          </div>
        </div>
      </div>
    </template>
  </ElPopover>
</template>

<style lang="scss">
.el-popover.el-popper.app-theme-popover {
  min-width: 120px;
  padding: 4px;
}
</style>
