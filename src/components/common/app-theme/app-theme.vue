<script setup lang="ts">
import { computed } from 'vue';
import { themeModeOptions } from '@/dict';
import { ThemeModeEnum } from '@/enums';
import { ElPopover } from 'element-plus';

defineOptions({
  name: 'AppTheme',
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
    popper-class="app-theme-popover"
    :width="120"
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
          class="flex items-center rounded-lg px-2 py-1.5 text-el-text-primary cursor-pointer hover:bg-el-fill"
          :class="{ 'bg-el-fill': item.value === currentThemeMode }"
          @click="handleChangeThemeMode(item.value)"
        >
          <div class="flex items-center gap-x-2">
            <IconifyIcon :name="item.icon" class="text-base" />
            <span class="text-sm">{{ item.enLabel }}</span>
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
