(() => {
  'use strict';

  const TOPICS = window.TOPICS || [];
  const QUESTIONS = window.QUESTIONS || [];
  const EXACT = window.EXACT_QUESTIONNAIRES || [];
  const BLUEPRINT = window.OFFICIAL_BLUEPRINT || {};
  const STORAGE_KEY = 'egelIcompuLabStateV1';
  const SECONDS_PER_QUESTION = 144;

  const topicById = Object.fromEntries(TOPICS.map(t => [t.id, t]));
  const questionById = Object.fromEntries(QUESTIONS.map(q => [q.id, q]));
  const topicOrder = Object.fromEntries(TOPICS.map((t, i) => [t.id, i]));
  const areaOrder = [...new Set(TOPICS.map(t => t.area))];

  const screens = Object.fromEntries([...document.querySelectorAll('.screen')].map(s => [s.id.replace('screen-', ''), s]));
  const refs = {
    body: document.body,
    mobilePanel: document.getElementById('mobilePanel'),
    menuToggle: document.getElementById('menuToggle'),
    themeToggle: document.getElementById('themeToggle'),
    examDateInput: document.getElementById('examDateInput'),
    countdownBox: document.getElementById('countdownBox'),
    statAttempts: document.getElementById('statAttempts'),
    statAverage: document.getElementById('statAverage'),
    statBest: document.getElementById('statBest'),
    statMistakes: document.getElementById('statMistakes'),
    bankSize: document.getElementById('bankSize'),
    topicSidebar: document.getElementById('topicSidebar'),
    studyStage: document.getElementById('studyStage'),
    studySearch: document.getElementById('studySearch'),
    materialsIndex: document.getElementById('materialsIndex'),
    materialsStage: document.getElementById('materialsStage'),
    flashTopicSelect: document.getElementById('flashTopicSelect'),
    flashCard: document.getElementById('flashCard'),
    flashTopicLabel: document.getElementById('flashTopicLabel'),
    flashQuestion: document.getElementById('flashQuestion'),
    flashAnswer: document.getElementById('flashAnswer'),
    flashMemory: document.getElementById('flashMemory'),
    flashCounter: document.getElementById('flashCounter'),
    flashStatus: document.getElementById('flashStatus'),
    flashPrev: document.getElementById('flashPrev'),
    flashNext: document.getElementById('flashNext'),
    flashReview: document.getElementById('flashReview'),
    flashKnown: document.getElementById('flashKnown'),
    quizConfig: document.getElementById('quizConfig'),
    quizTopic: document.getElementById('quizTopic'),
    timerCheck: document.getElementById('timerCheck'),
    configTitle: document.getElementById('configTitle'),
    configText: document.getElementById('configText'),
    configGoal: document.getElementById('configGoal'),
    exactQuizGrid: document.getElementById('exactQuizGrid'),
    examModeBadge: document.getElementById('examModeBadge'),
    examProgressText: document.getElementById('examProgressText'),
    examAreaLabel: document.getElementById('examAreaLabel'),
    examProgressBar: document.getElementById('examProgressBar'),
    examTimer: document.getElementById('examTimer'),
    questionTopic: document.getElementById('questionTopic'),
    questionDifficulty: document.getElementById('questionDifficulty'),
    questionType: document.getElementById('questionType'),
    questionStimulus: document.getElementById('questionStimulus'),
    questionText: document.getElementById('questionText'),
    answerForm: document.getElementById('answerForm'),
    feedbackBox: document.getElementById('feedbackBox'),
    feedbackTitle: document.getElementById('feedbackTitle'),
    feedbackText: document.getElementById('feedbackText'),
    feedbackSource: document.getElementById('feedbackSource'),
    prevQuestion: document.getElementById('prevQuestion'),
    mainQuestionAction: document.getElementById('mainQuestionAction'),
    questionNavigator: document.getElementById('questionNavigator'),
    leaveExam: document.getElementById('leaveExam'),
    resultScore: document.getElementById('resultScore'),
    resultStatus: document.getElementById('resultStatus'),
    resultTitle: document.getElementById('resultTitle'),
    resultSummary: document.getElementById('resultSummary'),
    topicBreakdown: document.getElementById('topicBreakdown'),
    resultAdviceTitle: document.getElementById('resultAdviceTitle'),
    resultAdviceText: document.getElementById('resultAdviceText'),
    answerReview: document.getElementById('answerReview'),
    retryQuiz: document.getElementById('retryQuiz'),
    mistakesList: document.getElementById('mistakesList'),
    practiceMistakes: document.getElementById('practiceMistakes'),
    progressAttempts: document.getElementById('progressAttempts'),
    progressAverage: document.getElementById('progressAverage'),
    progressBest: document.getElementById('progressBest'),
    progressCards: document.getElementById('progressCards'),
    progressTopics: document.getElementById('progressTopics'),
    historyList: document.getElementById('historyList'),
    clearProgress: document.getElementById('clearProgress'),
    toast: document.getElementById('toast')
  };

  let currentRoute = 'home';
  let currentTopicId = TOPICS[0]?.id || '';
  let flashCards = [];
  let flashIndex = 0;
  let currentExam = null;
  let lastExamConfig = null;
  let timerHandle = null;
  let activeMaterial = 'structure';

  function loadState() {
    const base = { examDate: '', theme: 'light', attempts: [], mistakes: [], topicStats: {}, flashcardStats: {} };
    try {
      return { ...base, ...(JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || {}) };
    } catch {
      return base;
    }
  }
  const state = loadState();

  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
  }

  function esc(value = '') {
    return String(value)
      .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;').replaceAll("'", '&#039;');
  }

  function richText(value = '') { return esc(value).replaceAll('\n', '<br/>'); }

  function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function showToast(message) {
    if (!refs.toast) return;
    refs.toast.textContent = message;
    refs.toast.classList.add('is-visible');
    clearTimeout(showToast.t);
    showToast.t = setTimeout(() => refs.toast.classList.remove('is-visible'), 2400);
  }

  function setTheme(theme) {
    state.theme = theme;
    refs.body.classList.toggle('dark', theme === 'dark');
    saveState();
  }

  function navigate(route) {
    if (!screens[route]) return;
    currentRoute = route;
    Object.entries(screens).forEach(([key, node]) => node.classList.toggle('is-visible', key === route));
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.toggle('is-active', btn.dataset.route === route));
    refs.mobilePanel?.classList.remove('is-open');
    if (route === 'home') updateHomeStats();
    if (route === 'study') renderStudy();
    if (route === 'materials') renderMaterials();
    if (route === 'flashcards') renderFlashcard();
    if (route === 'configure') updateConfigSummary();
    if (route === 'mistakes') renderMistakes();
    if (route === 'progress') renderProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function averageScore() {
    if (!state.attempts.length) return 0;
    return Math.round(state.attempts.reduce((sum, a) => sum + a.score, 0) / state.attempts.length);
  }
  function bestScore() { return state.attempts.length ? Math.max(...state.attempts.map(a => a.score)) : 0; }

  function updateHomeStats() {
    refs.statAttempts.textContent = state.attempts.length;
    refs.statAverage.textContent = `${averageScore()}%`;
    refs.statBest.textContent = `${bestScore()}%`;
    refs.statMistakes.textContent = state.mistakes.length;
    refs.bankSize.textContent = `${QUESTIONS.length} reactivos`;
  }

  function updateCountdown() {
    refs.examDateInput.value = state.examDate || '';
    const target = state.examDate ? new Date(`${state.examDate}T00:00:00`) : null;
    if (!target || Number.isNaN(target.getTime())) {
      refs.countdownBox.innerHTML = '<article><strong>—</strong><small>Elige una fecha</small></article>';
      return;
    }
    const diff = target.getTime() - Date.now();
    if (diff <= 0) {
      refs.countdownBox.innerHTML = '<article><strong>0</strong><small>días</small></article><article><strong>0</strong><small>horas</small></article><article><strong>0</strong><small>minutos</small></article><article><strong>Hoy</strong><small>examen</small></article>';
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000) % 24;
    const minutes = Math.floor(diff / 60000) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    refs.countdownBox.innerHTML = `<article><strong>${days}</strong><small>días</small></article><article><strong>${hours}</strong><small>horas</small></article><article><strong>${minutes}</strong><small>minutos</small></article><article><strong>${seconds}</strong><small>segundos</small></article>`;
  }

  // ---------------- Study ----------------
  function renderTopicSidebar() {
    refs.topicSidebar.innerHTML = TOPICS.map((topic, index) => `
      <button class="study-chip ${topic.id === currentTopicId ? 'is-active' : ''}" data-topic-id="${esc(topic.id)}">
        <span class="study-chip-number">${String(index + 1).padStart(2, '0')}</span>
        <span class="study-chip-copy"><strong>${esc(topic.title)}</strong><small>${esc(topic.area)} · ${topic.officialCount} reactivos</small></span>
        <span class="study-chip-arrow">↗</span>
      </button>`).join('');
    refs.topicSidebar.querySelectorAll('[data-topic-id]').forEach(btn => btn.addEventListener('click', () => {
      currentTopicId = btn.dataset.topicId;
      refs.studySearch.value = '';
      renderStudy();
    }));
  }

  function renderStudy() {
    if (!currentTopicId || !topicById[currentTopicId]) return;
    renderTopicSidebar();
    const topic = topicById[currentTopicId];
    const query = refs.studySearch.value.trim().toLowerCase();
    const concepts = query ? topic.concepts.filter(c => [c.term, c.explanation, c.memory, c.trap, ...(c.quickFacts || [])].join(' ').toLowerCase().includes(query)) : topic.concepts;
    const index = TOPICS.findIndex(t => t.id === topic.id) + 1;
    refs.studyStage.innerHTML = `
      <div class="topic-hero editorial-topic-hero">
        <article class="topic-panel" style="--topic-color:${esc(topic.color)}">
          <span class="topic-watermark">${esc(topic.shortTitle)}</span>
          <span class="section-kicker">SUBÁREA ${String(index).padStart(2, '0')} · ${esc(topic.section)}</span>
          <h2>${esc(topic.title)}</h2><p>${esc(topic.summary)}</p>
          <div class="topic-bullets">${topic.bullets.map(b => `<span>${esc(b)}</span>`).join('')}</div>
        </article>
        <article class="quick-panel"><span class="section-kicker">PESO EN EL SIMULACRO</span><h3>${topic.officialCount} de 200 reactivos</h3><p>${esc(topic.kicker)}. Usa el botón inferior para practicar únicamente esta subárea.</p><span class="quick-index">${String(index).padStart(2, '0')}/15</span></article>
      </div>
      <div class="concept-stack editorial-concepts">
        ${concepts.length ? concepts.map((c, i) => `<article class="concept-card ${i === 0 ? 'is-open' : ''}"><button class="concept-head" type="button"><span>${esc(c.term)}</span><span>${i === 0 ? '−' : '+'}</span></button><div class="concept-body"><p>${esc(c.explanation)}</p><div class="note-grid"><div class="note-box"><strong>Regla mental</strong><span>${esc(c.memory)}</span></div><div class="note-box"><strong>Trampa típica</strong><span>${esc(c.trap)}</span></div></div><div class="quick-facts">${(c.quickFacts || []).map(f => `<span>${esc(f)}</span>`).join('')}</div></div></article>`).join('') : '<div class="empty-state">No encontré conceptos con ese texto dentro de esta subárea.</div>'}
      </div>
      <div class="topic-practice-strip"><div><span class="section-kicker">PRÁCTICA DIRIGIDA</span><strong>${QUESTIONS.filter(q => q.topic === topic.id).length} reactivos disponibles en el banco</strong></div><button class="primary-btn" data-practice-topic="${esc(topic.id)}">Practicar esta subárea</button></div>`;
    refs.studyStage.querySelectorAll('.concept-head').forEach(btn => btn.addEventListener('click', () => {
      const card = btn.closest('.concept-card');
      card.classList.toggle('is-open');
      btn.lastElementChild.textContent = card.classList.contains('is-open') ? '−' : '+';
    }));
    refs.studyStage.querySelector('[data-practice-topic]')?.addEventListener('click', e => startQuiz({ mode: 'practice', count: 20, focus: e.currentTarget.dataset.practiceTopic, timer: false, label: `${topic.shortTitle} · práctica` }));
  }

  // ---------------- Materials ----------------
  const materials = {
    structure: {
      title: 'Estructura del EGEL Plus ICOMPU', kicker: '01 / DISTRIBUCIÓN',
      html: () => `<div class="material-rule-box"><strong>200 reactivos</strong><p>140 corresponden a la sección disciplinar y 60 a Lenguaje y Comunicación. El simulacro completo de esta página respeta esa distribución por subárea.</p></div>${areaOrder.map(area => {
        const ts = TOPICS.filter(t => t.area === area); const total = ts.reduce((s,t)=>s+t.officialCount,0);
        return `<section class="material-block"><h3>${esc(area)} · ${total}</h3><div class="blueprint-list">${ts.map(t=>`<div><span>${esc(t.title)}</span><strong>${t.officialCount}</strong></div>`).join('')}</div></section>`;
      }).join('')}<section class="material-mini-review"><h3>Tiempo de aplicación</h3><p>La guía vigente señala 8 horas distribuidas en dos sesiones de 4 horas. El temporizador opcional usa un ritmo de 2:24 por reactivo para prácticas de cualquier tamaño.</p></section>`
    },
    formats: {
      title: 'Formato de reactivos', kicker: '02 / CÓMO PREGUNTAN',
      html: () => `<section class="material-block"><h3>Formato vigente usado por el simulador</h3><div class="material-comparison-grid"><div class="material-note"><h4>Opción múltiple</h4><p>Tres opciones de respuesta y una sola correcta. La base puede incluir texto, secuencias, datos o una situación.</p></div><div class="material-note"><h4>Multirreactivo</h4><p>Un mismo estímulo sirve para varias preguntas, especialmente útil en comprensión lectora.</p></div><div class="material-note"><h4>Variantes</h4><p>Cuestionamiento directo, completamiento, ordenamiento y relación de elementos.</p></div></div></section><section class="material-block"><h3>Cómo se adaptó el PDF de práctica antiguo</h3><p>El material extenso adjunto contiene ejercicios de cuatro opciones. Para conservar la estructura vigente de EGEL Plus, el banco de este simulador fue redactado con tres opciones, manteniendo la lógica de casos, ordenamiento y relación de elementos.</p></section>`
    },
    discipline: {
      title: 'Mapa disciplinar', kicker: '03 / 140 REACTIVOS',
      html: () => `<section class="material-block"><h3>Implementación de hardware</h3><p>Circuitos eléctricos y electrónica; arquitectura y organización; sistemas embebidos; automatización y control. El repaso incluye sistemas numéricos, memoria, microcontroladores, señales, sensores, actuadores y control.</p></section><section class="material-block"><h3>Implementación de redes</h3><p>Diseño, administración, seguridad y evaluación: OSI/TCP-IP, direccionamiento, topologías, dispositivos, servicios, cableado, monitoreo, vulnerabilidades, criptografía y disponibilidad.</p></section><section class="material-block"><h3>Desarrollo de software</h3><p>Ingeniería de software, programación y software base, manejo de datos y algoritmos: requisitos, metodologías, pruebas, sistemas operativos, compiladores, bases de datos, estructuras, complejidad e inteligencia artificial básica.</p></section>`
    },
    language: {
      title: 'Lenguaje y Comunicación', kicker: '04 / 60 REACTIVOS',
      html: () => `<section class="material-block"><h3>Comprensión lectora · 30</h3><p>Practica tres procesos: identificar información, interpretar el sentido global o local y evaluar forma/contenido. Los ámbitos son estudio, literario y participación social.</p><div class="material-comparison-grid"><div class="material-note"><h4>Estudio · 12</h4><p>Reseña académica y artículo de investigación.</p></div><div class="material-note"><h4>Literario · 12</h4><p>Cuento y ensayo literario.</p></div><div class="material-note"><h4>Participación social · 6</h4><p>Convocatoria y nota informativa.</p></div></div></section><section class="material-block"><h3>Redacción indirecta · 30</h3><p>No redactas desde cero: seleccionas el fragmento más adecuado. Se evalúan dimensión comunicativa, gramática y semántica, y ortografía.</p><div class="material-comparison-grid"><div class="material-note"><h4>Comunicativa</h4><p>Propósito, género y registro lingüístico.</p></div><div class="material-note"><h4>Gramática y semántica</h4><p>Concordancia y cohesión.</p></div><div class="material-note"><h4>Ortografía</h4><p>Grafías, puntuación y acentuación.</p></div></div></section>`
    }
  };

  function renderMaterials() {
    refs.materialsIndex.innerHTML = `<div class="materials-index-head"><span class="home-badge">ÍNDICE</span><h2>Guías de repaso</h2><p>Selecciona un bloque.</p></div>` + Object.entries(materials).map(([id,m],i)=>`<button class="material-item ${id===activeMaterial?'is-active':''}" data-material-target="${id}" type="button"><span class="material-number">${String(i+1).padStart(2,'0')}</span><span><strong>${esc(m.title)}</strong><small>${esc(m.kicker)}</small></span><span class="material-arrow">→</span></button>`).join('');
    const m = materials[activeMaterial];
    refs.materialsStage.innerHTML = `<article class="material-content-section is-active"><header class="material-doc-header"><span class="material-doc-index">${esc(m.kicker)}</span><h2>${esc(m.title)}</h2><p>Resumen de estudio integrado al simulador.</p></header>${m.html()}</article>`;
    refs.materialsIndex.querySelectorAll('[data-material-target]').forEach(btn => btn.addEventListener('click',()=>{ activeMaterial=btn.dataset.materialTarget; renderMaterials(); }));
  }

  // ---------------- Flashcards ----------------
  function buildFlashCards() {
    const focus = refs.flashTopicSelect.value || 'all';
    const topics = focus === 'all' ? TOPICS : TOPICS.filter(t => t.id === focus);
    flashCards = topics.flatMap(topic => topic.concepts.map(c => ({ ...c, topicId: topic.id, topicTitle: topic.shortTitle, key: `${topic.id}::${c.term}` })));
    if (flashIndex >= flashCards.length) flashIndex = 0;
  }

  function renderFlashcard() {
    buildFlashCards();
    if (!flashCards.length) return;
    const card = flashCards[flashIndex];
    refs.flashCard.classList.remove('is-flipped');
    refs.flashTopicLabel.textContent = topicById[card.topicId]?.title || card.topicTitle;
    refs.flashQuestion.textContent = card.term;
    refs.flashAnswer.textContent = card.explanation;
    refs.flashMemory.textContent = card.memory;
    refs.flashCounter.textContent = `${flashIndex + 1} / ${flashCards.length}`;
    const status = state.flashcardStats[card.key];
    refs.flashStatus.textContent = status === 'known' ? 'Estado: dominada' : status === 'review' ? 'Estado: repasar' : 'Estado: sin evaluar';
  }

  function setFlashStatus(status) {
    if (!flashCards.length) return;
    state.flashcardStats[flashCards[flashIndex].key] = status;
    saveState();
    renderFlashcard();
    showToast(status === 'known' ? 'Tarjeta marcada como dominada.' : 'Tarjeta añadida al repaso.');
  }

  // ---------------- Quiz config and selection ----------------
  function buildQuizFocusOptions() {
    let html = '<option value="all">Todas las áreas</option><option value="weak">Mis subáreas más débiles</option><option value="mistakes">Solo errores guardados</option>';
    for (const area of areaOrder) {
      html += `<optgroup label="${esc(area)}"><option value="area:${esc(area)}">Toda el área</option>`;
      TOPICS.filter(t=>t.area===area).forEach(t=> html += `<option value="${esc(t.id)}">${esc(t.title)}</option>`);
      html += '</optgroup>';
    }
    refs.quizTopic.innerHTML = html;
  }

  function selectedConfig() {
    const fd = new FormData(refs.quizConfig);
    return { mode: fd.get('mode') || 'practice', count: Number(fd.get('count') || 10), focus: fd.get('topic') || 'all', timer: refs.timerCheck.checked };
  }

  function focusLabel(focus) {
    if (focus === 'all') return 'Todas las áreas';
    if (focus === 'weak') return 'Subáreas débiles';
    if (focus === 'mistakes') return 'Errores guardados';
    if (focus.startsWith('area:')) return focus.slice(5);
    return topicById[focus]?.title || 'Filtro personalizado';
  }

  function updateConfigSummary() {
    const c = selectedConfig();
    if (c.count === 200 && c.focus !== 'all') {
      refs.quizTopic.value = 'all';
      c.focus = 'all';
    }
    refs.quizTopic.disabled = c.count === 200;
    refs.configTitle.textContent = `${c.mode === 'practice' ? 'Práctica' : 'Simulación'} de ${c.count} reactivos`;
    refs.configText.textContent = `${focusLabel(c.focus)} · ${c.mode === 'practice' ? 'explicación inmediata' : 'revisión al final'}${c.timer ? ' · con temporizador' : ''}`;
    refs.configGoal.textContent = c.count === 200 ? 'Distribución oficial por subárea' : 'Resultado expresado como porcentaje de práctica';
  }

  function allocateWeighted(ids, count) {
    const weights = ids.map(id => Number(BLUEPRINT[id] || 1));
    const total = weights.reduce((a,b)=>a+b,0);
    const raw = weights.map(w => w/total*count);
    const alloc = raw.map(v => Math.floor(v));
    let left = count - alloc.reduce((a,b)=>a+b,0);
    const order = raw.map((v,i)=>({i,frac:v-Math.floor(v)})).sort((a,b)=>b.frac-a.frac);
    let k=0;
    while (left>0) { alloc[order[k%order.length].i]++; left--; k++; }
    return Object.fromEntries(ids.map((id,i)=>[id,alloc[i]]));
  }

  function sampleByBlueprint(blueprint, ordered = true) {
    const picked = [];
    for (const topic of TOPICS) {
      const n = Number(blueprint[topic.id] || 0);
      if (!n) continue;
      const pool = shuffle(QUESTIONS.filter(q=>q.topic===topic.id));
      picked.push(...pool.slice(0, Math.min(n, pool.length)));
    }
    return ordered ? picked : shuffle(picked);
  }

  function weakTopicIds() {
    const attempted = TOPICS.map(t => {
      const s = state.topicStats[t.id] || { answered: 0, correct: 0 };
      return { id:t.id, answered:s.answered, acc:s.answered ? s.correct/s.answered : null };
    });
    const withData = attempted.filter(x=>x.acc!==null).sort((a,b)=>a.acc-b.acc || b.answered-a.answered);
    return withData.length ? withData.slice(0, Math.min(5, withData.length)).map(x=>x.id) : TOPICS.map(t=>t.id);
  }

  function selectRandomQuestions(count, focus) {
    if (count === 200) return sampleByBlueprint(BLUEPRINT, true);
    if (focus === 'mistakes') {
      const pool = shuffle(state.mistakes.map(id=>questionById[id]).filter(Boolean));
      return pool.slice(0, Math.min(count,pool.length));
    }
    let ids;
    if (focus === 'weak') ids = weakTopicIds();
    else if (focus.startsWith('area:')) ids = TOPICS.filter(t=>t.area===focus.slice(5)).map(t=>t.id);
    else if (focus === 'all') ids = TOPICS.map(t=>t.id);
    else ids = [focus];

    if (ids.length === 1) {
      const pool = shuffle(QUESTIONS.filter(q=>q.topic===ids[0]));
      return pool.slice(0, Math.min(count,pool.length));
    }
    const allocation = allocateWeighted(ids,count);
    return sampleByBlueprint(allocation,false);
  }

  function renderExactQuizCards() {
    refs.exactQuizGrid.innerHTML = EXACT.map((set,i)=>`<article class="exact-quiz-card"><span class="exact-quiz-number">${String(i+1).padStart(2,'0')}</span><div><small>${set.count} REACTIVOS</small><h3>${esc(set.title)}</h3><p>${esc(set.description)}</p></div><button class="home-btn home-btn-primary" data-exact-quiz="${esc(set.id)}" type="button">Iniciar</button></article>`).join('');
    refs.exactQuizGrid.querySelectorAll('[data-exact-quiz]').forEach(btn=>btn.addEventListener('click',()=>startExact(btn.dataset.exactQuiz)));
  }

  function startExact(id) {
    const set = EXACT.find(s=>s.id===id);
    if (!set) return;
    const qs = sampleByBlueprint(set.blueprint,true);
    startExam(qs,{mode:'simulation',timer:false,label:set.title,exactSetId:set.id,grouped:true});
  }

  function startQuiz({mode='practice',count=10,focus='all',timer=false,label=''}) {
    const qs = selectRandomQuestions(count,focus);
    if (!qs.length) { showToast(focus==='mistakes'?'Todavía no hay errores guardados.':'No hay suficientes reactivos para ese filtro.'); return; }
    if (qs.length < count) showToast(`Este filtro tiene ${qs.length} reactivos disponibles; se usarán todos.`);
    startExam(qs,{mode,timer,label:label||`${focusLabel(focus)} · ${qs.length} reactivos`,focus,count:qs.length,grouped:count===200});
  }

  function startExam(qs, config) {
    stopTimer();
    currentExam = {
      questions: qs,
      answers: Array(qs.length).fill(null),
      checked: Array(qs.length).fill(false),
      index: 0,
      mode: config.mode || 'simulation',
      timer: Boolean(config.timer),
      secondsLeft: qs.length * SECONDS_PER_QUESTION,
      label: config.label || 'Simulador',
      exactSetId: config.exactSetId || null,
      grouped: Boolean(config.grouped),
      finished: false
    };
    lastExamConfig = { ...config, ids: qs.map(q=>q.id) };
    navigate('exam');
    renderQuestion();
    if (currentExam.timer) startTimer();
  }

  function startTimer() {
    refs.examTimer.classList.remove('hidden');
    updateTimerDisplay();
    timerHandle = setInterval(()=>{
      if (!currentExam || currentExam.finished) return stopTimer();
      currentExam.secondsLeft--;
      updateTimerDisplay();
      if (currentExam.secondsLeft <= 0) { stopTimer(); showToast('Tiempo terminado. Se cerró el intento.'); finishExam(); }
    },1000);
  }
  function stopTimer() { if (timerHandle) clearInterval(timerHandle); timerHandle=null; refs.examTimer?.classList.add('hidden'); }
  function updateTimerDisplay() {
    const s=Math.max(0,currentExam?.secondsLeft||0); const h=Math.floor(s/3600); const m=Math.floor((s%3600)/60); const sec=s%60;
    refs.examTimer.textContent = h>0 ? `${h}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}` : `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  }

  function currentQ() { return currentExam?.questions[currentExam.index]; }
  function selectedAnswer() { return currentExam?.answers[currentExam.index]; }
  function isCorrect(q, answer) { if (q.type === 'multiple') { return Array.isArray(answer) && answer.length === q.answer.length && [...answer].sort((a,b)=>a-b).every((v,i)=>v === [...q.answer].sort((a,b)=>a-b)[i]); } return answer !== null && q.answer.includes(answer); }

  function renderQuestion() {
    if (!currentExam) return;
    const q=currentQ(), topic=topicById[q.topic], i=currentExam.index, answered=currentExam.answers[i], checked=currentExam.checked[i];
    refs.examModeBadge.textContent = currentExam.mode==='practice'?'Práctica':'Simulación';
    refs.examProgressText.textContent = `Pregunta ${i+1} de ${currentExam.questions.length}`;
    refs.examAreaLabel.textContent = `${topic?.section || ''} · ${topic?.area || ''}`;
    refs.examProgressBar.style.width = `${((i+1)/currentExam.questions.length)*100}%`;
    refs.questionTopic.textContent = topic?.title || q.topic;
    refs.questionDifficulty.textContent = q.difficulty || 'Media';
    refs.questionType.textContent = q.format || 'Opción múltiple';
    refs.questionText.innerHTML = richText(q.question);
    if (q.stimulus) { refs.questionStimulus.classList.remove('hidden'); refs.questionStimulus.innerHTML = `<span class="stimulus-label">ESTÍMULO</span><p>${richText(q.stimulus)}</p>`; }
    else { refs.questionStimulus.classList.add('hidden'); refs.questionStimulus.innerHTML=''; }

    refs.answerForm.innerHTML = q.options.map((option,idx)=>{
      let cls='answer-option';
      const selected = q.type === 'multiple' ? Array.isArray(answered) && answered.includes(idx) : answered===idx;
      if (selected) cls+=' is-selected';
      if (currentExam.mode==='practice' && checked) {
        if (q.answer.includes(idx)) cls+=' is-correct';
        else if (selected) cls+=' is-wrong';
      }
      const inputType = q.type === 'multiple' ? 'checkbox' : 'radio';
      return `<label class="${cls}"><input type="${inputType}" name="answer" value="${idx}" ${selected?'checked':''} ${(currentExam.mode==='practice'&&checked)?'disabled':''}/><span class="option-letter">${String.fromCharCode(65+idx)}</span><span>${esc(option)}</span></label>`;
    }).join('');
    refs.answerForm.querySelectorAll('input[name="answer"]').forEach(input=>input.addEventListener('change',()=>{
      const idx=Number(input.value);
      if (q.type === 'multiple') {
        const selected = Array.isArray(currentExam.answers[i]) ? [...currentExam.answers[i]] : [];
        currentExam.answers[i] = input.checked ? [...new Set([...selected,idx])].sort((a,b)=>a-b) : selected.filter(v=>v!==idx);
      } else currentExam.answers[i]=idx;
      renderQuestion();
    }));

    refs.prevQuestion.disabled = i===0;
    refs.prevQuestion.style.opacity = i===0?'.45':'1';
    if (currentExam.mode==='practice') {
      refs.mainQuestionAction.textContent = checked ? (i===currentExam.questions.length-1?'Finalizar':'Siguiente') : 'Comprobar';
      if (checked) showFeedback(q,answered); else refs.feedbackBox.classList.add('hidden');
    } else {
      refs.feedbackBox.classList.add('hidden');
      refs.mainQuestionAction.textContent = i===currentExam.questions.length-1?'Finalizar':'Siguiente';
    }
    renderNavigator();
  }

  function showFeedback(q, answer) {
    const correct=isCorrect(q,answer);
    refs.feedbackBox.classList.remove('hidden');
    refs.feedbackTitle.textContent = correct?'Correcto':'Revisa este punto';
    refs.feedbackText.textContent = q.explanation;
    refs.feedbackSource.textContent = q.source || 'Reactivo de práctica';
    refs.feedbackBox.classList.toggle('is-correct',correct);
    refs.feedbackBox.classList.toggle('is-wrong',!correct);
  }

  function renderNavigator() {
    let lastArea = '';
    refs.questionNavigator.innerHTML = currentExam.questions.map((q,idx)=>{
      const ans=currentExam.answers[idx], checked=currentExam.checked[idx]; let cls='';
      if(idx===currentExam.index) cls+=' is-current';
      if(ans!==null && (!Array.isArray(ans) || ans.length>0)) cls+=' is-answered';
      if(currentExam.mode==='practice'&&checked) cls+=isCorrect(q,ans)?' is-correct':' is-wrong';
      const area = topicById[q.topic]?.area || q.topic;
      let marker = '';
      if (currentExam.grouped && area !== lastArea) {
        lastArea = area;
        marker = `<span class="navigator-area-tag">${esc(area)}</span>`;
      }
      return `${marker}<button class="${cls}" data-q-index="${idx}" type="button" title="Pregunta ${idx+1}">${idx+1}</button>`;
    }).join('');
    refs.questionNavigator.querySelectorAll('[data-q-index]').forEach(btn=>btn.addEventListener('click',()=>{currentExam.index=Number(btn.dataset.qIndex); renderQuestion(); window.scrollTo({top:0,behavior:'smooth'});}));
  }

  function mainQuestionAction() {
    if (!currentExam) return;
    const i=currentExam.index, q=currentQ(), ans=currentExam.answers[i];
    if (currentExam.mode==='practice' && !currentExam.checked[i]) {
      if (ans===null || (Array.isArray(ans) && ans.length===0)) { showToast('Selecciona una respuesta antes de comprobar.'); return; }
      currentExam.checked[i]=true; renderQuestion(); return;
    }
    if (i===currentExam.questions.length-1) { finishExam(); return; }
    currentExam.index++; renderQuestion(); window.scrollTo({top:0,behavior:'smooth'});
  }

  function finishExam() {
    if (!currentExam || currentExam.finished) return;
    currentExam.finished=true; stopTimer();
    const total=currentExam.questions.length;
    let correct=0;
    const topicAttempt={};
    const wrongIds=[];
    currentExam.questions.forEach((q,i)=>{
      const good=isCorrect(q,currentExam.answers[i]); if(good) correct++; else wrongIds.push(q.id);
      const s=topicAttempt[q.topic]||(topicAttempt[q.topic]={answered:0,correct:0}); s.answered++; if(good)s.correct++;
      const cum=state.topicStats[q.topic]||(state.topicStats[q.topic]={answered:0,correct:0}); cum.answered++; if(good)cum.correct++;
      if(good) state.mistakes=state.mistakes.filter(id=>id!==q.id); else if(!state.mistakes.includes(q.id)) state.mistakes.push(q.id);
    });
    const score=Math.round(correct/total*100);
    const attempt={date:new Date().toISOString(),score,correct,total,label:currentExam.label,mode:currentExam.mode,topicAttempt};
    state.attempts.unshift(attempt); state.attempts=state.attempts.slice(0,50); saveState(); updateHomeStats();
    renderResults(attempt); navigate('results');
  }

  function renderResults(attempt) {
    const score=attempt.score;
    refs.resultScore.textContent=`${score}%`;
    refs.resultStatus.textContent = score>=85?'Dominio sólido':score>=70?'Buen avance':'Prioridad de repaso';
    refs.resultTitle.textContent=currentExam?.label || 'Resumen del intento';
    const unanswered=currentExam.answers.filter(a=>a===null).length;
    refs.resultSummary.textContent=`${attempt.correct} correctas de ${attempt.total}. ${unanswered?`${unanswered} quedaron sin responder. `:''}El porcentaje sirve para medir tu práctica y no reproduce la escala de calificación oficial.`;

    const byArea={};
    currentExam.questions.forEach((q,i)=>{ const area=topicById[q.topic]?.area||q.topic; const s=byArea[area]||(byArea[area]={total:0,correct:0}); s.total++; if(isCorrect(q,currentExam.answers[i]))s.correct++; });
    refs.topicBreakdown.innerHTML=Object.entries(byArea).map(([area,s])=>{const pct=Math.round(s.correct/s.total*100);return `<div class="break-item"><div><strong>${esc(area)}</strong><small>${s.correct}/${s.total} correctas</small></div><span>${pct}%</span></div>`;}).join('');

    const weakest=Object.entries(byArea).map(([area,s])=>({area,pct:s.correct/s.total*100})).sort((a,b)=>a.pct-b.pct)[0];
    refs.resultAdviceTitle.textContent = score>=85?'Mantén el nivel y mezcla áreas':score>=70?'Convierte tus errores en repaso':'Vuelve a las subáreas más débiles';
    refs.resultAdviceText.textContent = weakest ? `Tu área con menor precisión en este intento fue ${weakest.area} (${Math.round(weakest.pct)}%). Empieza por esa categoría y después repite una práctica corta.` : 'Revisa las preguntas falladas antes de repetir el intento.';

    refs.answerReview.innerHTML=currentExam.questions.map((q,i)=>{
      const ans=currentExam.answers[i], good=isCorrect(q,ans), correctIdx=q.answer[0];
      return `<article class="review-item ${good?'correct':'wrong'}"><span class="review-number">${i+1}</span><div><small>${esc(topicById[q.topic]?.title||q.topic)} · ${esc(q.format||'Opción múltiple')}</small><h4>${richText(q.question)}</h4>${q.stimulus?`<div class="review-stimulus">${esc(q.stimulus)}</div>`:''}<p><strong>Tu respuesta:</strong> ${ans===null || (Array.isArray(ans)&&!ans.length)?'Sin responder':(Array.isArray(ans)?ans:[ans]).map(a=>`${String.fromCharCode(65+a)}) ${esc(q.options[a])}`).join('; ')}</p><p><strong>Correcta:</strong> ${(Array.isArray(q.answer)?q.answer:[q.answer]).map(a=>`${String.fromCharCode(65+a)}) ${esc(q.options[a])}`).join('; ')}</p><p>${esc(q.explanation)}</p></div></article>`;
    }).join('');
  }

  // ---------------- Mistakes and progress ----------------
  function renderMistakes() {
    const qs=state.mistakes.map(id=>questionById[id]).filter(Boolean);
    refs.practiceMistakes.disabled=!qs.length;
    refs.practiceMistakes.style.opacity=qs.length?'1':'.5';
    refs.mistakesList.innerHTML=qs.length?qs.map(q=>`<article class="mistake-card"><span class="tag-badge">${esc(topicById[q.topic]?.shortTitle||q.topic)}</span><h3>${richText(q.question)}</h3><p>${esc(q.explanation)}</p></article>`).join(''):'<div class="empty-state"><strong>Sin errores guardados.</strong><p>Cuando falles una pregunta aparecerá aquí.</p></div>';
  }

  function renderProgress() {
    refs.progressAttempts.textContent=state.attempts.length;
    refs.progressAverage.textContent=`${averageScore()}%`;
    refs.progressBest.textContent=`${bestScore()}%`;
    refs.progressCards.textContent=Object.values(state.flashcardStats).filter(v=>v==='known').length;
    refs.progressTopics.innerHTML=TOPICS.map(t=>{const s=state.topicStats[t.id]||{answered:0,correct:0};const pct=s.answered?Math.round(s.correct/s.answered*100):0;return `<div class="break-item"><div><strong>${esc(t.title)}</strong><small>${s.answered?`${s.correct}/${s.answered} correctas`:'Sin intentos'}</small></div><span>${s.answered?`${pct}%`:'—'}</span></div>`;}).join('');
    refs.historyList.innerHTML=state.attempts.length?state.attempts.slice(0,12).map(a=>`<div class="history-item"><div><strong>${esc(a.label||'Intento')}</strong><small>${new Date(a.date).toLocaleString('es-MX')} · ${a.correct}/${a.total}</small></div><span>${a.score}%</span></div>`).join(''):'<div class="empty-state">Aún no hay intentos registrados.</div>';
  }

  // ---------------- Events ----------------
  document.querySelectorAll('[data-route]').forEach(btn=>btn.addEventListener('click',()=>{
    const target = btn.dataset.route;
    if (currentRoute === 'exam' && target !== 'exam' && currentExam && !currentExam.finished) {
      if (!confirm('¿Salir del intento actual? El progreso de este intento no se guardará.')) return;
      stopTimer(); currentExam = null;
    }
    navigate(target);
  }));
  refs.menuToggle?.addEventListener('click',()=>refs.mobilePanel.classList.toggle('is-open'));
  refs.themeToggle?.addEventListener('click',()=>setTheme(state.theme==='dark'?'light':'dark'));
  refs.examDateInput?.addEventListener('change',()=>{state.examDate=refs.examDateInput.value;saveState();updateCountdown();});
  refs.studySearch?.addEventListener('input',renderStudy);

  document.querySelectorAll('[data-area-shortcut]').forEach(btn=>btn.addEventListener('click',()=>{
    const first=TOPICS.find(t=>t.area===btn.dataset.areaShortcut); if(first){currentTopicId=first.id;navigate('study');}
  }));
  document.querySelectorAll('[data-quick]').forEach(btn=>btn.addEventListener('click',()=>startQuiz({mode:'practice',count:Number(btn.dataset.quick),focus:'all',timer:false})));
  document.querySelectorAll('[data-exact-quiz]').forEach(btn=>btn.addEventListener('click',()=>startExact(btn.dataset.exactQuiz)));

  refs.flashTopicSelect?.addEventListener('change',()=>{flashIndex=0;renderFlashcard();});
  refs.flashCard?.addEventListener('click',()=>refs.flashCard.classList.toggle('is-flipped'));
  refs.flashPrev?.addEventListener('click',()=>{if(flashCards.length){flashIndex=(flashIndex-1+flashCards.length)%flashCards.length;renderFlashcard();}});
  refs.flashNext?.addEventListener('click',()=>{if(flashCards.length){flashIndex=(flashIndex+1)%flashCards.length;renderFlashcard();}});
  refs.flashKnown?.addEventListener('click',()=>setFlashStatus('known'));
  refs.flashReview?.addEventListener('click',()=>setFlashStatus('review'));

  refs.quizConfig?.addEventListener('change',updateConfigSummary);
  refs.quizConfig?.addEventListener('submit',e=>{e.preventDefault();const c=selectedConfig();startQuiz(c);});
  refs.prevQuestion?.addEventListener('click',()=>{if(currentExam&&currentExam.index>0){currentExam.index--;renderQuestion();window.scrollTo({top:0,behavior:'smooth'});}});
  refs.mainQuestionAction?.addEventListener('click',mainQuestionAction);
  refs.leaveExam?.addEventListener('click',()=>{if(confirm('¿Salir del intento actual? El progreso de este intento no se guardará.')){stopTimer();currentExam=null;navigate('configure');}});
  refs.retryQuiz?.addEventListener('click',()=>{
    if(!lastExamConfig) return navigate('configure');
    const qs=lastExamConfig.ids?.map(id=>questionById[id]).filter(Boolean) || [];
    if(qs.length) startExam(lastExamConfig.grouped ? qs : shuffle(qs),{...lastExamConfig,label:`${currentExam?.label||'Intento'} · reintento`}); else navigate('configure');
  });
  refs.practiceMistakes?.addEventListener('click',()=>startQuiz({mode:'practice',count:Math.min(50,state.mistakes.length||10),focus:'mistakes',timer:false,label:'Repaso de errores'}));
  refs.clearProgress?.addEventListener('click',()=>{if(confirm('¿Borrar intentos, errores y tarjetas guardadas en este navegador?')){state.attempts=[];state.mistakes=[];state.topicStats={};state.flashcardStats={};saveState();renderProgress();updateHomeStats();showToast('Progreso borrado.');}});

  // ---------------- Init ----------------
  function init() {
    setTheme(state.theme || 'light');
    buildQuizFocusOptions();
    refs.flashTopicSelect.innerHTML='<option value="all">Todas las subáreas</option>'+TOPICS.map(t=>`<option value="${esc(t.id)}">${esc(t.title)}</option>`).join('');
    renderExactQuizCards();
    updateHomeStats();
    updateCountdown();
    updateConfigSummary();
    renderMaterials();
    renderStudy();
    renderFlashcard();
    setInterval(updateCountdown,1000);
  }
  init();
})();
