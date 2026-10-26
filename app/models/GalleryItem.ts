import type { ImageSlot } from './ImageSlot'

export type GalleryShape = 'portrait' | 'wide' | 'big'

/** Egy utazáson készült fotó, opcionálisan az utas visszajelzésével. */
export class GalleryItem {
  constructor(
    readonly image: ImageSlot,
    /** Rövid leírás a kép alján, pl. „Közös ebéd a szafarin”. */
    readonly caption: string,
    /** A csempe alakja a rácsban: álló, széles vagy nagy (2×2). */
    readonly shape: GalleryShape = 'portrait',
    /** Utas véleménye – ha később megérkezik, a kép alján jelenik meg. */
    readonly quote: string = '',
    readonly guestName: string = '',
  ) {}
}
