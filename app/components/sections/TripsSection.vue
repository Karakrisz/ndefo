<script setup lang="ts">
  import { company, programs, trips } from '~/data/site'

  defineProps<{
    /** Főoldali változat: címsorral és „összes utazás” linkkel. */
    teaser?: boolean
  }>()

  const root = ref<HTMLElement | null>(null)
  useScrollReveal(root)
</script>

<template>
  <section ref="root" class="trips relative text-white">
    <div class="container mx-auto py-16">
      <SectionHeading v-if="teaser" :title="trips.title" :lead="trips.lead" />

      <div class="space-y-10">
        <!-- Kész programok -->
        <article
          v-for="program in programs"
          :key="program.slug"
          class="trip-card reveal grid md:grid-cols-2"
        >
          <NuxtLink :to="program.to" class="trip-card__image" :aria-label="program.title">
            <div class="absolute inset-0">
              <ImageFrame :image="program.image" />
            </div>
            <span class="trip-card__badge">{{ program.durationLabel }}</span>
            <GrassEdge size="sm" color="#0d0b06" :glow="false" />
          </NuxtLink>

          <div class="flex flex-col justify-center p-6 lg:p-12">
            <p class="eyebrow">{{ program.kind }} · {{ program.durationLabel }}</p>
            <h3 class="heading-title mt-2 text-[28px] lg:text-[40px]">
              {{ program.title }}
            </h3>
            <p class="mt-4 leading-relaxed text-white/90">{{ program.summary }}</p>

            <ul class="mt-5 flex flex-wrap gap-2">
              <li v-for="item in program.highlights" :key="item" class="chip">
                {{ item }}
              </li>
            </ul>

            <div class="mt-8 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p class="heading-title text-[30px] leading-none text-gold-light">
                  {{ program.priceLabel }}
                </p>
                <p class="mt-1 text-xs text-white/70">{{ program.priceNote }}</p>
                <p class="mt-2 text-xs font-semibold text-gold">
                  Ebből {{ company.donationLabel }} rászorulókhoz kerül
                </p>
              </div>
              <NuxtLink :to="program.to" class="btn-gold">Program megtekintése</NuxtLink>
            </div>
          </div>
        </article>

        <!-- Egyéni szervezés -->
        <article class="trip-card trip-card--custom reveal grid md:grid-cols-2">
          <div class="flex flex-col justify-center p-6 md:order-1 lg:p-12">
            <p class="eyebrow">{{ trips.custom.kind }}</p>
            <h3 class="heading-title mt-2 text-[28px] lg:text-[40px]">
              {{ trips.custom.title }}
            </h3>
            <p
              v-for="(paragraph, i) in trips.custom.text"
              :key="i"
              class="mt-4 leading-relaxed text-white/90"
            >
              {{ paragraph }}
            </p>
            <ul class="mt-5 flex flex-wrap gap-2">
              <li v-for="option in trips.custom.options" :key="option" class="chip">
                {{ option }}
              </li>
            </ul>
            <div class="mt-8">
              <NuxtLink to="/kapcsolat" class="btn-outline">
                {{ trips.custom.ctaLabel }}
              </NuxtLink>
            </div>
          </div>

          <div class="trip-card__image md:order-2">
            <div class="absolute inset-0">
              <ImageFrame :image="trips.custom.image" />
            </div>
            <GrassEdge size="sm" color="#0d0b06" :glow="false" />
          </div>
        </article>
      </div>

      <SectionMore v-if="teaser" to="/utazasok" label="Minden utazás" />
    </div>
  </section>
</template>

<style scoped>
  .trips {
    background:
      radial-gradient(900px 500px at 85% 0%, rgba(192, 153, 55, 0.14), transparent 60%),
      #000;
  }

  .trip-card {
    overflow: hidden;
    background: linear-gradient(135deg, rgba(192, 153, 55, 0.14), rgba(255, 255, 255, 0.02));
    border: 1px solid rgba(192, 153, 55, 0.4);
    border-radius: 1.25rem;
  }

  .trip-card--custom {
    background: linear-gradient(225deg, rgba(192, 153, 55, 0.1), rgba(255, 255, 255, 0.02));
    border-style: dashed;
  }

  .trip-card__image {
    position: relative;
    display: block;
    min-height: 300px;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .trip-card__image {
      min-height: 440px;
    }
  }

  .trip-card__image :deep(img) {
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .trip-card:hover .trip-card__image :deep(img) {
    transform: scale(1.05);
  }

  .trip-card__badge {
    position: absolute;
    top: 1.25rem;
    left: 1.25rem;
    z-index: 6;
    padding: 0.4rem 1rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #141006;
    background: radial-gradient(circle at 30% 25%, #f3dc94, #c09937 70%);
    border-radius: 9999px;
  }
</style>
