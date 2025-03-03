<script setup lang="ts">
import { ElImage } from 'element-plus';
import { Component, computed, h } from 'vue';
import { AppIcon } from '@/components/common/app-icon';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'ErrorBasic',
});

interface ActionBtnsType {
  label: string;
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
  icon?: Component;
  onClick: () => void;
  [key: string]: any;
}

export interface ErrorBasicProps {
  /** 异常类型 */
  type?: '403' | '404' | '500';
  /** 描述文本 */
  desc: string;
  /** 提示文本 */
  prompt: string;
  /** 插图 */
  illus: string;
  /** 操作按钮-配置项 */
  actionBtns?: ActionBtnsType[];
}

const currentRouter = useRouter();
const backIcon = h(AppIcon, { icon: 'ri:arrow-go-back-fill' });

const props = withDefaults(defineProps<ErrorBasicProps>(), {
  type: '404',
  desc: '',
  prompt: '',
  illus: '',
  actionBtns: () => [],
});

const isActionBtns = computed(() => {
  return props.actionBtns && props.actionBtns.length > 0;
});

const backHome = () => {
  currentRouter.push({ path: '/' });
};
</script>

<template>
  <div class="size-full flex-c-c">
    <div class="flex flex-col">
      <div class="flex flex-col items-center">
        <!--插画-->
        <ElImage :src="illus" class="size-[350px]" />
        <!--描述文本-->
        <span class="text-3xl font-bold flex items-center gap-x-1.5 mb-3 mt-2">
          {{ desc }}
        </span>
        <!--提示文本-->
        <span class="text-base text-el-regular mb-6">{{ prompt }}</span>
        <!--操作按钮-->
        <div
          v-if="isActionBtns"
          class="grid grid-cols-1 gap-2"
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
        <ElButton v-else type="primary" :icon="backIcon" class="!h-10" @click="backHome">
          返回首页
        </ElButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
