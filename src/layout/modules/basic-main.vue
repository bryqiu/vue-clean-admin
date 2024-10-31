<script setup lang="ts"></script>

<template>
  <div
    class="h-full overflow-auto overflow-x-hidden flex-1 bg-[var(--el-fill-color-light)] p-4 rounded-[var(--app-round-base)]"
  >
    <RouterView v-slot="{ Component, route }">
      <Transition name="route-fade" mode="out-in" appear>
        <KeepAlive>
          <component :is="Component" :key="route.path" />
        </KeepAlive>
      </Transition>
    </RouterView>
  </div>
</template>

<style scoped lang="scss"></style>
