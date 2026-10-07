<script setup lang="ts">
  import { about } from '~/data/site'

  const props = defineProps<{ teaser?: boolean }>()

  // A főoldalon csak az első blokk látszik
  const blocks = computed(() =>
    props.teaser ? about.blocks.slice(0, 1) : about.blocks,
  )

  const root = ref<HTMLElement | null>(null)
  useScrollReveal(root)
</script>

<template>
  <section ref="root" class="about relative text-white">
    <div class="container relative mx-auto py-14 text-center">
      <h2 class="title heading-title reveal text-[24px] lg:text-[36px]">
        {{ about.title }}
      </h2>
      <p
        class="reveal mx-auto mt-3 max-w-2xl text-[17px] text-white/85"
        style="--reveal-delay: 0.2s"
      >
        {{ about.subtitle }}
      </p>
    </div>

    <div
      v-for="block in blocks"
      :id="block.id"
      :key="block.id"
      class="grid grid-cols-1 md:grid-cols-2"
    >
      <!-- Kép helye -->
      <div
        class="image-container reveal min-h-[320px] md:min-h-[520px]"
        :class="block.imageRight ? 'reveal-right md:order-2' : 'reveal-left'"
      >
        <ImageFrame :image="block.image" />
        <div class="image-sweep"></div>
        <GrassEdge />
      </div>

      <!-- Szöveg -->
      <div
        class="text-container reveal relative"
        :class="block.imageRight ? 'reveal-left' : 'reveal-right'"
        style="--reveal-delay: 0.15s"
      >
        <div class="overlay-bg absolute inset-0"></div>
        <div
          class="relative mx-auto flex h-full max-w-3xl flex-col justify-center p-6 lg:p-10 xl:p-20"
        >
          <h3 class="heading-title text-[21px] text-gold lg:text-[32px]">
            {{ block.title }}
          </h3>
          <p
            v-for="(segments, i) in block.segmentedParagraphs"
            :key="i"
            class="mt-4 leading-relaxed"
            :class="{ 'font-medium': i === 0 }"
          >
            <template v-for="(segment, j) in segments" :key="j">
              <span v-if="segment.highlight" class="text-gold-em">{{
                segment.text
              }}</span>
              <template v-else>{{ segment.text }}</template>
            </template>
          </p>
        </div>
      </div>
    </div>

    <div v-if="teaser" class="container pb-16">
      <SectionMore to="/rolunk" label="Tovább rólunk" />
    </div>
  </section>
</template>

<style scoped>
  .about {
    overflow: hidden;
    background:
      radial-gradient(1200px 600px at 20% 10%, rgba(192, 153, 55, 0.12), transparent 60%),
      radial-gradient(900px 500px at 80% 40%, rgba(232, 200, 105, 0.08), transparent 55%),
      #000;
  }

  .title {
    text-shadow: 0 0 30px rgba(192, 153, 55, 0.35);
  }

  .image-container {
    position: relative;
    overflow: hidden;
  }

  /* Arany „sweep” a kép megjelenésekor */
  .image-sweep {
    position: absolute;
    inset: 0 auto 0 -100%;
    width: 100%;
    background: linear-gradient(45deg, transparent, rgba(192, 153, 55, 0.32), transparent);
    transition: left 0.9s ease 0.6s;
    pointer-events: none;
  }

  .image-container.is-visible .image-sweep {
    left: 100%;
  }

  .overlay-bg {
    background: linear-gradient(135deg, rgba(192, 153, 55, 0.22), rgba(0, 0, 0, 0.6));
  }

  p {
    line-height: 1.75;
  }
</style>
