export type VideoCodec = 'av1' | 'h264'

/** A háttérvideó egy tömörített változata. */
export class VideoSource {
  constructor(
    readonly src: string,
    /** A videó magassága képpontban (720, 1080, …). */
    readonly height: number,
    readonly codec: VideoCodec,
  ) {}

  /** A böngésző `canPlayType` kérdéséhez használt MIME-típus. */
  get mimeType(): string {
    return this.codec === 'av1'
      ? 'video/mp4; codecs="av01.0.12M.10"'
      : 'video/mp4; codecs="avc1.640028"'
  }
}

/**
 * Háttérvideó több felbontásban. A kijelzőhöz illő legkisebb változatot adja,
 * így telefonon nem tölt le 4K-t, nagy monitoron viszont éles marad.
 */
export class HeroVideo {
  constructor(
    /** Azonnal megjelenő állókép, amíg a videó betölt. */
    readonly poster: string,
    readonly sources: VideoSource[],
  ) {}

  /**
   * @param displayHeight a kijelzőn szükséges magasság fizikai képpontban
   * @param canPlay megmondja, le tudja-e játszani a böngésző az adott változatot
   */
  pick(
    displayHeight: number,
    canPlay: (source: VideoSource) => boolean,
  ): VideoSource | null {
    const playable = this.sources
      .filter(canPlay)
      .sort((a, b) => a.height - b.height || (a.codec === 'av1' ? -1 : 1))

    return (
      playable.find((source) => source.height >= displayHeight) ??
      playable.at(-1) ??
      null
    )
  }
}
