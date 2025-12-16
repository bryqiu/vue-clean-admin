<script setup lang="ts">
import type { LinkProps } from 'element-plus';
import { computed } from 'vue';
import { cn } from '@/utils';

defineOptions({
  name: 'Introduce',
});

interface Link {
  /**
   * 链接
   */
  url: string;
  /**
   * 文本
   */
  text: string;
  /**
   * 链接属性
   */
  elLinkProps?: LinkProps;
}

interface Feature {
  /**
   * 图标
   */
  icon?: string;
  /**
   * 文本
   */
  text: string;
  /**
   * 插槽名称
   */
  slotName?: string;
}

export interface IntroduceProps {
  title?: string;
  /**
   * 链接列表
   */
  links?: Link[];
  /**
   * 文本内容
   */
  textContent?: string;
  /**
   * 特点列表项
   */
  features?: Feature[];
  /**
   * 内容类名
   */
  contentClass?: string;
}

withDefaults(defineProps<IntroduceProps>(), {
  contentText: '',
  title: '示例介绍',
  links: () => [],
  features: () => [],
  contentClass: '',
});

const getLinkProps = (link: Link) => {
  return computed(() => {
    const defaultProps: Partial<LinkProps> = {
      type: 'primary',
      target: '_blank',
      href: link.url,
    };
    return {
      ...defaultProps,
      ...link.elLinkProps,
    };
  }).value;
};
</script>

<template>
  <ElCard v-bind="$attrs">
    <template #header>
      <div class="flex items-center">
        <span class="text-base font-medium line-clamp-1">{{ title }}</span>
        <div v-if="links.length" class="flex items-center">
          <ElLink v-for="link in links" :key="link.url" v-bind="getLinkProps(link)">
            <ElDivider direction="vertical" />
            <span class="line-clamp-1">{{ link.text }}</span>
          </ElLink>
        </div>
      </div>
    </template>
    <div :class="cn('text-sm/relaxed flex flex-col gap-y-1', contentClass)">
      <slot v-if="!textContent && $slots.default" />
      <template v-else>
        {{ textContent }}
      </template>
    </div>
    <template v-if="features.length">
      <div class="flex flex-col gap-y-1 text-sm text-el-text-secondary mt-2 pl-4">
        <div v-for="(feature, index) in features" :key="index" class="flex items-center gap-x-2">
          <IconifyIcon :name="feature.icon || 'ri:check-line'" class="text-base shrink-0" />
          <span v-if="feature.slotName">
            <slot :name="feature.slotName" :text="feature.text" />
          </span>
          <span v-else class="text-sm">{{ feature.text }}</span>
        </div>
      </div>
    </template>
  </ElCard>
</template>

<style scoped lang="scss"></style>
