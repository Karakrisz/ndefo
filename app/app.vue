<script setup lang="ts">
  import { company } from '~/data/site'

  useHead({
    titleTemplate: (titleChunk) =>
      titleChunk ? `${titleChunk} - ${company.name}` : company.name,
  })

  // Megosztási kép (Facebook, Messenger, WhatsApp, X…): abszolút URL kell hozzá
  const site = useSiteConfig()
  const ogImage = site.url ? new URL('/og-image.jpg', site.url).href : '/og-image.jpg'

  useSeoMeta({
    ogType: 'website',
    ogSiteName: company.name,
    ogLocale: 'hu_HU',
    ogImage,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${company.name} – utazás Tanzániába`,
    twitterCard: 'summary_large_image',
    twitterImage: ogImage,
  })
</script>

<template>
  <div class="font-sans">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
