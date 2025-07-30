<script setup lang="ts">
import { h, reactive, ref } from 'vue';
import { ElCheckbox, ElDivider, ElForm, ElFormItem, ElInput } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
import { IconifyIcon } from '@/components/common/app-icon';
import { AuthContainer, AuthMode, type AuthModeProps, AuthPolicy } from '../components';
import { AUTH_INFO_MAP } from '../config';
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

const accountIcon = h(IconifyIcon, { name: 'ri:shield-user-fill' });
const passwordIcon = h(IconifyIcon, { name: 'ri:lock-fill' });

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

const authModeList = ref<AuthModeProps['authModeList']>([
  {
    label: '短信登录',
    value: ROUTE_NAMES.SMS_LOGIN,
    icon: 'ri:chat-smile-ai-line',
  },
  {
    label: '扫码登录',
    value: ROUTE_NAMES.QR_LOGIN,
    icon: 'ri:qr-code-line',
  },
]);

const isRemember = ref(false);

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
      hide-required-asterisk
    >
      <ElFormItem prop="userName" label="账号">
        <ElInput
          v-model="formData.userName"
          placeholder="请输入账号"
          clearable
          class="h-9"
          :prefix-icon="accountIcon"
        />
      </ElFormItem>
      <ElFormItem prop="password" label="密码">
        <ElInput
          v-model="formData.password"
          placeholder="请输入密码"
          clearable
          class="h-9"
          show-password
          :prefix-icon="passwordIcon"
        />
      </ElFormItem>
    </ElForm>

    <div class="flex items-center justify-between text-sm">
      <div class="flex items-center gap-x-1">
        <ElCheckbox v-model="isRemember" class="!h-4" />
        <span class="text-el-text-secondary">记住我</span>
      </div>
      <span class="text-el-primary cursor-pointer" @click="goToForgetPassword">忘记密码？</span>
    </div>

    <div class="w-full flex flex-col gap-y-2 mt-4">
      <div>
        <ElButton class="w-full h-9" type="primary" @click="handleLogin">
          <span class="tracking-[0.4em]">登录</span>
        </ElButton>
      </div>
    </div>

    <AuthPolicy class="mt-2" />

    <ElDivider border-style="dashed">
      <span class="text-xs text-el-text-secondary">或</span>
    </ElDivider>

    <AuthMode :auth-mode-list="authModeList" />

    <div class="flex items-center justify-center text-xs mt-6">
      <span>还没有账号？</span>
      <span class="text-el-primary cursor-pointer" @click="goToRegister">立即注册</span>
    </div>
  </AuthContainer>
</template>

<style scoped lang="scss"></style>
