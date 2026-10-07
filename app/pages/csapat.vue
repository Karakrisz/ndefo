<script setup lang="ts">
  import { pages } from '~/data/site'

  const page = pages.csapat

  useSeoMeta({ title: page.title, description: page.lead })
</script>

<template>
  <main>
    <PageHero v-bind="page" />
    <TeamSection />
    <ContactCta />
  </main>
</template>
