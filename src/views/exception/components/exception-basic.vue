<script setup lang="ts">
import { ElImage } from 'element-plus';
import { Component, computed, h } from 'vue';
import { AppIcon } from '@/components/common/app-icon';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'ExceptionBasic',
});

interface ActionBtnsType {
  label: string;
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
  icon?: Component;
  onClick: () => void;
}

export interface ExceptionBasicProps {
  /** 异常类型 */
  type: '403' | '404' | '500';
  /** 标题 */
  title: string;
  /** 描述 */
  desc: string;
  /** 图片 */
  img: string;
  actionBtns?: ActionBtnsType[];
}

const currentRouter = useRouter();
const backIcon = h(AppIcon, { icon: 'ri:arrow-go-back-fill' });

const props = withDefaults(defineProps<ExceptionBasicProps>(), {
  type: '404',
  title: '404',
  desc: '--',
});

const isActionBtns = computed(() => {
  return props.actionBtns && props.actionBtns.length > 0;
});

const backHome = () => {
  currentRouter.push({ path: '/' });
};
</script>

<template>
  <div class="wh-full flex-c-c">
    <div class="flex">
      <ElImage :src="img" :alt="title" class="w-[400px] lg:w-[500px]" />
      <div class="flex flex-col justify-center">
        <span class="text-3xl"> <AppIcon icon="line-md:emoji-frown-open" />哎呀！</span>
        <span class="text-4xl font-bold mt-2">{{ title }}</span>
        <span class="text-base text-[var(--el-text-color-secondary)] mt-4">{{ desc }}</span>
        <div class="mt-16">
          <span class="text-[var(--el-text-color-secondary)]">或者尝试以下操作：</span>
          <div
            v-if="isActionBtns"
            class="w-full grid grid-cols-1 gap-2 mt-2"
            :class="{ 'grid-cols-2': actionBtns && actionBtns?.length >= 2 }"
          >
            <template v-for="(btn, index) in actionBtns" :key="index">
              <ElButton v-bind="btn" class="!h-10 !ml-0">
                <div class="space-x-1">
                  <span>{{ btn.label }}</span>
                </div>
              </ElButton>
            </template>
          </div>
          <ElButton
            v-else
            type="primary"
            :icon="backIcon"
            class="w-full !h-10 mt-2"
            @click="backHome"
          >
            返回首页
          </ElButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
