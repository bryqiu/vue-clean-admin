<script setup lang="ts">
import { ErrorBasic, type ErrorBasicProps } from './components';
import illus403 from '@/assets/errors/403.svg';

defineOptions({
  name: 'Forbidden',
});

const errorInfo: ErrorBasicProps = {
  type: '403',
  desc: '抱歉，您的访问权限不足...',
  prompt: '您可以尝试获取相关权限或联系管理员',
  emotionIcon: 'mdi:emoticon-cry-outline',
  illus: illus403,
};
</script>

<template>
  <ErrorBasic v-bind="errorInfo" />
</template>
