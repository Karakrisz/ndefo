<script setup lang="ts">
  import { company } from '~/data/site'

  const description = `${company.description} Minden utazás ${company.donationLabel}-át afrikai rászorulók támogatására fordítjuk.`

  useSeoMeta({
    title: 'Szafari Tanzániában – Serengeti, Ngorongoro, Tarangire',
    description,
    ogTitle: `${company.name} – utazás Tanzániába`,
    ogDescription: description,
  })
</script>

<template>
  <main>
    <HeroSection />
    <ImpactSection teaser />
    <TripsSection teaser />
    <AboutSection teaser />
    <GallerySection teaser :limit="3" />
    <TeamSection teaser />
    <ContactCta />
  </main>
</template>
