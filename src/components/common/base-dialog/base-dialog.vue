<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue';
import { type DialogProps, ElDialog } from 'element-plus';
import { BaseDialogEmits, BaseDialogProps } from './typing';
import { DialogInstance } from 'element-plus';
import { omit } from 'lodash-es';
import type { ButtonProps } from 'element-plus';
import { twMerge } from 'tailwind-merge';

defineOptions({
  name: 'BaseDialog',
});

const props = withDefaults(defineProps<BaseDialogProps>(), {
  title: '标题',
  showFooter: true,
  showCancelBtn: true,
  showConfirmBtn: true,
  showCloseIcon: true,
  cancelBtnText: '取消',
  confirmBtnText: '确定',
});

const emits = defineEmits<BaseDialogEmits>();

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

const dialogInstance = ref<NullType<DialogInstance>>();

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
  const ignoreProps: Array<keyof DialogProps> = ['showClose', 'title'];

  const elDialogAttrs = omit(attrs, ignoreProps);

  const defaultAttrs: Partial<DialogProps> = {
    showClose: false,
  };

  return Object.assign(elDialogAttrs, defaultAttrs);
});

/**
 * 取消按钮属性
 */
const cancelBtnAttrs = computed(() => {
  // 默认属性
  const defaultProps: Partial<ButtonProps> = {
    plain: true,
  };
  return Object.assign(defaultProps, props.cancelBtnProps);
});

/**
 * 确认按钮属性
 */
const confirmBtnAttrs = computed(() => {
  // 默认属性
  const defaultProps: Partial<ButtonProps> = {
    type: 'primary',
  };
  return Object.assign(defaultProps, props.confirmBtnProps);
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
    :class="twMerge('base-dialog', dialogClass)"
    v-bind="dialogAttrs"
  >
    <div v-if="showCloseIcon" class="absolute right-2 top-3">
      <ActionButton icon="mingcute:close-fill" @click="dialogVisible = false" />
    </div>

    <!-- 头部插槽 -->
    <template v-if="$slots.header" #header>
      <slot name="header" />
    </template>
    <template v-else #header>
      <div :class="twMerge('pr-4', headerClass)">
        <span class="text-lg font-medium">{{ title }}</span>
      </div>
    </template>

    <!-- 内容插槽 -->
    <slot />

    <!-- 底部插槽 -->
    <template v-if="showFooter" #footer>
      <div v-if="$slots.footer" :class="twMerge('dialog-footer', footerClass)">
        <slot name="footer" />
      </div>
      <div
        v-else-if="isActionBtns"
        :class="twMerge('dialog-footer flex justify-end items-center', footerClass)"
      >
        <template v-for="(btn, index) in actionBtns" :key="index">
          <ElButton v-bind="omit(btn, 'btnText')" @click="btn.onClick">
            {{ btn.btnText }}
          </ElButton>
        </template>
      </div>

      <div v-else :class="twMerge('dialog-footer flex justify-end items-center', footerClass)">
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
