<script setup lang="ts">
  defineProps<{
    title: string
    lead?: string
    align?: 'left' | 'center'
  }>()
</script>

<template>
  <div
    class="mb-12 max-w-3xl"
    :class="align === 'center' ? 'mx-auto text-center' : 'text-left'"
  >
    <h2 class="section-heading heading-title reveal text-[26px] lg:text-[40px]">
      {{ title }}
    </h2>
    <p
      v-if="lead"
      class="reveal mt-4 text-[16px] leading-relaxed text-white/90"
      style="--reveal-delay: 0.2s"
    >
      {{ lead }}
    </p>
  </div>
</template>

<style scoped>
  .section-heading {
    color: #fff;
    text-shadow: 0 0 40px rgba(192, 153, 55, 0.7);
  }

  .section-heading::after {
    content: '';
    display: block;
    width: 72px;
    height: 4px;
    margin-top: 0.75rem;
    background: linear-gradient(90deg, #c09937, #e8c869);
    border-radius: 9999px;
  }

  .text-center .section-heading::after {
    margin-inline: auto;
  }
</style>
