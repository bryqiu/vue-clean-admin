<script setup lang="ts">
import { AppDialog } from '@/components/common/app-dialog';
import { FormDialogProps } from './typing';
import { FormTypeEnum } from '@/enums';
import { computed, ref, useTemplateRef } from 'vue';
import type { FieldValues, PlusColumn, PlusFormInstance } from 'plus-pro-components';
import type { ButtonProps, FormItemProp } from 'element-plus';

defineOptions({
  name: 'FormDialog',
});

type FormType = GetObjectValues<typeof FormTypeEnum>;

const props = withDefaults(defineProps<FormDialogProps>(), {
  dialogProps: () => ({}),
  formProps: () => ({}),
  dialogBtnProps: () => ({}),
});

const emits = defineEmits<{
  onChangeForm: [values: FieldValues, column: PlusColumn];
  onValidateForm: [prop: FormItemProp, isValid: boolean, message: string];
  onOpenDialog: [type?: FormType];
  onBeforeCloseDialog: [];
  onCloseDialog: [];
  onResetForm: [];
  onSubmitForm: [];
}>();

const formInstance = ref<Nullable<PlusFormInstance>>();
const dialogInstance = useTemplateRef<InstanceType<typeof AppDialog>>('dialogInstance');

const dialogVisible = defineModel<boolean>({
  default: false,
});

const formData = defineModel<Record<string, any>>('form', { default: () => ({}) });

const dialogProps = computed(() => {
  const defaultProps: Partial<FormDialogProps['dialogProps']> = {};
  return { ...defaultProps, ...props.dialogProps };
});

const dialogBtnProps = computed(() => {
  const defaultProps: Partial<FormDialogProps['dialogBtnProps']> = {
    showConfirmBtn: true,
    confirmBtnText: '确定',
    showCancelBtn: true,
    cancelBtnText: '取消',
    showResetBtn: true,
    resetBtnText: '重置',
  };
  return { ...defaultProps, ...props.dialogBtnProps };
});

const getConfirmBtnProps = computed(() => {
  const defaultProps: Partial<ButtonProps> = {
    type: 'primary',
  };
  return { ...defaultProps, ...dialogBtnProps.value.confirmBtnProps };
});

const getResetBtnProps = computed(() => {
  const defaultProps: Partial<ButtonProps> = {
    plain: true,
  };
  return { ...defaultProps, ...dialogBtnProps.value.resetBtnProps };
});

const getCancelBtnProps = computed(() => {
  const defaultProps: Partial<ButtonProps> = {
    plain: true,
  };
  return { ...defaultProps, ...dialogBtnProps.value.cancelBtnProps };
});

const formProps = computed(() => {
  const defaultProps: Partial<FormDialogProps['formProps']> = {
    labelWidth: 'auto',
    labelPosition: 'right',
    hasFooter: false,
    collapseTransition: false,
    columns: [],
  };
  return { ...defaultProps, ...props.formProps };
});

const handleSubmit = async () => {
  try {
    await formInstance.value?.formInstance?.validate();
    emits('onSubmitForm');
  } catch {}
};

const handleClose = () => {
  emits('onBeforeCloseDialog');
  dialogVisible.value = false;
  emits('onCloseDialog');
};

const handleFormChange = (values: FieldValues, column: PlusColumn) => {
  formData.value = values;
  emits('onChangeForm', values, column);
};

const handleFormValidate = (prop: FormItemProp, isValid: boolean, message: string) => {
  emits('onValidateForm', prop, isValid, message);
};

const getDialogInstance = () => {
  return dialogInstance.value;
};

const getFormInstance = () => {
  return formInstance.value;
};

const getElementFormInstance = () => {
  return formInstance.value?.formInstance;
};

defineExpose({
  getDialogInstance,
  getFormInstance,
  getElementFormInstance,
});
</script>

<template>
  <AppDialog ref="dialogInstance" v-model="dialogVisible" v-bind="dialogProps">
    <template v-if="$slots['dialog-header']" #header>
      <slot name="dialog-header" />
    </template>

    <PlusForm
      ref="formInstance"
      v-model="formData"
      v-bind="formProps"
      @change="handleFormChange"
      @validate="handleFormValidate"
    >
      <template v-if="$slots['form-footer']" #footer="data">
        <slot name="form-footer" v-bind="data" />
      </template>

      <template v-if="$slots['form-group-header']" #group-header="data">
        <slot name="form-group-header" v-bind="data" />
      </template>

      <template v-for="(_, key) in $slots" :key="key" #[key]="data">
        <slot :name="key" v-bind="data" />
      </template>
    </PlusForm>

    <template #footer>
      <template v-if="$slots['dialog-footer']">
        <slot name="dialog-footer" />
      </template>
      <template v-else>
        <ElButton
          v-if="dialogBtnProps.showCancelBtn"
          v-bind="getCancelBtnProps"
          @click="handleClose"
        >
          {{ dialogBtnProps.cancelBtnText }}
        </ElButton>
        <ElButton
          v-if="dialogBtnProps.showResetBtn"
          v-bind="getResetBtnProps"
          @click="emits('onResetForm')"
        >
          {{ dialogBtnProps.resetBtnText }}
        </ElButton>
        <ElButton
          v-if="dialogBtnProps.showConfirmBtn"
          v-bind="getConfirmBtnProps"
          @click="handleSubmit"
        >
          {{ dialogBtnProps.confirmBtnText }}
        </ElButton>
      </template>
    </template>
  </AppDialog>
</template>

<style scoped lang="scss"></style>
