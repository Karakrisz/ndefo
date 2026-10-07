<script setup lang="ts">
  import { company, hero } from '~/data/site'

  const video = ref<HTMLVideoElement | null>(null)
  const { isPlaying } = useBackgroundVideo(video, hero.video)
</script>

<template>
  <section class="hero relative z-10 w-full overflow-hidden">
    <!-- Háttérvideó: előbb a poszterkép jelenik meg, a videó utólag töltődik rá -->
    <div v-if="hero.video" class="hero-media absolute inset-0">
      <NuxtImg
        :src="hero.video.poster"
        :alt="hero.image.alt"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
        format="webp"
        quality="80"
        loading="eager"
        fetchpriority="high"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <video
        ref="video"
        class="hero-video absolute inset-0 h-full w-full object-cover"
        :class="{ 'is-playing': isPlaying }"
        muted
        loop
        playsinline
        preload="none"
        disablepictureinpicture
        aria-hidden="true"
        tabindex="-1"
      ></video>
    </div>

    <!-- Háttérkép helye, ha nincs videó -->
    <div v-else class="hero-media absolute inset-0">
      <ImageFrame :image="hero.image" variant="background" loading="eager" />
    </div>

    <!-- Sötétítő réteg a szöveg olvashatóságáért -->
    <div
      v-if="hero.video || !hero.image.isEmpty"
      class="overlay absolute inset-0"
    ></div>

    <div
      class="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white"
    >
      <p class="welcome-text eyebrow mb-5">
        {{ hero.welcome }}
      </p>
      <h1 class="main-title heading-title mb-4 text-[48px] leading-none lg:text-[96px]">
        {{ hero.title }}
      </h1>
      <p class="subtitle heading-title mb-6 text-[22px] italic lg:text-[34px]">
        {{ hero.subtitle }}
      </p>
      <p class="lead max-w-2xl text-[16px] leading-relaxed lg:text-[18px]">
        {{ hero.lead }}
      </p>

      <!-- 20% jelvény -->
      <NuxtLink to="/kuldetes" class="pledge mt-8">
        <span class="pledge__seal heading-title">
          {{ company.donationLabel }}
        </span>
        <span class="pledge__body">
          <span class="pledge__eyebrow">Minden utazásból</span>
          <span class="pledge__text">
            afrikai rászorulók támogatására fordítjuk
          </span>
        </span>
      </NuxtLink>

      <div class="cta mt-8">
        <NuxtLink to="/kapcsolat" class="btn-gold btn-press">
          <span>{{ hero.ctaLabel }}</span>
        </NuxtLink>
      </div>
    </div>

    <!-- Fűsziluett: a videó „belenő” a következő szekcióba -->
    <GrassEdge size="lg" />
  </section>
</template>

<style scoped>
  .hero {
    min-height: 800px;
    height: 100vh;
    max-height: 960px;
    margin-top: -5rem;
    padding-top: 5rem;
  }

  .hero-video {
    opacity: 0;
    transition: opacity 1.2s ease;
  }

  .hero-video.is-playing {
    opacity: 1;
  }

  .overlay {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.38) 40%,
      rgba(0, 0, 0, 0.5) 85%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }

  .welcome-text,
  .main-title,
  .subtitle,
  .lead,
  .pledge,
  .cta {
    opacity: 0;
    animation: slideUp 0.9s ease-out forwards;
  }

  .welcome-text {
    animation-delay: 0.5s;
  }

  .main-title {
    animation-delay: 0.7s;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  }

  .subtitle {
    animation-delay: 0.9s;
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.8);
  }

  .lead {
    animation-delay: 1.1s;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
  }

  .pledge {
    animation-delay: 1.3s;
    display: inline-flex;
    align-items: center;
    gap: 1.25rem;
    max-width: 100%;
    padding: 0 2.25rem 0 0;
    text-align: left;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.72), rgba(20, 16, 6, 0.6));
    border: 1px solid rgba(232, 200, 105, 0.45);
    border-radius: 9999px;
    backdrop-filter: blur(6px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  .pledge:hover {
    border-color: #e8c869;
    box-shadow:
      0 10px 30px rgba(0, 0, 0, 0.35),
      0 0 30px rgba(192, 153, 55, 0.35);
  }

  /* Arany pecsét, benne középre igazított 20% */
  .pledge__seal {
    display: grid;
    flex-shrink: 0;
    place-items: center;
    width: 5.5rem;
    height: 5.5rem;
    font-size: 2.1rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.02em;
    color: #141006;
    background: radial-gradient(circle at 30% 25%, #f3dc94, #c09937 60%, #a07a2e);
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px rgba(255, 240, 190, 0.35);
  }

  .pledge__body {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .pledge__eyebrow {
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: #e8c869;
  }

  .pledge__text {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.35;
  }

  @media (max-width: 480px) {
    .pledge {
      gap: 0.75rem;
      padding-right: 1.25rem;
    }

    .pledge__seal {
      width: 4.25rem;
      height: 4.25rem;
      font-size: 1.6rem;
    }

    .pledge__eyebrow {
      font-size: 0.7rem;
    }

    .pledge__text {
      font-size: 0.95rem;
    }
  }

  .cta {
    animation-delay: 1.5s;
  }

  /* „Nyomj meg” gomb: vastag alsó éle van, és időnként magától lenyomódik */
  .btn-press {
    position: relative;
    box-shadow:
      0 6px 0 #7d5f22,
      0 14px 24px rgba(0, 0, 0, 0.45);
    animation: pressHint 2.8s ease-in-out 2.6s infinite;
    transition:
      transform 0.12s ease,
      box-shadow 0.12s ease,
      background-color 0.3s ease;
  }

  .btn-press:hover {
    animation: none;
    transform: translateY(-2px);
    box-shadow:
      0 8px 0 #7d5f22,
      0 18px 28px rgba(0, 0, 0, 0.5);
  }

  .btn-press:active {
    animation: none;
    transform: translateY(6px);
    box-shadow:
      0 0 0 #7d5f22,
      0 4px 10px rgba(0, 0, 0, 0.45);
  }

  @keyframes pressHint {
    0%,
    62%,
    100% {
      transform: translateY(0);
      box-shadow:
        0 6px 0 #7d5f22,
        0 14px 24px rgba(0, 0, 0, 0.45);
    }
    72% {
      transform: translateY(5px);
      box-shadow:
        0 1px 0 #7d5f22,
        0 5px 10px rgba(0, 0, 0, 0.45);
    }
    82% {
      transform: translateY(-1px);
      box-shadow:
        0 7px 0 #7d5f22,
        0 16px 26px rgba(0, 0, 0, 0.45);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .welcome-text,
    .main-title,
    .subtitle,
    .lead,
    .pledge,
    .cta {
      animation: none;
      opacity: 1;
    }

    .btn-press {
      animation: none;
    }
  }
</style>
