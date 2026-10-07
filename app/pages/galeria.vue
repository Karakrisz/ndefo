<script setup lang="ts">
  import { pages } from '~/data/site'

  const page = pages.galeria

  useSeoMeta({ title: page.title, description: page.lead })
</script>

<template>
  <main>
    <PageHero v-bind="page" />
    <GallerySection />
    <ContactCta />
  </main>
</template>
