<script setup lang="ts">
  import { team } from '~/data/site'

  defineProps<{ teaser?: boolean }>()

  const root = ref<HTMLElement | null>(null)
  useScrollReveal(root)
</script>

<template>
  <section ref="root" class="team relative text-white">
    <div class="container mx-auto py-16">
      <SectionHeading v-if="teaser" :title="team.title" :lead="team.lead" />

      <div class="space-y-12">
        <article
          v-for="(member, i) in team.members"
          :key="member.name"
          class="member grid gap-0"
          :class="
            i % 2
              ? 'md:grid-cols-[1fr_minmax(0,360px)]'
              : 'md:grid-cols-[minmax(0,360px)_1fr]'
          "
        >
          <!-- Portré helye: minden második szervezőnél a jobb oldalon -->
          <div
            class="reveal relative min-h-[460px] overflow-hidden"
            :class="i % 2 ? 'reveal-right md:order-2' : 'reveal-left'"
          >
            <div class="absolute inset-0">
              <ImageFrame :image="member.photo" sizes="(max-width: 767px) 100vw, 360px" />
            </div>
          </div>

          <div
            class="reveal flex flex-col justify-center p-6 lg:p-12"
            :class="i % 2 ? 'reveal-left' : 'reveal-right'"
            style="--reveal-delay: 0.15s"
          >
            <p v-if="member.name" class="eyebrow">{{ member.role }}</p>
            <h3 class="heading-title mt-1 text-[28px] lg:text-[40px]">
              {{ member.displayName }}
            </h3>
            <p
              v-for="(paragraph, j) in member.bio"
              :key="j"
              class="mt-4 max-w-2xl leading-relaxed text-white/90"
            >
              {{ paragraph }}
            </p>
            <ul v-if="member.facts.length" class="mt-6 flex flex-wrap gap-2">
              <li
                v-for="fact in member.facts"
                :key="fact"
                class="chip"
              >
                {{ fact }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .team {
    background:
      radial-gradient(900px 500px at 90% 10%, rgba(192, 153, 55, 0.14), transparent 60%),
      #000;
  }

  .member {
    background: linear-gradient(135deg, rgba(192, 153, 55, 0.14), rgba(255, 255, 255, 0.02));
    overflow: hidden;
    border: 1px solid rgba(192, 153, 55, 0.4);
    border-radius: 1.25rem;
  }
</style>
