<script setup lang="ts">
import type { ButtonProps } from 'element-plus';
import { computed, h } from 'vue';
import { useRouter } from 'vue-router';
import { IconifyIcon } from '@/components/common/app-icon';

defineOptions({
  name: 'BasicException',
});

export interface ActionBtn extends Partial<ButtonProps> {
  label: string;
  onClick: () => void;
}

interface ExceptionProps {
  /** 标题 */
  title: string;
  /** 问题描述 */
  problemDesc: string;
  /** 引导描述 */
  guideDesc: string;
  /** 操作按钮 */
  actionBtns?: ActionBtn[];
}

const currentRouter = useRouter();

const props = withDefaults(defineProps<ExceptionProps>(), {
  actionBtns: () => [],
  problemDesc: '',
  guideDesc: '',
});

/** 是否显示操作按钮 */
const isActionBtns = computed(() => {
  return props.actionBtns && props.actionBtns.length;
});

/** 返回首页 */
const backHome = () => {
  currentRouter.push({ path: '/' });
};

const refreshIcon = h(IconifyIcon, {
  name: 'ri:reset-right-line',
});
</script>

<template>
  <div class="size-full flex items-center justify-center bg-el-bg-default rounded-lg">
    <div class="flex flex-col items-center gap-x-2">
      <div>
        <div class="flex flex-col items-center gap-y-4">
          <div class="flex items-center gap-x-2 text-8xl font-bold">
            {{ title }}
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <span class="text-base">{{ problemDesc }}</span>
            <span class="text-sm text-el-text-secondary">{{ guideDesc }}</span>
          </div>
        </div>

        <div class="flex items-center justify-center mt-6">
          <!--操作按钮-->
          <div
            v-if="isActionBtns"
            class="grid grid-cols-1 gap-2"
            :class="{ 'grid-cols-2': actionBtns && actionBtns?.length >= 2 }"
          >
            <template v-for="(btn, index) in actionBtns" :key="index">
              <ElButton v-bind="btn" class="!ml-0">
                <span>{{ btn.label }}</span>
              </ElButton>
            </template>
          </div>
          <ElButton v-else type="primary" :icon="refreshIcon" @click="backHome">
            返回首页
          </ElButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
