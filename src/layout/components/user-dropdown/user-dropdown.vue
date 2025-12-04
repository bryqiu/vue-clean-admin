<script setup lang="ts">
import { ElPopover } from 'element-plus';
import { AppUserAvatar } from '@/components/common/app-user-avatar';
import userAvatar from '@/assets/images/user-avatar.jpg';
import { MenuCell, MenuGroup } from './widgets';
import { computed, useAttrs } from 'vue';
import type { PopoverProps } from 'element-plus';

defineOptions({
  name: 'UserDropdown',
});

const getPopoverProps = computed(() => {
  const attrs = useAttrs();

  const defaultProps: Partial<PopoverProps> = {
    width: 250,
    showArrow: false,
    popperStyle: { borderRadius: 'var(--radius)' },
    popperClass: 'user-dropdown',
  };

  return { ...defaultProps, ...attrs };
});

const openLink = (url: string) => window.open(url, '_blank');
</script>

<template>
  <ElPopover v-bind="getPopoverProps">
    <template #reference>
      <slot />
    </template>
    <template #default>
      <div class="flex flex-col">
        <div class="p-2">
          <!--用户信息-->
          <div class="flex items-center gap-x-3">
            <AppUserAvatar :src="userAvatar" size="large" />
            <div class="flex flex-col flex-1">
              <span class="text-el-text-primary text-sm font-semibold line-clamp-1">Fifteen</span>
              <span class="text-el-text-secondary text-xs line-clamp-1">bryanqiu.me@gmail.com</span>
            </div>
          </div>
          <!--登录时间-->
          <!-- <div
            class="flex items-center p-2 bg-el-primary-900 rounded-lg text-xs text-el-primary w-full truncate mt-3 mb-1"
          >
            <IconifyIcon name="ri:time-line" class="text-sm mr-1 shrink-0" />
            <span>上次登录：</span>
            <span>{{ '2025/07/21 14:21:53' }}</span>
          </div> -->
        </div>
        <MenuGroup category-name="关于账号" class="border-t border-el-border-light">
          <MenuCell title="个人资料" icon="ri:user-line" />
          <MenuCell title="账号安全" icon="ri:shield-keyhole-line" />
        </MenuGroup>
        <MenuGroup category-name="关于项目" class="border-t border-el-border-light">
          <MenuCell
            title="配套文档"
            icon="ri:book-open-line"
            @click="openLink('https://github.com/bryqiu/vue-clean-admin')"
          >
            <IconifyIcon name="ri:share-box-line" />
          </MenuCell>
          <MenuCell
            title="GitHub 源码"
            icon="ri:github-line"
            @click="openLink('https://github.com/bryqiu/vue-clean-admin')"
          >
            <IconifyIcon name="ri:share-box-line" />
          </MenuCell>
          <MenuCell
            title="系列专栏"
            icon="ri:book-marked-line"
            @click="
              openLink(
                'https://github.com/bryqiu/Blog?tab=readme-ov-file#%E9%80%9A%E4%BF%97%E6%98%93%E6%87%82%E7%9A%84%E4%B8%AD%E5%90%8E%E5%8F%B0%E7%B3%BB%E7%BB%9F%E5%BB%BA%E8%AE%BE%E6%8C%87%E5%8D%97%E4%B8%93%E6%A0%8F',
              )
            "
          >
            <IconifyIcon name="ri:share-box-line" />
          </MenuCell>
        </MenuGroup>
        <MenuGroup class="p-2 border-t border-el-border-light">
          <MenuCell title="退出登录" icon="ri:logout-box-r-line" text-class="text-red-500" />
        </MenuGroup>
      </div>
    </template>
  </ElPopover>
</template>

<style lang="scss">
.user-dropdown.el-popover.el-popper {
  padding: 0;
  box-shadow: var(--el-box-shadow);
}
</style>
