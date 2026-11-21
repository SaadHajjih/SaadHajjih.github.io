/* ===== Enhancement layer ===== */
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* Boot log in preloader */
  const log = $('#boot-log');
  if (log) {
    const lines = ['> energizing MDB ........', '> checking ELV backbone ..', '> loading portfolio .....'];
    lines.forEach((t, i) => setTimeout(() => {
      log.insertAdjacentHTML('beforeend', `<div>${t} <span class="ok">OK</span></div>`);
    }, 150 + i * 300));
  }

  /* Scroll progress */
  const bar = $('#scroll-progress');
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* Hero circuit traces (procedural PCB-style routing) */
  const host = $('#circuit-bg');
  function buildCircuit() {
    if (!host) return;
    const W = host.clientWidth, H = host.clientHeight, G = 24;
    const snap = v => Math.round(v / G) * G;
    const count = Math.max(10, Math.round(W / 70));
    let paths = '', pulses = '', nodes = '';
    for (let i = 0; i < count; i++) {
      const fromRight = Math.random() < 0.65;
      let x = fromRight ? W + 10 : -10, y = snap(Math.random() * H);
      const dir = fromRight ? -1 : 1;
      let d = `M${x},${y}`;
      const segs = 2 + Math.floor(Math.random() * 3);
      for (let s = 0; s < segs; s++) {
        x += dir * snap(80 + Math.random() * 220); d += ` L${x},${y}`;
        if (s < segs - 1) { const k = snap(24 + Math.random() * 96) * (Math.random() < .5 ? -1 : 1); x += dir * Math.abs(k); y += k; d += ` L${x},${y}`; }
      }
      const dur = (4 + Math.random() * 6).toFixed(2), delay = (-Math.random() * 8).toFixed(2);
      paths += `<path class="trace" d="${d}"/>`;
      pulses += `<path class="pulse" d="${d}" style="--d:${dur}s;--delay:${delay}s"/>`;
      nodes += `<circle class="node ${Math.random() < .5 ? 'hot' : ''}" cx="${x}" cy="${y}" r="4" style="--delay:${(Math.random()*3).toFixed(2)}s"/>`;
    }
    host.innerHTML = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">${paths}${reduce ? '' : pulses}${nodes}</svg>`;
  }
  buildCircuit();
  let rT; addEventListener('resize', () => { clearTimeout(rT); rT = setTimeout(buildCircuit, 250); });

  /* Typewriter roles */
  const typer = $('#typer');
  if (typer) {
    const roles = ['Power Distribution', 'Lighting Design', 'ELV & Low Current Systems', 'BIM Workflows', 'Renewable Integration'];
    if (reduce) typer.textContent = roles[0];
    else {
      let r = 0, c = 0, del = false;
      const tick = () => {
        const word = roles[r];
        typer.textContent = word.slice(0, c);
        if (!del && c === word.length) { del = true; return setTimeout(tick, 1600); }
        if (del && c === 0) { del = false; r = (r + 1) % roles.length; }
        c += del ? -1 : 1;
        setTimeout(tick, del ? 35 : 70);
      };
      setTimeout(tick, 2400);
    }
  }

  /* Animated counters */
  const counters = $$('[data-count]');
  const cObs = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count, start = +(el.dataset.from || 0), t0 = performance.now(), dur = 1400;
    const step = t => {
      const p = Math.min(1, (t - t0) / dur), ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(start + (end - start) * ease);
      if (p < 1) requestAnimationFrame(step);
    };
    reduce ? (el.textContent = end) : requestAnimationFrame(step);
    cObs.unobserve(el);
  }), { threshold: .5 });
  counters.forEach(el => cObs.observe(el));

  /* Section number labels */
  const order = ['about', 'skills', 'projects', 'experience', 'education', 'certifications', 'cv-contact'];
  order.forEach((id, i) => {
    const h = $(`#${id} h2`);
    if (h) h.insertAdjacentHTML('beforebegin', `<span class="sec-num">${String(i + 1).padStart(2, '0')} //</span>`);
  });

  /* Spotlight cards */
  $$('#projects [onclick^="openProject"], .skill-tab-content > div, .readout').forEach(el => {
    el.classList.add('spot');
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  /* Skill bars charge up */
  $$('.skill-tab-content .h-\\[2px\\] > div').forEach(b => b.classList.add('skill-bar'));
  const charge = scope => $$('.skill-bar', scope).forEach((b, i) => {
    b.classList.remove('charged'); void b.offsetWidth;
    setTimeout(() => b.classList.add('charged'), 60 + i * 60);
  });
  const skills = $('#skills');
  if (skills) new IntersectionObserver((es, o) => es.forEach(e => {
    if (e.isIntersecting) { charge($('.skill-tab-content:not(.hidden)')); o.disconnect(); }
  }), { threshold: .3 }).observe(skills);
  if (typeof window.switchTab === 'function') {
    const orig = window.switchTab;
    window.switchTab = id => { orig(id); charge(document.getElementById('content-' + id)); };
  }

  /* Footer year */
  const y = $('#tb-date'); if (y) y.textContent = new Date().getFullYear();

  /* Console easter egg */
  console.log('%c⚡ Sa\'ed Hajjih — Electrical Design Engineer', 'color:#10b981;font-size:14px;font-weight:bold');
  console.log('%cCircuit verified. Voltage drop within limits. Let\'s talk: S.M.Hajeh@gmail.com', 'color:#94a3b8');
})();

/* ===== Certificate buttons + viewer ===== */
(() => {
  const v = document.getElementById('cert-viewer');
  if (!v) return;
  const body = document.getElementById('cert-viewer-body');
  const title = document.getElementById('cert-viewer-title');
  const openA = document.getElementById('cert-viewer-open');
  const close = () => { v.classList.add('hidden'); v.classList.remove('flex'); body.innerHTML = ''; document.body.style.overflow = 'auto'; };
  const open = (src, name) => {
    const isUrl = /^https?:\/\//i.test(src);
    const path = isUrl ? src : `certificates/${src}`;
    if (isUrl && !/\.(pdf|png|jpe?g|webp)(\?|$)/i.test(src)) { window.open(src, '_blank', 'noopener'); return; }
    title.textContent = name; openA.href = path;
    body.innerHTML = /\.pdf(\?|$)/i.test(path)
      ? `<iframe src="${path}#view=FitH" class="w-full h-full border-0" title="${name}"></iframe>`
      : `<img src="${path}" alt="${name}" class="max-w-full max-h-full object-contain p-4">`;
    v.classList.remove('hidden'); v.classList.add('flex'); document.body.style.overflow = 'hidden';
  };
  document.getElementById('cert-viewer-close').addEventListener('click', close);
  v.addEventListener('click', e => { if (e.target === v) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !v.classList.contains('hidden')) close(); });

  fetch('certificates/manifest.json', { cache: 'no-cache' }).then(r => r.ok ? r.json() : {}).then(map => {
    document.querySelectorAll('[data-cert-id]').forEach(el => {
      const src = map[el.dataset.certId];
      if (!src) return;
      const name = el.querySelector('h3')?.textContent.trim() || 'Certificate';
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold tracking-widest uppercase border border-brand-500/60 text-brand-600 dark:text-brand-400 rounded hover:bg-brand-500 hover:text-white transition-colors hover-trigger';
      btn.innerHTML = '<i class="fas fa-certificate"></i> View certificate &nearr;';
      btn.addEventListener('click', () => open(src, name));
      el.appendChild(btn);
    });
  }).catch(() => {});
})();
