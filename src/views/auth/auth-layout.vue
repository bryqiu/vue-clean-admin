<script setup lang="ts">
import { Account, Introduce } from './modules';

defineOptions({
  name: 'AuthLayout',
});
</script>

<template>
  <div class="size-full grid grid-cols-5 gap-2">
    <!--左侧登录-->
    <div class="col-span-5 lg:col-span-2">
      <Account />
    </div>
    <!--右侧介绍-->
    <div class="col-span-3 hidden lg:block">
      <Introduce />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
