<script setup lang="ts">
  import { company, cta, pages } from '~/data/site'

  const page = pages.kapcsolat

  useSeoMeta({ title: page.title, description: page.lead })

  const root = ref<HTMLElement | null>(null)
  useScrollReveal(root)

  const channels = [
    { label: 'Telefon', value: company.phone, href: company.phoneHref, action: 'Hívj fel' },
    {
      label: 'Email',
      value: company.email,
      href: company.mailHref(cta.mailSubject),
      action: 'Írj emailt',
    },
  ]
</script>

<template>
  <main>
    <PageHero v-bind="page" />

    <section ref="root" class="contact text-white">
      <div class="container mx-auto py-16">
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(channel, i) in channels"
            :key="channel.label"
            class="card reveal"
            :style="{ '--reveal-delay': `${i * 0.12}s` }"
          >
            <p class="eyebrow">{{ channel.label }}</p>
            <p class="heading-title mt-3 break-words text-[24px]">{{ channel.value }}</p>
            <a :href="channel.href" class="btn-gold mt-6">{{ channel.action }}</a>
          </div>

          <div class="card reveal" style="--reveal-delay: 0.24s">
            <p class="eyebrow">Cím</p>
            <address class="heading-title mt-3 text-[24px] not-italic">
              {{ company.address }}
            </address>
            <p class="mt-6 text-sm leading-relaxed text-white/80">
              Kész program érdekel, vagy egyéni utat terveznél? Mindkettőben
              segítünk.
            </p>
            <NuxtLink to="/utazasok" class="btn-outline mt-4">Utazásaink</NuxtLink>
          </div>
        </div>

        <p class="reveal mx-auto mt-12 max-w-2xl text-center font-semibold text-gold">
          Minden utazás {{ company.donationLabel }}-át afrikai rászorulók
          támogatására fordítjuk.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
  .contact {
    background:
      radial-gradient(900px 500px at 50% 0%, rgba(192, 153, 55, 0.14), transparent 60%),
      #000;
  }

  .card {
    padding: 2rem;
    background: linear-gradient(135deg, rgba(192, 153, 55, 0.14), rgba(255, 255, 255, 0.02));
    border: 1px solid rgba(192, 153, 55, 0.4);
    border-radius: 1.25rem;
  }
</style>
