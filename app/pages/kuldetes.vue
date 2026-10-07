<script setup lang="ts">
  import { pages } from '~/data/site'

  const page = pages.kuldetes

  useSeoMeta({ title: page.title, description: page.lead })
</script>

<template>
  <main>
    <PageHero v-bind="page" />
    <ImpactSection />
    <ContactCta />
  </main>
</template>
