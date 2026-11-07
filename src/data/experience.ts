// PROFESSIONAL EXPERIENCE: newest first.
// To add a job, copy one { ... } block, paste it at the top of the list, and edit it.
// Images go in public/images/... and are written here starting with /images/...

export type Job = {
  when: string;
  type: string;
  role: string;
  org: string;
  sub: string;
  logo?: string; // optional logo image
  logoFree?: boolean; // true = transparent icon shown without a box
  peek?: string; // optional image that appears beside the cursor on hover
  did: string[];
  tools: string[];
};

export const experience: Job[] = [
  {
    when: 'Jul – Oct 2026',
    type: 'Part-time · Remote',
    role: 'Graphic Designer, Multimedia Creator & Web Editor',
    org: 'Fernando "The Phantom" Diaz-Marquez',
    sub: 'Professional featherweight boxer',
    logo: '/images/brand/phantom-logo.webp',
    logoFree: true,
    peek: '/images/work/phantom-merch-1.webp',
    did: [
      'Designed the fighter’s official merchandise and prepared print-ready files',
      'Created promotional graphics and video content for his brand',
      'Managed media and merch content on his website through GoHighLevel',
      'Worked with the team remotely on Slack under fast turnarounds',
    ],
    tools: ['Canva', 'CapCut', 'GoHighLevel', 'Slack'],
  },
  {
    when: 'Mar – Aug 2026',
    type: 'Remote',
    role: 'Ads Manager & Ad Resizer',
    org: 'MyEventPlus',
    sub: 'Event planning & community platform',
    logo: '/images/brand/myeventplus-logo.webp',
    logoFree: true,
    peek: '/images/mep/mep-25.webp',
    did: [
      'Resized and recreated 200+ ad creatives across placements from 1″ to 8″',
      'Adapted English and Hebrew layouts for a wide range of local advertisers',
      'Managed ad assets from production through delivery',
    ],
    tools: ['Canva', 'Figma'],
  },
  {
    when: '2026',
    type: 'Freelance',
    role: 'Multimedia Manager',
    org: 'Blissie',
    sub: 'Skincare brand',
    logo: '/images/brand/blissie-logo.webp',
    peek: '/images/brand/blissie-logo.webp',
    did: ['Designed printable product labels for the skincare line', 'Created brand graphics for marketing'],
    tools: ['Canva'],
  },
  {
    when: '2021 – 2023',
    type: 'Freelance',
    role: 'Social Media Manager',
    org: 'Kvtrendz.ph',
    sub: 'Online fashion boutique',
    logo: '/images/brand/kvtrendz-logo.webp',
    peek: '/images/brand/kvtrendz-logo.webp',
    did: [
      'Managed social media for a boutique selling preloved, brand-new, and overstock apparel',
      'Built a warm, cohesive visual identity with clear product presentation',
      'Planned content to keep the feed consistent and strengthen brand recognition',
    ],
    tools: ['Canva'],
  },
];
