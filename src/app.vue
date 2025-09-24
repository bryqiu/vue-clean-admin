<script setup lang="ts">
import { AppConfigProvider } from '@/components/systems/app-config-provider';
</script>

<template>
  <AppConfigProvider>
    <RouterView />
  </AppConfigProvider>
</template>

<style scoped></style>
