<script setup lang="ts">
import { Particles } from '../components';

defineOptions({
  name: 'Introduce',
});

const featureConfig = [
  {
    icon: 'ri:flashlight-fill',
    title: '快速开发',
    desc: '基于 Vue3 + Vite 技术栈，提供完整的开发解决方案',
  },
  {
    icon: 'ri:flashlight-fill',
    title: '快速开发',
    desc: '基于 Vue3 + Vite 技术栈，提供完整的开发解决方案',
  },
];
</script>

<template>
  <div class="relative size-full flex flex-col p-6 bg-el-lighter">
    <Particles
      class="absolute inset-0"
      :quantity="200"
      :ease="100"
      :color="'#000'"
      :staticity="10"
      refresh
    />
    <div class="flex-1 flex flex-col items-center justify-center gap-y-2">
      <span
        class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
      >
        Vue Clean Admin
      </span>
    </div>

    <div class="w-full grid grid-cols-2">
      <div
        v-for="(feature, index) in featureConfig"
        :key="index"
        class="flex flex-col gap-y-4 border border-solid border-el-dark justify-center items-center py-8 px-6"
        :class="[index % 2 !== 0 ? 'border-l-0 rounded-r-lg' : 'rounded-l-lg']"
      >
        <AppIcon :icon="feature.icon" class="text-6xl text-el-secondary" />
        <span class="text-xl font-semibold">{{ feature.title }}</span>
        <span class="text-sm text-center">{{ feature.desc }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
