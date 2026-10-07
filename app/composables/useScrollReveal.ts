import type { Ref } from 'vue'

/**
 * A megadott gyökérelemen belüli `.reveal` elemek `is-visible` osztályt kapnak,
 * amikor a látható területre érnek.
 */
export function useScrollReveal(root: Ref<HTMLElement | null>) {
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    root.value
      ?.querySelectorAll('.reveal')
      .forEach((el) => observer?.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}
