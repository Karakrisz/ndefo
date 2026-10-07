<script setup lang="ts">
  import { gallery } from '~/data/site'

  const props = defineProps<{
    teaser?: boolean
    /** Ennyi kép látszik (alapból mind). */
    limit?: number
  }>()

  const items = computed(() =>
    props.limit ? gallery.items.slice(0, props.limit) : gallery.items,
  )

  const root = ref<HTMLElement | null>(null)
  useScrollReveal(root)
</script>

<template>
  <section ref="root" class="relative bg-black pt-16 text-white">
    <div class="container mx-auto pb-16 pt-4">
      <SectionHeading v-if="teaser" :title="gallery.title" :lead="gallery.lead" />

      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <figure
          v-for="(item, i) in items"
          :key="i"
          class="gallery-card reveal group"
          :class="{ 'sm:col-span-2': item.featured }"
          :style="{ '--reveal-delay': `${(i % 4) * 0.12}s` }"
        >
          <!-- Kép helye -->
          <div class="absolute inset-0">
            <ImageFrame :image="item.image" />
          </div>
          <div class="sweep"></div>

          <!-- Utas visszajelzése -->
          <figcaption class="caption">
            <blockquote class="quote">„{{ item.quote }}”</blockquote>
            <p class="eyebrow mt-2 !text-[11px]">
              {{ item.caption }}
            </p>
          </figcaption>
        </figure>
      </div>

      <SectionMore v-if="teaser" to="/galeria" label="Teljes galéria" />
    </div>
  </section>
</template>

<style scoped>
  .gallery-card {
    position: relative;
    min-height: 340px;
    overflow: hidden;
    border-radius: 1rem;
  }

  .gallery-card::after {
    content: '';
    position: absolute;
    inset: auto 0 0 0;
    height: 3px;
    background: linear-gradient(90deg, #c09937, #e8c869);
    opacity: 0.6;
    z-index: 2;
  }

  /* A helykitöltő felirata felülre kerül, hogy ne csússzon a vélemény alá */
  .gallery-card :deep(.image-placeholder) {
    align-items: flex-start;
    padding-top: 1.5rem;
  }

  .gallery-card :deep(img) {
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .gallery-card:hover :deep(img) {
    transform: scale(1.06);
  }

  .caption {
    position: absolute;
    inset: auto 0 0 0;
    z-index: 1;
    padding: 3rem 1rem 1rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 35%, transparent);
  }

  .quote {
    font-size: 0.9rem;
    font-style: italic;
    line-height: 1.5;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  }

  .sweep {
    position: absolute;
    inset: 0 auto 0 -100%;
    width: 100%;
    background: linear-gradient(45deg, transparent, rgba(192, 153, 55, 0.3), transparent);
    transition: left 0.8s ease;
    pointer-events: none;
  }

  .gallery-card:hover .sweep {
    left: 100%;
  }
</style>
