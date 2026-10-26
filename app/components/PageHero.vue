<script setup lang="ts">
  import type { ImageSlot } from '~/models'

  defineProps<{
    title: string
    eyebrow?: string
    lead?: string
    image?: ImageSlot
  }>()
</script>

<template>
  <section class="page-hero relative overflow-hidden text-white">
    <!-- Fejléc háttérképének helye -->
    <!-- Háttérkép, ha van; amíg nincs, az arany színátmenetes háttér látszik -->
    <template v-if="image && !image.isEmpty">
      <div class="absolute inset-0">
        <ImageFrame :image="image" loading="eager" sizes="100vw" />
      </div>
      <div class="page-hero__overlay absolute inset-0"></div>
    </template>

    <div
      class="container relative z-10 flex h-full flex-col items-center justify-center text-center"
    >
      <p v-if="eyebrow" class="eyebrow mb-4">{{ eyebrow }}</p>
      <h1 class="heading-title text-[40px] leading-none lg:text-[68px]">
        {{ title }}
      </h1>
      <p v-if="lead" class="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed lg:text-[18px]">
        {{ lead }}
      </p>
      <slot />
    </div>

    <GrassEdge />
  </section>
</template>

<style scoped>
  .page-hero {
    height: 460px;
    margin-top: -5rem;
    padding-top: 5rem;
    padding-bottom: 3rem;
    background:
      radial-gradient(900px 400px at 50% 0%, rgba(192, 153, 55, 0.22), transparent 70%),
      #0a0a0a;
  }

  .page-hero__overlay {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.7));
  }

  h1 {
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  }

  p {
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
  }
</style>
