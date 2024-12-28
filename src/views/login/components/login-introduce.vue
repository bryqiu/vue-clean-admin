<script setup lang="ts">
import { ElImage, ElText } from 'element-plus';
import LoginCover from '@/assets/images/cover.png';
import { loginIntroduceFeatures } from '../data';

defineOptions({
  name: 'LoginIntroduce',
});
</script>

<template>
  <div class="size-full bg-color rounded-lg hidden lg:block overflow-hidden">
    <div class="size-full flex flex-col items-center justify-center">
      <!--图片-->
      <ElImage
        :src="LoginCover"
        class="w-3/5 mr-[8%] xl:w-1/2 xl:mr-[10%] 2xl:mr-[12%] cover-rotate shadow-2xl rounded-xl duration-300 mb-8"
      />

      <!--特点-->
      <div class="flex flex-wrap items-center justify-center gap-4">
        <div
          v-for="(feature, index) in loginIntroduceFeatures"
          :key="index"
          class="px-4 py-4 bg-[var(--el-bg-color)] rounded-lg shadow-md w-1/4"
          :class="[feature.space ? 'mt-20' : 'mt-2']"
        >
          <!--图标-->
          <div class="flex-shrink-0">
            <div
              class="flex items-center justify-center w-12 h-12 mx-auto bg-[var(--el-color-primary)] text-[var(--el-color-white)] rounded-md"
            >
              <AppIcon :icon="feature.icon" class="text-2xl" />
            </div>
          </div>
          <!--标题信息-->
          <div class="w-full py-4 text-center">
            <span class="font-semibold text-[var(--el-text-color-regular)] text-xl">
              {{ feature.title }}
            </span>
          </div>
          <!--文本信息-->
          <div class="w-full py-4">
            <ElText line-clamp="2" class="feature-text">
              {{ feature.text }}
            </ElText>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg-color {
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
}

.cover-rotate {
  transform: perspective(1000px) rotateX(8deg) rotateY(-38deg) rotate(6deg);
}

.feature-text.el-text {
  --el-text-color: var(--el-text-color-secondary);
}
</style>
