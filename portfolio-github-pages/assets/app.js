function projectStatusLabel(project) {
  const labels = lang === 'en'
    ? {realized:'Realized', concept:'Concept', development:'Creative development'}
    : {realized:'Реализован', concept:'Концепция', development:'Креативная разработка'};
  return labels[project.status] || project.status || '';
}

function projectGroupLabel(group) {
  const labels = lang === 'en'
    ? {featured:'Selected work', other:'Other projects', concept:'Concepts'}
    : {featured:'Главные кейсы', other:'Другие проекты', concept:'Концепции'};
  return labels[group] || group;
}

function safeStyleToken(value) {
  return String(value || 'default').replace(/[^a-z0-9-]/gi, '').toLowerCase() || 'default';
}

// ═══════════════════════════════════════════
//  CASE MODAL
// ═══════════════════════════════════════════
function openCase(id) {
  const proj = d().projects.find(p => p.id === id);
  const c = CASES[id] && CASES[id][lang];
  if (!proj || !c) return;
  const returnFocus = document.activeElement;

  const L = lang === 'en'
    ? {context:'Context and task', idea:'Creative idea', mechanism:'How it worked', role:'My role', materials:'Visual materials and formats', outcomes:'Recorded outcomes', status:'Project status', evidence:'External references', close:'Close'}
    : {context:'Контекст и задача', idea:'Креативная идея', mechanism:'Как работала механика', role:'Моя роль', materials:'Визуальные материалы и форматы', outcomes:'Зафиксированные результаты', status:'Статус проекта', evidence:'Внешние подтверждения', close:'Закрыть'};

  const details = {
    context:c.context || c.problem || proj.desc,
    idea:c.idea || c.solution || proj.tagline,
    mechanism:c.mechanism || proj.desc,
    role:c.role || proj.role,
    materials:Array.isArray(c.materials) && c.materials.length ? c.materials : proj.tags,
    outcomes:Array.isArray(c.results) ? c.results : [],
    status:c.status || projectStatusLabel(proj),
    evidence:Array.isArray(c.evidence) ? c.evidence : []
  };

  document.getElementById('cmTitle').textContent = String(proj.name);
  const cover = PROJECT_COVERS[id] || '';
  const coverMeta = [proj.brand, proj.date].filter(Boolean).join(' · ');
  const evidence = details.evidence.map(item => ({label:item.label,url:safeHttpUrl(item.url)})).filter(item => item.url);
  const body = document.getElementById('cmBody');
  body.innerHTML = `
    ${cover
      ? `<div class="cm-cover"><img src="${escapeHTML(cover)}" alt="${escapeHTML(proj.coverAlt || (lang === 'en' ? `Cover for ${proj.name}` : `Обложка проекта ${proj.name}`))}" decoding="async"><div class="cm-cover-copy"><div class="ch-name">${escapeHTML(proj.name)}</div><div class="ch-type">${escapeHTML(coverMeta)}</div></div></div>`
      : `<div class="cm-cover cm-cover--type" data-cover="${escapeHTML(safeStyleToken(proj.coverStyle))}"><div class="cm-type-grid" aria-hidden="true"><span>${escapeHTML(projectMark(proj))}</span><i></i><b>${escapeHTML(proj.brand)}</b></div><div class="cm-cover-copy"><div class="ch-name">${escapeHTML(proj.name)}</div><div class="ch-type">${escapeHTML(coverMeta)}</div></div></div>`}
    <header class="cm-intro">
      <div class="cm-intro-meta"><span>${escapeHTML(proj.brand)}</span>${proj.date ? `<span>${escapeHTML(proj.date)}</span>` : ''}<span class="status-badge status-${escapeHTML(proj.status)}">${escapeHTML(projectStatusLabel(proj))}</span></div>
      <h1>${escapeHTML(proj.name)}</h1>
      <p>${escapeHTML(proj.tagline)}</p>
    </header>
    <div class="cm-story-grid">
      <section class="cm-sec"><h2 class="cm-sec-h">${L.context}</h2><p>${escapeHTML(details.context)}</p></section>
      <section class="cm-sec"><h2 class="cm-sec-h">${L.idea}</h2><p>${escapeHTML(details.idea)}</p></section>
      <section class="cm-sec cm-sec--wide"><h2 class="cm-sec-h">${L.mechanism}</h2><p>${escapeHTML(details.mechanism)}</p></section>
      <section class="cm-sec"><h2 class="cm-sec-h">${L.role}</h2><p>${escapeHTML(details.role)}</p></section>
      <section class="cm-sec"><h2 class="cm-sec-h">${L.status}</h2><p>${escapeHTML(details.status)}</p></section>
    </div>
    ${details.materials.length ? `<section class="cm-sec cm-materials-sec"><h2 class="cm-sec-h">${L.materials}</h2><ul class="cm-materials">${details.materials.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul></section>` : ''}
    ${details.outcomes.length ? `<section class="cm-sec"><h2 class="cm-sec-h">${L.outcomes}</h2><ul class="cm-results">${details.outcomes.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul></section>` : ''}
    ${evidence.length ? `<section class="cm-sec cm-evidence"><h2 class="cm-sec-h">${L.evidence}</h2><div class="cm-evidence-links">${evidence.map(item=>`<a class="cm-source-link" href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer"><span>${escapeHTML(item.label)}</span><span aria-hidden="true">↗</span></a>`).join('')}</div></section>` : ''}
    <div class="cm-footer"><button class="cm-link secondary" type="button" data-close-case>${L.close}</button></div>`;
  body.querySelector('[data-close-case]')?.addEventListener('click', closeCase);
  const modal = document.getElementById('caseModal');
  modal._returnFocus = returnFocus;
  modal.removeAttribute('inert');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.getElementById('finderWindow')?.setAttribute('inert','');
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => modal.querySelector('.tl.red')?.focus());
}

function closeCase() {
  const modal = document.getElementById('caseModal');
  if (!modal.classList.contains('open')) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  modal.setAttribute('inert','');
  document.getElementById('finderWindow')?.removeAttribute('inert');
  document.body.classList.remove('modal-open');
  modal._returnFocus?.focus?.();
}

// ═══════════════════════════════════════════
//  EASTER EGGS
// ═══════════════════════════════════════════
function showToast(msg, ms=2800) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), ms);
}

function confettiBurst(n=90) {
  const colors = ['#ff5f57','#febc2e','#28c840','#1d6de5','#e91e8c','#9b59b6'];
  for (let i=0;i<n;i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random()*100 + 'vw';
    c.style.width = (6+Math.random()*7) + 'px';
    c.style.height = (9+Math.random()*9) + 'px';
    c.style.background = colors[Math.floor(Math.random()*colors.length)];
    c.style.animationDuration = (1.8+Math.random()*2.4) + 's';
    c.style.animationDelay = (Math.random()*0.6) + 's';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5200);
  }
}

function emojiRain(set=['🎂','📺','💡','🏦','📽️','☕']) {
  for (let i=0;i<26;i++) {
    const e = document.createElement('div');
    e.className = 'emoji-drop';
    e.textContent = set[Math.floor(Math.random()*set.length)];
    e.style.left = Math.random()*96 + 'vw';
    e.style.animationDuration = (2+Math.random()*2.5) + 's';
    e.style.animationDelay = (Math.random()*0.7) + 's';
    document.body.appendChild(e);
    setTimeout(() => e.remove(), 5600);
  }
}

// Konami code → confetti
const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiIdx = 0;
// Typing "riil" → subtle РИИЛ accent
let riilBuf = '';
// Avatar clicks
let avatarClicks = 0;

document.addEventListener('keydown', (e) => {
  // Konami
  konamiIdx = (e.key === KONAMI[konamiIdx]) ? konamiIdx+1 : (e.key === KONAMI[0] ? 1 : 0);
  if (konamiIdx === KONAMI.length) {
    konamiIdx = 0;
    confettiBurst();
  }
  // "riil"
  if (e.target.tagName !== 'INPUT' && e.key.length === 1) {
    riilBuf = (riilBuf + e.key.toLowerCase()).slice(-4);
    if (riilBuf === 'riil' || riilBuf === 'риил') {
      riilBuf = '';
      const w = document.getElementById('finderWindow');
      w.classList.add('riil');
      setTimeout(() => w.classList.remove('riil'), 900);
    }
  }
});

function avatarEgg() {
  avatarClicks++;
  if (avatarClicks === 3) {
    avatarClicks = 0;
    emojiRain();
  }
}

// Shake window when clicking disabled nav buttons (like macOS "nope" wiggle)
function shakeWindow() {
  const w = document.getElementById('finderWindow');
  w.classList.add('shake');
  setTimeout(() => w.classList.remove('shake'), 500);
}

// ═══════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════
let lang     = document.documentElement.lang === 'ru' ? 'ru' : 'en';
let section  = 'about';
let view     = 'icon';
let query    = '';
let hist     = ['about'];
let hIdx     = 0;
let isFullscreen = false;
let isMinimized  = false;
let selectedId   = null;

const d = () => DATA[lang];

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>'"]/g, char => ({
    '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'
  })[char]);
}

function safeHttpUrl(value) {
  if (!value) return null;
  try {
    const url = new URL(String(value), window.location.href);
    if (!['http:','https:'].includes(url.protocol)) return null;
    return url.href;
  } catch (_) { return null; }
}

function safeMailto(email) {
  const value = String(email || '').trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? `mailto:${encodeURIComponent(value)}` : '#';
}

// ═══════════════════════════════════════════
//  THEME
// ═══════════════════════════════════════════
let isDark = true;

function toggleTheme() {
  isDark = !isDark;
  document.getElementById('htmlRoot').classList.toggle('dark', isDark);
  document.getElementById('themeIconUse').setAttribute('href', isDark ? '#i-sun' : '#i-moon');
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = isDark ? '#1e1e1e' : '#e4e4e4';
}

// ═══════════════════════════════════════════
//  TRAFFIC LIGHTS
// ═══════════════════════════════════════════
function tlClose() {
  const w = document.getElementById('finderWindow');
  w.classList.add('closing');
  setTimeout(() => {
    w.classList.add('hidden');
    w.classList.remove('closing');
    document.getElementById('closedOverlay').classList.add('visible');
  }, 200);
}

function reopenWindow() {
  const w = document.getElementById('finderWindow');
  document.getElementById('closedOverlay').classList.remove('visible');
  w.classList.remove('hidden');
  w.style.opacity = '0';
  w.style.transform = 'scale(0.94)';
  requestAnimationFrame(() => {
    w.style.transition = 'opacity 0.22s,transform 0.3s cubic-bezier(0.34,1.2,0.64,1)';
    w.style.opacity = '1';
    w.style.transform = '';
    setTimeout(() => { w.style.transition = ''; }, 320);
  });
}

function tlMinimize() {
  if (isMinimized) { restoreWindow(); return; }
  const w = document.getElementById('finderWindow');
  isMinimized = true;
  w.classList.add('minimizing');
  setTimeout(() => {
    w.classList.add('hidden');
    w.classList.remove('minimizing');
    const dock = document.getElementById('miniDock');
    dock.style.display = 'flex';
    setTimeout(() => dock.classList.add('visible'), 10);
  }, 280);
}

function restoreWindow() {
  const dock = document.getElementById('miniDock');
  dock.classList.remove('visible');
  setTimeout(() => { dock.style.display = ''; }, 350);
  const w = document.getElementById('finderWindow');
  w.classList.remove('hidden');
  isMinimized = false;
  w.style.opacity = '0';
  w.style.transform = 'scale(0.88) translateY(30px)';
  requestAnimationFrame(() => {
    w.style.transition = 'opacity 0.28s,transform 0.38s cubic-bezier(0.34,1.3,0.64,1)';
    w.style.opacity = '1';
    w.style.transform = '';
    setTimeout(() => { w.style.transition = ''; }, 400);
  });
}

function tlFullscreen() {
  const w = document.getElementById('finderWindow');
  if (!isFullscreen) {
    if (w.requestFullscreen) {
      w.requestFullscreen().catch(() => cssFullscreen(true));
    } else {
      cssFullscreen(true);
    }
    isFullscreen = true;
  } else {
    if (document.exitFullscreen && document.fullscreenElement) {
      document.exitFullscreen().catch(() => cssFullscreen(false));
    } else {
      cssFullscreen(false);
    }
    isFullscreen = false;
  }
}

function cssFullscreen(on) {
  const w = document.getElementById('finderWindow');
  w.classList.toggle('fullscreen', on);
  document.body.classList.toggle('is-fullscreen', on);
}

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) { cssFullscreen(false); isFullscreen = false; }
  else { cssFullscreen(true); }
});

// ═══════════════════════════════════════════
//  LANGUAGE
// ═══════════════════════════════════════════
function toggleLang() {
  lang = lang === 'en' ? 'ru' : 'en';
  document.getElementById('langBtn').textContent = lang === 'en' ? 'RU' : 'EN';
  document.getElementById('htmlRoot').lang = lang;
  document.querySelector('.skip-link').textContent = lang === 'en' ? 'Skip to work' : 'Перейти к содержанию';
  selectedId = null;
  clearDetail();
  applyI18n();
  renderContent();
}

function applyI18n() {
  const s = d().sections;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (s[k]) el.textContent = s[k];
  });
  const labels = lang === 'en'
    ? {search:'Search projects',theme:'Toggle light and dark theme',language:'Switch to Russian',grid:'Grid view',list:'List view',back:'Go back',forward:'Go forward',nav:'Portfolio sections',details:'Project details',closeCase:'Close case study',portfolio:'Bogdan Zalessky portfolio'}
    : {search:'Поиск проектов',theme:'Переключить светлую и тёмную тему',language:'Переключить на английский',grid:'Плитка',list:'Список',back:'Назад',forward:'Вперёд',nav:'Разделы портфолио',details:'Информация о проекте',closeCase:'Закрыть кейс',portfolio:'Портфолио Богдана Залесского'};
  const search = document.getElementById('searchInput');
  search.placeholder = lang === 'en' ? 'Search' : 'Поиск';
  search.setAttribute('aria-label',labels.search);
  document.querySelector('.theme-btn')?.setAttribute('aria-label',labels.theme);
  document.getElementById('langBtn')?.setAttribute('aria-label',labels.language);
  document.getElementById('vIcon')?.setAttribute('aria-label',labels.grid);
  document.getElementById('vList')?.setAttribute('aria-label',labels.list);
  document.getElementById('btnBack')?.setAttribute('aria-label',labels.back);
  document.getElementById('btnFwd')?.setAttribute('aria-label',labels.forward);
  document.querySelector('.sidebar')?.setAttribute('aria-label',labels.nav);
  document.getElementById('detailPanel')?.setAttribute('aria-label',labels.details);
  document.querySelector('#caseModal .tl.red')?.setAttribute('aria-label',labels.closeCase);
  document.getElementById('finderWindow')?.setAttribute('aria-label',labels.portfolio);
  const dpHint = document.getElementById('dpHint');
  if (dpHint) dpHint.textContent = s.dp_hint;
}

// ═══════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════
function navigate(sec, push=true, keepFilter=false) {
  if (!keepFilter) {
    query = '';
    document.getElementById('searchInput').value = '';
  }
  document.querySelectorAll('.sb-item').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.mob-tab').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('[aria-current="page"]').forEach(e => e.removeAttribute('aria-current'));
  const si = document.getElementById('si-' + sec);
  const mt = document.getElementById('mt-' + sec);
  if (si) si.classList.add('active');
  if (mt) mt.classList.add('active');
  if (si) si.setAttribute('aria-current','page');
  if (mt) mt.setAttribute('aria-current','page');
  section   = sec;
  selectedId = null;
  document.querySelector('.finder-body')?.classList.remove('has-detail');
  if (push && hist[hIdx] !== sec) { hist = hist.slice(0, hIdx+1); hist.push(sec); hIdx = hist.length-1; }
  updateNavBtns();
  renderContent();
  clearDetail();
  if (typeof syncHash === 'function') syncHash();
  const ca = document.querySelector('.content-area');
  if (ca) ca.scrollTop = 0;
}

function updateNavBtns() {
  document.getElementById('btnBack').disabled = hIdx <= 0;
  document.getElementById('btnFwd').disabled  = hIdx >= hist.length-1;
}
function goBack() { if (hIdx>0) { hIdx--; navigate(hist[hIdx],false); } else shakeWindow(); }
function goFwd()  { if (hIdx<hist.length-1) { hIdx++; navigate(hist[hIdx],false); } else shakeWindow(); }

// ═══════════════════════════════════════════
//  VIEW & SEARCH
// ═══════════════════════════════════════════
function setView(v) {
  view = v;
  document.getElementById('vIcon').classList.toggle('active', v==='icon');
  document.getElementById('vList').classList.toggle('active', v==='list');
  renderContent();
}

function handleSearch(val) {
  query = val.toLowerCase();
  if (query && section !== 'projects') navigate('projects', true, true);
  else renderContent();
}

// ═══════════════════════════════════════════
//  RENDER ROUTER
// ═══════════════════════════════════════════
function renderContent() {
  const inner = document.getElementById('contentInner');
  const title = d().sections[section] || section;
  document.getElementById('toolbarTitle').textContent = title;
  document.getElementById('pathCurrent').textContent  = title;
  inner.innerHTML = '';
  const map = {about:renderAbout,projects:renderProjects,skills:renderSkills,experience:renderExp,contact:renderContact};
  if (map[section]) map[section](inner);
}

// ─── ABOUT ───
function renderAbout(el) {
  setStatus(lang==='en' ? 'Profile' : 'Профиль');
  const m = d();
  const telegramUrl = safeHttpUrl(m.tg);
  el.innerHTML = `
  <div class="profile-screen">
    <section class="about-hero">
      <div class="about-copy">
        <div class="profile-name-line"><h1 class="about-name">${escapeHTML(m.name)}</h1><svg class="ui-icon" aria-hidden="true"><use href="#i-globe"/></svg></div>
        <div class="about-role">${escapeHTML(m.role)}</div>
        <div class="about-eyebrow"><span class="status-dot"></span>${escapeHTML(m.available)}</div>
      </div>
      <button class="avatar" id="aboutAvatar" type="button" aria-label="${lang==='en'?'Bogdan portrait':'Портрет Богдана'}">${escapeHTML(m.initials)}</button>
    </section>
    <section class="profile-card" aria-label="${lang==='en'?'Profile information':'Информация о профиле'}">
      <div class="profile-row">
        <div class="profile-field">
          <div class="profile-label">username</div>
          ${telegramUrl ? `<a class="profile-value profile-value--link" href="${escapeHTML(telegramUrl)}" target="_blank" rel="noopener noreferrer">@bogdan_zaless</a>` : '<span class="profile-value">@bogdan_zaless</span>'}
        </div>
        <button class="profile-copy" type="button" data-copy="@bogdan_zaless" aria-label="${lang==='en'?'Copy username':'Скопировать username'}"><svg class="ui-icon" aria-hidden="true"><use href="#i-copy"/></svg></button>
      </div>
      <div class="profile-row profile-row--bio">
        <div class="profile-field">
          <div class="profile-label">bio</div>
          <p class="profile-value">${escapeHTML(m.bio)}</p>
        </div>
      </div>
      <div class="profile-row">
        <div class="profile-field">
          <div class="profile-label">email</div>
          <a class="profile-value profile-value--link" href="mailto:${escapeHTML(m.email)}">${escapeHTML(m.email)}</a>
        </div>
        <button class="profile-copy" type="button" data-copy="${escapeHTML(m.email)}" aria-label="${lang==='en'?'Copy email':'Скопировать email'}"><svg class="ui-icon" aria-hidden="true"><use href="#i-copy"/></svg></button>
      </div>
      <div class="profile-facts">
        <div class="profile-fact"><div class="profile-label">${lang==='en'?'experience':'опыт'}</div><div class="profile-value">${escapeHTML(m.experience_years)}</div></div>
        <div class="profile-fact"><div class="profile-label">${lang==='en'?'based in':'город'}</div><div class="profile-value">${escapeHTML(m.location)}</div></div>
        <div class="profile-fact"><div class="profile-label">${lang==='en'?'clients':'клиенты'}</div><div class="profile-value">${lang==='en'?'MTS / Yandex / VTB':'МТС / Яндекс / ВТБ'}</div></div>
      </div>
      <div class="profile-actions">
        <button class="profile-action profile-action--primary" type="button" onclick="navigate('projects')">${lang==='en'?'View selected work':'Посмотреть работы'}</button>
        ${telegramUrl ? `<a class="profile-action" href="${escapeHTML(telegramUrl)}" target="_blank" rel="noopener noreferrer">Telegram ↗</a>` : ''}
      </div>
    </section>
  </div>`;
  const av = document.getElementById('aboutAvatar');
  av.addEventListener('click', avatarEgg);
  el.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', () => copyProfileValue(button.dataset.copy));
  });
  const img = new Image();
  img.onload = () => {
    av.textContent = '';
    av.style.backgroundImage = `url('${img.src}')`;
    av.style.backgroundSize = 'cover';
    av.style.backgroundPosition = 'center';
  };
  img.src = 'https://bogdanzaless.ru/avatar.png';
}

function copyProfileValue(value) {
  const copied = () => showToast(lang === 'en' ? 'Copied' : 'Скопировано');
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(value).then(copied).catch(() => fallbackCopy(value, copied));
    return;
  }
  fallbackCopy(value, copied);
}

function fallbackCopy(value, onSuccess) {
  const field = document.createElement('textarea');
  field.value = value;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();
  const success = document.execCommand('copy');
  field.remove();
  if (success) onSuccess();
  else showToast(lang === 'en' ? 'Copy manually' : 'Скопируйте вручную');
}

// ─── PROJECTS ───
function activateProject(p, element) {
  selectProject(p, element);
  if (window.matchMedia('(max-width:768px)').matches) openCase(p.id);
}

function renderProjects(el) {
  let items = d().projects;
  if (query) items = items.filter(p =>
    [p.name,p.brand,p.tagline,p.desc,p.role,p.status,p.color,...p.tags]
      .join(' ').toLowerCase().includes(query)
  );
  setStatus(items.length + (lang==='en'?' items':' элем.'));
  const heading = document.createElement('div');
  heading.className = 'section-heading';
  heading.innerHTML = `<div><div class="section-kicker">${lang==='en'?'Portfolio':'Портфолио'}</div><h1 class="section-title">${lang==='en'?'Work and concepts':'Работы и концепции'}</h1></div><p class="section-note">${lang==='en'?'Selected launches first, then a compact archive and unlaunched ideas.':'Сначала главные запуски, затем компактный архив и нереализованные идеи.'}</p>`;
  el.appendChild(heading);
  if (!items.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = `<div><strong>${lang==='en'?'Nothing found':'Ничего не найдено'}</strong><p>${lang==='en'?'Try another project, client or skill.':'Попробуй другой проект, клиента или навык.'}</p></div>`;
    el.appendChild(empty);
    return;
  }

  const groups = ['featured','other','concept'];
  let animationIndex = 0;

  groups.forEach(group => {
    const groupItems = items.filter(item => item.group === group);
    if (!groupItems.length) return;
    const sectionEl = document.createElement('section');
    sectionEl.className = `project-group project-group--${group}`;
    sectionEl.setAttribute('aria-labelledby',`project-group-${group}`);
    sectionEl.innerHTML = `<header class="project-group-head"><div><div class="project-group-kicker">${String(groupItems.length).padStart(2,'0')}</div><h2 id="project-group-${group}">${escapeHTML(projectGroupLabel(group))}</h2></div></header>`;

    if (view === 'icon') {
      const grid = document.createElement('div');
      grid.className = `project-grid project-grid--${group}`;
      groupItems.forEach((p, index) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'project-card';
        const cover = PROJECT_COVERS[p.id] || '';
        card.dataset.tone = p.color;
        card.dataset.project = p.id;
        card.dataset.group = group;
        card.dataset.cover = safeStyleToken(p.coverStyle);
        card.setAttribute('aria-label',(window.innerWidth > 768
          ? (lang==='en'?'Select project: ':'Выбрать проект: ')
          : (lang==='en'?'View case study: ':'Открыть кейс: ')) + p.name);
        card.style.animationDelay = Math.min(animationIndex++ * 35, 280) + 'ms';
        if (cover) card.classList.add('has-cover');
        if (p.id===selectedId) card.classList.add('selected');
        card.innerHTML = `
          <span class="project-icon">
            ${cover
              ? `<img class="project-cover" src="${escapeHTML(cover)}" alt="${escapeHTML(p.coverAlt || (lang === 'en' ? `Cover for ${p.name}` : `Обложка проекта ${p.name}`))}" loading="${animationIndex < 3 ? 'eager' : 'lazy'}" decoding="async">`
              : `<span class="project-type-cover" aria-hidden="true"><span class="type-cover-line"></span><span class="type-cover-mark">${escapeHTML(projectMark(p))}</span><span class="type-cover-brand">${escapeHTML(p.brand)}</span></span>`}
            <span class="project-status-dot status-${escapeHTML(p.status)}" aria-hidden="true"></span>
          </span>
          <span class="project-icon-name">${escapeHTML(p.name)}</span>
          <span class="project-icon-meta">${escapeHTML([p.brand,p.date].filter(Boolean).join(' · '))}</span>
          <span class="project-icon-status">${escapeHTML(projectStatusLabel(p))}</span>`;
        card.addEventListener('click', () => activateProject(p, card));
        grid.appendChild(card);
      });
      sectionEl.appendChild(grid);
    } else {
      const list = document.createElement('div');
      list.className = 'list-view';
      list.innerHTML = `<div class="list-hdr"><span>${lang==='en'?'Project':'Проект'}</span><span>${lang==='en'?'Brand':'Бренд'}</span><span>${lang==='en'?'Status':'Статус'}</span><span>${lang==='en'?'Year':'Год'}</span></div>`;
      groupItems.forEach(p => {
        const row = document.createElement('button');
        const cover = PROJECT_COVERS[p.id] || '';
        row.type = 'button';
        row.className = 'list-row';
        row.dataset.project = p.id;
        if (p.id===selectedId) row.classList.add('selected');
        row.setAttribute('aria-label',(window.innerWidth > 768
          ? (lang==='en'?'Select project: ':'Выбрать проект: ')
          : (lang==='en'?'View case study: ':'Открыть кейс: ')) + p.name);
        row.innerHTML = `<span class="row-name"><span class="row-icon">${cover ? `<img src="${escapeHTML(cover)}" alt="${escapeHTML(p.coverAlt || (lang === 'en' ? `Cover for ${p.name}` : `Обложка проекта ${p.name}`))}" decoding="async">` : escapeHTML(projectMark(p))}</span><span><strong>${escapeHTML(p.name)}</strong><small>${escapeHTML(p.tagline)}</small></span></span><span class="row-meta">${escapeHTML(p.brand)}</span><span class="row-meta"><span class="status-badge status-${escapeHTML(p.status)}">${escapeHTML(projectStatusLabel(p))}</span></span><span class="row-meta">${escapeHTML(p.date || '—')}</span>`;
        row.addEventListener('click', () => activateProject(p, row));
        list.appendChild(row);
      });
      sectionEl.appendChild(list);
    }
    el.appendChild(sectionEl);
  });
}

function selectProject(p, el2) {
  document.querySelectorAll('.project-card,.list-row').forEach(e => e.classList.remove('selected'));
  el2?.classList.add('selected');
  selectedId = p.id;
  const cover = PROJECT_COVERS[p.id] || '';
  const html = `
    ${cover ? `<img class="dp-cover" src="${escapeHTML(cover)}" alt="${escapeHTML(p.coverAlt || (lang === 'en' ? `Cover for ${p.name}` : `Обложка проекта ${p.name}`))}" decoding="async">` : `<div class="dp-icon" data-cover="${escapeHTML(safeStyleToken(p.coverStyle))}">${escapeHTML(projectMark(p))}</div>`}
    <div class="dp-project-meta"><span>${escapeHTML(p.brand)}</span><span class="status-badge status-${escapeHTML(p.status)}">${escapeHTML(projectStatusLabel(p))}</span></div>
    <div class="dp-name">${escapeHTML(p.name)}</div>
    <div class="dp-type">${escapeHTML(p.tagline)}</div>
    <hr class="dp-divider">
    <div class="dp-sec">${lang==='en'?'Info':'Инфо'}</div>
    <div class="dp-row"><span class="dk">${lang==='en'?'Brand':'Бренд'}</span><span class="dv">${escapeHTML(p.brand)}</span></div>
    ${p.date ? `<div class="dp-row"><span class="dk">${lang==='en'?'Year':'Год'}</span><span class="dv">${escapeHTML(p.date)}</span></div>` : ''}
    <div class="dp-row"><span class="dk">${lang==='en'?'Status':'Статус'}</span><span class="dv">${escapeHTML(projectStatusLabel(p))}</span></div>
    <hr class="dp-divider">
    <div class="dp-sec">${lang==='en'?'Description':'Описание'}</div>
    <div class="dp-desc">${escapeHTML(p.desc)}</div>
    <div class="dp-sec dp-role-title">${lang==='en'?'My role':'Моя роль'}</div>
    <div class="dp-desc">${escapeHTML(p.role)}</div>
    <hr class="dp-divider">
    <div class="dp-sec">${lang==='en'?'Tags':'Теги'}</div>
    <div class="tag-list">${p.tags.map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('')}</div>
    <button class="dp-case-btn" type="button" data-case-id="${escapeHTML(p.id)}">${lang==='en'?'View case':'Смотреть кейс'}</button>`;
  const detailPanel = document.getElementById('detailPanel');
  detailPanel.innerHTML = html;
  detailPanel.querySelector('[data-case-id]')?.addEventListener('click', () => openCase(p.id));
  if (window.innerWidth > 768) document.querySelector('.finder-body')?.classList.add('has-detail');
}

// ─── SKILLS ───
function renderSkills(el) {
  const skills = d().skills;
  const total = skills.reduce((s,g)=>s+g.items.length,0);
  setStatus(total + (lang==='en'?' skills':' навыков'));
  let html = `<div class="section-heading"><div><div class="section-kicker">${lang==='en'?'Skills':'Навыки'}</div><h1 class="section-title">${lang==='en'?'What I work with':'С чем я работаю'}</h1></div><p class="section-note">${lang==='en'?'Concepts, copy, design and production tools.':'Концепции, тексты, дизайн и инструменты для продакшна.'}</p></div><div class="sec">`;
  skills.forEach(g => {
    html += `<div><div class="dp-sec skill-section-title">${escapeHTML(g.cat)}</div>`;
    g.items.forEach(([n,pct]) => {
      const safePct = Math.max(0, Math.min(100, Number(pct) || 0));
      html += `<div class="skill-group"><div class="skill-lbl"><span>${escapeHTML(n)}</span><span>${safePct}%</span></div><div class="bar-bg"><div class="bar" data-w="${safePct}"></div></div></div>`;
    });
    html += '</div>';
  });
  html += '</div>';
  el.innerHTML = html;
  setTimeout(() => el.querySelectorAll('.bar').forEach(b => { b.style.width = b.dataset.w+'%'; }), 60);
}

// ─── EXPERIENCE ───
function renderExp(el) {
  const exp = d().experience;
  setStatus(exp.length + (lang==='en'?' positions':' позиции'));
  let html = `<div class="section-heading"><div><div class="section-kicker">${lang==='en'?'Experience':'Опыт'}</div><h1 class="section-title">${lang==='en'?'Work and projects':'Работа и проекты'}</h1></div><p class="section-note">${lang==='en'?'Advertising campaigns, brand identity and production.':'Рекламные кампании, айдентика и продакшн.'}</p></div><div class="sec">`;
  exp.forEach(e => {
    html += `<div class="exp-item"><div class="exp-role">${escapeHTML(e.role)}</div><div class="exp-co">${escapeHTML(e.company)}</div><div class="exp-per">📅 ${escapeHTML(e.period)}</div><div class="exp-desc">${escapeHTML(e.desc)}</div></div>`;
  });
  html += '</div>';
  el.innerHTML = html;
}

// ─── CONTACT ───
function renderContact(el) {
  const m = d();
  const telegramUrl = safeHttpUrl(m.tg);
  setStatus(lang==='en' ? '3 contacts' : '3 контакта');
  el.innerHTML = `
  <div class="sec">
    <div class="section-heading"><div><div class="section-kicker">${lang==='en'?'Contact':'Контакты'}</div><h1 class="section-title">${lang==='en'?"Let’s work together":'Давайте поработаем вместе'}</h1></div></div>
    <div class="card">
      <div class="about-name contact-title">${lang==='en'?"Tell me about your project":'Расскажите о проекте'}</div>
      <div class="about-bio">${lang==='en'?'I am open to brand projects, art direction, advertising campaigns and digital work. I usually reply within 12 hours.':'Открыт к брендовым проектам, арт-дирекшну, рекламным кампаниям и диджиталу. Обычно отвечаю в течение 12 часов.'}</div>
      <div class="chips contact-chips">
        <a class="chip contact-chip" href="${escapeHTML(safeMailto(m.email))}">Email</a>
        ${telegramUrl ? `<a class="chip contact-chip" href="${escapeHTML(telegramUrl)}" target="_blank" rel="noopener noreferrer">Telegram ↗</a>` : ''}
      </div>
    </div>
    <div class="info-grid">
      <div class="info-tile"><div class="it-lbl">${lang==='en'?'Response':'Ответ'}</div><div class="it-val">${escapeHTML(m.resp_time)}</div></div>
      <div class="info-tile"><div class="it-lbl">${lang==='en'?'Time zone':'Часовой пояс'}</div><div class="it-val">${escapeHTML(m.timezone)}</div></div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════
function setStatus(n) {
  document.getElementById('statusText').textContent =
    typeof n === 'number' ? n + (lang==='en'?' items':' элем.') : n;
}
function projectMark(p) {
  return p.mark || p.name.slice(0,2).toUpperCase();
}
function clearDetail() {
  const s = d().sections;
  document.querySelector('.finder-body')?.classList.remove('has-detail');
  const panel = document.getElementById('detailPanel');
  panel.innerHTML = `<div class="dp-empty"><div class="dp-ei">ℹ️</div><p id="dpHint"></p></div>`;
  panel.querySelector('#dpHint').textContent = s.dp_hint;
}
function openLink(u) {
  const url = safeHttpUrl(u);
  if (url) window.open(url,'_blank','noopener,noreferrer');
}

function keepFocusInside(container, event) {
  const focusable = [...container.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),[tabindex]:not([tabindex="-1"])')]
    .filter(el => !el.hasAttribute('inert') && el.getClientRects().length > 0);
  if (!focusable.length) { event.preventDefault(); container.focus(); return; }
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
}

// ═══════════════════════════════════════════
//  KEYBOARD
// ═══════════════════════════════════════════
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    const modal = document.getElementById('caseModal');
    if (modal.classList.contains('open')) keepFocusInside(modal, e);
  }
  if (e.key === 'Escape') {
    closeCase();
    if (isFullscreen && !document.fullscreenElement) { cssFullscreen(false); isFullscreen = false; }
  }
  // Alt+arrows = history nav (like Finder ⌘[ ⌘])
  if (e.altKey && e.key === 'ArrowLeft')  goBack();
  if (e.altKey && e.key === 'ArrowRight') goFwd();
});

// ═══════════════════════════════════════════
//  DRAG & RESIZE (desktop)
// ═══════════════════════════════════════════
const MIN_W = 640, MIN_H = 420;
const isDesktop = () => window.matchMedia('(min-width:769px)').matches;
let zoomPrevRect = null; // for double-click zoom restore

function getWin() { return document.getElementById('finderWindow'); }

// Convert flex-centered window to fixed positioning at its current spot
function ensureFloating(w) {
  if (w.dataset.floating === '1') return;
  const r = w.getBoundingClientRect();
  w.style.position = 'fixed';
  w.style.left   = r.left + 'px';
  w.style.top    = r.top + 'px';
  w.style.width  = r.width + 'px';
  w.style.height = r.height + 'px';
  w.style.margin = '0';
  w.dataset.floating = '1';
}

function stopWindowMotion(w) {
  if (!w._settleFrame) return;
  cancelAnimationFrame(w._settleFrame);
  const rect = w.getBoundingClientRect();
  w._settleFrame = null;
  w.style.transform = '';
  w.style.left = rect.left + 'px';
  w.style.top = rect.top + 'px';
}

function settleWindow(w, baseLeft, baseTop, currentLeft, currentTop, targetLeft, targetTop) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    w.style.left = targetLeft + 'px'; w.style.top = targetTop + 'px'; w.style.transform = ''; return;
  }
  let x = currentLeft, y = currentTop, vx = 0, vy = 0, previous = performance.now();
  const omega = 18, damping = 1;
  const frame = now => {
    const dt = Math.min((now - previous) / 1000, .032); previous = now;
    const ax = -2*damping*omega*vx - omega*omega*(x-targetLeft);
    const ay = -2*damping*omega*vy - omega*omega*(y-targetTop);
    vx += ax*dt; vy += ay*dt; x += vx*dt; y += vy*dt;
    w.style.transform = `translate3d(${x-baseLeft}px,${y-baseTop}px,0)`;
    if (Math.abs(x-targetLeft)<.5 && Math.abs(y-targetTop)<.5 && Math.abs(vx)<8 && Math.abs(vy)<8) {
      w._settleFrame = null;
      w.style.left = targetLeft + 'px'; w.style.top = targetTop + 'px';
      w.style.transform = ''; w.style.willChange = '';
      return;
    }
    w._settleFrame = requestAnimationFrame(frame);
  };
  w._settleFrame = requestAnimationFrame(frame);
}

// ── DRAG via toolbar ──
(function initDrag() {
  const toolbar = document.querySelector('.toolbar');
  let sx, sy, ox, oy, lastLeft, lastTop, dragging = false;

  toolbar.addEventListener('pointerdown', (e) => {
    if (!isDesktop() || isFullscreen) return;
    // Don't drag from interactive elements
    if (e.target.closest('button, .tl, .search-wrap, input, .view-toggle')) return;
    const w = getWin();
    ensureFloating(w);
    stopWindowMotion(w);
    dragging = true;
    sx = e.clientX; sy = e.clientY;
    ox = parseFloat(w.style.left); oy = parseFloat(w.style.top);
    lastLeft = ox; lastTop = oy;
    w.style.willChange = 'transform';
    w.classList.add('dragging');
    toolbar.setPointerCapture(e.pointerId);
    e.preventDefault();
  });

  toolbar.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const w = getWin();
    let nl = ox + (e.clientX - sx);
    let nt = oy + (e.clientY - sy);
    const resist = (value, min, max, dimension = 180) => {
      if (value < min) return min + ((value - min) * dimension * .45) / (dimension + .45 * Math.abs(value - min));
      if (value > max) return max + ((value - max) * dimension * .45) / (dimension + .45 * Math.abs(value - max));
      return value;
    };
    // Soft resistance keeps the window responsive instead of hitting a hard wall.
    nt = resist(nt, 0, window.innerHeight - 60);
    nl = resist(nl, -w.offsetWidth + 120, window.innerWidth - 120);
    lastLeft = nl; lastTop = nt;
    w.style.transform = `translate3d(${nl-ox}px,${nt-oy}px,0)`;
    zoomPrevRect = null; // manual move invalidates zoom-restore
  });

  const endDrag = (e) => {
    if (!dragging) return;
    dragging = false;
    const w = getWin();
    w.classList.remove('dragging');
    const targetLeft = Math.max(-w.offsetWidth + 120, Math.min(lastLeft, window.innerWidth - 120));
    const targetTop = Math.max(0, Math.min(lastTop, window.innerHeight - 60));
    if (Math.abs(targetLeft-lastLeft)>.5 || Math.abs(targetTop-lastTop)>.5) settleWindow(w, ox, oy, lastLeft, lastTop, targetLeft, targetTop);
    else {
      w.style.left = lastLeft + 'px'; w.style.top = lastTop + 'px';
      w.style.transform = ''; w.style.willChange = '';
    }
    try { toolbar.releasePointerCapture(e.pointerId); } catch(_) {}
  };
  toolbar.addEventListener('pointerup', endDrag);
  toolbar.addEventListener('pointercancel', endDrag);

  // Double-click toolbar = zoom (macOS style)
  toolbar.addEventListener('dblclick', (e) => {
    if (!isDesktop() || isFullscreen) return;
    if (e.target.closest('button, .tl, .search-wrap, input, .view-toggle')) return;
    toggleZoom();
  });
})();

function toggleZoom() {
  const w = getWin();
  ensureFloating(w);
  if (zoomPrevRect) {
    // restore
    w.style.left   = zoomPrevRect.left + 'px';
    w.style.top    = zoomPrevRect.top + 'px';
    w.style.width  = zoomPrevRect.width + 'px';
    w.style.height = zoomPrevRect.height + 'px';
    zoomPrevRect = null;
  } else {
    zoomPrevRect = {
      left: parseFloat(w.style.left), top: parseFloat(w.style.top),
      width: parseFloat(w.style.width), height: parseFloat(w.style.height),
    };
    const m = 14;
    w.style.left   = m + 'px';
    w.style.top    = m + 'px';
    w.style.width  = (window.innerWidth - m*2) + 'px';
    w.style.height = (window.innerHeight - m*2) + 'px';
  }
}

// ── RESIZE via 8 handles ──
(function initResize() {
  let dir = null, sx, sy, sr = null;

  document.querySelectorAll('.rz').forEach(h => {
    h.addEventListener('pointerdown', (e) => {
      if (!isDesktop() || isFullscreen) return;
      const w = getWin();
      ensureFloating(w);
      dir = h.dataset.dir;
      sx = e.clientX; sy = e.clientY;
      sr = {
        left: parseFloat(w.style.left), top: parseFloat(w.style.top),
        width: parseFloat(w.style.width), height: parseFloat(w.style.height),
      };
      w.classList.add('resizing');
      h.setPointerCapture(e.pointerId);
      e.preventDefault(); e.stopPropagation();
    });

    h.addEventListener('pointermove', (e) => {
      if (!dir) return;
      const w = getWin();
      const dx = e.clientX - sx, dy = e.clientY - sy;
      let {left, top, width, height} = sr;

      if (dir.includes('e')) width  = Math.max(MIN_W, sr.width + dx);
      if (dir.includes('s')) height = Math.max(MIN_H, sr.height + dy);
      if (dir.includes('w')) {
        width = Math.max(MIN_W, sr.width - dx);
        left  = sr.left + (sr.width - width);
      }
      if (dir.includes('n')) {
        height = Math.max(MIN_H, sr.height - dy);
        top    = Math.max(0, sr.top + (sr.height - height));
        height = sr.top + sr.height - top; // recompute if clamped
      }

      w.style.left = left + 'px';
      w.style.top = top + 'px';
      w.style.width = width + 'px';
      w.style.height = height + 'px';
      zoomPrevRect = null;
    });

    const endResize = (e) => {
      if (!dir) return;
      dir = null;
      getWin().classList.remove('resizing');
      try { h.releasePointerCapture(e.pointerId); } catch(_) {}
    };
    h.addEventListener('pointerup', endResize);
    h.addEventListener('pointercancel', endResize);
  });
})();

// Keep window inside viewport on browser resize
window.addEventListener('resize', () => {
  const w = getWin();
  // Crossing to mobile: undo floating so mobile layout takes over
  if (!isDesktop()) {
    if (w.dataset.floating === '1') {
      w.style.position = ''; w.style.left = ''; w.style.top = '';
      w.style.width = ''; w.style.height = ''; w.style.margin = '';
      delete w.dataset.floating;
      zoomPrevRect = null;
    }
    return;
  }
  if (w.dataset.floating !== '1' || isFullscreen) return;
  let l = parseFloat(w.style.left), t = parseFloat(w.style.top);
  l = Math.max(-w.offsetWidth + 120, Math.min(l, window.innerWidth - 120));
  t = Math.max(0, Math.min(t, window.innerHeight - 60));
  w.style.left = l + 'px';
  w.style.top  = t + 'px';
});

// ═══════════════════════════════════════════
//  HASH ROUTING
// ═══════════════════════════════════════════
const HASH2SEC = {about:'about', works:'projects', skills:'skills', experience:'experience', contact:'contact'};
const SEC2HASH = {about:'about', projects:'works', skills:'skills', experience:'experience', contact:'contact'};

function syncHash() {
  const h = SEC2HASH[section];
  if (!h || location.hash.slice(1) === h) return;
  // Sandboxed iframes (artifact previews) block history API: fail silently
  try {
    history.replaceState(null, '', '#' + h);
  } catch(_) {
    try { location.hash = h; } catch(_) {}
  }
}

window.addEventListener('hashchange', () => {
  const s = HASH2SEC[location.hash.slice(1).toLowerCase()];
  if (s && s !== section) navigate(s, false);
});

// ═══════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════
applyI18n();
const initSec = HASH2SEC[location.hash.slice(1).toLowerCase()] || 'about';
hist = [initSec]; hIdx = 0;
navigate(initSec, false);
