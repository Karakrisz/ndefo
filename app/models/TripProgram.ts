import type { ImageSlot } from './ImageSlot'

/** Egy utazási program egy napja. */
export class TripDay {
  constructor(
    readonly number: number,
    readonly title: string,
    readonly description: string[],
    readonly image: ImageSlot,
    /** Szállás aznap éjszakára. */
    readonly overnight: string = '',
    /** Étkezések, pl. „reggeli, ebéd, vacsora”. */
    readonly meals: string = '',
  ) {}

  get label(): string {
    return `${this.number}. nap`
  }
}

export interface TripProgramProps {
  slug: string
  title: string
  /** Rövid típusmegjelölés, pl. „Csoportos szafari”. */
  kind: string
  summary: string
  highlights: string[]
  /** Induló ár fejenként. */
  priceFrom: number
  currency: string
  priceNote: string
  image: ImageSlot
  days: TripDay[]
  included: string[]
  notIncluded: string[]
}

/** Előre összeállított utazási program napi bontással. */
export class TripProgram {
  readonly slug: string
  readonly title: string
  readonly kind: string
  readonly summary: string
  readonly highlights: string[]
  readonly priceFrom: number
  readonly currency: string
  readonly priceNote: string
  readonly image: ImageSlot
  readonly days: TripDay[]
  readonly included: string[]
  readonly notIncluded: string[]

  constructor(props: TripProgramProps) {
    this.slug = props.slug
    this.title = props.title
    this.kind = props.kind
    this.summary = props.summary
    this.highlights = props.highlights
    this.priceFrom = props.priceFrom
    this.currency = props.currency
    this.priceNote = props.priceNote
    this.image = props.image
    this.days = props.days
    this.included = props.included
    this.notIncluded = props.notIncluded
  }

  get to(): string {
    return `/utazasok/${this.slug}`
  }

  get durationLabel(): string {
    return `${this.days.length} nap`
  }

  get priceLabel(): string {
    const amount = new Intl.NumberFormat('hu-HU').format(this.priceFrom)
    return `${amount} ${this.currency}-tól`
  }

  /** A jótékony célra jutó összeg az induló árból. */
  donationFrom(percent: number): string {
    const amount = new Intl.NumberFormat('hu-HU').format(
      Math.round((this.priceFrom * percent) / 100),
    )
    return `${amount} ${this.currency}`
  }
}
