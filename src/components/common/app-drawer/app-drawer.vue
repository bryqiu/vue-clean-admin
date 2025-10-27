<script setup lang="ts">
import { ElDrawer } from 'element-plus';
import type { AppDrawerProps } from './typing';
import { cn } from '@/utils';
import { computed, ref, useAttrs } from 'vue';
import { omit } from 'lodash-es';
import type { DrawerProps } from 'element-plus';

defineOptions({
  name: 'AppDrawer',
});

withDefaults(defineProps<AppDrawerProps>(), {
  title: '标题',
  hideFooter: false,
  showCancelBtn: true,
  showConfirmBtn: true,
  showCloseIcon: true,
  cancelBtnText: '取消',
  confirmBtnText: '确定',
});

const drawerVisible = defineModel<boolean>({
  default: false,
});

const drawerInstance = ref<Nullable<InstanceType<typeof ElDrawer>>>(null);

const getDrawerAttrs = computed(() => {
  const attrs = useAttrs();

  // 要省略的属性
  const elDrawerAttrs = omit(attrs, ['show-color', 'title', 'show-close']);

  const defaultAttrs: Partial<DrawerProps> = {
    showClose: false,
    direction: 'rtl',
  };

  return { ...defaultAttrs, ...elDrawerAttrs };
});

const getDrawerRoundStyle = computed(() => {
  const direction = getDrawerAttrs.value.direction;
  switch (direction) {
    case 'ltr':
      return 'rounded-r-lg';
    case 'rtl':
      return 'rounded-l-lg';
    case 'ttb':
      return 'rounded-b-lg';
    case 'btt':
      return 'rounded-t-lg';
    default:
      return '';
  }
});
</script>

<template>
  <ElDrawer
    ref="drawerInstance"
    v-model="drawerVisible"
    v-bind="getDrawerAttrs"
    :class="cn('app-drawer', getDrawerRoundStyle)"
  >
    <template #header>
      <slot v-if="$slots.header" name="header" />
      <div v-else>
        <span class="text-base font-medium">{{ title }}</span>
      </div>
      <div v-if="showCloseIcon" class="absolute right-5 top-2">
        <ActionButton
          icon="mingcute:close-line"
          iconify-class="text-el-text-placeholder"
          size="small"
        />
      </div>
    </template>

    <slot />

    <template v-if="!hideFooter" #footer>
      <slot v-if="$slots.footer" name="footer" />

      <div v-else :class="cn('dialog-footer flex justify-end items-center')">
        <ElButton v-if="showCancelBtn">
          {{ cancelBtnText }}
        </ElButton>
        <ElButton v-if="showConfirmBtn" type="primary">
          {{ confirmBtnText }}
        </ElButton>
      </div>
    </template>
  </ElDrawer>
</template>

<style lang="scss">
@use './style.scss' as *;
</style>
