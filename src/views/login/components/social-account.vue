<script setup lang="ts">
import { ElDivider } from 'element-plus';

defineOptions({
  name: 'SocialAccount',
});

interface accountItem {
  /** 文本 */
  text: string;
  /** 图标 */
  icon: string;
  /** 链接 */
  url: string;
}

export type AccountList = accountItem[];

interface SocialAccountProps {
  /**
   * 账号列表
   */
  accountList: AccountList;
}

withDefaults(defineProps<SocialAccountProps>(), {
  accountList: () => [],
});
</script>

<template>
  <div class="w-full text-center">
    <ElDivider>
      <span class="text-xs text-[var(--el-text-color-placeholder)] font-normal">社交账号登录</span>
    </ElDivider>
    <div class="grid grid-cols-3 gap-1.5">
      <div
        v-for="(account, index) in accountList"
        :key="index"
        class="rounded-lg p-2.5 flex-c-c gap-1 duration-300 cursor-pointer border border-solid border-[var(--el-border-color)] hover:border-[var(--el-color-primary)]"
      >
        <AppIcon :icon="account.icon" class="text-xl" />
        <span class="text-sm">{{ account.text }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
