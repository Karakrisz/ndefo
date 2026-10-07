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

  /**
   * A videót egyben töltjük le, és a memóriából játsszuk le. A Safari (iPhone-on
   * és Macen is) közvetlen hivatkozásnál csak akkor indítja el a videót, ha a
   * szerver tud részleteket küldeni (HTTP Range) – a Nuxt saját szervere nem tud,
   * így ott a videó el sem indulna. Ez a megoldás minden tárhelyen működik.
   */
  let objectUrl: string | undefined

  const load = async (el: HTMLVideoElement, source: VideoSource) => {
    const response = await fetch(source.src)
    if (!response.ok) throw new Error(`Videó letöltése sikertelen: ${response.status}`)
    const blob = await response.blob()

    if (objectUrl) URL.revokeObjectURL(objectUrl)
    objectUrl = URL.createObjectURL(new Blob([blob], { type: 'video/mp4' }))

    await new Promise<void>((resolve, reject) => {
      el.addEventListener('loadeddata', () => resolve(), { once: true })
      el.addEventListener('error', () => reject(el.error), { once: true })
      el.src = objectUrl!
      el.load()
    })
  }

  let started = false
  let fallbackTimer: ReturnType<typeof setTimeout> | undefined

  const start = async () => {
    const el = video.value
    if (!el || !hero || started) return
    started = true

    // iOS-en csak némított, beágyazottan játszott videó indulhat el magától
    el.muted = true
    el.defaultMuted = true
    el.playsInline = true
    el.setAttribute('muted', '')
    el.setAttribute('playsinline', '')

    const canPlay = (source: VideoSource) =>
      el.canPlayType(source.mimeType) !== ''
    const height = requiredHeight(el)
    const picked = hero.pick(height, canPlay)
    if (!picked) return

    // Ha a kiválasztott (AV1) változat mégsem játszható le, jön a H.264 tartalék
    const fallback = hero.pick(height, (source) => source.codec === 'h264' && canPlay(source))
    const candidates = fallback && fallback !== picked ? [picked, fallback] : [picked]

    el.addEventListener('playing', () => (isPlaying.value = true), { once: true })

    for (const source of candidates) {
      try {
        await load(el, source)
      } catch {
        continue // nem játszható le: jön a következő változat
      }

      try {
        await el.play()
      } catch {
        // A böngésző most nem engedi az automatikus indítást (pl. iPhone-on
        // alacsony töltöttségű módban): az első érintésre elindítjuk.
        const resume = () => el.play().catch(() => {})
        window.addEventListener('touchstart', resume, { once: true, passive: true })
        window.addEventListener('pointerdown', resume, { once: true, passive: true })
      }
      return
    }
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

    // Biztonsági indítás, ha a „load” esemény valamiért késne vagy elmaradna
    fallbackTimer = setTimeout(start, 4000)
  })

  onUnmounted(() => {
    clearTimeout(fallbackTimer)
    if (objectUrl) URL.revokeObjectURL(objectUrl)
  })

  return { isPlaying }
}
