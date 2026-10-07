<script setup lang="ts">
  import { company } from '~/data/site'
  import type { TripProgram } from '~/models'

  defineProps<{ program: TripProgram }>()

  const root = ref<HTMLElement | null>(null)
  useScrollReveal(root)
</script>

<template>
  <section ref="root" class="bg-black text-white">
    <div class="container mx-auto py-16">
      <SectionHeading title="Ár és tudnivalók" />

      <div class="grid gap-6 lg:grid-cols-3">
        <!-- Ár -->
        <div class="card card--price reveal">
          <p class="eyebrow">{{ program.durationLabel }} · {{ program.kind }}</p>
          <p class="heading-title mt-3 text-[40px] leading-none text-gold-light">
            {{ program.priceLabel }}
          </p>
          <p class="mt-2 text-sm text-white/75">{{ program.priceNote }}</p>
          <p class="mt-5 text-sm font-semibold leading-relaxed text-gold">
            Az utazás {{ company.donationLabel }}-át – már az induló árból is
            {{ program.donationFrom(company.donationPercent) }}-t – afrikai
            rászorulók támogatására fordítjuk.
          </p>
          <NuxtLink to="/kapcsolat" class="btn-gold mt-8 w-full">
            Érdekel ez az út
          </NuxtLink>
        </div>

        <!-- Az ár tartalmazza -->
        <div class="card reveal" style="--reveal-delay: 0.12s">
          <h3 class="heading-title text-[22px]">Az ár tartalmazza</h3>
          <ul class="mt-4 space-y-3">
            <li v-for="item in program.included" :key="item" class="item">
              <svg class="item__icon text-gold-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <path d="M5 12.5l4.5 4.5L19 7.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Az ár nem tartalmazza -->
        <div class="card reveal" style="--reveal-delay: 0.24s">
          <h3 class="heading-title text-[22px]">Az ár nem tartalmazza</h3>
          <ul class="mt-4 space-y-3">
            <li v-for="item in program.notIncluded" :key="item" class="item text-white/80">
              <svg class="item__icon text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .card {
    padding: 2rem;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(192, 153, 55, 0.35);
    border-radius: 1.25rem;
  }

  .card--price {
    background: linear-gradient(160deg, rgba(192, 153, 55, 0.22), rgba(255, 255, 255, 0.02));
    border-color: rgba(232, 200, 105, 0.6);
  }

  .item {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .item__icon {
    flex-shrink: 0;
    width: 1.1rem;
    height: 1.1rem;
    margin-top: 0.2rem;
  }
</style>
