<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ElDivider, ElForm, ElFormItem, ElInput } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
import { AuthContainer, AuthMode, AuthPolicy } from '../components';
import { AUTH_INFO_MAP, AUTH_MODE_LIST } from '../config';
import { ROUTE_NAMES } from '@/router/config';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'AccountLogin',
});

interface FormData {
  userName: string;
  password: string;
}

const { push } = useRouter();

const formInstance = ref<FormInstance>();

const formData = ref<FormData>({
  userName: '',
  password: '',
});

const rules = reactive<FormRules>({
  userName: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});

/** 跳转至注册 */
const goToRegister = () => {
  push({
    name: ROUTE_NAMES.REGISTER,
  });
};

/** 跳转至忘记密码 */
const goToForgetPassword = () => {
  push({
    name: ROUTE_NAMES.FORGOT_PASSWORD,
  });
};

const handleLogin = async () => {
  if (!formInstance.value) return;
  const valid = await formInstance.value.validate();
  if (!valid) return;
  console.log('登录表单数据：', formData.value);
};
</script>

<template>
  <AuthContainer v-bind="AUTH_INFO_MAP.ACCOUNT">
    <ElForm
      ref="formInstance"
      :model="formData"
      :rules="rules"
      label-width="auto"
      label-position="top"
    >
      <ElFormItem prop="userName" label="账号">
        <ElInput v-model="formData.userName" placeholder="请输入账号" clearable class="h-9" />
      </ElFormItem>
      <ElFormItem prop="password" class="password-form-item">
        <template #label>
          <div class="w-full flex items-end justify-between">
            <span>密码</span>
            <span
              class="text-el-text-placeholder text-xs cursor-pointer underline"
              @click="goToForgetPassword"
              >忘记密码?</span
            >
          </div>
        </template>
        <ElInput
          v-model="formData.password"
          placeholder="请输入密码"
          clearable
          class="h-9"
          show-password
        />
      </ElFormItem>
    </ElForm>

    <div class="w-full flex flex-col gap-y-2 mt-4">
      <div>
        <ElButton class="w-full h-9" type="primary" @click="handleLogin">
          <span class="tracking-[0.4em]">登录</span>
        </ElButton>
      </div>
    </div>

    <AuthPolicy class="mt-2" />

    <ElDivider border-style="dashed">
      <span class="text-xs text-el-text-placeholder font-normal">其他登录方式</span>
    </ElDivider>

    <AuthMode :auth-mode-list="AUTH_MODE_LIST" />

    <div class="flex items-center justify-center text-xs mt-6">
      <span class="text-el-text-secondary">还没有账号？</span>
      <span class="text-el-primary cursor-pointer" @click="goToRegister">点击注册</span>
    </div>
  </AuthContainer>
</template>

<style scoped lang="scss">
:deep(.password-form-item label.el-form-item__label) {
  display: flex;
  width: 100%;
  padding: 0;
}
</style>
