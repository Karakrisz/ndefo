<script setup lang="ts">
  import { company, logo } from '~/data/site'
</script>

<template>
  <footer class="bg-black py-12 text-white">
    <div
      class="container mx-auto flex flex-col items-start justify-between gap-12 md:flex-row"
    >
      <!-- Bal oszlop: logó és bemutatkozás -->
      <div class="flex-1">
        <NuxtLink to="/" class="block h-28 w-28" :aria-label="company.name">
          <ImageFrame :image="logo" variant="mini" />
        </NuxtLink>
        <p class="mt-4 max-w-md text-sm leading-relaxed">
          {{ company.description }}
        </p>
        <p class="mt-4 max-w-md text-sm font-semibold leading-relaxed text-gold">
          Minden utazás {{ company.donationLabel }}-át afrikai rászorulók
          támogatására fordítjuk.
        </p>

        <div v-if="company.socials.length" class="mt-6 flex space-x-6">
          <a
            v-for="social in company.socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener"
            :aria-label="social.name"
            class="transition-opacity hover:opacity-75"
          >
            <NuxtImg :src="social.icon" :alt="social.name" class="h-8 w-8" />
          </a>
        </div>
      </div>

      <!-- Jobb oszlop: elérhetőségek -->
      <div class="flex-1">
        <h3 class="heading-title mb-4 text-[21px] lg:text-[32px]">Kapcsolat</h3>

        <div class="space-y-4 text-sm">
          <div>
            <p class="font-semibold">Cím:</p>
            <address class="not-italic leading-relaxed">
              {{ company.address }}
            </address>
          </div>
          <div>
            <p class="font-semibold">Telefon:</p>
            <a
              :href="company.phoneHref"
              class="text-gold transition-colors hover:text-gold-light"
            >
              {{ company.phone }}
            </a>
          </div>
          <div>
            <p class="font-semibold">Email:</p>
            <a
              :href="company.mailHref()"
              class="text-gold transition-colors hover:text-gold-light"
            >
              {{ company.email }}
            </a>
          </div>
        </div>

        <div class="mt-8 text-xs opacity-70">
          <p>
            {{ company.copyright }}<br />
            Minden jog fenntartva.
          </p>
          <NuxtLink
            to="/adatvedelmi-tajekoztato"
            class="mt-2 inline-block underline hover:text-gold"
          >
            Adatvédelmi tájékoztató
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="container mx-auto mt-12 border-t border-gold/30 pt-8">
      <div
        class="flex flex-col items-center justify-between text-xs opacity-60 sm:flex-row"
      >
        <p>Tervezés és fejlesztés</p>
        <a
          href="https://digitalseedstudio.com"
          target="_blank"
          rel="noopener"
          class="mt-4 opacity-75 transition-opacity hover:opacity-100 sm:mt-0"
        >
          <span class="text-gold">Digital Seed Studio</span>
        </a>
      </div>
    </div>
  </footer>
</template>
