<script setup lang="ts">
  import type { ImageSlot } from '~/models'

  withDefaults(
    defineProps<{
      image: ImageSlot
      /** `background`: a felirat a sarokba kerül, hogy ne takarja a ráúsztatott tartalmat. */
      variant?: 'default' | 'background' | 'mini'
      loading?: 'lazy' | 'eager'
    }>(),
    { variant: 'default', loading: 'lazy' },
  )
</script>

<template>
  <NuxtImg
    v-if="!image.isEmpty"
    :src="image.src!"
    :alt="image.alt"
    :loading="loading"
    class="h-full w-full object-cover"
  />

  <!-- Kép helye: amíg nincs feltöltött kép, ez a helykitöltő látszik -->
  <div
    v-else
    class="image-placeholder"
    :class="`image-placeholder--${variant}`"
    role="img"
    :aria-label="`Kép helye: ${image.label}`"
  >
    <div class="image-placeholder__label">
      <svg
        v-if="variant !== 'mini'"
        class="image-placeholder__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <circle cx="8.5" cy="10" r="1.5" />
        <path d="M21 16l-5-5-8 8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span class="image-placeholder__tag">Kép helye</span>
      <template v-if="variant !== 'mini'">
        <span class="image-placeholder__name">{{ image.label }}</span>
        <span class="image-placeholder__hint">{{ image.hint }}</span>
      </template>
    </div>
  </div>
</template>

<style scoped>
  .image-placeholder {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    color: #e8c869;
    background:
      repeating-linear-gradient(
        45deg,
        rgba(192, 153, 55, 0.07) 0 14px,
        transparent 14px 28px
      ),
      radial-gradient(circle at 30% 20%, rgba(192, 153, 55, 0.22), transparent 60%),
      #141414;
    outline: 2px dashed rgba(192, 153, 55, 0.55);
    outline-offset: -10px;
    border-radius: inherit;
  }

  .image-placeholder__label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
    padding: 1.5rem;
    text-align: center;
  }

  .image-placeholder__icon {
    width: 2.5rem;
    height: 2.5rem;
    opacity: 0.8;
  }

  .image-placeholder__tag {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .image-placeholder__name {
    font-size: 0.875rem;
    font-weight: 600;
    color: #fff;
  }

  .image-placeholder__hint {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    word-break: break-all;
  }

  .image-placeholder--background {
    align-items: flex-end;
    justify-content: flex-start;
  }

  .image-placeholder--background .image-placeholder__label {
    align-items: flex-start;
    padding: 1.75rem;
    text-align: left;
  }

  .image-placeholder--mini {
    outline-offset: -3px;
    outline-width: 1px;
  }

  .image-placeholder--mini .image-placeholder__label {
    padding: 0.25rem;
  }

  .image-placeholder--mini .image-placeholder__tag {
    font-size: 0.6rem;
    line-height: 1.1;
  }
</style>
