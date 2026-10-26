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

      <div class="gallery-grid">
        <figure
          v-for="(item, i) in items"
          :key="i"
          class="gallery-card reveal group"
          :class="`gallery-card--${item.shape}`"
          :style="{ '--reveal-delay': `${(i % 4) * 0.12}s` }"
        >
          <div class="absolute inset-0">
            <ImageFrame
              :image="item.image"
              :sizes="
                item.shape === 'portrait'
                  ? '(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw'
                  : '(max-width: 639px) 100vw, 50vw'
              "
            />
          </div>
          <div class="sweep"></div>

          <figcaption class="caption">
            <blockquote v-if="item.quote" class="quote mb-2">„{{ item.quote }}”</blockquote>
            <p class="eyebrow !text-[11px]">
              {{ [item.guestName, item.caption].filter(Boolean).join(' · ') }}
            </p>
          </figcaption>
        </figure>
      </div>

      <SectionMore v-if="teaser" to="/galeria" label="Teljes galéria" />
    </div>
  </section>
</template>

<style scoped>
  /* Négyes blokkok: álló (1×2), széles (2×1), álló, széles – hézag nélkül */
  .gallery-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 260px;
    grid-auto-flow: dense;
    gap: 0.75rem;
  }

  @media (min-width: 640px) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .gallery-grid {
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 280px;
    }
  }

  .gallery-card {
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
  }

  .gallery-card--portrait {
    grid-row: span 2;
  }

  @media (min-width: 640px) {
    .gallery-card--wide {
      grid-column: span 2;
    }

    .gallery-card--big {
      grid-column: span 2;
      grid-row: span 2;
    }
  }

  @media (max-width: 639px) {
    .gallery-card--big {
      grid-row: span 1;
    }
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
    padding: 2.5rem 1rem 0.9rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 25%, transparent);
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
