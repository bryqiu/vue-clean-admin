<script setup lang="ts">
import { ErrorBasic, type ErrorBasicProps } from './components';
import illus500 from '@/assets/errors/500.svg';
import AppIcon from '@/components/common/app-icon/app-icon.vue';
import { h } from 'vue';

defineOptions({
  name: 'ServerError',
});

const backIcon = h(AppIcon, { icon: 'ri:arrow-go-back-fill' });
const refreshIcon = h(AppIcon, { icon: 'ri:refresh-line' });

const errorInfo: ErrorBasicProps = {
  type: '500',
  desc: '服务器似乎发生了错误，请稍后再试...',
  prompt: '但不用担心，您可以尝试刷新页面或返回首页',
  emotionIcon: 'mdi:emoticon-dead-outline',
  illus: illus500,
  actionBtns: [
    {
      type: 'primary',
      label: '返回首页',
      icon: backIcon,
      onClick: () => {
        window.location.href = '/';
      },
    },
    {
      type: 'info',
      label: '刷新页面',
      icon: refreshIcon,
      onClick: () => {
        window.location.reload();
      },
    },
  ],
};
</script>

<template>
  <ErrorBasic v-bind="errorInfo" />
</template>
