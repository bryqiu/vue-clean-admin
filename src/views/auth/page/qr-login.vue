<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ROUTE_NAMES } from '@/router/config';
import { AuthContainer, AuthPolicy } from '../components';

import { AUTH_INFO_MAP } from '../config';

defineOptions({
  name: 'QrLogin',
});

const router = useRouter();

const goToAccountLogin = () => {
  router.push({ name: ROUTE_NAMES.ACCOUNT_LOGIN });
};
</script>

<template>
  <AuthContainer v-bind="AUTH_INFO_MAP.QR">
    <div class="flex flex-col gap-y-2 items-center justify-center">
      <div
        class="size-44 rounded-lg border border-solid border-el-border-light flex items-center justify-center p-3"
      >
        <div class="size-full bg-slate-200">扫码登录</div>
      </div>
    </div>

    <ElDivider border-style="dashed" class="!mt-8">
      <span class="text-xs text-el-text-secondary">其他操作</span>
    </ElDivider>
    <ElButton class="w-full h-9" plain @click="goToAccountLogin"> 返回 </ElButton>

    <AuthPolicy class="mt-2" />
  </AuthContainer>
</template>

<style scoped lang="scss"></style>
