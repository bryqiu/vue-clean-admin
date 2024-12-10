<script setup lang="ts">
import { ExceptionBasic, type ExceptionBasicProps } from './components';
import image500 from '@/assets/exceptions/500.svg';
import AppIcon from '@/components/common/app-icon/app-icon.vue';
import { h } from 'vue';

defineOptions({
  name: 'Exception500',
});

const backIcon = h(AppIcon, { icon: 'ri:arrow-go-back-fill' });
const refreshIcon = h(AppIcon, { icon: 'ri:refresh-line' });

const exceptionInfo: ExceptionBasicProps = {
  type: '500',
  title: '服务器似乎发生了错误',
  desc: '服务器似乎发生了错误，请稍后再试...',
  img: image500,
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
  <ExceptionBasic v-bind="exceptionInfo" />
</template>
