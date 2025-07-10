<script setup lang="ts">
import { computed } from 'vue';
import { themeModeOptions } from '@/dict';
import { ThemeModeEnum } from '@/enums';
import { ElPopover } from 'element-plus';

defineOptions({
  name: 'AppThemeDropdown',
});

const { currentThemeMode } = useThemeSettings();

const getCurrentThemeModeOption = computed(() => {
  return (
    themeModeOptions.find((item) => item.value === currentThemeMode.value) || themeModeOptions[0]
  );
});

/**
 * 改变主题模式
 * @param value 选中的主题模式值：ThemeModeEnum
 */
const handleChangeThemeMode = (value: ThemeModeEnum) => {
  currentThemeMode.value = value;
};
</script>

<template>
  <ElPopover
    trigger="click"
    :show-arrow="false"
    :popper-style="{ borderRadius: 'var(--app-round)' }"
    placement="bottom-end"
  >
    <template #reference>
      <div>
        <ActionButton :icon="getCurrentThemeModeOption.icon" />
      </div>
    </template>
    <template #default>
      <div class="flex flex-col gap-y-1">
        <div
          v-for="item in themeModeOptions"
          :key="item.value"
          class="flex justify-between items-center rounded-lg px-2 py-1.5 cursor-pointer hover:bg-el-fill-light"
          @click="handleChangeThemeMode(item.value)"
        >
          <div class="flex items-center gap-x-2">
            <IconifyIcon :name="item.icon" class="text-base" />
            <span class="text-sm font-medium">{{ item.label }}</span>
          </div>
          <IconifyIcon
            v-if="item.value === currentThemeMode"
            name="ri:focus-3-line"
            class="text-sm text-el-text-placeholder"
          />
        </div>
      </div>
    </template>
  </ElPopover>
</template>

<style scoped lang="scss"></style>
