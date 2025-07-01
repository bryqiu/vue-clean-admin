<script setup lang="ts">
const { pageTransitionName } = useThemeSettings();
</script>

<template>
  <div class="flex-1 bg-el-fill-light p-4 rounded-lg mt-14">
    <RouterView v-slot="{ Component, route }">
      <Transition :name="pageTransitionName" mode="out-in" appear>
        <!-- <KeepAlive :include="[]"> -->
        <component :is="Component" :key="route.path" />
        <!-- </KeepAlive> -->
      </Transition>
    </RouterView>
  </div>
</template>

<style scoped lang="scss"></style>
