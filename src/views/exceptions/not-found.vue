<script setup lang="ts">
import { type ActionBtn, BasicException } from './components';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'NotFound',
});

const router = useRouter();
const handleHome = () => router.push({ path: '/' });
const handleHelp = () => window.open('https://help.example.com', '_blank');

const actionBtns: ActionBtn[] = [
  {
    label: '返回首页',
    onClick: handleHome,
    type: 'primary',
  },
  {
    label: '帮助中心',
    onClick: handleHelp,
    type: 'default',
  },
];
</script>

<template>
  <BasicException
    title="404"
    iconify-icon="ri:file-search-line"
    problem-desc="很抱歉，您访问的页面不存在或已被删除"
    guide-desc="请检查网址是否正确，或返回首页"
    :action-btns="actionBtns"
    illus="not-found"
  />
</template>

<style scoped lang="scss"></style>
