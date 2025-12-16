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
  console.log(props.actionBtns, 'props.actionBtns');
  return props.actionBtns && Array.isArray(props.actionBtns) && props.actionBtns.length;
});

const dialogInstance = ref<Nullable<DialogInstance>>();

/**
 * 获取 el-dialog 实例
 */
const getDialogInstance = computed(() => {
  return dialogInstance.value;
});

/**
 * el-dialog 属性
 */
const dialogAttrs = computed(() => {
  const attrs = useAttrs();

  // 要省略的属性
  const elDialogAttrs = omit(attrs, ['show-color', 'title']);

  const defaultAttrs: Partial<DialogProps> = {
    showClose: false,
  };

  return { ...elDialogAttrs, ...defaultAttrs };
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
  emits('handleConfirm');
};

/**
 * 取消按钮点击事件
 */
const handleCancel = () => {
  emits('handleCancel');
};

defineExpose({
  getDialogInstance,
});
</script>

<template>
  <ElDialog
    ref="dialogInstance"
    v-model="dialogVisible"
    :class="cn('app-dialog', dialogClass)"
    v-bind="dialogAttrs"
  >
    <!-- 头部插槽 -->
    <template #header>
      <slot v-if="$slots.header" name="header" />
      <div v-else :class="cn(headerClass)">
        <span class="text-base font-medium">{{ title }}</span>
      </div>
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
      <div v-if="$slots.footer" :class="cn('dialog-footer', footerClass)">
        <slot name="footer" />
      </div>
      <div
        v-else-if="isActionBtns"
        :class="cn('dialog-footer flex justify-end items-center', footerClass)"
      >
        <template v-for="(btn, index) in actionBtns" :key="index">
          <ElButton v-bind="omit(btn, 'btnText')" @click="btn.onClick">
            {{ btn.btnText }}
          </ElButton>
        </template>
      </div>

      <div v-else :class="cn('dialog-footer flex justify-end items-center', footerClass)">
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
