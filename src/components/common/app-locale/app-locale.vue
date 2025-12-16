<script setup lang="ts">
import { loadLocaleMessages } from '@/plugins/i18n';
import { supportLocaleOptions } from '@/locale';

defineOptions({
  name: 'AppLocale',
});

const { getCurrentLocale } = useI18n();
const { reloadViewHandle } = useLoadView();

/**
 * 更新语言环境
 * @param locale 目标语言
 */
const updateLocale = (locale: SupportedLocales) => {
  loadLocaleMessages(locale);
  reloadViewHandle();
};
</script>

<template>
  <ElPopover
    trigger="click"
    :show-arrow="false"
    :popper-style="{ borderRadius: 'var(--radius)' }"
    placement="bottom-end"
    popper-class="app-locale-popover"
    width="150"
    :popper-options="{
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [-5, 2],
          },
        },
      ],
    }"
  >
    <template #reference>
      <div>
        <ActionButton icon="ri:translate-2" />
      </div>
    </template>
    <template #default>
      <div class="flex flex-col gap-y-1">
        <div
          v-for="item in supportLocaleOptions"
          :key="item.value"
          class="flex items-center rounded-lg px-2 py-1.5 text-el-text-primary cursor-pointer hover:bg-el-fill"
          :class="{ 'bg-el-fill': item.value === getCurrentLocale }"
          @click="updateLocale(item.value)"
        >
          <div class="flex items-center justify-between gap-x-2 w-full">
            <div class="flex items-center gap-x-2">
              <IconifyIcon :name="item.icon" class="rounded-full" />
              <span class="text-sm line-clamp-1">{{ item.label }}</span>
            </div>
            <IconifyIcon
              v-if="item.value === getCurrentLocale"
              name="ri:check-line"
              :class="item.value === getCurrentLocale && 'text-el-text-placeholder'"
            />
          </div>
        </div>
      </div>
    </template>
  </ElPopover>
</template>

<style lang="scss">
.el-popover.el-popper.app-locale-popover {
  min-width: 120px;
  padding: 4px;
}
</style>
