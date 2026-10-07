<script setup lang="ts">
  import { travelInfo } from '~/data/site'

  const root = ref<HTMLElement | null>(null)
  useScrollReveal(root)
</script>

<template>
  <section ref="root" class="bg-black text-white">
    <div class="container mx-auto py-16">
      <div class="info reveal grid gap-8 p-6 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
        <div>
          <p class="eyebrow">Hasznos tudnivalók</p>
          <h2 class="heading-title mt-2 text-[26px] lg:text-[36px]">
            {{ travelInfo.title }}
          </h2>
          <p
            v-for="(paragraph, i) in travelInfo.text"
            :key="i"
            class="mt-4 max-w-2xl leading-relaxed text-white/90"
          >
            {{ paragraph }}
          </p>
        </div>
        <dl class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div v-for="season in travelInfo.seasons" :key="season.label" class="season">
            <dt class="eyebrow !text-[11px]">{{ season.label }}</dt>
            <dd class="heading-title mt-1 text-[22px]">{{ season.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .info {
    background: linear-gradient(135deg, rgba(192, 153, 55, 0.14), rgba(255, 255, 255, 0.02));
    border: 1px solid rgba(192, 153, 55, 0.4);
    border-radius: 1.25rem;
  }

  .season {
    padding: 1rem 1.5rem;
    background: rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(192, 153, 55, 0.35);
    border-radius: 1rem;
  }
</style>
