<script setup lang="ts">
defineOptions({
  name: 'BasicMain',
});

const { pageTransitionName } = useThemeSettings();
const { getCurrentHeaderHeight } = useLayoutSettings();
</script>

<template>
  <div class="flex-1 p-4 bg-el-fill-blank" :style="{ marginTop: `${getCurrentHeaderHeight}px` }">
    <RouterView v-slot="{ Component, route }">
      <Transition :name="pageTransitionName" mode="out-in" appear>
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </div>
</template>

<style scoped lang="scss"></style>
