<script setup lang="ts">
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';
import { useRoute } from 'vue-router';
import type { RouteLocationMatched } from 'vue-router';

import type { BreadcrumbEmits, BreadcrumbProps, BreadcrumbStyleObj } from './typing';
import { computed, h } from 'vue';
import { AppIcon } from '@/components/common/app-icon';

defineOptions({
  name: 'Breadcrumb',
});
const currentRoute = useRoute();

const props = withDefaults(defineProps<BreadcrumbProps>(), {
  replace: false,
  isHideIcon: false,
  type: 'default',
});

const emit = defineEmits<BreadcrumbEmits>();

/** 面包屑列表 */
const breadcrumbList = computed(() =>
  currentRoute.matched.filter((item) => !item.meta.isHideBreadcrumb),
);

/** 获取路由路径 */
const getPath = (item: RouteLocationMatched): string | Object => {
  if (!item) return '';
  if (item.meta?.isReadonlyBreadcrumb) return '';
  return item.redirect ? { path: item.redirect } : { path: item.path };
};

/** 渲染图标 */
const renderIcon = (item: RouteLocationMatched) => {
  if (props.isHideIcon || !item.meta.icon) return null;
  return h(AppIcon, { icon: item.meta.icon });
};

/** 获取面包屑Class样式 */
const breadcrumbClassName = computed(() => {
  const className: BreadcrumbStyleObj = {
    arrow: 'breadcrumb-arrow',
    default: 'breadcrumb-default',
    parallelogram: 'breadcrumb-parallelogram',
  };
  return className[props.type];
});
</script>

<template>
  <ElBreadcrumb v-bind="$attrs" :class="breadcrumbClassName">
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
$height: 24px;

@mixin breadcrumb__inner($padding: 0 4px 0 12px, $bgColor: var(--el-fill-color-light)) {
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
  // &-default {
  // }

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
          border-left-color: var(--el-bg-color);
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
