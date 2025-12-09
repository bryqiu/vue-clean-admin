<script setup lang="ts">
import { ElCard, ElLink } from 'element-plus';
import { Introduce, type IntroduceProps } from './widgets';
import { EL_PRIMARY_COLOR_WEIGHT } from '@/theme/constants';
import { cn } from '@/utils';

defineOptions({
  name: 'Tailwindcss',
});

const links: IntroduceProps['links'] = [
  {
    url: 'https://tailwindcss.com/',
    text: '查看官方文档',
  },
];

const features: IntroduceProps['features'] = [
  {
    text: '专栏相关文章',
    slotName: 'article',
  },
];

const primaryColorMap = {
  [EL_PRIMARY_COLOR_WEIGHT[0]]: 'bg-el-primary-50',
  [EL_PRIMARY_COLOR_WEIGHT[1]]: 'bg-el-primary-100',
  [EL_PRIMARY_COLOR_WEIGHT[2]]: 'bg-el-primary-200',
  [EL_PRIMARY_COLOR_WEIGHT[3]]: 'bg-el-primary-300',
  [EL_PRIMARY_COLOR_WEIGHT[4]]: 'bg-el-primary-400',
  [EL_PRIMARY_COLOR_WEIGHT[5]]: 'bg-el-primary-500',
  [EL_PRIMARY_COLOR_WEIGHT[6]]: 'bg-el-primary-600',
  [EL_PRIMARY_COLOR_WEIGHT[7]]: 'bg-el-primary-700',
  [EL_PRIMARY_COLOR_WEIGHT[8]]: 'bg-el-primary-800',
  [EL_PRIMARY_COLOR_WEIGHT[9]]: 'bg-el-primary-900',
  [EL_PRIMARY_COLOR_WEIGHT[10]]: 'bg-el-primary-950',
};
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <Introduce title="Tailwind Css 原子样式" :links :features>
      <span
        >Clean Admin 使用 Tailwind Css 来编写大部分样式，这是一个原子化 Css
        框架，它提供了一组预定义的类名，用于快速构建响应式的用户界面。 <br />同时也融合了 Element
        Plus 主题系统，希望保持以 Element Plus 色彩方案为主，Tailwind Css
        作为补充的方式进行样式编写， 以实现一致的视觉效果。
      </span>
      <template #article="{ text }">
        <div class="flex items-center">
          <span>{{ `${text}：` }}</span>
          <ElLink type="primary" target="_blank" href="https://github.com/bryqiu/Blog/issues/15">
            《Tailwind Css 中使用 Element Plus 主题系统的方案与实现》
          </ElLink>
        </div>
      </template>
    </Introduce>
    <ElCard>
      <template #header>
        <span class="text-sm font-medium">布局 Flex / Grid</span>
      </template>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div v-for="i in 4" :key="i" class="p-4 rounded-lg bg-el-fill-light text-el-text-regular">
          {{ `栅格项 ${i}` }}
        </div>
      </div>
      <div class="mt-3 flex flex-wrap gap-3">
        <div
          v-for="i in 3"
          :key="i"
          class="flex-1 min-w-[140px] p-4 rounded-lg bg-el-fill-light text-el-text-regular"
        >
          {{ `自适应块 ${i}` }}
        </div>
      </div>
    </ElCard>

    <ElCard>
      <template #header>
        <span class="text-sm font-medium">响应式 Breakpoints</span>
      </template>
      <div class="p-4 rounded-lg bg-el-fill-light text-el-text-primary">
        <span class="block sm:hidden">当前断点：&lt; sm（隐藏于 ≥sm）</span>
        <span class="hidden sm:block md:hidden">当前断点：sm ~ md</span>
        <span class="hidden md:block lg:hidden">当前断点：md ~ lg</span>
        <span class="hidden lg:block">当前断点：≥ lg</span>
      </div>
    </ElCard>

    <ElCard>
      <template #header>
        <span class="text-sm font-medium">主题色彩系统(Element Plus)</span>
      </template>
      <div>
        <div class="mb-2 text-sm text-el-text-secondary">Primary 色阶（50 → 950）</div>
        <div
          :class="
            cn(
              'grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2',
              `lg:grid-cols-${EL_PRIMARY_COLOR_WEIGHT.length}`,
            )
          "
        >
          <div
            v-for="item in EL_PRIMARY_COLOR_WEIGHT"
            :key="item"
            :class="
              cn(
                'h-12 rounded-lg border border-el-border-lighter flex items-center justify-center text-el-text-primary',
                primaryColorMap[item],
              )
            "
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="mt-3 flex flex-wrap gap-3">
        <div
          class="px-3 py-2 rounded-lg bg-background-page text-el-text-regular border border-el-border-lighter"
        >
          bg-background-page
        </div>
        <div class="px-3 py-2 rounded-lg bg-el-fill text-el-text-regular">bg-el-fill</div>
        <div class="px-3 py-2 rounded-lg bg-el-fill-lighter text-el-text-regular">
          bg-el-fill-lighter
        </div>
        <div class="px-3 py-2 rounded-lg text-el-text-disabled border border-el-border">
          text-el-text-disabled
        </div>
      </div>
    </ElCard>

    <ElCard>
      <template #header>
        <span class="text-sm font-medium">暗黑模式</span>
      </template>
      <span>Tailwind Css 适配暗黑模式，当根节点存在class="dark"时，会切换为暗色模式</span>
      <div class="p-4 rounded-lg bg-el-fill-light text-el-text-regular dark:bg-red-500">
        根据暗黑模式切换背景为红色(bg-red-500)
      </div>
    </ElCard>
  </div>
</template>

<style scoped lang="scss"></style>
