<script setup lang="ts">
  import { company, impact } from '~/data/site'

  defineProps<{ teaser?: boolean }>()

  const root = ref<HTMLElement | null>(null)
  useScrollReveal(root)
</script>

<template>
  <section ref="root" class="impact relative text-white">
    <div class="container mx-auto py-16 lg:py-20">
      <div class="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
        <!-- Nagy 20% -->
        <div class="reveal reveal-left text-center lg:text-left">
          <p class="percent heading-title">{{ company.donationLabel }}</p>
          <p class="eyebrow mt-3">
            minden utazásból
          </p>
        </div>

        <div class="reveal reveal-right">
          <h2 class="heading-title text-[26px] lg:text-[40px]">
            {{ impact.title }}
          </h2>
          <p class="mt-3 text-[18px] font-bold text-gold-light lg:text-[22px]">
            {{ impact.lead }}
          </p>
          <p class="mt-4 max-w-3xl leading-relaxed text-white/90">
            {{ impact.text }}
          </p>
        </div>
      </div>

      <div class="mt-12 grid gap-4 md:grid-cols-3">
        <article
          v-for="(area, i) in impact.areas"
          :key="area.title"
          class="area reveal"
          :style="{ '--reveal-delay': `${i * 0.15}s` }"
        >
          <h3 class="heading-title text-[20px] text-gold-light">
            {{ area.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-white/85">
            {{ area.description }}
          </p>
        </article>
      </div>

      <SectionMore v-if="teaser" to="/kuldetes" label="Küldetésünk" />
    </div>
  </section>
</template>

<style scoped>
  .impact {
    background:
      radial-gradient(900px 420px at 12% 46%, rgba(192, 153, 55, 0.22), transparent 62%),
      #000;
    border-bottom: 1px solid rgba(192, 153, 55, 0.35);
  }

  .percent {
    font-size: clamp(6rem, 18vw, 12rem);
    line-height: 0.85;
    color: #c09937;
    text-shadow: 0 0 60px rgba(192, 153, 55, 0.5);
  }

  .area {
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(192, 153, 55, 0.35);
    border-radius: 1rem;
  }
</style>
