<script setup lang="ts">
import {
  AccessLogs,
  BulletinBoard,
  ChannelVisits,
  DataOverview,
  DayVisitsTrend,
  QuickNav,
} from './modules';

defineOptions({
  name: 'Analytics',
});
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <div class="w-full grid grid-cols-12 gap-3">
      <div class="col-span-9 flex flex-col gap-y-3">
        <DataOverview />
        <DayVisitsTrend />
      </div>
      <div class="col-span-3 flex flex-col gap-y-3">
        <BulletinBoard class="flex-1" />
        <QuickNav class="flex-1" />
      </div>
    </div>
    <ChannelVisits />
    <AccessLogs />
  </div>
</template>
