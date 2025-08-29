<script setup lang="ts">
import { PageTransitionOptions } from '@/dict';
import { twMerge } from 'tailwind-merge';
import { PageTransitionEnum } from '@/enums';

defineOptions({
  name: 'WidgetPageTransition',
});

const { pageTransitionName } = useThemeSettings();

const setPageTransitionName = (name: PageTransitionEnum) => {
  pageTransitionName.value = name;
};
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <div
      v-for="(item, index) in PageTransitionOptions"
      :key="index"
      class="flex flex-col gap-y-1 cursor-pointer"
    >
      <span class="text-xs text-el-text-placeholder">{{ item.label }}</span>
      <div class="flex items-center gap-x-4">
        <div
          v-for="transitionItem in item.options"
          :key="transitionItem.value"
          class="flex flex-col items-center gap-y-0.5"
        >
          <div
            class=""
            :class="
              twMerge(
                'h-12 w-16 border border-el-border-light p-1 rounded-lg cursor-pointer',
                transitionItem.value === pageTransitionName && 'border-el-primary',
              )
            "
            @click="setPageTransitionName(transitionItem.value)"
          >
            <div
              class="size-full bg-el-fill rounded-lg"
              :style="{ animation: `${transitionItem.value}-view 2s infinite` }"
            />
          </div>
          <span class="text-xs text-el-text-secondary">{{ transitionItem.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
