<script setup lang="ts">
import { ErrorBasic, type ErrorBasicProps } from './components';
import illus404 from '@/assets/errors/404.svg';

defineOptions({
  name: 'NotFound',
});

const errorInfo: ErrorBasicProps = {
  type: '404',
  desc: '抱歉，我们找不到此页面...',
  prompt: '但不用担心，您可以在我们的主页上找到很多其他内容',
  emotionIcon: 'mdi:emoticon-frown-outline',
  illus: illus404,
};
</script>

<template>
  <ErrorBasic v-bind="errorInfo" />
</template>
