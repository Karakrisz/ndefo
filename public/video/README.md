# Hero videó

A `hero.mov` (4K eredeti) webes változatai. Az oldal a kijelzőhöz illő legkisebbet tölti be
(`app/composables/useBackgroundVideo.ts`), a listájuk az `app/data/site.ts`-ben van.

Ha lecseréled a `hero.mov`-ot, ebben a mappában futtasd újra (zsh):

```bash
for h in 720 1080 1440 2160; do
  ffmpeg -y -i hero.mov -vf "scale=-2:${h}:flags=lanczos" -an -pix_fmt yuv420p10le \
    -c:v libsvtav1 -preset 4 -crf 38 -g 240 -movflags +faststart "hero-${h}-av1.mp4"
done
ffmpeg -y -i hero.mov -vf "scale=-2:720:flags=lanczos" -an -pix_fmt yuv420p \
  -c:v libx264 -preset slow -profile:v high -crf 25 -movflags +faststart hero-720-h264.mp4
ffmpeg -y -i hero.mov -vf "scale=-2:1080:flags=lanczos" -an -pix_fmt yuv420p \
  -c:v libx264 -preset slow -profile:v high -crf 23 -movflags +faststart hero-1080-h264.mp4
ffmpeg -y -i hero.mov -frames:v 1 -vf "scale=1920:-2:flags=lanczos" -q:v 3 hero-poster.jpg
```

Az AV1 a modern böngészőknek szól, a H.264 a tartalék azoknak, amelyek az AV1-et nem játsszák le.
