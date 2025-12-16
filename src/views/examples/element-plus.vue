<script setup lang="ts">
import { Introduce, IntroduceProps } from './widgets';

import { reactive, ref } from 'vue';

defineOptions({
  name: 'ElementPlus',
});

const features: IntroduceProps['features'] = [
  {
    text: '全局美化部分 Element Plus 组件样式，比如卡片、菜单、分段控制器等',
    slotName: 'style',
  },
  {
    text: '以 Element plus 主题系统为主，构建项目整体色彩，将 Element Plus 色彩融入 Tailwind Css 配置以允许原子化写法',
  },
  {
    text: '专栏文章',
    slotName: 'feature1',
  },
];

const segmentOptions = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const segmentValue = ref('Mon');

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <Introduce
      title="Element Plus 组件库"
      :links="[
        {
          url: 'https://element-plus.org/',
          text: '查看官方文档',
        },
      ]"
      :features
    >
      <span>
        Clean Admin 使用 Element Plus 组件库，这是一套基于 Vue 3，面向设计师和开发者的企业级组件库
        <br />
        在组件库的基础上，Clean Admin 做了部分扩展：
      </span>
      <template #style="{ text }">
        {{ text }}，样式文件：<ElLink
          type="primary"
          target="_blank"
          href="https://github.com/bryqiu/vue-clean-admin/tree/main/src/theme/styles/element.scss"
        >
          element.scss
        </ElLink>
      </template>
      <template #feature1>
        <span>专栏相关文章：</span>
        <ElLink type="primary" target="_blank" href="https://github.com/bryqiu/Blog/issues/12">
          《一篇文章实现 Element Plus 动态切换主题色》
        </ElLink>
        <ElLink type="primary" target="_blank" href="https://github.com/bryqiu/Blog/issues/15">
          《Tailwind Css 中使用 Element Plus 主题系统的方案与实现》
        </ElLink>
      </template>
    </Introduce>
    <ElCard header="按钮">
      <template #header>
        <span class="text-sm font-medium">Button 按钮</span>
      </template>
      <div class="flex gap-y-4">
        <ElButton type="primary">Primary</ElButton>
        <ElButton type="success">Success</ElButton>
        <ElButton type="info">Info</ElButton>
        <ElButton type="warning">Warning</ElButton>
        <ElButton>default</ElButton>
      </div>
    </ElCard>

    <ElCard>
      <template #header>
        <span class="text-sm font-medium">Segmented 分段控制器</span>
      </template>
      <div class="flex items-center gap-x-4">
        <ElSegmented
          v-model="segmentValue"
          class="not-style w-full"
          :options="segmentOptions"
          block
        />
        <ElSegmented v-model="segmentValue" :options="segmentOptions" block class="w-full" />
      </div>
    </ElCard>

    <ElCard>
      <template #header>
        <span class="text-sm font-medium">Form 表单</span>
      </template>
      <ElForm :model="form">
        <ElFormItem label="Activity name">
          <ElInput v-model="form.name" />
        </ElFormItem>
        <ElFormItem label="Activity zone">
          <ElSelect v-model="form.region" placeholder="please select your zone">
            <ElOption label="Zone one" value="shanghai" />
            <ElOption label="Zone two" value="beijing" />
          </ElSelect>
        </ElFormItem>
        <ElFormItem label="Activity time">
          <ElCol :span="11">
            <ElDatePicker
              v-model="form.date1"
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          </ElCol>
          <ElCol :span="2" class="text-center">
            <span class="text-gray-500">-</span>
          </ElCol>
          <ElCol :span="11">
            <ElTimePicker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
          </ElCol>
        </ElFormItem>
        <ElFormItem label="Instant delivery">
          <ElSwitch v-model="form.delivery" />
        </ElFormItem>
        <ElFormItem label="Activity type">
          <ElCheckboxGroup v-model="form.type">
            <ElCheckbox value="Online activities" name="type"> Online activities </ElCheckbox>
            <ElCheckbox value="Promotion activities" name="type"> Promotion activities </ElCheckbox>
            <ElCheckbox value="Offline activities" name="type"> Offline activities </ElCheckbox>
            <ElCheckbox value="Simple brand exposure" name="type">
              Simple brand exposure
            </ElCheckbox>
          </ElCheckboxGroup>
        </ElFormItem>
        <ElFormItem label="Resources">
          <ElRadioGroup v-model="form.resource">
            <ElRadio value="Sponsor">Sponsor</ElRadio>
            <ElRadio value="Venue">Venue</ElRadio>
          </ElRadioGroup>
        </ElFormItem>
        <ElFormItem label="Activity form">
          <ElInput v-model="form.desc" type="textarea" />
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primary">Create</ElButton>
          <ElButton>Cancel</ElButton>
        </ElFormItem>
      </ElForm>
    </ElCard>

    <ElCard>
      <template #header>
        <span class="text-sm font-medium">Alert 提示</span>
      </template>
      <div class="flex flex-col gap-y-2">
        <ElAlert title="Success alert" type="success" show-icon />
        <ElAlert title="Info alert" type="info" show-icon />
        <ElAlert title="Warning alert" type="warning" show-icon />
        <ElAlert title="Error alert" type="error" show-icon />
      </div>
    </ElCard>
  </div>
</template>

<style scoped lang="scss"></style>
