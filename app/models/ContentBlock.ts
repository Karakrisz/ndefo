import type { ImageSlot } from './ImageSlot'

export interface TextSegment {
  text: string
  highlight: boolean
}

/**
 * Kép + szöveg blokk. A bekezdésekben a *csillagok közé* tett részek
 * arany kiemelést kapnak.
 */
export class ContentBlock {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly paragraphs: string[],
    readonly image: ImageSlot,
    /** `true` esetén a kép a jobb oldalra kerül. */
    readonly imageRight: boolean = false,
  ) {}

  get segmentedParagraphs(): TextSegment[][] {
    return this.paragraphs.map(ContentBlock.parse)
  }

  static parse(paragraph: string): TextSegment[] {
    return paragraph
      .split(/(\*[^*]+\*)/)
      .filter(Boolean)
      .map((part) =>
        part.startsWith('*') && part.endsWith('*')
          ? { text: part.slice(1, -1), highlight: true }
          : { text: part, highlight: false },
      )
  }
}
