<script setup lang="ts">
import { AppDialog } from '@/components/common/app-dialog';
import { computed, ref } from 'vue';
import { PageTransitionEnum } from '@/enums';
import { About, Preferences, Shortcut } from './modules';
import { cn } from '@/utils';

defineOptions({
  name: 'Settings',
});

const { getDialogVisible, closeSettingDialog } = useSettingState();

type settingModuleKey = 'preference' | 'shortcut' | 'about';

const settingModules = [
  {
    key: 'preference',
    label: '个人偏好',
    icon: 'ri:settings-3-line',
    component: Preferences,
  },
  {
    key: 'shortcut',
    label: '快捷方式',
    icon: 'ri:keyboard-box-line',
    component: Shortcut,
  },
  {
    key: 'about',
    label: '关于系统',
    icon: 'ri:copyright-line',
    component: About,
  },
] as const;

const activeSettingKey = ref<settingModuleKey>('preference');

const activeSettingOption = computed(() => {
  return settingModules.find((item) => item.key === activeSettingKey.value) ?? settingModules[0];
});

const setActiveSettingKey = (key: settingModuleKey) => {
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
            v-for="item in settingModules"
            :key="item.key"
            :class="
              cn(
                'w-full h-item px-4 flex items-center rounded-lg gap-x-2 text-el-text-primary cursor-pointer hover:bg-el-fill',
                {
                  'bg-el-fill': item.key === activeSettingKey,
                },
              )
            "
            @click="setActiveSettingKey(item.key)"
          >
            <IconifyIcon :name="item.icon" class="text-base" />
            <span class="text-sm">{{ item.label }}</span>
          </div>
        </aside>

        <section class="col-span-8 min-h-0">
          <ElScrollbar class="h-full" view-class="max-w-3xl xl:max-w-4xl min-h-full">
            <Transition :name="PageTransitionEnum.FADE_RIGHT" mode="out-in" appear>
              <div :key="activeSettingOption.key" class="min-h-full">
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
