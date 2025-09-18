<script setup lang="ts">
import { presetPrimaryColorOptions } from '@/dict';
import { ElDivider } from 'element-plus';
import { ref } from 'vue';
import { useDebounceFn } from '@vueuse/core';

defineOptions({
  name: 'WidgetPrimaryColor',
});

const { currentPrimaryColor } = useThemeSettings();

/** 设置主题色 */
const setPrimaryColor = (color: string) => {
  currentPrimaryColor.value = color;
};

/** 颜色选择器实例 */
const colorPickerInstance = ref<Nullable<HTMLInputElement>>(null);

/** 颜色选择器值变化时 */
const colorPickerChange = useDebounceFn((e: Event) => {
  const target = e.target as HTMLInputElement;
  console.log(e, 'e');

  currentPrimaryColor.value = target.value;
}, 600);
</script>

<template>
  <div class="flex items-center">
    <div class="flex items-center gap-x-1">
      <div
        v-for="item in presetPrimaryColorOptions"
        :key="item.value"
        class="size-6 rounded-lg flex items-center justify-center cursor-pointer"
        :style="{ backgroundColor: item.value }"
        @click="setPrimaryColor(item.value)"
      >
        <IconifyIcon
          v-if="item.value === currentPrimaryColor"
          name="ri:brush-line"
          class="text-base text-white"
        />
      </div>
    </div>
    <ElDivider direction="vertical" />
    <div
      class="size-6 flex items-center justify-center border border-el-border-light rounded-lg cursor-pointer relative"
      :style="{ background: currentPrimaryColor }"
    >
      <IconifyIcon name="ri:palette-fill" class="text-base text-el-primary text-white" />
      <input
        ref="colorPickerInstance"
        :value="currentPrimaryColor"
        class="absolute inset-0 opacity-0 size-6 cursor-pointer rounded-lg"
        type="color"
        @input="colorPickerChange"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
