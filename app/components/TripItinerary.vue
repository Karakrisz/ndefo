<script setup lang="ts">
  import type { TripProgram } from '~/models'

  defineProps<{ program: TripProgram }>()

  const root = ref<HTMLElement | null>(null)
  useScrollReveal(root)
</script>

<template>
  <section ref="root" class="itinerary text-white">
    <div class="container mx-auto py-16">
      <SectionHeading
        title="A program napról napra"
        :lead="program.summary"
      />

      <ol class="timeline">
        <li
          v-for="(day, i) in program.days"
          :key="day.number"
          class="day grid items-stretch md:grid-cols-2"
        >
          <!-- Kép helye: váltakozva bal és jobb oldalon -->
          <div
            class="day__image reveal"
            :class="i % 2 ? 'reveal-right md:order-2' : 'reveal-left'"
          >
            <ImageFrame :image="day.image" />
          </div>

          <div
            class="reveal flex flex-col justify-center p-6 lg:p-10"
            :class="i % 2 ? 'reveal-left' : 'reveal-right'"
            style="--reveal-delay: 0.12s"
          >
            <div class="flex items-center gap-4">
              <span class="day__seal heading-title">{{ day.number }}</span>
              <div>
                <p class="eyebrow">{{ day.label }}</p>
                <h3 class="heading-title text-[24px] lg:text-[30px]">
                  {{ day.title }}
                </h3>
              </div>
            </div>

            <p
              v-for="(paragraph, j) in day.description"
              :key="j"
              class="mt-4 leading-relaxed text-white/90"
            >
              {{ paragraph }}
            </p>

            <ul class="mt-5 flex flex-wrap gap-2">
              <li v-if="day.overnight" class="chip">Szállás: {{ day.overnight }}</li>
              <li v-if="day.meals" class="chip">Étkezés: {{ day.meals }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
  .itinerary {
    background:
      radial-gradient(900px 500px at 10% 5%, rgba(192, 153, 55, 0.14), transparent 60%),
      #000;
  }

  .timeline {
    display: grid;
    gap: 1.5rem;
  }

  .day {
    overflow: hidden;
    background: linear-gradient(135deg, rgba(192, 153, 55, 0.12), rgba(255, 255, 255, 0.02));
    border: 1px solid rgba(192, 153, 55, 0.35);
    border-radius: 1.25rem;
  }

  .day__image {
    min-height: 260px;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .day__image {
      min-height: 340px;
    }
  }

  .day__seal {
    display: grid;
    flex-shrink: 0;
    place-items: center;
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #141006;
    background: radial-gradient(circle at 30% 25%, #f3dc94, #c09937 60%, #a07a2e);
    border-radius: 50%;
  }
</style>
