<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
import { AuthContainer, AuthPolicy } from '../components';
import { AUTH_INFO_MAP } from '../config';
import { ROUTE_NAMES } from '@/router/config';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'SmsLogin',
});

interface FormData {
  phone: string;
  code: string;
}

const { push } = useRouter();

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
  <AuthContainer v-bind="AUTH_INFO_MAP.SMS">
    <ElForm
      ref="formInstance"
      :model="formData"
      label-width="auto"
      label-position="top"
      :rules="rules"
    >
      <ElFormItem prop="phone" label="手机号">
        <ElInput
          v-model="formData.phone"
          class="h-9"
          placeholder="请输入手机号"
          maxlength="11"
          clearable
        />
      </ElFormItem>
      <ElFormItem prop="code" label="验证码">
        <ElInput v-model="formData.code" class="h-9" placeholder="请输入验证码">
          <template #suffix>
            <ElButton type="primary" link size="large"> 获取验证码 </ElButton>
          </template>
        </ElInput>
      </ElFormItem>
    </ElForm>

    <div class="w-full flex flex-col gap-y-2 mt-6">
      <div>
        <ElButton class="w-full h-9" type="primary" @click="handleLogin">
          <span class="tracking-[0.4em]">登录</span>
        </ElButton>
      </div>
      <div>
        <ElButton plain class="w-full h-9" @click="goToAccountLogin"> 返回 </ElButton>
      </div>
      <AuthPolicy class="mt-2" />
    </div>
  </AuthContainer>
</template>

<style scoped lang="scss"></style>
