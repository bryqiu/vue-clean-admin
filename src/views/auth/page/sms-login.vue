<script setup lang="ts">
import { h, reactive, ref } from 'vue';
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
import { IconifyIcon } from '@/components/common/app-icon';
import { PageHeader } from '../components';
import { AUTH_INFO_MAP } from '../config';
import { ROUTE_NAMES } from '@/router/config';
import { useRouter } from 'vue-router';
import { PolicyAgreement } from '../modules';

defineOptions({
  name: 'SmsLogin',
});

interface FormData {
  phone: string;
  code: string;
}

const { push } = useRouter();

const phoneIcon = h(IconifyIcon, { name: 'ri:smartphone-fill' });
const verifyIcon = h(IconifyIcon, { name: 'ri:shield-keyhole-fill' });

const formInstance = ref<FormInstance>();

const formData = ref<FormData>({
  phone: '',
  code: '',
});

// 验证手机号的正则表达式
const phonePattern = /^1[3-9]\d{9}$/;

/** 表单验证规则 */
const rules = reactive<FormRules>({
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: phonePattern, message: '请输入正确的手机号', trigger: 'blur' },
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { min: 6, max: 6, message: '验证码长度为6位', trigger: 'blur' },
  ],
});

/** 跳转至账号密码登录 */
const goToAccountLogin = () => {
  push({
    name: ROUTE_NAMES.ACCOUNT_LOGIN,
  });
};

/** 登录 */
const handleLogin = async () => {
  if (!formInstance.value) return;
  const valid = await formInstance.value.validate();
  if (!valid) return;
  console.log('登录表单数据：', formData.value);
};
</script>

<template>
  <div>
    <div class="flex flex-col">
      <PageHeader v-bind="AUTH_INFO_MAP.SMS" />
      <ElForm ref="formInstance" :model="formData" :rules="rules" class="mt-8">
        <ElFormItem prop="phone">
          <ElInput
            v-model="formData.phone"
            size="large"
            placeholder="请输入手机号"
            maxlength="11"
            :prefix-icon="phoneIcon"
            clearable
          />
        </ElFormItem>
        <ElFormItem prop="code">
          <ElInput
            v-model="formData.code"
            size="large"
            placeholder="请输入验证码"
            :prefix-icon="verifyIcon"
          >
            <template #suffix>
              <ElButton type="primary" link size="large"> 获取验证码 </ElButton>
            </template>
          </ElInput>
        </ElFormItem>
      </ElForm>

      <PolicyAgreement class="mt-2" />

      <div class="w-full flex flex-col gap-y-2 mt-6">
        <div>
          <ElButton class="w-full" type="primary" size="large" @click="handleLogin">
            <span class="tracking-[0.4em]">登录</span>
          </ElButton>
        </div>
        <div>
          <ElButton plain size="large" class="w-full" @click="goToAccountLogin"> 返回 </ElButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
