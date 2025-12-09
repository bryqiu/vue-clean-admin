<script setup lang="ts">
import { Introduce, type IntroduceProps } from './widgets';
import { ref } from 'vue';
import { ElCard } from 'element-plus';

defineOptions({
  name: 'Icon',
});

const links = ref<IntroduceProps['links']>([
  {
    url: 'https://iconify.design/',
    text: 'Iconify 官网',
  },
  {
    url: 'https://icones.js.org/collection/ri',
    text: 'Remix Icon 图标集',
  },
  {
    url: 'https://icones.js.org/collection/mingcute',
    text: 'MingCute Icon 图标集',
  },
]);

const features = ref<IntroduceProps['features']>([
  {
    text: '<IconifyIcon> 在线图标组件，支持所有 Iconify 图标，已全局注册',
  },
  {
    text: '<LocalIcon> 本地图标组件，支持本地 svg 图标，已全局注册',
  },
  {
    text: '<iconPicker>图标选择器组件，主要用于菜单图标选择',
  },
]);

const iconifyIcons = ref([
  'ri:ai-generate-3d-line',
  'ri:accessibility-fill',
  'ri:armchair-fill',
  'ri:artboard-line',
  'ri:bilibili-fill',
  'ri:database-2-fill',
  'ri:edge-new-fill',
  'mingcute:airplane-line',
  'mingcute:bluesky-social-line',
  'mingcute:cube-fill',
  'mingcute:dingtalk-line',
  'ri:game-line',
]);

const localIcons = ref(['logo', 'element-plus']);
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <Introduce title="Clean Admin 图标方案" :links :features>
      <span>
        Clean Admin 采用 Iconify 作为主要图标方案，为确保界面元素风格一致，使用 Remix Icon
        作为首要图标集，以 MingCute Icon 为辅做补充图标集，所有图标均可在
        <a href="https://icones.js.org/" target="_blank"
          ><span class="text-el-primary hover:underline">icones 网站 </span></a
        >
        找到，同时引入 vite-plugin-svg-icons 插件以支持本地 svg 图标使用
      </span>
    </Introduce>
    <ElCard>
      <template #header>
        <span class="text-sm font-medium">iconify 图标</span>
      </template>
      <div class="grid grid-cols-4 2xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6 gap-4">
        <div
          v-for="icon in iconifyIcons"
          :key="icon"
          class="border border-el-border-light rounded-lg flex items-center justify-center h-16"
        >
          <IconifyIcon :name="icon" class="text-2xl" />
        </div>
      </div>
    </ElCard>
    <ElCard>
      <template #header>
        <span class="text-sm font-medium">svg 本地图标</span>
      </template>
      <div class="grid grid-cols-4 2xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6 gap-4">
        <div
          v-for="icon in localIcons"
          :key="icon"
          class="border border-el-border-light rounded-lg flex items-center justify-center h-16"
        >
          <LocalIcon :name="icon" :size="24" />
        </div>
      </div>
    </ElCard>
    <ElCard>
      <template #header>
        <span class="text-sm font-medium">图标选择器</span>
      </template>
      loading...
    </ElCard>
  </div>
</template>

<style scoped lang="scss"></style>
