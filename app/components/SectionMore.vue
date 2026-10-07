<script setup lang="ts">
  defineProps<{ to: string; label: string }>()
</script>

<template>
  <div class="reveal mt-12 text-center">
    <NuxtLink :to="to" class="btn-outline">
      {{ label }}
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </NuxtLink>
  </div>
</template>
