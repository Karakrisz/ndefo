import type { Ref } from 'vue'
import type { HeroVideo, VideoSource } from '~/models'

interface NetworkInformation {
  saveData?: boolean
  effectiveType?: string
}

/**
 * Háttérvideó betöltése úgy, hogy ne lassítsa az oldalt: a videó csak az oldal
 * betöltődése után, a kijelzőhöz illő felbontásban töltődik le. Addig (és
 * adatforgalom-kímélő módban, illetve csökkentett mozgás kérésekor végig)
 * a poszterkép látszik.
 */
export function useBackgroundVideo(
  video: Ref<HTMLVideoElement | null>,
  hero: HeroVideo | null,
) {
  const isPlaying = ref(false)

  const requiredHeight = (el: HTMLVideoElement): number => {
    const connection = (navigator as Navigator & { connection?: NetworkInformation })
      .connection
    const slow = ['slow-2g', '2g'].includes(connection?.effectiveType ?? '')
    if (slow || window.innerWidth < 768) return 720

    // A 16:9-es videó kitölti a dobozt (object-fit: cover)
    const box = el.getBoundingClientRect()
    const cssHeight = Math.max(box.height, (box.width * 9) / 16)
    const needed = cssHeight * Math.min(window.devicePixelRatio || 1, 2)
    return window.innerWidth < 1280 ? Math.min(needed, 1080) : needed
  }

  const start = () => {
    const el = video.value
    if (!el || !hero) return

    const canPlay = (source: VideoSource) =>
      el.canPlayType(source.mimeType) !== ''
    const source = hero.pick(requiredHeight(el), canPlay)
    if (!source) return

    el.addEventListener('playing', () => (isPlaying.value = true), { once: true })
    el.src = source.src
    el.play().catch(() => {
      // Ha a böngésző tiltja az automatikus lejátszást, marad a poszterkép.
    })
  }

  onMounted(() => {
    if (!hero) return
    const connection = (navigator as Navigator & { connection?: NetworkInformation })
      .connection
    if (connection?.saveData) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const whenIdle = () =>
      'requestIdleCallback' in window
        ? window.requestIdleCallback(start, { timeout: 2000 })
        : setTimeout(start, 200)

    if (document.readyState === 'complete') whenIdle()
    else window.addEventListener('load', whenIdle, { once: true })
  })

  return { isPlaying }
}
