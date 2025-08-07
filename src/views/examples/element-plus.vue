<script setup lang="ts">
import { ExampleCell, type Feature, Features, Introduce } from './components';
import {
  ElAlert,
  ElCard,
  ElCheckbox,
  ElCheckboxGroup,
  ElCol,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElOption,
  ElRadio,
  ElRadioGroup,
  ElSegmented,
  ElSelect,
  ElSwitch,
  ElTimePicker,
} from 'element-plus';
import { reactive, ref } from 'vue';

defineOptions({
  name: 'ElementPlus',
});

const features: Feature[] = [
  {
    text: '全局美化部分 Element Plus 组件样式，比如卡片、菜单、分段控制器等',
  },
  {
    text: '在主题系统中，丰富 Element Plus 主题色阶，写入 Tailwind Css 配置以保持视觉统一',
    textSlot: 'feature2',
  },
  {
    textSlot: 'feature1',
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
    >
      <div class="flex flex-col gap-y-2 text-sm">
        <span>
          Clean Admin 使用 Element Plus 组件库，这是一套基于 Vue 3，面向设计师和开发者的企业级组件库
        </span>

        <span>在组件库的基础上，Clean Admin 做了部分扩展</span>

        <Features class="pl-4" :features="features">
          <template #feature1>
            <span>专栏相关文章：</span>
            <ElLink type="primary" target="_blank" href="https://github.com/bryqiu/Blog/issues/12">
              《一篇文章实现 Element Plus 动态切换主题色》
            </ElLink>
            <ElLink type="primary" target="_blank" href="https://github.com/bryqiu/Blog/issues/15">
              《Tailwind Css 中使用 Element Plus 主题系统的方案与实现》
            </ElLink>
          </template>
        </Features>
      </div>
    </Introduce>
    <ElCard header="按钮">
      <div class="flex flex-col gap-y-4">
        <div class="flex gap-x-4">
          <ExampleCell title="大小按钮">
            <ElButton type="primary" size="large">按钮</ElButton>
            <ElButton type="primary">按钮</ElButton>
            <ElButton type="primary" size="small">按钮</ElButton>
          </ExampleCell>
          <ExampleCell title="按钮类型">
            <ElButton>Default</ElButton>
            <ElButton type="primary">Primary</ElButton>
            <ElButton type="success">Success</ElButton>
            <ElButton type="info">Info</ElButton>
            <ElButton type="warning">Warning</ElButton>
          </ExampleCell>
        </div>
      </div>
    </ElCard>

    <ElCard header="Segmented 分段控制器">
      <div class="flex items-center w-full gap-x-4">
        <ExampleCell title="默认分段器">
          <ElSegmented v-model="segmentValue" class="not-style" :options="segmentOptions" block />
        </ExampleCell>
        <ExampleCell title="简约-分段器(默认样式)">
          <ElSegmented v-model="segmentValue" :options="segmentOptions" block />
        </ExampleCell>
      </div>
    </ElCard>

    <ElCard header="表单控件">
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

    <ElCard header="Alert 提示">
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
