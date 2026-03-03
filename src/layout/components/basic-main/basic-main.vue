<script setup lang="ts">
defineOptions({
  name: 'BasicMain',
});

const { pageTransitionName } = usePreferences();
const { getCurrentLoadViewStatus } = useLoadView();
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition :name="pageTransitionName" mode="out-in" appear>
      <component :is="Component" v-if="getCurrentLoadViewStatus" :key="route.path" />
    </Transition>
  </RouterView>
</template>

<style scoped lang="scss"></style>
