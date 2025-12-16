<script setup lang="ts">
defineOptions({
  name: 'Project',
});

interface TechStack {
  category: string;
  items: string[];
}

const techStack: TechStack[] = [
  {
    category: '基础构建',
    items: ['Vue 3', 'TypeScript', 'Vite', 'Element Plus', 'Tailwind Css'],
  },
  {
    category: '生态技术',
    items: ['Pinia', 'Vue Router', 'VueUse'],
  },
  {
    category: '风格规范与格式化',
    items: ['ESLint', 'Prettier', 'Husky', 'Stylelint', 'Commitlint'],
  },
  {
    category: '其他',
    items: ['Axios', 'Echarts', 'Lodash-es', 'Iconify', 'dayjs'],
  },
];

const links = [
  {
    title: 'GitHub源码',
    icon: 'ri:github-fill',
    link: 'https://github.com/bryqiu/vue-clean-admin',
  },
  {
    title: '中后台系统建设指南专栏',
    icon: 'ri:book-marked-line',
    link: 'https://github.com/bryqiu/Blog?tab=readme-ov-file#%E9%80%9A%E4%BF%97%E6%98%93%E6%87%82%E7%9A%84%E4%B8%AD%E5%90%8E%E5%8F%B0%E7%B3%BB%E7%BB%9F%E5%BB%BA%E8%AE%BE%E6%8C%87%E5%8D%97%E4%B8%93%E6%A0%8F',
  },
];

const openLink = (link: string) => {
  window.open(link, '_blank');
};
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <ElCard header="项目介绍">
      <div class="text-sm flex flex-col gap-y-4">
        <span
          ><span class="font-semibold">Vue Clean Admin 是一个现代化的中后台管理系统模板</span
          >，是专栏《中后台系统建设指南》的实践项目，配合相关文章，可供学习。</span
        >

        <span>
          比起开箱即用的 Admin
          模板，我更想告诉你的是：一个中后台系统到底是如何构建起来的，这些功能模块是如何设计和实现的，工程化是如何考虑的......
        </span>
      </div>
    </ElCard>
    <div class="grid grid-cols-2 gap-x-4">
      <div
        v-for="(link, index) in links"
        :key="index"
        class="border border-el-border-light rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-el-fill-light duration-300"
        @click="openLink(link.link)"
      >
        <div class="flex items-center gap-x-2">
          <IconifyIcon :name="link.icon" class="text-xl" />
          <div class="font-semibold text-sm">{{ link.title }}</div>
        </div>
        <IconifyIcon name="ri:share-box-line" />
      </div>
    </div>

    <div class="mt-4 space-y-2">
      <span class="text-sm font-semibold">主要技术生态</span>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="stack in techStack"
          :key="stack.category"
          class="p-3 rounded-lg bg-el-fill-light"
        >
          <div class="text-xs mb-2 text-el-text-secondary">
            {{ stack.category }}
          </div>
          <div class="flex flex-wrap gap-1">
            <span class="text-sm">{{ stack.items.join(' · ') }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-3 flex items-center">
      <span class="text-xs"> 完整技术列表请参考：</span>
      <ElLink
        type="primary"
        href="https://github.com/bryqiu/vue-clean-admin/blob/main/package.json"
        target="blank"
        class="text-xs!"
      >
        package.json
      </ElLink>
    </div>

    <ElDescriptions :column="3" border direction="vertical">
      <ElDescriptionsItem label="当前版本号">v1.0.0</ElDescriptionsItem>
      <ElDescriptionsItem label="更新日志">
        <ElLink type="primary" href="#" target="blank">查看更新日志</ElLink>
      </ElDescriptionsItem>
      <ElDescriptionsItem label="开源协议">
        <ElLink
          type="primary"
          href="https://github.com/bryqiu/vue-clean-admin/blob/main/LICENSE"
          target="blank"
        >
          MIT
        </ElLink>
      </ElDescriptionsItem>
      <ElDescriptionsItem label="Node.js 版本">>= 16.0.0</ElDescriptionsItem>
      <ElDescriptionsItem label="浏览器支持">
        Chrome >= 87, Firefox >= 78, Safari >= 14
      </ElDescriptionsItem>
      <ElDescriptionsItem label="构建工具">Vite 5.x</ElDescriptionsItem>
    </ElDescriptions>
  </div>
</template>

<style scoped lang="scss"></style>
