<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { channelOption } from '../data';
import { BaseContainer } from '../components';

defineOptions({
  name: 'ChannelChart',
});

const channelInstance = ref<NullType<HTMLDivElement>>(null);
const { renderChart } = useEcharts(channelInstance);

onMounted(() => {
  renderChart(channelOption);
});
</script>

<template>
  <BaseContainer title="用户访问渠道分析(月份)">
    <!--用户访问渠道数据分析-堆叠柱状图-->
    <div ref="channelInstance" class="size-full h-96" />
  </BaseContainer>
</template>

<style scoped lang="scss"></style>
