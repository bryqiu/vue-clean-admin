<script setup lang="ts">
import { ExceptionBasic, type ExceptionBasicProps } from './components';
import image403 from '@/assets/exceptions/403.svg';

defineOptions({
  name: 'Exception403',
});

const exceptionInfo: ExceptionBasicProps = {
  type: '403',
  title: '权限不足，访问被拒绝',
  desc: '您没有访问该页面的权限，请联系管理员获取权限',
  img: image403,
};
</script>

<template>
  <ExceptionBasic v-bind="exceptionInfo" />
</template>
