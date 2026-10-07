import type { ImageSlot } from './ImageSlot'

/** Egy utazáson készült fotó az utas visszajelzésével. */
export class GalleryItem {
  constructor(
    readonly image: ImageSlot,
    readonly guestName: string,
    readonly tripName: string,
    readonly quote: string,
    /** Nagyobb (dupla szélességű) csempe a rácsban. */
    readonly featured: boolean = false,
  ) {}

  get caption(): string {
    return [this.guestName, this.tripName].filter(Boolean).join(' · ')
  }
}
