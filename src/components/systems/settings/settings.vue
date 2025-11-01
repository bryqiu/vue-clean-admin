<script setup lang="ts">
import { ElScrollbar } from 'element-plus';
import { AppDialog } from '@/components/common/app-dialog';
import { computed, ref } from 'vue';
import { settingOptions } from '@/dict';
import { SettingModuleEnum } from '@/enums';
import { PageTransitionEnum } from '@/enums';
import { cn } from '@/utils';
import { AppVersion } from '@/components/common/app-version';

defineOptions({
  name: 'Settings',
});

const { getDialogVisible, closeSettingDialog } = useSettingState();

const activeSettingValue = ref<GetObjectValues<typeof SettingModuleEnum>>(SettingModuleEnum.THEME);

const getActiveSettingOption = computed(() => {
  return settingOptions.find((item) => item.value === activeSettingValue.value);
});

const setActiveSettingValue = (value: GetObjectValues<typeof SettingModuleEnum>) => {
  activeSettingValue.value = value;
};
</script>

<template>
  <AppDialog
    :model-value="getDialogVisible"
    width="850px"
    top="6vh"
    hide-footer
    @update:model-value="closeSettingDialog"
  >
    <template #header>
      <span class="text-base font-bold">系统设置</span>
    </template>

    <div class="flex flex-col size-full">
      <div class="flex-1 flex gap-x-4">
        <div class="w-56 rounded-lg py-4 space-y-1">
          <div
            v-for="item in settingOptions"
            :key="item.value"
            :class="
              cn(
                'w-full px-3 py-1.5 flex items-center rounded-lg gap-x-2 text-el-text-primary cursor-pointer hover:bg-el-fill',
                {
                  'bg-el-fill': item.value === activeSettingValue,
                },
              )
            "
            @click="setActiveSettingValue(item.value)"
          >
            <IconifyIcon :name="item.icon" class="text-base" />
            <span class="text-sm">{{ item.label }}</span>
          </div>
        </div>

        <div class="w-full">
          <ElScrollbar height="500px" view-class="p-4 h-full">
            <Transition :name="PageTransitionEnum.FADE_RIGHT" mode="out-in" appear>
              <component :is="getActiveSettingOption?.component" />
            </Transition>
          </ElScrollbar>
        </div>
      </div>
      <div>
        <AppVersion abbreviated />
      </div>
    </div>
  </AppDialog>
</template>

<style lang="scss">
.settings-drawer.el-drawer {
  & > .el-drawer__header {
    padding: 16px;
    margin-bottom: 0;
    color: var(--el-text-color-primary);
    border-bottom: 1px solid var(--el-border-color-light);
  }

  & > .el-drawer__body {
    padding: 12px 16px;
  }
}
</style>
