<template>
  <div
    :class="
      twMerge(
        'relative text-clip bg-[linear-gradient(to_right,var(--el-border-color-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--el-border-color-light)_1px,transparent_1px)] bg-[size:24px_24px]',
        'flex size-full justify-center items-center',
      )
    "
  >
    <div
      :class="
        twMerge(
          'absolute pointer-events-none inset-0',
          'bg-el-bg-overlay',
          '[mask-image:radial-gradient(ellipse_at_center,transparent,black_80%)]',
        )
      "
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
</script>

<style scoped></style>
