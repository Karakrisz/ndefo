export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface CompanyProps {
  name: string
  tagline: string
  description: string
  phone: string
  email: string
  address: string
  /** Az utazások díjának jótékony célra fordított része, százalékban. */
  donationPercent: number
  socials?: SocialLink[]
}

/** A cég alapadatai és elérhetőségei. */
export class Company {
  readonly name: string
  readonly tagline: string
  readonly description: string
  readonly phone: string
  readonly email: string
  readonly address: string
  readonly donationPercent: number
  readonly socials: SocialLink[]

  constructor(props: CompanyProps) {
    this.name = props.name
    this.tagline = props.tagline
    this.description = props.description
    this.phone = props.phone
    this.email = props.email
    this.address = props.address
    this.donationPercent = props.donationPercent
    this.socials = props.socials ?? []
  }

  get phoneHref(): string {
    return `tel:${this.phone.replace(/[^+\d]/g, '')}`
  }

  mailHref(subject = ''): string {
    const query = subject ? `?subject=${encodeURIComponent(subject)}` : ''
    return `mailto:${this.email}${query}`
  }

  get donationLabel(): string {
    return `${this.donationPercent}%`
  }

  get copyright(): string {
    return `© ${new Date().getFullYear()} ${this.name}.`
  }
}
