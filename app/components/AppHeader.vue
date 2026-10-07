<script setup lang="ts">
  import { company, homeLink, logo, navLinks } from '~/data/site'

  // A „Kezdőlap” menüpont csak aloldalakon látszik
  const route = useRoute()
  const links = computed(() =>
    route.path === '/' ? navLinks : [homeLink, ...navLinks],
  )

  const isMenuOpen = ref(false)

  const closeMenu = () => {
    isMenuOpen.value = false
  }
</script>

<template>
  <header class="sticky top-0 z-50">
    <div class="menu container flex items-center justify-between gap-6">
      <!-- Logó / márkanév -->
      <NuxtLink to="/" class="logo-link" :aria-label="company.name" @click="closeMenu">
        <ImageFrame :image="logo" variant="mini" loading="eager" />
      </NuxtLink>

      <!-- Asztali navigáció -->
      <nav class="hidden items-center gap-7 lg:flex xl:gap-10" aria-label="Főmenü">
        <template v-for="link in links" :key="link.label">
          <NuxtLink
            v-if="!link.isButton"
            :to="link.to"
            class="nav-link text-sm uppercase text-white transition-colors duration-200 hover:text-gold"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink v-else :to="link.to" class="booking-button whitespace-nowrap text-sm uppercase">
            <span>{{ link.label }}</span>
          </NuxtLink>
        </template>
      </nav>

      <!-- Hamburger gomb (mobil) -->
      <button
        class="flex flex-col gap-1.5 p-2 focus:outline-none lg:hidden"
        :aria-expanded="isMenuOpen"
        aria-label="Menü"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="bar" :class="{ 'translate-y-2 rotate-45': isMenuOpen }"></span>
        <span class="bar" :class="{ 'opacity-0': isMenuOpen }"></span>
        <span class="bar" :class="{ '-translate-y-2 -rotate-45': isMenuOpen }"></span>
      </button>
    </div>

    <!-- Mobil navigáció -->
    <div
      class="overflow-hidden transition-all duration-300 ease-out lg:hidden"
      :class="isMenuOpen ? 'max-h-96' : 'max-h-0'"
    >
      <nav class="flex flex-col border-t border-gray-700 bg-black" aria-label="Mobil menü">
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="border-b border-gray-700 px-6 py-3 text-sm uppercase transition-colors duration-200 last:border-b-0"
          :class="
            link.isButton
              ? 'm-4 rounded-full bg-gold text-center font-semibold text-black'
              : 'font-light text-white hover:bg-gray-900 hover:text-gold'
          "
          @click="closeMenu"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  header {
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(6px);
  }

  .menu {
    height: 74px;
  }

  .logo-link {
    display: block;
    flex-shrink: 0;
    width: 60px;
    height: 60px;
  }

  .nav-link {
    position: relative;
    font-weight: 300;
    letter-spacing: 0.04em;
  }

  /* Az aktuális aloldal menüpontja */
  .nav-link.router-link-exact-active,
  .nav-link.router-link-active:not([href='/']) {
    font-weight: 500;
    color: #e8c869;
  }

  .nav-link.router-link-active:not([href='/'])::after {
    content: '';
    position: absolute;
    inset: auto 0 -8px 0;
    height: 2px;
    background: linear-gradient(90deg, #c09937, #e8c869);
    border-radius: 9999px;
  }

  .booking-button {
    display: inline-block;
    padding: 0.7rem 1.5rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: #000;
    background-color: #c09937;
    border-radius: 9999px;
    transition: background-color 0.2s ease;
  }

  .booking-button:hover {
    background-color: #e8c869;
  }

  .bar {
    width: 1.5rem;
    height: 2px;
    background: #fff;
    transform-origin: center;
    transition: all 0.3s ease-out;
  }
</style>
