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
 * FOTÓK: a valódi fotók előre tömörítve, több méretben vannak a public/img
 * alatt (pl. gepardok-600.webp, gepardok-1000.webp). Ezeket az
 * ImageSlot.photo('/img/galeria/gepardok', 'leírás', [600, 1000]) hívás adja meg.
 * Az eredeti fájlok a forras/kepek mappában vannak.
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
      ImageSlot.photo('/img/galeria/gepardok', 'Gepárdok a szavannán', [600, 1000]),
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
      ImageSlot.photo('/img/galeria/a-szafariautoban', 'Utasaink a szafariautóban', [600, 1200]),
      true,
    ),
  ],
}

const photo = (name: string, alt: string, widths = [600, 1200]) =>
  ImageSlot.photo(`/img/galeria/${name}`, alt, widths)

export const gallery = {
  title: 'Utasaink szemével',
  lead: 'Pillanatok azoktól, akik már velünk jártak Tanzániában. Valódi fotók, valódi utazásokról.',
  // A sorrend számít: négyesével (álló, széles, álló, széles) hézag nélkül tölti ki a rácsot.
  // Utas véleménye a GalleryItem 4–5. paraméterében adható meg.
  items: [
    new GalleryItem(photo('csoportkep-a-szafariautonal', 'Csoportkép a szafariautónál'), 'Csoportkép a szafariautónál'),
    new GalleryItem(photo('ebed-a-szafarin', 'Ebéd a szafari közben', [600, 1000]), 'Ebéd a szafari közben', 'wide'),
    new GalleryItem(photo('maszaj-talalkozas', 'Találkozás a maszájokkal'), 'Találkozás a maszájokkal'),
    new GalleryItem(photo('kozos-ebed', 'Közös ebéd a csapattal', [600, 1000]), 'Közös ebéd a csapattal', 'wide'),
    new GalleryItem(photo('a-szafariauto-tetejen', 'A szafariautó tetején'), 'A szafariautó tetején'),
    new GalleryItem(photo('indulas', 'Indulás a szafarira', [600, 1000]), 'Indulás a szafarira', 'wide'),
    new GalleryItem(photo('tarangire-bejarat', 'A Tarangire Nemzeti Park bejáratánál'), 'Tarangire Nemzeti Park'),
    new GalleryItem(photo('csoportkep-indulas', 'Csoportkép indulás előtt', [600, 1000]), 'Csoportkép indulás előtt', 'wide'),
    new GalleryItem(photo('szafariauto-a-sikon', 'Szafariautó a síkságon', [462]), 'Végtelen síkság'),
    new GalleryItem(photo('gepardok', 'Gepárdok a szavannán', [600, 1000]), 'Gepárdok', 'big'),
    new GalleryItem(photo('a-szafariautoban', 'Utasaink a szafariautóban'), 'Úton a parkban'),
  ],
}

export const team = {
  title: 'Akik az utadat szervezik',
  lead: 'Nem egy arctalan irodával beszélsz. Ismerd meg, ki áll az utazásod mögött.',
  // Új szervező felvételéhez adj a listához még egy TeamMember-t.
  members: [
    new TeamMember(
      'Kahn Szilvia',
      'Helyi vezető',
      [], // A bemutatkozó szöveg ide kerül, bekezdésenként egy szöveg.
      ImageSlot.photo('/img/csapat/kahn-szilvia', 'Kahn Szilvia a szavannán', [600, 1200]),
    ),
    new TeamMember(
      '', // A név ide kerül.
      'Helyi vezető',
      [],
      ImageSlot.photo('/img/csapat/helyi-vezeto', 'Helyi vezetőnk a szafariautóban', [600, 1200]),
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
    image: photo('csoportkep-a-szafariautonal', 'Utasaink a szafariautónál'),
    days: [
      new TripDay(
        1,
        'Érkezés Tanzániába',
        [
          'Karibu – Isten hozott Tanzániában! A Kilimandzsáró nemzetközi repülőtéren helyi vezetőd vár, és elvisz az arushai szállásodra.',
        ],
        photo('indulas', 'Érkezés, találkozás a helyi vezetővel', [600, 1000]),
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
        photo('tarangire-bejarat', 'A Tarangire Nemzeti Park bejáratánál'),
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
        photo('a-szafariauto-tetejen', 'Szafari a nyitott tetejű autóból'),
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
        photo('gepardok', 'Gepárdok a szavannán', [600, 1000]),
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
        photo('csoportkep-indulas', 'Közös csoportkép az út végén', [600, 1000]),
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
    image: photo('maszaj-talalkozas', 'Találkozás a maszájokkal'),
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
    lead: 'Pillanatok azoktól, akik már velünk jártak Tanzániában.',
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
