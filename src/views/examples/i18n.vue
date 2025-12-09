<script setup lang="ts">
import { Introduce, type IntroduceProps } from './widgets';
import { ref } from 'vue';
import { ElCard } from 'element-plus';
import { loadLocaleMessages } from '@/plugins/i18n';
import { supportLocaleOptions } from '@/locale';

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
    text: '按需加载 JSON 语言包',
  },
  {
    text: '将当前语言写入 localStorage 持久化，避免刷新页面后语言丢失。',
  },
  {
    text: '同步处理 Element Plus、dayjs 国际化',
  },
]);

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <Introduce title="i18n 国际化" :links :features>
      <span
        >{{ `Clean Admin 使用 Vue I18n 作为国际化方案。提供组件 <AppLocale /> 用于切换国际化语言`
        }}</span
      >
    </Introduce>

    <ElCard>
      <template #header>
        <span class="text-sm font-medium">切换国际化语言</span>
      </template>
      <div>当前语言：{{ $i18n.locale }}</div>
      <div class="mt-2">
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
        <div class="mt-4">
          {{ t('hello') }}
        </div>
        <div class="mt-4">
          {{ t('introText') }}
        </div>
      </div>
    </ElCard>
  </div>
</template>

<style scoped lang="scss"></style>
