<script setup lang="ts">
import { AppTheme } from '@/components/common/app-theme';
import { AppFullScreen } from '@/components/common/app-full-screen';
import { AppLocale } from '@/components/common/app-locale';
import { ReloadView } from '../reload-view';
import { Notification } from '../notification';
import { Settings } from '../settings';
import { UserDropdownHeader } from '../user-dropdown';

defineOptions({
  name: 'BasicToolbar',
});

interface BasicToolbarProps {
  showUserDropdown?: boolean;
}

withDefaults(defineProps<BasicToolbarProps>(), {
  showUserDropdown: false,
});

const {
  enableReloadViewWidget,
  enableLocaleWidget,
  enableThemeWidget,
  enableFullscreenWidget,
  enableNotificationWidget,
} = usePreferences();
</script>

<template>
  <div class="flex items-center gap-x-3">
    <ReloadView v-if="enableReloadViewWidget" />
    <AppLocale v-if="enableLocaleWidget" />
    <AppTheme v-if="enableThemeWidget" />
    <Notification v-if="enableNotificationWidget" />
    <AppFullScreen v-if="enableFullscreenWidget" />
    <Settings />
    <template v-if="showUserDropdown">
      <ElDivider direction="vertical" />
      <UserDropdownHeader />
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
