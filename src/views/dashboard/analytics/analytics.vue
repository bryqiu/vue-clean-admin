<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ElCard, ElLink, ElScrollbar, ElSegmented, ElTag, ElText } from 'element-plus';
import { BoardItem } from './components';
import {
  boardData,
  dashboardOption,
  histogramOption,
  pieChartsOption,
  projectAbout,
  segmentedOptions,
  userVisitOption,
} from './data';

defineOptions({
  name: 'Home',
});

const segmentedValue = ref('all');

const userInstance = ref<NullType<HTMLDivElement>>(null);
const { renderChart: userVisitChart } = useEcharts(userInstance);

const dashboardInstance = ref<NullType<HTMLDivElement>>(null);
const { renderChart: dashboardChart } = useEcharts(dashboardInstance);

const histogramInstance = ref<NullType<HTMLDivElement>>(null);
const { renderChart: histogramChart } = useEcharts(histogramInstance);

const pieChartsInstance = ref<NullType<HTMLDivElement>>(null);
const { renderChart: pieChartsChart } = useEcharts(pieChartsInstance);

const loadOptions = () => {
  userVisitChart(userVisitOption);
  dashboardChart(dashboardOption);
  histogramChart(histogramOption);
  pieChartsChart(pieChartsOption);
};

onMounted(() => {
  loadOptions();
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid grid-cols-6 gap-4">
      <!--顶部左侧-->
      <ElCard shadow="never" class="col-span-6 lg:col-span-4">
        <div class="flex flex-col gap-6">
          <div class="flex-b-c">
            <div class="flex items-center gap-2">
              <span class="app-h5">数据总览</span
              ><span class="app-h8 max-sm:hidden">更新时间：2024-329-3223</span>
            </div>
            <div>
              <ElSegmented v-model="segmentedValue" :options="segmentedOptions" class="simple" />
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-2">
            <BoardItem
              v-for="(item, index) in boardData"
              :key="index"
              :label="item.label"
              :value="item.value"
              :icon="item.icon"
            />
          </div>
          <div class="wh-full">
            <span class="app-h6">用户访问量折现图</span>
            <div ref="userInstance" class="w-full h-72" />
          </div>
        </div>
      </ElCard>
      <!--顶部-右侧-->
      <div class="col-span-6 lg:col-span-2 flex flex-col gap-4">
        <ElCard shadow="never" class="h-1/3">
          <span class="app-h6">项目动态</span>
          <div class="w-full h-[calc(100%-2rem)] mt-2">
            <ElScrollbar
              :view-style="{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                paddingRight: '0.5rem',
              }"
            >
              <div
                v-for="(item, index) in projectAbout"
                :key="index"
                class="p-2 flex items-center rounded-[--app-round-base] bg-[var(--el-fill-color-light)] gap-2"
              >
                <ElTag effect="light">{{ item.tagName }}</ElTag>
                <ElLink v-if="item.link" :href="item.link" target="_blank">
                  {{ item.text }}
                </ElLink>
                <ElText v-else>{{ item.text }}</ElText>
              </div>
            </ElScrollbar>
          </div>
        </ElCard>
        <ElCard shadow="never" class="h-72 lg:h-2/3">
          <span class="app-h6">仪表盘</span>
          <div ref="dashboardInstance" class="wh-full" />
        </ElCard>
      </div>
    </div>
    <!--中间-->
    <div class="w-full h-80 grid grid-cols-12 gap-4">
      <ElCard shadow="never" class="col-span-6">
        <div ref="pieChartsInstance" class="wh-full" />
      </ElCard>
      <ElCard shadow="never" class="col-span-6">
        <div ref="histogramInstance" class="wh-full" />
      </ElCard>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
