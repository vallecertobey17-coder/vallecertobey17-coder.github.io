// Interactions for the whole site. Every feature checks that its elements exist,
// so the same script runs on the homepage, project pages, and the 404 page.

const $ = <T extends Element = HTMLElement>(s: string, root: ParentNode = document) => root.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, root: ParentNode = document) => [...root.querySelectorAll<T>(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------- Nav: blur on scroll, reading progress, active section ---------- */
const nav = $('#nav');
const progress = $('#progress');
const onScroll = () => {
  nav?.classList.toggle('scrolled', scrollY > 20);
  const h = document.documentElement.scrollHeight - innerHeight;
  if (progress) progress.style.width = `${h > 0 ? (scrollY / h) * 100 : 0}%`;
};
addEventListener('scroll', onScroll, { passive: true });
onScroll();

const navLinks = $$<HTMLAnchorElement>('.nav ul a[data-section]');
const sections = navLinks.map((a) => document.getElementById(a.dataset.section!)).filter(Boolean) as HTMLElement[];
if (sections.length) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle('active', a.dataset.section === e.target.id));
    }),
    { rootMargin: '-45% 0px -50% 0px' },
  );
  sections.forEach((s) => io.observe(s));
}

/* ---------- Mobile menu ---------- */
const menuBtn = $<HTMLButtonElement>('#menuBtn');
const sheet = $('#sheet');
const sheetLinks = $$<HTMLAnchorElement>('#sheet a');
const setMenu = (open: boolean) => {
  document.body.classList.toggle('menu-open', open);
  menuBtn?.setAttribute('aria-expanded', String(open));
  menuBtn?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  sheet?.setAttribute('aria-hidden', String(!open));
  sheetLinks.forEach((a) => (a.tabIndex = open ? 0 : -1));
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) sheetLinks[0]?.focus();
};
menuBtn?.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
sheetLinks.forEach((a) => a.addEventListener('click', () => setMenu(false)));
addEventListener('resize', () => { if (innerWidth > 1080 && document.body.classList.contains('menu-open')) setMenu(false); });

/* ---------- Hero role ticker ---------- */
const roles = $$('#roles li');
if (roles.length) {
  let i = 0;
  const tick = () => { roles.forEach((r, k) => r.classList.toggle('on', k === i)); i = (i + 1) % roles.length; };
  tick();
  if (!reduced) setInterval(tick, 2200);
}

/* ---------- Tools carousel pause button ---------- */
const pp = $<HTMLButtonElement>('#ppBtn');
pp?.addEventListener('click', () => {
  const paused = $('#tools')!.classList.toggle('paused');
  pp.setAttribute('aria-pressed', String(paused));
  pp.textContent = paused ? '▶ Play' : '❚❚ Pause';
});

/* ---------- Reveal on scroll (transform only, content is always visible) ---------- */
const ro = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } }),
  { rootMargin: '0px 0px -8% 0px' },
);
$$('.reveal').forEach((el) => ro.observe(el));

/* ---------- Work filters ---------- */
const grid = $('#grid');
const chips = $$<HTMLButtonElement>('.chip[data-f]');
chips.forEach((b) => b.addEventListener('click', () => {
  const f = b.dataset.f!;
  chips.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  grid?.classList.toggle('all', f === 'all');
  let shown = 0;
  $$<HTMLElement>('#grid .card').forEach((c) => {
    const on = f === 'all' || c.dataset.cats!.split(' ').includes(f);
    c.hidden = !on;
    if (on) shown++;
  });
  const status = $('#filterStatus');
  if (status) status.textContent = `Showing ${shown} ${shown === 1 ? 'project' : 'projects'}`;
}));

/* ---------- Cursor label, experience hover preview, magnetic buttons ---------- */
const cursor = $('#cursor');
const peek = $<HTMLImageElement>('#peek');
if (finePointer && !reduced) {
  addEventListener('pointermove', (e) => {
    if (cursor) { cursor.style.left = `${e.clientX}px`; cursor.style.top = `${e.clientY}px`; }
    if (peek) { peek.style.left = `${e.clientX + 150}px`; peek.style.top = `${e.clientY}px`; }
  }, { passive: true });
  grid?.addEventListener('pointerover', (e) => cursor?.classList.toggle('on', !!(e.target as Element).closest('.card')));
  grid?.addEventListener('pointerleave', () => cursor?.classList.remove('on'));
  $$<HTMLElement>('.xp > li[data-peek]').forEach((li) => {
    li.addEventListener('pointerenter', () => { if (peek) { peek.src = li.dataset.peek!; peek.classList.add('on'); } });
    li.addEventListener('pointerleave', () => peek?.classList.remove('on'));
  });
  $$<HTMLElement>('.btn').forEach((b) => {
    b.addEventListener('pointermove', (e) => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.12}px,${(e.clientY - r.top - r.height / 2) * 0.2}px)`;
    });
    b.addEventListener('pointerleave', () => (b.style.transform = ''));
  });
}

/* ---------- Lightbox: any button with data-lb="<group>" and data-src ---------- */
const lb = $('#lb');
const lbImg = $<HTMLImageElement>('#lbImg');
let list: string[] = [];
let idx = 0;
let returnTo: HTMLElement | null = null;
const show = () => {
  if (!lbImg) return;
  lbImg.src = list[idx];
  lbImg.alt = `Image ${idx + 1} of ${list.length}`;
  $('#lbCount')!.textContent = `${idx + 1} / ${list.length}`;
};
const openLb = (group: string, src: string, from: HTMLElement) => {
  list = $$<HTMLElement>(`[data-lb="${CSS.escape(group)}"]`).map((b) => b.dataset.src!);
  idx = Math.max(0, list.indexOf(src));
  returnTo = from;
  show();
  lb?.classList.add('open');
  document.body.style.overflow = 'hidden';
  $<HTMLButtonElement>('#lbClose')?.focus();
};
const closeLb = () => { lb?.classList.remove('open'); document.body.style.overflow = ''; returnTo?.focus(); };
const step = (d: number) => { idx = (idx + d + list.length) % list.length; show(); };
$$<HTMLElement>('[data-lb]').forEach((b) => b.addEventListener('click', () => openLb(b.dataset.lb!, b.dataset.src!, b)));
$('#lbClose')?.addEventListener('click', closeLb);
$('#lbPrev')?.addEventListener('click', () => step(-1));
$('#lbNext')?.addEventListener('click', () => step(1));
lb?.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
addEventListener('keydown', (e) => {
  if (lb?.classList.contains('open')) {
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'Tab') { // keep focus inside the dialog
      const f = $$<HTMLButtonElement>('button', lb);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  } else if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
    setMenu(false);
    menuBtn?.focus();
  }
});

/* ---------- Contact form → Formspree ---------- */
const form = $<HTMLFormElement>('#cf');
if (form) {
  const notice = $('#notice')!;
  const send = $<HTMLButtonElement>('#send')!;
  const formId = form.dataset.formspree || '';
  const email = form.dataset.email || '';
  const rules: Record<string, (v: string) => true | string> = {
    'f-name': (v) => v.trim().length >= 2 || 'Enter your name.',
    'f-email': (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Enter a valid email address, like name@example.com.',
    'f-type': (v) => !!v || 'Choose what your message is about.',
    'f-msg': (v) => v.trim().length >= 10 || 'Write a message of at least 10 characters.',
  };
  const check = (id: string) => {
    const el = document.getElementById(id) as HTMLInputElement;
    const r = rules[id](el.value);
    const field = el.closest('.field')!;
    field.classList.toggle('err', r !== true);
    field.querySelector('.msg')!.textContent = r === true ? '' : r;
    el.setAttribute('aria-invalid', String(r !== true));
    return r === true;
  };
  Object.keys(rules).forEach((id) => {
    const el = document.getElementById(id)!;
    el.addEventListener('blur', () => check(id));
    el.addEventListener('input', () => { if (el.closest('.field')!.classList.contains('err')) check(id); });
  });
  const say = (kind: 'ok' | 'bad', html: string) => { notice.className = `notice show ${kind}`; notice.innerHTML = html; };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const valid = Object.keys(rules).map(check).every(Boolean);
    if (!valid) {
      say('bad', 'Please fix the highlighted fields and try again.');
      form.querySelector<HTMLElement>('.err input, .err select, .err textarea')?.focus();
      return;
    }
    if (!formId) {
      say('bad', `The contact form isn't connected yet. Please email me directly at <a href="mailto:${email}">${email}</a>.`);
      return;
    }
    send.disabled = true;
    const label = send.innerHTML;
    send.textContent = 'Sending…';
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (res.ok) {
        form.reset();
        say('ok', "Thanks! Your message was sent. I'll reply by email soon.");
      } else {
        const data = await res.json().catch(() => ({}));
        const detail = data?.errors?.map((x: { message: string }) => x.message).join(' ') || 'The message could not be sent.';
        say('bad', `${detail} Please try again, or email me at <a href="mailto:${email}">${email}</a>.`);
      }
    } catch {
      say('bad', `Couldn't reach the server. Check your connection and try again, or email me at <a href="mailto:${email}">${email}</a>.`);
    } finally {
      send.disabled = false;
      send.innerHTML = label;
    }
  });
}
