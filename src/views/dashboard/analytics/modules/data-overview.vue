<script setup lang="ts">
import { StatsCard } from '../components';
import { userVisitList } from '../data';

defineOptions({
  name: 'DataOverview',
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
    <StatsCard v-for="item in userVisitList" :key="item.label" v-bind="item" />
  </div>
</template>

<style scoped lang="scss"></style>
