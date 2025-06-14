<script setup lang="ts">
import type { ButtonProps } from 'element-plus';
import { ElImage } from 'element-plus';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import exceptionSvg from '@/assets/icons/exception.svg';

defineOptions({
  name: 'BasicException',
});

interface ActionBtn extends Partial<ButtonProps> {
  label: string;
  onClick: () => void;
}

interface ExceptionProps {
  title: string;
  desc: string;
  illus?: string;
  actionBtns?: ActionBtn[];
}

const currentRouter = useRouter();

const props = withDefaults(defineProps<ExceptionProps>(), {
  illus: exceptionSvg,
  actionBtns: () => [],
});

/** 是否显示操作按钮 */
const isActionBtns = computed(() => {
  return props.actionBtns && props.actionBtns.length;
});

/** 返回首页 */
const backHome = () => {
  currentRouter.push({ path: '/' });
};
</script>

<template>
  <div class="size-full flex items-center justify-center bg-[var(--el-bg-color)] rounded-lg">
    <div class="flex flex-col items-center gap-x-2">
      <ElImage :src="illus" class="size-72" fit="cover" />
      <div>
        <div class="flex flex-col items-center gap-y-2">
          <span class="text-3xl font-bold">{{ title }}</span>
          <span class="text-sm text-el-secondary">{{ desc }}</span>
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
                <div class="space-x-1">
                  <span>{{ btn.label }}</span>
                </div>
              </ElButton>
            </template>
          </div>
          <ElButton v-else type="primary" @click="backHome"> 返回首页 </ElButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
