<script setup lang="ts">
import { Introduce, type IntroduceProps } from './widgets';
import { computed, ref } from 'vue';
import { loadLocaleMessages } from '@/plugins/i18n';
import { localeStorageKey, supportLocaleOptions } from '@/locale';
import { getLocaleStorage } from '@/locale/helpers';
import { AppLocale } from '@/components/common/app-locale';
import dayjs from 'dayjs';

defineOptions({
  name: 'I18n',
});

const links = ref<IntroduceProps['links']>([
  {
    url: 'https://vue-i18n.intlify.dev/',
    text: 'Vue I18n 官网',
  },
]);

const features = ref<IntroduceProps['features']>([
  {
    text: '按需加载语言包：src/locale/langs/*.json',
  },
  {
    text: '同步加载 Element Plus / PlusProComponents / dayjs 语言包',
  },
]);

const { t, getCurrentLocale } = useI18n();

const dateValue = ref<Date | null>(null);

const localeLabel = computed(() => {
  return supportLocaleOptions.find((item) => item.value === getCurrentLocale.value)?.label || '-';
});

const htmlLang = computed(() => {
  return document.documentElement.lang || getCurrentLocale.value;
});

const storageLocale = computed(() => {
  const storedLocale = getLocaleStorage().currentLocale as string | undefined;
  return storedLocale || getCurrentLocale.value;
});

const dayjsSamples = computed(() => {
  const locale = getCurrentLocale.value;
  return {
    locale,
    formatted: dayjs().format('YYYY MMMM DD dddd HH:mm'),
    relative: dayjs().subtract(90, 'minute').fromNow(),
  };
});
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <Introduce title="i18n 国际化" :links :features>
      <span> Clean Admin 使用 Vue I18n 构建系统国际化，支持多种语言，支持动态切换语言。 </span>
    </Introduce>

    <ElCard>
      <template #header>
        <span class="text-sm font-medium">语言切换与状态</span>
      </template>
      <div class="flex flex-col gap-y-3">
        <span>{{ `当前语言：${getCurrentLocale}` }}</span>

        <div class="flex flex-wrap gap-2">
          <ElButton
            v-for="locale in supportLocaleOptions"
            :key="locale.value"
            plain
            @click="loadLocaleMessages(locale.value)"
          >
            <div class="space-x-1.5">
              <IconifyIcon :name="locale.icon" />
              <span>{{ locale.label }}</span>
            </div>
          </ElButton>
        </div>
      </div>
    </ElCard>

    <ElCard>
      <template #header>
        <span class="text-sm font-medium">文案翻译示例</span>
      </template>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="p-3 rounded-lg border border-el-border-lighter bg-el-fill-lighter">
          <div class="text-xs text-el-text-secondary">Key: hello</div>
          <div class="mt-2 text-lg font-medium">{{ t('hello') }}</div>
        </div>
        <div class="p-3 rounded-lg border border-el-border-lighter bg-el-fill-lighter">
          <div class="text-xs text-el-text-secondary">Key: introText</div>
          <div class="mt-2 text-sm text-el-text-regular line-clamp-3">
            {{ t('introText') }}
          </div>
        </div>
      </div>
    </ElCard>

    <ElCard>
      <template #header>
        <span class="text-sm font-medium">日期时间本地化（dayjs）</span>
      </template>
      <div class="space-y-2 text-sm text-el-text-regular">
        <div class="flex items-center gap-2">
          <span class="text-xs text-el-text-secondary">locale</span>
          <span class="font-mono">{{ dayjsSamples.locale }}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-el-text-secondary">formatted</span>
          <span class="font-mono">{{ dayjsSamples.formatted }}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-el-text-secondary">relative</span>
          <span class="font-mono">{{ dayjsSamples.relative }}</span>
        </div>
      </div>
    </ElCard>

    <ElCard>
      <template #header>
        <span class="text-sm font-medium">组件库语言联动</span>
      </template>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div class="p-3 rounded-lg border border-el-border-lighter bg-el-fill-lighter">
          <div class="text-sm font-medium">DatePicker</div>
          <ElDatePicker v-model="dateValue" type="date" class="mt-2 w-full" />
        </div>
        <div class="p-3 rounded-lg border border-el-border-lighter bg-el-fill-lighter">
          <div class="text-sm font-medium">Pagination</div>
          <ElPagination class="mt-2" layout="total, prev, pager, next" :total="86" />
        </div>
      </div>
      <div class="mt-3">
        <ElEmpty />
      </div>
    </ElCard>
  </div>
</template>

<style scoped lang="scss"></style>
