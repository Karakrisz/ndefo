import type { ImageSlot } from './ImageSlot'

/** Az utazásokat szervező csapat egy tagja. */
export class TeamMember {
  constructor(
    readonly name: string,
    readonly role: string,
    readonly bio: string[],
    readonly photo: ImageSlot,
    readonly facts: string[] = [],
  ) {}
}
