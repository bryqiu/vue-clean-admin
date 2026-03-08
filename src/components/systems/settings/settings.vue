<script setup lang="ts">
import { AppDialog } from '@/components/common/app-dialog';
import { computed, ref } from 'vue';
import { PAGE_TRANSITION_ENUM, SETTING_MODULES } from '@/shared';
import { cn } from '@/utils';

defineOptions({
  name: 'Settings',
});

const { getDialogVisible, closeSettingDialog } = useSettingState();

type SettingModuleKey = (typeof SETTING_MODULES)[number]['value'];

const activeSettingKey = ref<SettingModuleKey>('preference');

const activeSettingOption = computed(() => {
  return (
    SETTING_MODULES.find((item) => item.value === activeSettingKey.value) ?? SETTING_MODULES[0]
  );
});

const setActiveSettingKey = (key: SettingModuleKey) => {
  activeSettingKey.value = key;
};
</script>

<template>
  <AppDialog
    :model-value="getDialogVisible"
    hide-footer
    fullscreen
    dialog-class="setting-dialog"
    body-class="flex flex-col min-h-0 overflow-hidden"
    @update:model-value="closeSettingDialog"
  >
    <template #header>
      <div class="flex items-center justify-between w-full">
        <span class="text-base font-semibold">系统设置</span>
      </div>
    </template>

    <div class="flex flex-1 min-h-0">
      <div class="grid grid-cols-10 gap-x-6 flex-1 min-h-0">
        <aside class="col-span-2 rounded space-y-1 min-h-0">
          <div
            v-for="item in SETTING_MODULES"
            :key="item.value"
            :class="
              cn(
                'w-full h-item px-4 flex items-center rounded-lg gap-x-2 text-el-text-primary cursor-pointer hover:bg-el-fill',
                {
                  'bg-el-fill': item.value === activeSettingKey,
                },
              )
            "
            @click="setActiveSettingKey(item.value)"
          >
            <IconifyIcon :name="item.icon" class="text-base" />
            <span class="text-sm">{{ item.label }}</span>
          </div>
        </aside>

        <section class="col-span-8 min-h-0">
          <ElScrollbar class="h-full" view-class="max-w-3xl xl:max-w-4xl min-h-full">
            <Transition :name="PAGE_TRANSITION_ENUM.FADE_RIGHT" mode="out-in" appear>
              <div :key="activeSettingOption.value" class="min-h-full">
                <component :is="activeSettingOption.component" />
              </div>
            </Transition>
          </ElScrollbar>
        </section>
      </div>
    </div>
  </AppDialog>
</template>

<style lang="scss">
.setting-dialog.app-dialog.el-dialog {
  border-radius: 0;

  .el-dialog__body.app-dialog-body {
    padding: 24px;
  }
}
</style>
