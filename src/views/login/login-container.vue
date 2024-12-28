<script setup lang="ts">
import { h, ref } from 'vue';
import { Logo } from '@/components/common/logo';
import { ElDivider, ElForm, ElFormItem, ElImage, ElInput } from 'element-plus';
import { LoginIntroduce, SocialAccount } from './components';
import { accountList } from './data';
import { AppIcon } from '@/components/common/app-icon';
import { AppCopyright } from '@/components/common/app-copyright';
import { FullScreen } from '@/layout/components/full-screen';

defineOptions({
  name: 'LoginPage',
});

interface FormData {
  username: string;
  password: string;
}

const accountIcon = h(AppIcon, { icon: 'ri:shield-user-fill' });
const passwordIcon = h(AppIcon, { icon: 'ri:lock-fill' });

const formData = ref<FormData>({
  username: '',
  password: '',
});
</script>

<template>
  <div class="size-full grid grid-cols-3 gap-2 p-3">
    <div class="col-span-3 flex flex-col justify-between lg:col-span-1">
      <!--头部-个性化操作-->
      <div class="flex items-center justify-between">
        <Logo :is-click="false" />
        <div class="bg-[#fff] p-2 space-x-2">
          <ActionButton icon="ri:translate-2" />
          <ActionButton icon="ri:color-filter-line" />
          <FullScreen />
        </div>
      </div>
      <!--内容-->
      <div class="flex-1 pb-16 px-4 flex flex-col justify-center mx-auto lg:max-w-[450px]">
        <!--内容-文本(大标题、副标题)-->
        <div class="flex flex-col gap-5">
          <span class="text-3xl font-semibold">登录 CleanAdmin</span>
          <span class="text-base text-[var(--el-text-color-secondary)]">
            基于 Vue3 + Vite + TypeScript + Element Plus
            构建的企业级后台管理模板，提供高效、可靠的中后台解决方案
          </span>
        </div>

        <!--内容-表单-->
        <div class="mt-10">
          <div class="flex items-center text-sm text-[var(--el-text-color-regular)]">
            <span class="flex-c-c gap-1">
              <AppIcon icon="ri:account-circle-line" />
              <span>账号登录</span>
            </span>
            <ElDivider direction="vertical" />
            <div class="flex-c-c gap-1">
              <AppIcon icon="ri:message-2-line" />
              <span>短信登录</span>
            </div>
            <ElDivider direction="vertical" />
            <div class="flex-c-c gap-1">
              <AppIcon icon="ri:qr-scan-2-line" />
              <span>扫码登录</span>
            </div>
          </div>
          <ElForm :model="formData" label-width="auto" class="mt-6" label-position="top">
            <ElFormItem>
              <ElInput
                v-model="formData.username"
                size="large"
                placeholder="请输入账号"
                :prefix-icon="accountIcon"
                autofocus
                clearable
              />
            </ElFormItem>
            <ElFormItem>
              <ElInput
                v-model="formData.password"
                size="large"
                placeholder="请输入密码"
                :prefix-icon="passwordIcon"
                show-password
                clearable
              />
            </ElFormItem>
          </ElForm>
          <div class="flex items-center justify-between text-sm">
            <span>记住我</span>
            <span class="text-[var(--el-color-primary)] cursor-pointer">忘记密码？</span>
          </div>
          <div class="w-full mt-8">
            <ElButton class="w-full !h-11" type="primary">
              <span>立即登录</span>
            </ElButton>
          </div>
        </div>

        <div class="my-5 flex justify-center">
          <span class="text-sm"
            >没有账号？<span class="text-[var(--el-color-primary)] cursor-pointer"
              >立即注册</span
            ></span
          >
        </div>
        <!--内容-社交账号登录-->
        <SocialAccount :account-list="accountList" />
      </div>
      <!--尾部-版权声明-->
      <AppCopyright owner="Fifteen" />
    </div>
    <LoginIntroduce class="col-span-2" />
  </div>
</template>

<style scoped lang="scss"></style>
