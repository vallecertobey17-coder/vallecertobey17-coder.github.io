// SKILLS (services list) and TOOLS (the carousel under the hero).
// Tool "icon" names come from the Simple Icons set (see src/data/icons.ts).
// If a tool has no icon there, write a 2-letter "badge" instead.

export const services = [
  'Publication materials & social graphics',
  'Brand identity & logos',
  'Merch & print design',
  'Ad creative & multi-size resizing',
  'UI/UX design & prototyping',
  'Responsive web development',
  'Social media management',
  'Virtual assistance',
];

export type Tool = { name: string; group: string; icon?: string; badge?: string };

export const tools: Tool[] = [
  { name: 'Photoshop', group: 'Design', icon: 'adobephotoshop' },
  { name: 'Illustrator', group: 'Design', icon: 'adobeillustrator' },
  { name: 'Canva', group: 'Design', icon: 'canva' },
  { name: 'CapCut', group: 'Design', badge: 'CC' },
  { name: 'Figma', group: 'UI/UX', icon: 'figma' },
  { name: 'HTML', group: 'Web', icon: 'html5' },
  { name: 'CSS', group: 'Web', icon: 'css3' },
  { name: 'JavaScript', group: 'Web', icon: 'javascript' },
  { name: 'React', group: 'Web', icon: 'react' },
  { name: 'Node.js', group: 'Web', icon: 'nodedotjs' },
  { name: 'Git', group: 'Web', icon: 'git' },
  { name: 'GitHub', group: 'Web', icon: 'github' },
  { name: 'Slack', group: 'Collaboration', icon: 'slack' },
  { name: 'GoHighLevel', group: 'Collaboration', badge: 'HL' },
];
