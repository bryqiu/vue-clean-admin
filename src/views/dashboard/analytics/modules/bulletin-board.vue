<script setup lang="ts">
import { BaseContainer } from '../components';
import { ElScrollbar, ElTag } from 'element-plus';
import type { TagProps } from 'element-plus';
import { bulletinList } from '../data';

defineOptions({
  name: 'BulletinBoard',
});

export interface Bulletin {
  text: string;
  link?: string;
  tagName: string;
  tagProps?: TagProps;
}

/**
 * 单击公告文本
 */
const handleClick = (link: Bulletin['link']) => {
  if (!link) return null;
  window.open(link, '_blank');
};
</script>

<template>
  <BaseContainer title="公告板">
    <ElScrollbar>
      <!--公告列表-->
      <div class="flex flex-col gap-y-3">
        <div v-for="(bulletin, index) in bulletinList" :key="index" class="flex gap-x-1">
          <ElTag v-if="bulletin.tagName" size="small" round v-bind="bulletin.tagProps">
            {{ bulletin.tagName }}
          </ElTag>
          <span
            class="text-sm text-el-regular font-medium flex-1 line-clamp-1 cursor-pointer"
            :class="{ 'hover:text-primary': bulletin.link }"
            @click="handleClick(bulletin.link)"
            >{{ bulletin.text }}</span
          >
          <span class="text-sm text-el-secondary">05-02</span>
        </div>
      </div>
    </ElScrollbar>
  </BaseContainer>
</template>

<style scoped lang="scss"></style>
