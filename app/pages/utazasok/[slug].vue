<script setup lang="ts">
  import { programs } from '~/data/site'

  const route = useRoute()
  const program = programs.find((item) => item.slug === route.params.slug)

  if (!program) {
    throw createError({ statusCode: 404, statusMessage: 'Az utazás nem található' })
  }

  useSeoMeta({ title: program.title, description: program.summary })
</script>

<template>
  <main>
    <PageHero
      :eyebrow="`${program.kind} · ${program.durationLabel}`"
      :title="program.title"
      :image="program.image"
    >
      <ul class="mt-6 flex flex-wrap justify-center gap-2">
        <li v-for="item in program.highlights" :key="item" class="chip bg-black/50">
          {{ item }}
        </li>
      </ul>
    </PageHero>

    <TripItinerary :program="program" />
    <TripPricing :program="program" />
    <TravelInfoSection />

    <div class="bg-black pb-4 text-center">
      <NuxtLink to="/utazasok" class="btn-outline">Vissza az utazásokhoz</NuxtLink>
    </div>
    <ContactCta />
  </main>
</template>
