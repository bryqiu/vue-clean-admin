<script setup lang="ts">
import { ElDrawer, ElSegmented } from 'element-plus';
import { computed, ref } from 'vue';
import { settingOptions } from '@/dict';
import { SettingModuleEnum } from '@/enums';
import { PageTransitionEnum } from '@/enums';
import { isObject } from 'lodash-es';

defineOptions({
  name: 'SettingDrawer',
});

const drawerVisible = ref(false);

const activeSettingValue = ref(SettingModuleEnum.THEME);

const getActiveSettingOption = computed(() => {
  return settingOptions.find((item) => item.value === activeSettingValue.value);
});

const openSettingDrawer = () => {
  drawerVisible.value = true;
};

defineExpose({
  openSettingDrawer,
});
</script>

<template>
  <ElDrawer v-model="drawerVisible" size="450px" class="settings-drawer">
    <template #header>
      <div class="flex items-center gap-x-2">
        <IconifyIcon name="ri:settings-6-line" class="text-lg" />
        <span class="text-base font-bold">系统设置</span>
      </div>
    </template>
    <ElSegmented v-model="activeSettingValue" :options="settingOptions" class="simple" block>
      <template #default="{ item }">
        <div class="flex items-center justify-center gap-2 text-sm">
          <IconifyIcon :name="isObject(item) && item.icon" />
          <span class="font-semibold">{{ isObject(item) && item.label }}</span>
        </div>
      </template>
    </ElSegmented>
    <Transition :name="PageTransitionEnum.FADE_RIGHT" mode="out-in" appear>
      <component :is="getActiveSettingOption?.component" class="flex-1 mt-4" />
    </Transition>
  </ElDrawer>
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
