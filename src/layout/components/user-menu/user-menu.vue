<script setup lang="ts">
import { computed, ref } from 'vue';
import { ElDropdown, ElImage } from 'element-plus';
import UserPicture from '@/assets/images/user-picture.jpg';

defineOptions({
  name: 'UserMenu',
});

/**
 * popper.js 配置
 * TODO: https://popper.js.org/docs/v2/modifiers/offset/
 */
const popperOptions = { modifiers: [{ name: 'offset', options: { offset: [0, 5] } }] };
</script>

<template>
  <ElDropdown
    class="wh-full outline-none"
    trigger="click"
    :popper-options="popperOptions"
    popper-class="user-popper"
  >
    <div class="wh-full flex-c-c hover:bg-[var(--el-fill-color)] cursor-pointer px-2">
      <!--用户基本信息-->
      <div class="flex-c-c space-x-2 h-8">
        <ElImage
          fit="cover"
          :src="UserPicture"
          class="w-8 h-8 rounded-[var(--el-border-radius-base)]"
          alt="用户信息"
        />
        <div class="h-full flex flex-col justify-between">
          <span class="text-xs font-bold text-[var(--el-text-color-primary)]"
            >Fifteen@gmail.com</span
          >
          <span class="text-xs text-[var(--el-text-color-secondary)]">front-end</span>
        </div>
        <AppIcon icon="mingcute:down-line" />
      </div>
      <!--菜单信息-->
      <div />
    </div>
    <template #dropdown>
      <div class="w-[300px] h-full flex flex-col space-y-2">
        <!--用户信息-->
        <div class="p-4">
          <ElImage
            fit="cover"
            :src="UserPicture"
            class="w-16 h-16 rounded-[var(--el-border-radius-base)]"
            alt="用户信息"
          />
        </div>

        <!--用户操作-->
        <div class="p-4">action</div>
        <!--退出登录-->
        <div class="p-2 border-t-[1px] border-[var(--el-border-color-light)]">
          <ActionButton icon="ri:logout-circle-r-line" text="退出登录" class="w-full" />
        </div>
      </div>
    </template>
  </ElDropdown>
</template>

<style>
div.el-popper.user-popper {
  & > span.el-popper__arrow {
    visibility: hidden;
  }
}
</style>
