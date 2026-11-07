// LEADERSHIP & ORGANIZATIONS
// "featured" is the large i-CSS card with its two terms; "roles" are the rows below it.
// Thumbnail lists ("work") use image file names from public/images/work/ (without .webp).

export const leadershipIntro =
  'Organizational roles from senior high school to university, most of them pairing an officer seat with the design work behind it.';

export const leadershipStats = [
  { value: '5', label: 'Roles' },
  { value: '4', label: 'Organizations' },
  { value: '2', label: 'Schools' },
];

export const featuredOrg = {
  name: 'i-Connect Student Society',
  sub: 'College of Computer Studies · University of Rizal System – Binangonan',
  logo: '/images/brand/iconnect-logo.webp',
  terms: [
    {
      year: 'A.Y. 2026 – 2027',
      theme: 'NEXUS',
      role: 'Secretary & Graphics Committee',
      text: 'Designed the NEXUS identity and soft launch, the term’s publication materials, and the organization’s official website.',
      work: ['i-css-soft-launch-logo', 'nexus-it-is-start', 'nexus-nexuspath', 'nexus-plugged-in-friday', 'i-css-committee-search', 'i-css-oath-taking-ceremony'],
    },
    {
      year: 'A.Y. 2025 – 2026',
      theme: 'Spark Forward',
      role: 'Auditor & Graphics Committee',
      text: 'Designed publication materials for the IT Skills Competition, the Google Generative AI Accelerator Program, the URS 25th Founding Anniversary, the Hello World webinar, and E-Games.',
      work: ['it-skills-competition-pubmat-8', 'i-css-google-accelerator-program', 'it-skills-competition-pubmat-12', 'webinar-hello-world-poster', 'e-games-competition-poster', 'welcome-back-poster-icss'],
    },
  ],
};

export const roles = [
  {
    role: 'Multimedia Committee',
    org: 'University Supreme Student Government · URS Binangonan',
    year: 'A.Y. 2026 – 2027',
    logo: '/images/brand/ussg-logo.webp',
    logoAlt: 'URS Binangonan University Supreme Student Government logo',
    note: 'Designs publication materials for the student government, including the Halloween and All Souls’ Day 2026 posts.',
    work: ['ussg-halloween-2026', 'ussg-all-souls-day-2026'],
  },
  {
    role: 'ICT President',
    org: 'PSIFIAKOS · Golden Faith Academy',
    year: 'A.Y. 2024 – 2025',
    logo: '/images/brand/psifiakos-logo.webp',
    logoAlt: 'PSIFIAKOS logo',
  },
  {
    role: 'ICT Representative',
    org: 'GFA Student Council · Golden Faith Academy',
    year: 'A.Y. 2024 – 2025',
    logo: '/images/brand/gfa-sc-logo.webp',
    logoAlt: 'Golden Faith Academy Senior High School Student Council logo',
  },
];
