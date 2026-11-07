// ─────────────────────────────────────────────────────────────
// PROJECTS: each item becomes a card in "Work" and its own page at /work/<slug>/
//
// To add a project:
//   1. Put its images in public/images/work/ (WebP or JPG, about 1200px wide).
//   2. Copy one { ... } block below, paste it where you want it in the list, and edit it.
//   3. "gallery" lists image paths; "cover" decides how the card thumbnail looks:
//        { type: 'image', src }                 → one image
//        { type: 'browser', src, mobile, url }  → a website screenshot in a browser frame
//        { type: 'tees', designs: [a, b] }      → T-shirt mockups
//        { type: 'banners', images: [a, b, c] } → stacked ad banners
//        { type: 'collage', images: [...] }     → a row of images
//   4. "cats" sets the filters: 'multimedia', 'uiux', 'web'.
// ─────────────────────────────────────────────────────────────

export type Cover =
  | { type: 'image'; src: string; bg?: string; position?: string }
  | { type: 'browser'; src: string; mobile?: string; url: string }
  | { type: 'tees'; designs: string[] }
  | { type: 'banners'; images: string[] }
  | { type: 'collage'; images: string[] };

export type Project = {
  slug: string;
  title: string;
  short: string;
  cats: ('multimedia' | 'uiux' | 'web')[];
  tags: string[];
  year: string;
  span: 4 | 5 | 6 | 7 | 8 | 12; // card width on desktop (out of 12 columns)
  ratio: string; // card image shape, e.g. '4/3'
  label?: string; // small tag on the card, e.g. 'Mockup'
  client: string;
  role: string;
  tools: string;
  summary: string;
  did: string[];
  links?: { text: string; url: string }[];
  note?: string;
  cover: Cover;
  gallery: string[];
};

const w = (n: string) => `/images/work/${n}.webp`;
const mep = (n: number) => `/images/mep/mep-${String(n).padStart(2, '0')}.webp`;

export const projects: Project[] = [
  {
    slug: 'i-connect-nexus-website',
    title: 'i-Connect NEXUS Website',
    short: 'i-Connect NEXUS Website',
    cats: ['web', 'uiux'],
    tags: ['Web Development', 'UI/UX'],
    year: '2026',
    span: 8,
    ratio: '16/10',
    client: 'i-Connect Student Society, URS Binangonan',
    role: 'UI design & front-end development',
    tools: 'Design and code',
    summary:
      'The official website of the i-Connect Student Society for A.Y. 2026–2027. It gives College of Computer Studies students one home for announcements, projects and activities, financial transparency, accomplishment reports, and the officer directory.',
    did: [
      'Designed the full interface in the NEXUS visual identity',
      'Developed and launched the site, live on Netlify',
      'Built pages for announcements, projects, transparency reports, officers, and contact',
      'Included an editor login so officers can publish updates themselves',
    ],
    links: [{ text: 'Visit live site', url: 'https://i-connect-nexus.netlify.app' }],
    cover: { type: 'browser', src: w('ic-home'), mobile: w('ic-mobile'), url: 'i-connect-nexus.netlify.app' },
    gallery: ['ic-home', 'ic-projects', 'ic-officers', 'ic-transparency', 'ic-mobile'].map(w),
  },
  {
    slug: 'nexus-identity',
    title: 'NEXUS Identity & Launch',
    short: 'NEXUS Identity & Launch',
    cats: ['multimedia'],
    tags: ['Branding', 'Publication'],
    year: 'A.Y. 2026–27',
    span: 4,
    ratio: '4/5.06',
    client: 'i-Connect Student Society',
    role: 'Brand identity & publication design',
    tools: 'Adobe Photoshop, Canva',
    summary:
      'The visual identity for the i-Connect Student Society’s NEXUS term (A.Y. 2026–2027). It starts from a soft-launch logo and runs through the term’s posts: committee search, oath-taking, the IT.IS_START(); webinar, the NEXUSPATH roadmap, the Plugged-In Friday series, event highlights, greetings, and the printed bulletin board.',
    did: [
      'Designed the NEXUS logo and soft-launch reveal',
      'Built a consistent deep-blue, cosmic visual system for the term',
      'Produced publication materials for webinars, projects, event highlights, and greetings',
      'Designed the large-format printed bulletin board',
      'Co-designed the IT.IS_START(); webinar pubmat with Victor Lacanienta and Michael Sarcia',
    ],
    cover: { type: 'image', src: w('i-css-soft-launch-logo') },
    gallery: [
      'i-css-soft-launch-logo', 'i-css-soft-launch-cover-page', 'nexus-it-is-start', 'nexus-nexuspath',
      'nexus-plugged-in-friday', 'nexus-teachers-day-highlights', 'nexus-welcome-icons', 'nexus-happy-halloween-2026',
      'nexus-all-saints-day-2026', 'i-css-committee-search', 'i-css-oath-taking-ceremony', 'i-css-congratulations-commitee',
      'i-css-congratulations-posting', 'i-css-happy-birthday-posting', 'copy-of-bulletin-board-5',
    ].map(w),
  },
  {
    slug: 'spark-forward',
    title: 'Spark Forward Publication Materials',
    short: 'Spark Forward Pubmats',
    cats: ['multimedia'],
    tags: ['Publication', 'Social media'],
    year: 'A.Y. 2025–26',
    span: 5,
    ratio: '1/1',
    client: 'i-Connect Student Society',
    role: 'Graphics Committee · publication design',
    tools: 'Adobe Photoshop, Canva',
    summary:
      'Publication materials for the i-Connect Student Society’s Spark Forward term (A.Y. 2025–2026), including a five-part IT Skills Competition campaign in a playful 3D-block style, the Google Generative AI Accelerator Program, the URS 25th Founding Anniversary, the Hello World webinar, E-Games, College Days, and seasonal posts.',
    did: [
      'Designed a five-piece campaign for the IT Skills Competition',
      'Created posters for the Hello World webinar and E-Games competition',
      'Designed the CCS College Days DP blast frame',
      'Created the poster for the Google Generative AI Accelerator Program with SmartBridge',
      'Designed the URS 25th Founding Anniversary representatives post',
      'Kept a consistent header and footer system across every post',
    ],
    cover: { type: 'image', src: w('it-skills-competition-pubmat-8') },
    gallery: [
      'it-skills-competition-pubmat-8', 'it-skills-competition-pubmat-9', 'it-skills-competition-pubmat-10',
      'it-skills-competition-pubmat-11', 'it-skills-competition-pubmat-12', 'i-css-google-accelerator-program',
      'i-css-25th-founding-annivesrary-posting', 'webinar-hello-world-poster', 'e-games-competition-poster',
      'welcome-back-poster-icss', 'ccs-college-days-dp-blast', 'all-saints-day-all-souls-day', 'all-saints-day-all-souls-day-1',
    ].map(w),
  },
  {
    slug: 'the-phantom-merch',
    title: '"The Phantom" Merch',
    short: '"The Phantom" Merch',
    cats: ['multimedia'],
    tags: ['Merch', 'Print'],
    year: 'Jul – Oct 2026',
    span: 7,
    ratio: '7/5',
    label: 'Mockup',
    client: 'Fernando "The Phantom" Diaz-Marquez, pro featherweight boxer',
    role: 'Graphic design, merch & print',
    tools: 'Canva, CapCut, GoHighLevel, Slack',
    summary:
      'Fight merchandise for a professional featherweight boxer: bold, gritty shirt graphics built around his "The Phantom" persona and fighter portraits, plus print preparation and website content updates.',
    did: [
      'Designed shirt graphics for the fighter’s merch line',
      'Prepared print-ready files for production',
      'Updated the website’s media and merch content through GoHighLevel',
      'Coordinated remotely with the team on Slack',
    ],
    links: [{ text: 'Visit thefightingphantom.com', url: 'https://thefightingphantom.com/media' }],
    note: 'Shirt visuals are mockups; the designs are the final artwork.',
    cover: { type: 'tees', designs: [w('phantom-merch-1'), w('phantom-merch-2')] },
    gallery: ['phantom-merch-1', 'phantom-merch-2'].map(w),
  },
  {
    slug: 'calori',
    title: 'Calori: Calorie Tracking App',
    short: 'Calori App UI',
    cats: ['uiux'],
    tags: ['UI/UX', 'Mobile app'],
    year: '2026',
    span: 7,
    ratio: '16/11',
    client: 'Design exercise for an application to Calori',
    role: 'UI/UX design',
    tools: 'Figma',
    summary:
      'A mobile app concept for tracking calorie intake, from onboarding and sign-up through a biometric profile, food logging by barcode, voice, or photo, meal details with macros, and a daily dashboard.',
    did: [
      'Designed eight core screens of the user flow',
      'Built a warm orange visual system with a flame mark',
      'Designed multiple quick-log methods: barcode, voice, meal scan, and quick add',
      'Showed calories and macros in a clear daily summary',
    ],
    cover: { type: 'image', src: w('calori'), bg: '#fde7df', position: 'center 30%' },
    gallery: [w('calori')],
  },
  {
    slug: 'myeventplus-ads',
    title: 'MyEventPlus Ad Adaptations',
    short: 'MyEventPlus Ads',
    cats: ['multimedia'],
    tags: ['Advertising', 'Resizing'],
    year: 'Mar – Aug 2026',
    span: 5,
    ratio: '5/5.06',
    client: 'MyEventPlus, event planning & community platform',
    role: 'Ads Manager & Ad Resizer',
    tools: 'Canva, Figma',
    summary:
      'Over 200 ads resized and recreated for MyEventPlus advertisers, adapted across placements from 1-inch strips to 8-inch features, including English and Hebrew layouts.',
    did: [
      'Resized and recreated 200+ ad creatives',
      'Adapted each ad across multiple placement sizes while keeping the brand consistent',
      'Handled English and Hebrew layouts',
      'Managed ad files from production through delivery',
    ],
    cover: { type: 'banners', images: [mep(14), mep(25), mep(6)] },
    gallery: Array.from({ length: 49 }, (_, i) => mep(i + 1)),
  },
  {
    slug: 'marketing-concepts',
    title: 'Marketing Concepts',
    short: 'Marketing Concepts',
    cats: ['multimedia'],
    tags: ['Advertising', 'Concept work'],
    year: '2026',
    span: 12,
    ratio: '21/8',
    label: 'Concept work',
    client: 'Self-initiated concept pieces',
    role: 'Graphic design',
    tools: 'Adobe Photoshop, Canva',
    summary:
      'Self-initiated ad concepts exploring different industries and tones: a gluten-free product ad, a creator-income course campaign, and a sweepstakes promo.',
    did: [
      'Explored very different visual languages, from bold retail to soft pastel',
      'Designed for feed formats (1:1 and 4:5)',
      'Practiced headline hierarchy and clear calls to action',
    ],
    cover: { type: 'collage', images: [w('a-1'), w('heading-1'), w('but-you-re-not-getting-paid'), w('heading-2')] },
    gallery: ['a-1', 'heading-1', 'heading-2', 'but-you-re-not-getting-paid'].map(w),
  },
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'multimedia', label: 'Multimedia & Design' },
  { id: 'uiux', label: 'UI/UX' },
  { id: 'web', label: 'Web Development' },
] as const;
