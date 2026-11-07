# Tobey Vallecer — Portfolio

Live site: **https://vallecertobey17-coder.github.io**

Built with [Astro](https://astro.build) as a fast static site, hosted free on GitHub Pages, and deployed automatically by GitHub Actions every time you push to `main`.

---

## Updating your content

All content lives in **`src/data/`**. You never need to touch the design files to add new work.

| What you want to change | File |
|---|---|
| Name, intro, titles, email, links, contact form ID, "Available" badge | `src/data/site.ts` |
| About text and quick facts | `src/data/about.ts` |
| Projects (Work section + project pages) | `src/data/projects.ts` |
| Jobs (Experience) | `src/data/experience.ts` |
| Organizations (Leadership) | `src/data/leadership.ts` |
| Schools and honors | `src/data/education.ts` |
| Services list and tools carousel | `src/data/skills.ts` |
| Certificates | `src/data/certifications.ts` |

### Add a new project
1. Export your images as **WebP or JPG, about 1200px wide**, and put them in `public/images/work/`.
2. Open `src/data/projects.ts`, copy an existing `{ ... }` block, and paste it where you want it in the list.
3. Change `slug` (the page address, e.g. `my-new-project`, lowercase with dashes), the text, `cats` (`'multimedia'`, `'uiux'`, `'web'`), `cover`, and `gallery`.
4. Save, commit, and push. The site rebuilds in about a minute, and the project gets its own page at `/work/<slug>/`.

### Add a job, organization, or certificate
Open the matching file in `src/data/`, copy one block, paste it at the top, and edit it. Logos go in `public/images/brand/`.

### Replace your photo or CV
- Photo: replace `public/images/brand/tobey-cutout.webp`. Use a transparent background and keep the same file name.
- CV: replace `public/Tobey-Vallecer-CV.pdf` and keep the same file name.

---

## Contact form (Formspree)

GitHub Pages only hosts files, so messages are delivered by [Formspree](https://formspree.io) (free plan: 50 messages a month).

1. Sign up at formspree.io with your Gmail and create a new form.
2. Copy the form's ID: the last part of its link, e.g. `https://formspree.io/f/abcdwxyz` → `abcdwxyz`.
3. Paste it into `formspreeId: ''` in `src/data/site.ts`, then commit and push.

The ID is safe to make public; it isn't a password. Until it's set, the form asks visitors to email you directly instead of pretending to send.

---

## Working on your computer (optional)

You need [Node.js](https://nodejs.org) 22.23 or newer.

```bash
npm install        # once
npm run dev        # live preview at http://localhost:4321
npm run build      # build the site into dist/
npm run check      # after build: checks for broken links and images
```

You can also edit files directly on github.com (open a file → pencil icon → **Commit changes**). The site redeploys by itself.

---

## Deployment

- `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.
- One-time setup on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
- Watch progress in the repository's **Actions** tab. A green check means the site is live.

### Custom domain (optional)
1. Buy a domain (for example from Namecheap, Porkbun, or Cloudflare).
2. In GitHub: **Settings → Pages → Custom domain**, enter it, and save.
3. At your domain provider, add the DNS records GitHub shows: four `A` records for the root domain, or a `CNAME` pointing `www` to `vallecertobey17-coder.github.io`.
4. When the check passes, tick **Enforce HTTPS**.
5. Update `site` in `astro.config.mjs` and `url` in `src/data/site.ts` to the new domain.

---

Brand icons in the tools carousel are from [Simple Icons](https://simpleicons.org) (CC0). All artwork shown is © Tobey Vallecer; client work appears with permission and remains the property of the respective clients.
