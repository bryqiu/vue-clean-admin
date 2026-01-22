<script setup lang="ts">
import { computed, ref } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import { InputInstance, PopoverInstance } from 'element-plus';
import type { IconifyInfo, IconifyJSON } from '@iconify/types';
import { cn } from '@/utils';
import { ElMessage } from 'element-plus';

interface IconPickerProps {
  /**
   * 选择后是否关闭弹窗
   */
  closeOnSelect?: boolean;
}

export interface IconifyCollectionResponse {
  /**
   * 图标集前缀
   */
  prefix: string;
  /**
   * 图标总数
   */
  total: number;
  /**
   * 图标集标题
   */
  title?: string;
  /**
   * 图标集信息
   */
  info?: IconifyInfo;
  /**
   * 没有类别的图标列表
   */
  uncategorized?: string[];
  /**
   * 按类别分类的图标列表
   */
  categories?: Record<string, string[]>;
  /**
   * 隐藏图标列表
   */
  hidden?: string[];
  /**
   * 别名列表，键为“alias”，值为父图标名称
   */
  aliases?: Record<string, string>;
  /**
   * 字符列表，键为“character”，值为图标名称
   */
  chars?: Record<string, string>;
  /**
   * 主题列表
   */
  themes?: IconifyJSON['themes'];
  /**
   * 前缀列表
   */
  prefixes?: IconifyJSON['prefix'];
  /**
   * 后缀列表
   */
  suffixes?: {
    line: string;
    fill: string;
  };
}

/**
 * 弹窗高度
 */
const POPOVER_HEIGHT: number = 300;

/**
 * 图标集列表，可自行添加更多图标集
 */
const iconSets = ref<BaseOptions<string>[]>([
  {
    label: 'Remix Icon',
    value: 'ri',
  },
  {
    label: 'MingCute Icon',
    value: 'mingcute',
  },
  {
    label: 'Material Symbols',
    value: 'material-symbols',
  },
  {
    label: 'Material Symbols',
    value: 'material-symbols',
  },
  {
    label: 'Material Symbols',
    value: 'material-symbols',
  },
  {
    label: 'Material Symbols',
    value: 'material-symbols',
  },
  {
    label: 'Material Symbols',
    value: 'material-symbols',
  },
  {
    label: 'Material Symbols',
    value: 'material-symbols',
  },
  {
    label: 'Material Symbols',
    value: 'material-symbols',
  },
  {
    label: 'Material Symbols',
    value: 'material-symbols',
  },
  {
    label: 'Material Symbols',
    value: 'material-symbols',
  },
  {
    label: 'Material Symbols',
    value: 'material-symbols',
  },
]);

const currentIconSet = ref(iconSets.value[0].value);
const loading = ref(false);

const iconList = ref<string[]>([]);

// 添加缓存，key 为图标集前缀，value 为图标列表
const iconCache = new Map<string, string[]>();

const iconValue = defineModel<string>({
  default: '',
});

const currentPage = ref(1);
const pageSize = ref(76);

const searchValue = ref('');
const debouncedSearchValue = ref('');

const onSearchInput = useDebounceFn((val: string) => {
  debouncedSearchValue.value = val;
  currentPage.value = 1;
}, 300);

const fetchIcons = async () => {
  const prefix = currentIconSet.value;

  // 优先读取缓存
  if (iconCache.has(prefix)) {
    iconList.value = iconCache.get(prefix)!;
    return;
  }

  loading.value = true;
  try {
    const url = `https://api.iconify.design/collection?prefix=${prefix}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`获取图标集${prefix}失败，状态码${res.status}`);
    const data = (await res.json()) as IconifyCollectionResponse;

    const iconSet = new Set<string>();

    // 1.不分类的图标集
    if (data.uncategorized) {
      data.uncategorized.forEach((icon) => iconSet.add(icon));
    }

    // 2.分类的图标集，tip：一个图标可以存在于多个类别中，因此需要检查重复项
    if (data.categories) {
      Object.values(data.categories).forEach((icons) => {
        icons.forEach((icon) => iconSet.add(icon));
      });
    }

    // 3.合并不重复的图标集
    const result = Array.from(iconSet);
    iconList.value = result;

    // 写入缓存
    iconCache.set(prefix, result);
  } catch (e) {
    ElMessage.error(`获取图标信息失败，${e}`);
  } finally {
    loading.value = false;
  }
};

const changeIconSet = (iconSet: string) => {
  if (currentIconSet.value === iconSet) return;
  currentIconSet.value = iconSet;
  currentPage.value = 1;
  // 切换时清空搜索
  searchValue.value = '';
  debouncedSearchValue.value = '';
  fetchIcons();
};

const filteredIcons = computed(() => {
  const search = debouncedSearchValue.value.toLowerCase();
  return iconList.value.filter((icon) => icon.includes(search));
});

const currentPageIcons = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return filteredIcons.value.slice(start, end);
});

const iconPickerInstance = ref<Nullable<InputInstance>>();
const popoverInstance = ref<Nullable<PopoverInstance>>();

const handleIconSelect = (icon: string) => {
  iconValue.value = `${currentIconSet.value}:${icon}`;
  // if (popoverInstance.value) {
  //   popoverInstance.value.hide();
  // }
};

const handlePageChange = (page: number) => {
  currentPage.value = page;
};
</script>

<template>
  <div class="w-full">
    <ElInput ref="iconPickerInstance" v-model="iconValue" placeholder="请选择图标" readonly>
      <template #prefix>
        <IconifyIcon v-if="iconValue" :name="iconValue" class="text-lg" />
      </template>
    </ElInput>

    <ElPopover
      ref="popoverInstance"
      shadow="none"
      :popper-style="{
        padding: 0,
        borderRadius: 'var(--radius)',
      }"
      :virtual-ref="iconPickerInstance"
      virtual-triggering
      width="600px"
      trigger="click"
      :teleported="false"
      @show="fetchIcons"
    >
      <div v-loading="loading" class="grid grid-cols-8 gap-x-1 min-h-72">
        <div class="col-span-2 border-r border-r-solid border-el-border-light">
          <ElScrollbar view-class="h-full flex flex-col gap-y-1" :height="300">
            <div
              v-for="icons in iconSets"
              :key="icons.value"
              :class="
                cn('cursor-pointer p-1.5 flex items-center px-2 hover:bg-el-fill', {
                  'bg-el-fill': icons.value === currentIconSet,
                })
              "
              @click="changeIconSet(icons.value)"
            >
              <span
                :class="
                  cn('line-clamp-1 text-el-text-secondary text-sm', {
                    'text-el-text-primary font-medium': icons.value === currentIconSet,
                  })
                "
                >{{ icons.label }}</span
              >
            </div>
          </ElScrollbar>
        </div>

        <div class="col-span-6 flex flex-col px-2 py-3 relative">
          <ElInput
            v-model="searchValue"
            placeholder="请输入图标名称搜索"
            clearable
            @input="onSearchInput"
          />

          <template v-if="currentPageIcons.length">
            <div class="flex-1 overflow-y-auto content-start p-1 pt-2">
              <div class="flex flex-wrap gap-1.5 pr-1">
                <div
                  v-for="icon in currentPageIcons"
                  :key="icon"
                  :class="
                    cn(
                      'p-1 flex flex-col justify-center items-center cursor-pointer rounded-md hover:outline hover:outline-primary hover:opacity-60',
                      {
                        'outline outline-primary': `${currentIconSet}:${icon}` === iconValue,
                      },
                    )
                  "
                  :title="icon"
                  @click="handleIconSelect(icon)"
                >
                  <IconifyIcon :name="`${currentIconSet}:${icon}`" class="text-lg" />
                </div>
              </div>
            </div>

            <div class="flex justify-center border-t border-el-border-light pt-2" @click.stop>
              <ElPagination
                v-model:current-page="currentPage"
                :page-size="pageSize"
                :total="filteredIcons.length"
                background
                layout="prev, pager, next, total"
                size="small"
                @current-change="handlePageChange"
              />
            </div>
          </template>

          <template v-else>
            <div class="flex-1 flex flex-col items-center justify-center">
              <ElEmpty title="暂无图标" :image-size="80" />
            </div>
          </template>
        </div>
      </div>
    </ElPopover>
  </div>
</template>

<style scoped></style>
