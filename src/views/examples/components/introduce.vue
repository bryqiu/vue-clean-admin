<script setup lang="ts">
import { ElCard, ElDivider, ElLink } from 'element-plus';
import type { LinkProps } from 'element-plus';
import { computed } from 'vue';

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
  /**
   * 图标
   */
  icon?: string;
}

interface IntroduceProps {
  /**
   * 标题
   */
  title: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 相关链接
   */
  links?: Link[];
}

withDefaults(defineProps<IntroduceProps>(), {
  links: () => [],
});

const getLinkProps = computed(() => {
  return (link: Link) => {
    const defaultProps: Partial<LinkProps> = {
      type: 'primary',
      target: '_blank',
      href: link.url,
    };

    return {
      ...defaultProps,
      ...link.elLinkProps,
    };
  };
});

const handleClickLink = (url: Link['url']) => {};
</script>

<template>
  <div>
    <ElCard>
      <template #header>
        <div class="flex items-center">
          <span class="text-base font-medium">{{ title }}</span>
          <template v-if="links.length">
            <ElDivider direction="vertical" />
            <template v-for="(link, index) in links" :key="link.url">
              <ElLink v-bind="getLinkProps(link)">
                {{ link.text }}
              </ElLink>
              <ElDivider v-if="index < links.length - 1" direction="vertical" />
            </template>
          </template>
        </div>
      </template>
      <div v-if="description && !$slots.default" class="w-full">
        <span class="text-sm">{{ description }}</span>
      </div>
      <template v-else>
        <slot />
      </template>
    </ElCard>
  </div>
</template>

<style scoped lang="scss"></style>
