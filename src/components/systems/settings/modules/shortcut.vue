<script setup lang="ts">
defineOptions({
  name: 'Shortcut',
});

const shortcuts = [
  {
    action: '打开系统设置',
    keys: ['⌃', ','],
  },
  {
    action: '搜索菜单',
    keys: ['⌃', 'K'],
  },
  {
    action: '全局搜索',
    keys: ['⌃', '/'],
  },
  {
    action: '刷新当前页',
    keys: ['⌃', 'R'],
  },
  {
    action: '关闭当前标签',
    keys: ['⌃', 'W'],
  },
  {
    action: '新建标签',
    keys: ['⌃', 'T'],
  },
  {
    action: '跳转到主页',
    keys: ['⌥', 'H'],
  },
  {
    action: '显示快捷键提示',
    keys: ['⇧', '?'],
  },
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="space-y-2">
      <div class="text-base font-semibold text-el-text-primary">快捷方式</div>
      <div class="text-xs text-el-text-secondary">系统快捷键说明</div>
    </div>

    <div class="rounded border border-border bg-card">
      <div class="divide-y divide-border">
        <div
          v-for="item in shortcuts"
          :key="item.action"
          class="flex items-center justify-between gap-4 px-4 py-2"
        >
          <div class="text-sm text-el-text-regular">{{ item.action }}</div>
          <div class="flex justify-end">
            <div class="flex items-center gap-1">
              <template v-for="(key, index) in item.keys" :key="`${item.action}-${key}`">
                <span
                  class="inline-flex size-6 items-center justify-center rounded bg-muted text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border font-mono"
                >
                  {{ key }}
                </span>
                <span v-if="index < item.keys.length - 1" class="text-xs text-muted-foreground">
                  +
                </span>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
