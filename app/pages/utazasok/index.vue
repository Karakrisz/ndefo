<script setup lang="ts">
  import { pages } from '~/data/site'

  const page = pages.utazasok

  useSeoMeta({ title: page.title, description: page.lead })
</script>

<template>
  <main>
    <PageHero v-bind="page" />
    <TripsSection />
    <TravelInfoSection />
    <ContactCta />
  </main>
</template>
