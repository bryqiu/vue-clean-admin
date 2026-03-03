<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core';
import { PrimaryColorPicker, SettingCell, SettingMode } from '../widgets';
import { computed, ref } from 'vue';
import type { Component } from 'vue';
import { LayoutModeEnum, PageTransitionEnum } from '@/enums';
import {
  accessibilityModeOptions,
  breadcrumbStyleOptions,
  layoutModeOptions,
  pageTransitionOptions,
  themeModeOptions,
  whetherOptions,
} from '@/dict';
import { loadLocaleMessages } from '@/plugins/i18n';
import { cn } from '@/utils';
import { ThemeModeEnum } from '@/enums';
import { supportLocaleOptions } from '@/locale';

defineOptions({
  name: 'Preferences',
});

type PreferenceContainerKey =
  | 'appearance'
  | 'navigation'
  | 'motion'
  | 'accessibility'
  | 'i18n'
  | 'widgets';

const preferenceContainers = [
  { key: 'appearance', label: '外观', desc: '主题、色彩与水印' },
  { key: 'navigation', label: '导航与布局', desc: '布局、菜单与面包屑' },
  { key: 'motion', label: '动效', desc: '页面切换与动效' },
  { key: 'accessibility', label: '无障碍', desc: '视觉辅助与可读性' },
  { key: 'i18n', label: '语言与地区', desc: '界面语言与区域' },
  { key: 'widgets', label: '小部件', desc: '快捷组件显示控制' },
] as const;

const activePreferenceKey = ref<PreferenceContainerKey>('appearance');

const [DefineAppearanceContainer, AppearanceContainer] = createReusableTemplate();
const [DefineNavigationContainer, NavigationContainer] = createReusableTemplate();
const [DefineMotionContainer, MotionContainer] = createReusableTemplate();
const [DefineAccessibilityContainer, AccessibilityContainer] = createReusableTemplate();
const [DefineI18nContainer, I18nContainer] = createReusableTemplate();
const [DefineWidgetsContainer, WidgetsContainer] = createReusableTemplate();
const [DefineTransitionMotionContainer, TransitionMotionContainer] = createReusableTemplate<{
  pageTransition: BaseOptions<PageTransitionEnum>;
}>();

const preferenceContainerComponents: Record<PreferenceContainerKey, Component> = {
  appearance: AppearanceContainer,
  navigation: NavigationContainer,
  motion: MotionContainer,
  accessibility: AccessibilityContainer,
  i18n: I18nContainer,
  widgets: WidgetsContainer,
};

const activePreferenceComponent = computed(
  () => preferenceContainerComponents[activePreferenceKey.value],
);

const {
  accessibilityMode,
  currentThemeMode,
  enableMenuAccordion,
  showWatermark,
  watermarkText,
  isMenuCollapse,
  currentLayoutMode,
  showBreadcrumb,
  showBreadcrumbIcon,
  breadcrumbStyle,
  pageTransitionName,
  enableReloadViewWidget,
  enableFullscreenWidget,
  enableNotificationWidget,
  enableThemeWidget,
  enableLocaleWidget,
  enableMenuCollapseWidget,
} = usePreferences();

const { getCurrentLocale } = useI18n();

/**
 * 设置页面过渡动画
 * @param name 动画名称
 */
const setPageTransitionName = (name: PageTransitionEnum) => {
  pageTransitionName.value = name;
};

/**
 * 设置主题模式
 * @param mode 主题模式值
 */
const setThemeMode = (mode: GetObjectValues<typeof ThemeModeEnum>) => {
  currentThemeMode.value = mode;
};

/**
 * 设置布局模式
 * @param value 布局值：左侧导航栏 / 顶部导航栏 / 双列导航栏
 */
const setCurrentLayoutMode = (value: GetObjectValues<typeof LayoutModeEnum>) => {
  currentLayoutMode.value = value;
};

/**
 * 设置语言
 * @param locale 语言
 */
const setCurrentLocale = (locale: SupportedLocales) => {
  loadLocaleMessages(locale);
};
</script>

<template>
  <div class="space-y-6">
    <DefineAppearanceContainer>
      <SettingCell title="主题模式" desc="明暗或跟随系统">
        <div class="flex gap-x-2">
          <SettingMode
            v-for="themeMode in themeModeOptions"
            :key="themeMode.value"
            :label="themeMode.label"
            :value="themeMode.value"
            :icon="themeMode.icon"
            :mode-icon="themeMode.modeIcon"
            :is-active-item="themeMode.value === currentThemeMode"
            @click="setThemeMode(themeMode.value)"
          />
        </div>
      </SettingCell>
      <SettingCell title="主题色调" desc="全局应用的主题色彩">
        <PrimaryColorPicker />
      </SettingCell>
      <SettingCell title="是否显示水印" desc="是否全屏展示水印">
        <ElSegmented v-model="showWatermark" :options="whetherOptions" block />
      </SettingCell>
      <SettingCell title="水印内容" desc="全屏水印展示的内容">
        <ElInput v-model="watermarkText" :disabled="!showWatermark" />
      </SettingCell>
    </DefineAppearanceContainer>

    <DefineNavigationContainer>
      <SettingCell title="侧边栏布局" desc="左侧导航栏 / 顶部导航栏 / 双列导航栏">
        <div class="flex gap-x-2">
          <SettingMode
            v-for="item in layoutModeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :mode-icon="item.modeIcon"
            :is-active-item="item.value === currentLayoutMode"
            @click="setCurrentLayoutMode(item.value)"
          />
        </div>
      </SettingCell>
      <SettingCell title="是否折叠导航栏">
        <ElSegmented v-model="isMenuCollapse" :options="whetherOptions" />
      </SettingCell>
      <SettingCell title="是否启用菜单手风琴" desc="每次只允许展开一个菜单项">
        <ElSegmented v-model="enableMenuAccordion" :options="whetherOptions" />
      </SettingCell>
      <SettingCell title="是否显示面包屑">
        <ElSegmented v-model="showBreadcrumb" :options="whetherOptions" block />
      </SettingCell>
      <SettingCell title="是否显示面包屑图标">
        <ElSegmented
          v-model="showBreadcrumbIcon"
          :options="whetherOptions"
          :disabled="!showBreadcrumb"
        />
      </SettingCell>
      <SettingCell title="面包屑样式" desc="默认样式 / 箭头样式 / 平行四边形样式">
        <ElRadioGroup v-model="breadcrumbStyle" :disabled="!showBreadcrumb">
          <ElRadioButton
            v-for="item in breadcrumbStyleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </ElRadioGroup>
      </SettingCell>
    </DefineNavigationContainer>

    <DefineMotionContainer>
      <DefineTransitionMotionContainer v-slot="{ pageTransition }">
        <div
          class=""
          :class="
            cn(
              'h-12 w-16 border border-el-border p-1 rounded cursor-pointer hover:border-el-primary',
              pageTransition.value === pageTransitionName && 'border-el-primary',
            )
          "
          @click="setPageTransitionName(pageTransition.value)"
        >
          <div
            class="size-full bg-el-fill rounded"
            :style="{ animation: `${pageTransition.value}-view 2s infinite` }"
          />
        </div>
        <span
          :class="
            cn(
              'text-xs text-el-text-secondary',
              pageTransition.value === pageTransitionName && 'text-el-text-primary',
            )
          "
          >{{ pageTransition.label }}</span
        >
      </DefineTransitionMotionContainer>

      <SettingCell title="页面切换动画" desc="页面切换时展示的过渡动画效果">
        <ElPopover :width="400" trigger="click">
          <template #reference>
            <ElButton plain>选择动画</ElButton>
          </template>
          <div class="grid grid-cols-1 gap-4">
            <div
              v-for="(item, index) in pageTransitionOptions"
              :key="index"
              class="flex flex-col gap-y-1"
            >
              <span class="text-xs text-el-text-placeholder">{{ item.label }}</span>
              <div class="flex items-center gap-x-4">
                <div
                  v-for="pageTransition in item.options"
                  :key="pageTransition.value"
                  class="flex flex-col items-center gap-y-0.5"
                >
                  <TransitionMotionContainer :page-transition="pageTransition" />
                </div>
              </div>
            </div>
          </div>
        </ElPopover>
      </SettingCell>
    </DefineMotionContainer>

    <DefineAccessibilityContainer>
      <SettingCell title="无障碍模式" desc="无障碍模式下的视觉辅助效果">
        <ElRadioGroup v-model="accessibilityMode">
          <ElRadioButton
            v-for="item in accessibilityModeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </ElRadioGroup>
      </SettingCell>
    </DefineAccessibilityContainer>

    <DefineI18nContainer>
      <SettingCell title="语言" desc="界面显示语言">
        <ElSelect :model-value="getCurrentLocale" class="w-32!" @change="setCurrentLocale">
          <ElOption
            v-for="item in supportLocaleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </ElSelect>
      </SettingCell>
    </DefineI18nContainer>

    <DefineWidgetsContainer>
      <SettingCell title="刷新视图" desc="显示页面刷新视图按钮">
        <ElSwitch v-model="enableReloadViewWidget" />
      </SettingCell>
      <SettingCell title="全屏视图" desc="显示全屏切换视图按钮">
        <ElSwitch v-model="enableFullscreenWidget" />
      </SettingCell>
      <SettingCell title="消息通知" desc="显示消息通知按钮">
        <ElSwitch v-model="enableNotificationWidget" />
      </SettingCell>
      <SettingCell title="主题切换" desc="显示主题切换按钮">
        <ElSwitch v-model="enableThemeWidget" />
      </SettingCell>
      <SettingCell title="语言切换" desc="显示语言切换按钮">
        <ElSwitch v-model="enableLocaleWidget" />
      </SettingCell>
      <SettingCell
        title="菜单折叠"
        desc="显示菜单折叠/展开按钮（只在侧边栏布局 SideLayout 下起效）"
      >
        <ElSwitch v-model="enableMenuCollapseWidget" />
      </SettingCell>
    </DefineWidgetsContainer>

    <div class="space-y-2">
      <div class="text-base font-semibold text-el-text-primary">个人偏好</div>
      <div class="text-xs text-el-text-secondary">用户个性化偏好设置</div>
      <div class="flex flex-wrap gap-2 pt-2">
        <div
          v-for="item in preferenceContainers"
          :key="item.key"
          :class="
            cn(
              'px-3 py-1 rounded-full text-xs cursor-pointer border border-el-border-light text-el-text-secondary hover:text-el-text-primary',
              {
                'bg-el-fill text-el-text-primary': item.key === activePreferenceKey,
              },
            )
          "
          @click="activePreferenceKey = item.key"
        >
          {{ item.label }}
        </div>
      </div>
    </div>

    <div class="border border-el-border-light rounded space-y-6 p-4">
      <component :is="activePreferenceComponent" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
