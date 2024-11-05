<script setup lang="ts">
import { computed, ref } from 'vue';
import { PageTransitionEnum } from '@/enums';
import { PageTransitionOptions } from '@/dict';
import { BaseBox } from '../components/settings-box';
import { ElOption, ElOptionGroup, ElSelect } from 'element-plus';

defineOptions({
  name: 'ModuleColor',
});
const { pageTransitionName, hasPageTransition } = useThemeSettings();
const { togglePageTransition } = useSettingsStore();
const toggleTransition = (value: PageTransitionEnum) => {
  togglePageTransition(value);
};

// 过渡效果的CSS动画
const transitionAnimation = computed(() => {
  if (!hasPageTransition.value) return {};
  const animation = { animation: `${pageTransitionName.value}-view 2s infinite` };
  return animation;
});
</script>

<template>
  <div>
    <BaseBox :options="PageTransitionOptions" mode="vertical" text="页面切换时的过渡动画效果">
      <ElSelect v-model="pageTransitionName" @change="toggleTransition">
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
    </BaseBox>
  </div>
</template>

<style scoped lang="scss"></style>
