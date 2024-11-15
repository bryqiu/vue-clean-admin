<script setup lang="ts">
import { computed } from 'vue';
import { PageTransitionOptions } from '@/dict';
import { BasicBox } from '../components';
import { ElOption, ElOptionGroup, ElSelect } from 'element-plus';
import { ThemeMode } from '@/components/common/theme-mode';
import { SegmentContainer } from '../components';

defineOptions({
  name: 'ModuleColor',
});
const { pageTransitionName, hasPageTransition } = useThemeSettings();

// 页面过渡的CSS动画
const transitionAnimation = computed(() => {
  if (!hasPageTransition.value) return {};
  const animation = { animation: `${pageTransitionName.value}-view 2s infinite` };
  return animation;
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <BasicBox mode="vertical" text="主题模式">
      <ThemeMode />
    </BasicBox>
    <SegmentContainer title="动画设置">
      <BasicBox mode="vertical" text="页面切换时的过渡动画效果">
        <ElSelect v-model="pageTransitionName">
          <ElOptionGroup
            v-for="group in PageTransitionOptions"
            :key="group.label"
            :label="group.label"
          >
            <ElOption
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </ElOptionGroup>
        </ElSelect>
        <div class="w-full flex-c-c my-12">
          <div
            class="w-56 h-36 bg-[--el-fill-color] rounded-[var(--app-round-base)]"
            :style="transitionAnimation"
          />
        </div>
      </BasicBox>
    </SegmentContainer>
  </div>
</template>

<style scoped lang="scss"></style>
