<script setup lang="ts">
import { ExceptionBasic, type ExceptionBasicProps } from './components';
import image404 from '@/assets/exceptions/404.svg';

defineOptions({
  name: 'Exception500',
});

const exceptionInfo: ExceptionBasicProps = {
  type: '404',
  title: '页面被外星人带走了',
  desc: '抱歉，您正在查找的页面不存在或已被移动...',
  img: image404,
};
</script>

<template>
  <ExceptionBasic v-bind="exceptionInfo" />
</template>
