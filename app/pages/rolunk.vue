<script setup lang="ts">
  import { pages } from '~/data/site'

  const page = pages.rolunk

  useSeoMeta({ title: page.title, description: page.lead })
</script>

<template>
  <main>
    <PageHero v-bind="page" />
    <AboutSection />
    <ContactCta />
  </main>
</template>
