<script setup lang="ts">
import { h, reactive, ref } from 'vue';
import { ElCheckbox, ElDivider, ElForm, ElFormItem, ElInput } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
import { AppIcon } from '@/components/common/app-icon';
import { AuthMethod, type AuthMethodProps, PolicyAgreement } from '../modules';
import { PageHeader } from '../components';
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

const accountIcon = h(AppIcon, { icon: 'ri:shield-user-fill' });
const passwordIcon = h(AppIcon, { icon: 'ri:lock-fill' });

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

const authMethodList = ref<AuthMethodProps['authMethodList']>([
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
  <div class="flex flex-col">
    <!--标题-->
    <PageHeader v-bind="AUTH_INFO_MAP.ACCOUNT" />

    <div class="mt-8">
      <ElForm
        ref="formInstance"
        :model="formData"
        :rules="rules"
        label-width="auto"
        label-position="top"
        hide-required-asterisk
      >
        <ElFormItem prop="userName">
          <ElInput
            v-model="formData.userName"
            size="large"
            placeholder="请输入账号"
            clearable
            :prefix-icon="accountIcon"
          />
        </ElFormItem>
        <ElFormItem prop="password">
          <ElInput
            v-model="formData.password"
            size="large"
            placeholder="请输入密码"
            clearable
            show-password
            :prefix-icon="passwordIcon"
          />
        </ElFormItem>
      </ElForm>

      <div class="flex items-center justify-between text-sm">
        <div class="flex items-center gap-x-1">
          <ElCheckbox v-model="isRemember" />
          <span class="text-el-secondary">记住我</span>
        </div>
        <span class="text-primary cursor-pointer" @click="goToForgetPassword">忘记密码？</span>
      </div>

      <div class="w-full flex flex-col gap-y-2 mt-4">
        <div>
          <ElButton class="w-full" type="primary" size="large" @click="handleLogin">
            <span class="tracking-[0.4em]">登录</span>
          </ElButton>
        </div>
      </div>

      <PolicyAgreement class="mt-4" />

      <ElDivider border-style="dashed">
        <span class="text-xs text-el-secondary">或</span>
      </ElDivider>

      <AuthMethod :auth-method-list />

      <div class="flex items-center justify-center text-sm mt-6">
        <span>还没有账号？</span>
        <span class="text-primary cursor-pointer" @click="goToRegister">立即注册</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
