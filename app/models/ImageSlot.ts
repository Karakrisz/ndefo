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
  ) {}

  get isEmpty(): boolean {
    return !this.src
  }

  get hint(): string {
    return [this.suggestedSize, `public${this.suggestedPath}`]
      .filter(Boolean)
      .join(' · ')
  }
}
