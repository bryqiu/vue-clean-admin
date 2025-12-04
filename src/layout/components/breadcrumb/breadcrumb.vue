<script setup lang="ts">
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';
import { useRoute } from 'vue-router';
import type { RouteLocationMatched } from 'vue-router';

import { computed, h } from 'vue';
import { IconifyIcon } from '@/components/common/app-icon';

defineOptions({
  name: 'Breadcrumb',
});
const currentRoute = useRoute();

interface BreadcrumbProps {
  /**
   * 如果设置该属性为 true, 导航将不会留下历史记录
   * @default false
   * @see https://element-plus.org/zh-CN/component/breadcrumb.html#breadcrumbitem-attributes
   */
  replace?: boolean;

  /**
   * 是否显示面包屑图标
   * @default true
   */
  isShowIcon?: boolean;
  /**
   * 面包屑样式
   * @default default
   */
  styleType?: BreadcrumbStyleType;
}

interface BreadcrumbEmits {
  onClickItem: [value: RouteLocationMatched];
}

type BreadcrumbStyleMap = {
  [key in BreadcrumbStyleType]: string;
};

const props = withDefaults(defineProps<BreadcrumbProps>(), {
  replace: false,
  styleType: 'default',
  isShowIcon: true,
});

const emit = defineEmits<BreadcrumbEmits>();

/** 面包屑列表 */
const breadcrumbList = computed(() =>
  currentRoute.matched.filter((item) => !item.meta.isHideBreadcrumb),
);

/** 获取路由路径 */
const getPath = (item: RouteLocationMatched): string | Object => {
  if (!item) return '';
  return { path: item.redirect ? item.redirect : item.path };
};

/** 渲染图标 */
const renderIcon = (item: RouteLocationMatched) => {
  if (!props.isShowIcon || !item.meta.menuIcon) return null;
  return h(IconifyIcon, { name: item.meta.menuIcon as string });
};

/** 获取面包屑Class样式 */
const breadcrumbClassName = computed(() => {
  const className: BreadcrumbStyleMap = {
    arrow: 'breadcrumb-arrow',
    default: 'breadcrumb-default',
    parallelogram: 'breadcrumb-parallelogram',
  };
  return className[props.styleType];
});
</script>

<template>
  <ElBreadcrumb v-bind="$attrs" :class="breadcrumbClassName" class="app-breadcrumb">
    <TransitionGroup name="breadcrumb-basic">
      <ElBreadcrumbItem
        v-for="item in breadcrumbList"
        :key="item.path"
        :to="getPath(item)"
        :replace
      >
        <div class="space-x-1" @click="emit('onClickItem', item)">
          <Component :is="renderIcon(item)" />
          <span>{{ item.meta.title }}</span>
        </div>
      </ElBreadcrumbItem>
    </TransitionGroup>
  </ElBreadcrumb>
</template>

<style scoped lang="scss">
.app-breadcrumb {
  :deep(.el-breadcrumb__item) {
    &:last-child .el-breadcrumb__inner {
      color: var(--el-text-color-primary) !important;
    }

    & .el-breadcrumb__inner.is-link {
      font-weight: 400;
      color: var(--el-text-color-placeholder);
    }
  }
}

$height: 24px;

@mixin breadcrumb__inner($padding: 0 4px 0 16px, $bgColor: var(--el-fill-color-light)) {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  height: $height;
  padding: $padding;
  text-decoration: none;
  background-color: $bgColor;
}

.breadcrumb {
  //箭头样式
  &-arrow {
    :deep(.el-breadcrumb__item) {
      position: relative;
      margin-right: 12px;

      .el-breadcrumb__inner {
        @include breadcrumb__inner();

        &::before,
        &::after {
          position: absolute;
          top: 0;
          z-index: -1;
          content: '';
          border: calc($height/2) solid transparent;
        }

        &::before {
          left: -1px;
          border-left-color: var(--background);
        }

        &::after {
          right: -23px;
          border-left-color: var(--el-fill-color-light);
        }

        &:hover {
          background: var(--el-fill-color);

          &::after {
            border-left-color: var(--el-fill-color);
          }
        }
      }
    }

    :deep(.el-breadcrumb__separator) {
      display: none;
    }
  }

  //平行四边形样式
  &-parallelogram {
    :deep(.el-breadcrumb__item) {
      position: relative;
      margin-right: 8px;

      .el-breadcrumb__inner {
        @include breadcrumb__inner(4px 10px, transparent);

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          width: 100%;
          height: 100%;
          content: '';
          background-color: var(--el-fill-color-light);
          transform: skew(-20deg);
        }
      }
    }

    :deep(.el-breadcrumb__separator) {
      display: none;
    }
  }
}
</style>
