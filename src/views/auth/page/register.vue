<script setup lang="ts">
import { ref } from 'vue';
import { PageHeader } from '../components';
import { PolicyAgreement } from '../modules';
import { AUTH_INFO_MAP } from '../config';
import type { FormInstance, FormRules } from 'element-plus';
import { ElForm, ElFormItem, ElInput } from 'element-plus';
import { ROUTE_NAMES } from '@/router/config';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'Register',
});

interface FormData {
  account: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const router = useRouter();

const formData = ref<FormData>({
  account: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const rules = ref<FormRules<FormData>>({
  account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  confirmPassword: [{ required: true, message: '请确认密码', trigger: 'blur' }],
});

const formInstance = ref<FormInstance>();

const handleRegister = async () => {
  if (!formInstance.value) return;
  const valid = await formInstance.value.validate();
  if (!valid) return;
  console.log('注册表单数据：', formData.value);
};

const goToAccount = () => {
  router.push({ name: ROUTE_NAMES.ACCOUNT_LOGIN });
};
</script>

<template>
  <div class="flex flex-col">
    <PageHeader v-bind="AUTH_INFO_MAP.REGISTER" />
    <div class="mt-8">
      <ElForm :model="formData" :rules="rules">
        <ElFormItem prop="account">
          <ElInput v-model="formData.account" placeholder="请输入账号" size="large" />
        </ElFormItem>
        <ElFormItem prop="email">
          <ElInput v-model="formData.email" placeholder="请输入邮箱" size="large" />
        </ElFormItem>
        <ElFormItem prop="password">
          <ElInput v-model="formData.password" placeholder="请输入密码" size="large" />
        </ElFormItem>
        <ElFormItem prop="confirmPassword">
          <ElInput v-model="formData.confirmPassword" placeholder="请确认密码" size="large" />
        </ElFormItem>
      </ElForm>
    </div>

    <div class="mt-4 flex flex-col gap-y-2">
      <div>
        <ElButton class="w-full" type="primary" size="large" @click="handleRegister">
          <span class="tracking-[0.4em]">注册</span>
        </ElButton>
      </div>
      <div>
        <ElButton class="w-full" plain size="large" @click="goToAccount">
          <span>已有账号？返回登录</span>
        </ElButton>
      </div>
    </div>

    <PolicyAgreement class="mt-4" />
  </div>
</template>

<style scoped lang="scss"></style>
