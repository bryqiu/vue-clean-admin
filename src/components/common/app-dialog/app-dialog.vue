<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue';
import { AppDialogEmits, AppDialogProps } from './typing';
import { omit } from 'lodash-es';
import type { ButtonProps, DialogInstance, DialogProps } from 'element-plus';
import { cn } from '@/utils';

defineOptions({
  name: 'AppDialog',
});

const props = withDefaults(defineProps<AppDialogProps>(), {
  title: '标题',
  hideFooter: false,
  showCancelBtn: true,
  showConfirmBtn: true,
  showCloseIcon: true,
  cancelBtnText: '取消',
  confirmBtnText: '确定',
});

const emits = defineEmits<AppDialogEmits>();

const dialogVisible = defineModel<boolean>({
  default: false,
});

/**
 * 是否存在 ActionBtns
 */
const isActionBtns = computed(() => {
  return props.actionBtns && Array.isArray(props.actionBtns) && props.actionBtns.length;
});

const elDialogInstance = ref<Nullable<DialogInstance>>(null);

/**
 * 获取 el-dialog 实例
 */
const getElDialogInstance = computed(() => {
  return elDialogInstance.value;
});

/**
 * app-dialog 属性
 */
const dialogProps = computed(() => {
  const attrs = useAttrs();

  // 要忽略的属性
  const elDialogProps = omit(attrs, ['show-close', 'title', 'close-icon']);

  const defaultElDialogProps: Partial<DialogProps> = {
    showClose: false,
    draggable: true,
    width: '550px',
  };

  const innateProps: Pick<DialogProps, 'headerClass' | 'bodyClass' | 'footerClass'> = {
    headerClass: cn('app-dialog-header', props.headerClass),
    bodyClass: cn('app-dialog-body', props.bodyClass),
    footerClass: cn('app-dialog-footer', props.footerClass),
  };

  return { ...defaultElDialogProps, ...elDialogProps, ...innateProps };
});

/**
 * 取消按钮属性
 */
const cancelBtnAttrs = computed(() => {
  // 默认属性
  const defaultProps: Partial<ButtonProps> = {
    plain: true,
  };
  return { ...defaultProps, ...props.cancelBtnProps };
});

/**
 * 确认按钮属性
 */
const confirmBtnAttrs = computed(() => {
  // 默认属性
  const defaultProps: Partial<ButtonProps> = {
    type: 'primary',
  };
  return { ...defaultProps, ...props.confirmBtnProps };
});

/**
 * 确认按钮点击事件
 */
const handleConfirm = () => {
  emits('onConfirm');
};

/**
 * 取消按钮点击事件
 */
const handleCancel = () => {
  emits('onCancel');
};

defineExpose({
  getElDialogInstance,
});
</script>

<template>
  <ElDialog
    ref="elDialogInstance"
    v-model="dialogVisible"
    :class="cn('app-dialog', dialogClass)"
    v-bind="dialogProps"
  >
    <!-- 头部插槽 -->
    <template #header>
      <template v-if="$slots.header">
        <slot name="header" />
      </template>
      <template v-else>
        <span :class="cn('app-dialog-title text-base font-medium ', titleClass)">{{ title }}</span>
      </template>
      <div v-if="showCloseIcon" class="absolute right-5 top-2">
        <ActionButton
          icon="mingcute:close-line"
          iconify-class="text-el-text-placeholder"
          size="small"
          @click="dialogVisible = false"
        />
      </div>
    </template>

    <!-- 内容插槽 -->
    <slot />

    <!-- 底部插槽 -->
    <template v-if="!hideFooter" #footer>
      <div v-if="$slots.footer">
        <slot name="footer" />
      </div>
      <div v-else-if="isActionBtns" class="flex justify-end items-center">
        <template v-for="(btn, index) in actionBtns" :key="index">
          <ElButton v-bind="omit(btn, 'btnText')" @click="btn.onClick">
            {{ btn.btnText }}
          </ElButton>
        </template>
      </div>

      <div v-else class="flex justify-end items-center">
        <ElButton v-if="showCancelBtn" v-bind="cancelBtnAttrs" @click="handleCancel">
          {{ cancelBtnText }}
        </ElButton>
        <ElButton v-if="showConfirmBtn" v-bind="confirmBtnAttrs" @click="handleConfirm">
          {{ confirmBtnText }}
        </ElButton>
      </div>
    </template>
  </ElDialog>
</template>

<style lang="scss">
@use './style.scss' as *;
</style>
