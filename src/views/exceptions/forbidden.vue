<script setup lang="ts">
import { type ActionBtn, BasicException } from './components';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'Forbidden',
});

const router = useRouter();
const handleHome = () => router.push({ path: '/' });
const handleContact = () => window.open('mailto:admin@example.com');

const actionBtns: ActionBtn[] = [
  {
    label: '返回首页',
    onClick: handleHome,
    type: 'primary',
  },
  {
    label: '联系管理员',
    onClick: handleContact,
    type: 'default',
  },
];
</script>

<template>
  <BasicException
    title="403"
    iconify-icon="ri:forbid-line"
    problem-desc="权限不足，无法访问该页面"
    guide-desc="请联系管理员或返回首页"
    :action-btns="actionBtns"
    illus="forbidden"
  />
</template>

<style scoped lang="scss"></style>
