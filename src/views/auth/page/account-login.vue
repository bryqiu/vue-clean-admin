<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { AuthContainer, AuthMode, AuthPolicy } from '../components';
import { AUTH_INFO_MAP, AUTH_MODE_LIST } from '../config';
import { ROUTE_NAMES } from '@/router/config';
import { useRouter } from 'vue-router';
import { userService } from '@/services/api';
import type { LoginParams, LoginResult } from '#/type';

defineOptions({
  name: 'AccountLogin',
});

const AUTH_USER_INFO = {
  USERNAME: 'admin',
  PASSWORD: '123456',
};

const { push } = useRouter();
const { setAccessToken, setRefreshToken } = useUserStore();

const formInstance = ref<FormInstance>();

const formData = ref<LoginParams>({
  username: AUTH_USER_INFO.USERNAME,
  password: AUTH_USER_INFO.PASSWORD,
});

const rules = reactive<FormRules>({
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
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

/** 登录成功后的操作 */
const loginAfterHandle = (loginResult: LoginResult) => {
  const { accessToken } = loginResult;
  // 把 Token 存入本地
  setAccessToken(accessToken);
  // 最后，走一遍路由拦截
  push('/');
};

const authLoading = ref(false);

/** 登录 */
const handleLogin = async () => {
  try {
    // 校验表单
    await formInstance.value?.validate();
    // 模拟登录，由于 ApiFox Mock 数据，演示环境下使用给定的账号才有正确数据
    if (
      formData.value.username !== AUTH_USER_INFO.USERNAME ||
      formData.value.password !== AUTH_USER_INFO.PASSWORD
    ) {
      ElMessage.error('演示环境，请使用 admin 账号登录');
      return;
    }
    // 设置为加载中状态
    authLoading.value = true;
    // 调用登录接口
    const res = await userService.login(formData.value);
    // 登录成功后的操作
    res && loginAfterHandle(res);
  } catch (error: any) {
    const errorMessage = error?.message || error?.msg || '登录失败，请检查账号密码';
    ElMessage.error(errorMessage);
  } finally {
    authLoading.value = false;
  }
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
      <ElFormItem prop="username" label="账号">
        <ElInput v-model="formData.username" placeholder="请输入账号" clearable class="h-9" />
      </ElFormItem>
      <ElFormItem prop="password" class="password-form-item">
        <template #label>
          <div class="w-full flex items-end justify-between">
            <span>密码</span>
            <span
              class="text-el-text-placeholder text-sm cursor-pointer underline"
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

    <div class="w-full flex flex-col gap-y-2 mt-6">
      <ElButton class="w-full" type="primary" :loading="authLoading" @click="handleLogin">
        <span class="tracking-[0.4em]">登录</span>
      </ElButton>
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
