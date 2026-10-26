/**
 * Egy kép helye az oldalon. Amíg nincs `src`, az <ImageFrame> komponens
 * feliratozott helykitöltőt mutat; ha megadod a fájl útvonalát, a kép jelenik meg.
 */
export class ImageSlot {
  constructor(
    /** Mi kerül ide – ez látszik a helykitöltőn. */
    readonly label: string,
    /** Alternatív szöveg a feltöltött képhez. */
    readonly alt: string,
    /** Javasolt fájlhely a `public/` mappán belül, pl. `/img/hero/hero.jpg`. */
    readonly suggestedPath: string,
    /** Javasolt méret, pl. `1920×1080`. */
    readonly suggestedSize: string = '',
    /** A feltöltött kép útvonala; `null`, amíg nincs kép. */
    readonly src: string | null = null,
    /**
     * Előre tömörített méretek. Ilyenkor az `src` a közös tő, a fájlok neve
     * `<tő>-<szélesség>.webp`, pl. `/img/galeria/gepardok` → `gepardok-600.webp`.
     */
    readonly widths: number[] = [],
  ) {}

  /** Fotó, amelyből több (előre tömörített) méret készült. */
  static photo(path: string, alt: string, widths: number[]): ImageSlot {
    return new ImageSlot(alt, alt, `${path}-${widths.at(-1)}.webp`, '', path, widths)
  }

  /** A legnagyobb változat – ezt kapják a srcset-et nem ismerő böngészők. */
  get url(): string | null {
    if (!this.src || !this.widths.length) return this.src
    return `${this.src}-${this.widths.at(-1)}.webp`
  }

  get srcset(): string | undefined {
    if (!this.src || !this.widths.length) return undefined
    return this.widths.map((w) => `${this.src}-${w}.webp ${w}w`).join(', ')
  }

  get isEmpty(): boolean {
    return !this.src
  }

  get hint(): string {
    return [this.suggestedSize, `public${this.suggestedPath}`]
      .filter(Boolean)
      .join(' · ')
  }
}
