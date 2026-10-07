<script setup lang="ts">
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>

<template>
  <button
    class="fixed bottom-8 right-8 z-50 rounded-full bg-gold p-4 text-black shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-gold-light"
    title="Vissza a tetejére"
    aria-label="Vissza a tetejére"
    @click="scrollToTop"
  >
    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    </svg>
  </button>
</template>
