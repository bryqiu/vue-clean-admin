<script setup lang="ts">
import { BaseDialog } from '@/components/common/base-dialog';
import { ElScrollbar } from 'element-plus';
import { PageTransitionEnum } from '@/enums';
import { twMerge } from 'tailwind-merge';
import { useSettingState } from './hooks/use-setting-state';

defineOptions({
  name: 'SettingDialog',
});

const { getSettingOptions, getActiveSettingOption, isActiveSettingValue, setActiveSettingValue } =
  useSettingState();

const { getDialogVisible, closeSettingDialog } = useSettingDialog();
</script>

<template>
  <BaseDialog
    :model-value="getDialogVisible"
    :close-on-click-modal="false"
    width="860px"
    top="8vh"
    :show-footer="false"
    @update:model-value="closeSettingDialog"
  >
    <template #header>
      <div class="flex items-center justify-start gap-x-2">
        <IconifyIcon name="ri:settings-6-line" class="text-xl" />
        <span class="text-xl font-bold">设置</span>
      </div>
    </template>
    <div class="size-full flex border-t border-el-border-default">
      <div class="w-28 flex flex-col gap-y-1 border-r border-el-border-default pr-4 pt-4">
        <div
          v-for="item in getSettingOptions"
          :key="item.value"
          :class="
            twMerge(
              'flex items-center gap-x-1 px-2 py-1.5 rounded-md cursor-pointer text-el-text-regular',
              'hover:bg-el-fill-default',
              isActiveSettingValue(item.value) &&
                'bg-el-fill-default font-semibold text-el-text-primary',
            )
          "
          @click="setActiveSettingValue(item.value)"
        >
          <IconifyIcon :name="item.icon" class="text-base flex-shrink-0" />
          <span class="line-clamp-1">{{ item.label }}</span>
        </div>
      </div>
      <ElScrollbar height="600px" class="flex-1" :view-style="{ height: '100%' }">
        <Transition :name="PageTransitionEnum.FADE_RIGHT" mode="out-in" appear>
          <component :is="getActiveSettingOption?.component" class="flex-1 p-4" />
        </Transition>
      </ElScrollbar>
    </div>
  </BaseDialog>
</template>

<style scoped lang="scss"></style>
