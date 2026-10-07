import {
  Company,
  ContentBlock,
  GalleryItem,
  HeroVideo,
  ImageSlot,
  ImpactArea,
  NavLink,
  TeamMember,
  TripDay,
  TripProgram,
  VideoSource,
} from '~/models'

/*
 * Az oldal teljes tartalma itt szerkeszthető.
 *
 * KÉPEK: minden ImageSlot utolsó paramétere a kép útvonala. Amíg ez hiányzik,
 * az oldalon „Kép helye” helykitöltő látszik. Kép feltöltése:
 *   1. másold a fájlt a public/ mappába a javasolt helyre,
 *   2. add meg ugyanazt az útvonalat utolsó paraméterként, pl.
 *      new ImageSlot('Főkép', 'Szafari', '/img/hero/hero.jpg', '1920×1080', '/img/hero/hero.jpg')
 *
 * A [szögletes zárójeles] szövegek kitöltendő helykitöltők.
 */

export const company = new Company({
  name: 'Ndefo Tanzania',
  tagline: 'Szafari · Serengeti · Ngorongoro',
  description:
    'Szafariutak Tanzániába – kész programmal vagy egyénileg szervezve, helyi vezetővel.',
  phone: '[+36 00 000 0000]',
  email: '[info@pelda.hu]',
  address: '[Cím / székhely]',
  donationPercent: 20,
  socials: [
    { name: 'Facebook', url: 'https://www.facebook.com', icon: '/img/facebook.png' },
    { name: 'Instagram', url: 'https://www.instagram.com', icon: '/img/insta.png' },
  ],
})

export const navLinks = [
  new NavLink('Utazások', '/utazasok'),
  new NavLink('Küldetésünk', '/kuldetes'),
  new NavLink('Rólunk', '/rolunk'),
  new NavLink('Galéria', '/galeria'),
  new NavLink('Csapat', '/csapat'),
  new NavLink('Utazást tervezek', '/kapcsolat', true),
]

export const logo = new ImageSlot(
  'Logó',
  `${company.name} logó`,
  '/img/logo-ndefo.png',
  '512×512',
  '/img/logo-ndefo.png',
)

/** Csak aloldalakon jelenik meg a menü elején. */
export const homeLink = new NavLink('Kezdőlap', '/')

export const hero = {
  welcome: 'Karibu – Isten hozott',
  title: 'Tanzánia vár',
  subtitle: 'Nem csak utazás. Életre szóló élmény.',
  lead: 'Elefántcsordák a Tarangirében, végtelen síkságok a Serengetin, a Ngorongoro-kráter vadvilága – mi megszervezzük, neked csak át kell élned.',
  ctaLabel: 'Tervezzük meg az utad',
  // A videó változatai a public/video/hero.mov-ból készültek (lásd public/video/README.md).
  video: new HeroVideo('/video/hero-poster.jpg', [
    new VideoSource('/video/hero-720-av1.mp4', 720, 'av1'),
    new VideoSource('/video/hero-1080-av1.mp4', 1080, 'av1'),
    new VideoSource('/video/hero-1440-av1.mp4', 1440, 'av1'),
    new VideoSource('/video/hero-2160-av1.mp4', 2160, 'av1'),
    new VideoSource('/video/hero-720-h264.mp4', 720, 'h264'),
    new VideoSource('/video/hero-1080-h264.mp4', 1080, 'h264'),
  ]),
  // Csak akkor látszik, ha nincs videó (video: null).
  image: new ImageSlot(
    'Főoldali nagy háttérkép',
    'Szafari Tanzániában – zsiráf a szavannán',
    '/img/hero/hero.jpg',
    '1920×1080',
  ),
}

export const impact = {
  title: 'Utazásod másoknak is jövőt ad',
  lead: `Minden utazás ${company.donationLabel}-át afrikai rászorulók támogatására fordítjuk.`,
  text: 'Amikor velünk utazol, nem csak élményt kapsz: az utad díjának ötödéből gyerekek járhatnak iskolába, és helyi családok kapnak segítséget ott, ahol a legnagyobb szükség van rá.',
  areas: [
    new ImpactArea(
      'Iskoláztatás',
      'Támogatás olyan gyerekek tanulásához, akik enélkül nem ülhetnének iskolapadba.',
    ),
    new ImpactArea(
      'Rászoruló családok',
      'Közvetlen segítség a mindennapokhoz azoknak, akiknek a legnagyobb szükségük van rá.',
    ),
    new ImpactArea(
      'Helyi közösségek',
      'Helyi vezetőkkel és sofőrökkel dolgozunk, így az utazásod a helyieknek is munkát ad.',
    ),
  ],
}

export const about = {
  title: `${company.name} – a te utad Afrikába`,
  subtitle: 'Kész szafariprogram és egyéni utak, helyi vezetővel.',
  blocks: [
    new ContentBlock(
      'rolunk-szafari',
      'Tanzánia, ahogy mi ismerjük',
      [
        'Tanzánia Afrika egyik legváltozatosabb országa: végtelen szavannák, vulkáni kráterek és páratlan vadvilág egyetlen utazáson belül.',
        'Szervezünk szafarit a *Serengetibe*, a *Ngorongoro-kráterbe* és a *Tarangire Nemzeti Parkba* – ott, ahol az oroszlán, az elefánt és a zsiráf nem kerítés mögött él.',
        'Az út *Arushából* indul, a szállásaid lodge-ok és sátortáborok a vadon közelében, a szafarira pedig kényelmes *4×4-es terepjáróval* viszünk.',
      ],
      new ImageSlot(
        'Szafari / vadvilág fotó',
        'Vadállatok a tanzániai szavannán',
        '/img/about/szafari.jpg',
        '1200×900',
      ),
    ),
    new ContentBlock(
      'rolunk-szervezes',
      'A szafari alatt mindenről gondoskodunk',
      [
        'Választhatsz kész programot, vagy veled együtt, a te tempódhoz és keretedhez igazítva állítjuk össze az utat.',
        'Ami az árban benne van: *szállás*, *teljes ellátás*, *nemzeti parki belépők*, *4×4-es szafariautó* és *angolul beszélő helyi vezető*.',
        'Kint sem maradsz magadra – a repülőtéren helyi vezetőd vár, és végig veled marad.',
        `És közben jót is teszel: minden utazás *${company.donationLabel}-a* helyi rászorulókhoz kerül.`,
      ],
      new ImageSlot(
        'Szállás / sátortábor vagy szafariautó fotó',
        'Szafariszállás Tanzániában',
        '/img/about/szallas.jpg',
        '1200×900',
      ),
      true,
    ),
  ],
}

const galleryPhoto = (n: number, label: string, size = '800×800') =>
  new ImageSlot(
    `Galéria ${n}. – ${label}`,
    `Utasunk fotója Tanzániából – ${label}`,
    `/img/galeria/galeria-${n}.jpg`,
    size,
  )

export const gallery = {
  title: 'Utasaink szemével',
  lead: 'Fotók és visszajelzések azoktól, akik már velünk jártak Tanzániában. Valódi pillanatok, valódi utazásokról.',
  items: [
    new GalleryItem(
      galleryPhoto(1, 'szafari', '1600×800'),
      '[Utas neve]',
      '[Utazás, évszám]',
      '[Ide kerül az utas rövid véleménye az utazásról.]',
      true,
    ),
    new GalleryItem(
      galleryPhoto(2, 'vadvilág'),
      '[Utas neve]',
      '[Utazás, évszám]',
      '[Ide kerül az utas rövid véleménye.]',
    ),
    new GalleryItem(
      galleryPhoto(3, 'Serengeti'),
      '[Utas neve]',
      '[Utazás, évszám]',
      '[Ide kerül az utas rövid véleménye.]',
    ),
    new GalleryItem(
      galleryPhoto(4, 'Ngorongoro'),
      '[Utas neve]',
      '[Utazás, évszám]',
      '[Ide kerül az utas rövid véleménye.]',
    ),
    new GalleryItem(
      galleryPhoto(5, 'helyiekkel'),
      '[Utas neve]',
      '[Utazás, évszám]',
      '[Ide kerül az utas rövid véleménye.]',
    ),
    new GalleryItem(
      galleryPhoto(6, 'csoportkép', '1600×800'),
      '[Utas neve]',
      '[Utazás, évszám]',
      '[Ide kerül az utas rövid véleménye az utazásról.]',
      true,
    ),
  ],
}

export const team = {
  title: 'Akik az utadat szervezik',
  lead: 'Nem egy arctalan irodával beszélsz. Ismerd meg, ki áll az utazásod mögött.',
  // Új szervező felvételéhez adj a listához még egy TeamMember-t.
  members: [
    new TeamMember(
      '[Szervező neve]',
      'Utazásszervező',
      [
        '[Rövid bemutatkozás: ki ő, mi köti Tanzániához, mióta szervez utakat.]',
        '[Miért érdemes vele utazni – személyes hangvételű 2–3 mondat.]',
      ],
      new ImageSlot(
        'Szervező portréfotója',
        'Utazásszervezőnk portréja',
        '/img/csapat/szervezo-1.jpg',
        '800×1000',
      ),
      ['[Beszélt nyelvek]', '[Kedvenc hely Tanzániában]'],
    ),
    new TeamMember(
      '[Második szervező neve]',
      'Helyi vezető',
      [
        '[Rövid bemutatkozás: ki ő, mi a szerepe az utazások szervezésében.]',
        '[Személyes hangvételű 2–3 mondat – pl. mit szeret megmutatni az utasoknak.]',
      ],
      new ImageSlot(
        'Második szervező portréfotója',
        'Helyi vezetőnk portréja',
        '/img/csapat/szervezo-2.jpg',
        '800×1000',
      ),
      ['[Beszélt nyelvek]', '[Kedvenc hely Tanzániában]'],
    ),
  ],
}

export const cta = {
  title: 'Tervezzük meg együtt az utad!',
  text: 'Írd meg, mikor és hányan utaznátok, mire vágytok – mi személyre szabott ajánlattal jelentkezünk.',
  mailSubject: 'Ajánlatkérés – tanzániai utazás',
}

/* ---------- Utazások ---------- */

const dayPhoto = (program: string, n: number, label: string) =>
  new ImageSlot(
    `${n}. nap – ${label}`,
    label,
    `/img/utazasok/${program}/nap-${n}.jpg`,
    '1200×800',
  )

// Új program felvételéhez adj a listához még egy TripProgram-ot.
export const programs = [
  new TripProgram({
    slug: 'eszak-tanzaniai-szafari',
    title: 'Észak-tanzániai szafari',
    kind: 'Csoportos szafari',
    summary:
      'Hat nap Tanzánia leghíresebb nemzeti parkjaiban: elefántcsordák a Tarangirében, végtelen síkságok a Serengetin és a Ngorongoro-kráter, a „világ nyolcadik csodája”.',
    highlights: ['Tarangire', 'Serengeti', 'Ngorongoro-kráter'],
    priceFrom: 2700,
    currency: 'USD',
    priceNote: 'fejenként, a résztvevők számától függően',
    image: new ImageSlot(
      'Program borítóképe – szafari',
      'Észak-tanzániai szafari',
      '/img/utazasok/eszak-tanzaniai-szafari/borito.jpg',
      '1600×1000',
    ),
    days: [
      new TripDay(
        1,
        'Érkezés Tanzániába',
        [
          'Karibu – Isten hozott Tanzániában! A Kilimandzsáró nemzetközi repülőtéren helyi vezetőd vár, és elvisz az arushai szállásodra.',
        ],
        dayPhoto('eszak-tanzaniai-szafari', 1, 'érkezés, Arusha'),
        'Arusha',
        'vacsora',
      ),
      new TripDay(
        2,
        'Tarangire Nemzeti Park',
        [
          'Reggeli után indulás a Tarangire Nemzeti Parkba, amely fenséges majomkenyérfáiról és hatalmas elefántcsordáiról híres.',
          'Egész napos szafari a parkban: oroszlánok, zebrák, zsiráfok, gnúk és megannyi madárfaj kerülhet a szemed elé.',
          'Késő délután továbbutazás a Burunge-tó közelében fekvő szállásra, ahol az afrikai vadon békés hangjai között töltöd az éjszakát.',
        ],
        dayPhoto('eszak-tanzaniai-szafari', 2, 'Tarangire, elefántok'),
        'lodge a Burunge-tónál',
        'reggeli, ebéd, vacsora',
      ),
      new TripDay(
        3,
        'Serengeti Nemzeti Park',
        [
          'Korai reggeli után irány a világhírű Serengeti. Az út a felföldön át vezet, hagyományos maszáj falvak mellett és a Ngorongoro-kráter pereme mentén.',
          'Éppen időben érkezel egy délutáni szafarira a végtelen síkságon. Itt élnek azok az állatok, amelyek a Serengetit legendássá tették: oroszlánok, gepárdok, elefántok, zsiráfok.',
        ],
        dayPhoto('eszak-tanzaniai-szafari', 3, 'Serengeti, sátortábor'),
        'Haus of Nature Tented Camp',
        'reggeli, ebéd, vacsora',
      ),
      new TripDay(
        4,
        'Egész nap a Serengetin',
        [
          'Egész napos kirándulás az UNESCO Világörökség részét képező nemzeti parkban, piknikebéddel a park szívében.',
          'Este visszatérés a táborba, vacsora és pihenés.',
        ],
        dayPhoto('eszak-tanzaniai-szafari', 4, 'Serengeti, zsiráf naplementében'),
        'Haus of Nature Tented Camp',
        'reggeli, piknikebéd, vacsora',
      ),
      new TripDay(
        5,
        'Ngorongoro-kráter',
        [
          'Reggeli után búcsú a Serengetitől, és indulás a lenyűgöző Ngorongoro-kráter felé, amelyet gyakran a világ nyolcadik csodájának neveznek.',
          'Leereszkedés a kráterbe egész napos szafarira: buja síkságok és tavak között elefántok, oroszlánok, zebrák, flamingók és a ritka keskenyszájú (fekete) orrszarvú él itt.',
        ],
        dayPhoto('eszak-tanzaniai-szafari', 5, 'Ngorongoro-kráter'),
        'Farm of Dream Lodge',
        'reggeli, ebéd, vacsora',
      ),
      new TripDay(
        6,
        'Vissza Arushába',
        [
          'Reggeli után visszaút Arushába, ahová dél körül érkezel. A csoportos program itt hivatalosan véget ér.',
          'Transzfer a repülőtérre.',
        ],
        dayPhoto('eszak-tanzaniai-szafari', 6, 'gepárd / búcsú a szavannától'),
        '',
        'reggeli',
      ),
    ],
    included: [
      'Minden szállás a szafari alatt',
      'Teljes ellátás',
      'Minden nemzeti parki belépő',
      'Profi, angolul beszélő vezető és sofőr',
      'Utazás kényelmes 4×4-es szafariautóval',
      'Palackozott ivóvíz a szafari alatt',
    ],
    notIncluded: [
      'Nemzetközi repülőjegy',
      'Vízumdíj',
      'Utasbiztosítás',
      'Személyes kiadások és borravaló',
    ],
  }),
]

export const trips = {
  title: 'Utazásaink',
  lead: 'Válassz kész programjaink közül, vagy állítsuk össze együtt a saját utadat – mindkettő mögött ugyanaz a helyi csapat áll.',
  custom: {
    kind: 'Egyéni szervezés',
    title: 'A te utad, a te tempódban',
    text: [
      'Más időpontban vagy más útvonalon utaznál? A kész program mellett egyéni utat is szervezünk.',
      'Mondd el, mire vágysz, és mi hozzád igazítjuk az útvonalat, a szállásokat és a keretet.',
    ],
    options: ['Egyéni időpont', 'Saját útvonal', 'Saját tempó'],
    ctaLabel: 'Egyéni utat tervezek',
    image: new ImageSlot(
      'Egyéni szervezés – hangulatkép',
      'Egyénileg szervezett utazás Tanzániában',
      '/img/utazasok/egyeni-szervezes.jpg',
      '1600×1000',
    ),
  },
}

export const travelInfo = {
  title: 'Időjárás és éghajlat',
  text: [
    'Tanzánia az Egyenlítőtől délre fekszik. Az ország hatalmas mérete miatt az éghajlat régiónként nagyon eltérő lehet.',
    'Általánosságban trópusi az éghajlat, jól elkülönülő esős és száraz évszakkal. A fő esős évszak jellemzően márciustól májusig tart, a fő száraz évszak pedig júniustól októberig.',
  ],
  seasons: [
    { label: 'Száraz évszak', value: 'június – október' },
    { label: 'Fő esős évszak', value: 'március – május' },
  ],
}

/* ---------- Aloldalak fejlécei ---------- */

const pageImage = (page: string, label: string) =>
  new ImageSlot(
    `${label} – oldal fejléc háttérképe`,
    label,
    `/img/fejlec/${page}.jpg`,
    '1920×700',
  )

export const pages = {
  utazasok: {
    eyebrow: 'Programok és egyéni utak',
    title: 'Utazások',
    lead: 'Kész szafariprogram napi bontásban – vagy teljesen rád szabott út.',
    image: pageImage('utazasok', 'Utazások'),
  },
  kuldetes: {
    eyebrow: `${company.donationLabel} minden utazásból`,
    title: 'Küldetésünk',
    lead: 'Hiszünk benne, hogy egy utazás nem csak annak adhat, aki útra kel.',
    image: pageImage('kuldetes', 'Küldetésünk'),
  },
  rolunk: {
    eyebrow: 'Kik vagyunk',
    title: 'Rólunk',
    lead: 'Tanzánia, ahogy mi ismerjük – és ahogy neked is megmutatnánk.',
    image: pageImage('rolunk', 'Rólunk'),
  },
  galeria: {
    eyebrow: 'Utasaink szemével',
    title: 'Galéria',
    lead: 'Pillanatok és visszajelzések azoktól, akik már velünk jártak Tanzániában.',
    image: pageImage('galeria', 'Galéria'),
  },
  csapat: {
    eyebrow: 'Akik az utadat szervezik',
    title: 'Csapat',
    lead: 'Nem egy arctalan irodával beszélsz.',
    image: pageImage('csapat', 'Csapat'),
  },
  kapcsolat: {
    eyebrow: 'Tervezzük meg együtt',
    title: 'Kapcsolat',
    lead: 'Írd meg, mikor és hányan utaznátok, mire vágytok – személyre szabott ajánlattal jelentkezünk.',
    image: pageImage('kapcsolat', 'Kapcsolat'),
  },
}
