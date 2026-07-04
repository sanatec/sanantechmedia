/* Shared helpers loaded by every page via <script src="common.js"> (after data.js). */

const STORAGE_KEY = "ksr_prep_progress_v1";

function defaultProgress(){ return { readChapters: [], mcqStats: {}, pyqStats: {} }; }
function loadProgress(){
  try { const raw = localStorage.getItem(STORAGE_KEY); if (raw) return JSON.parse(raw); } catch(e){}
  return defaultProgress();
}
function saveProgress(p){ try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch(e){} }

let progress = loadProgress();

function markChapterRead(chId){
  if (!progress.readChapters.includes(chId)) { progress.readChapters.push(chId); saveProgress(progress); }
}
function recordQuiz(kind, key, correct, total){
  const bucket = kind === "mcq" ? progress.mcqStats : progress.pyqStats;
  const existing = bucket[key] || { attempts:0, best:0, lastScore:0, lastTotal: total };
  bucket[key] = { attempts: existing.attempts+1, best: Math.max(existing.best, correct), lastScore: correct, lastTotal: total };
  saveProgress(progress);
}
function resetProgress(){ progress = defaultProgress(); saveProgress(progress); }

function esc(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

function ring(pct, color, size){
  size = size || 74; const stroke = size*0.11; const r = (size-stroke)/2; const c = 2*Math.PI*r; const offset = c - (pct/100)*c;
  return `<div class="ring-wrap" style="width:${size}px;height:${size}px;">
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="#DCE0D6" stroke-width="${stroke}"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-dasharray="${c}" stroke-dashoffset="${offset}" stroke-linecap="round"/>
    </svg><div class="ring-label">${pct}%</div></div>`;
}
function sealSvg(color, size){
  size = size || 26;
  return `<svg class="seal" width="${size}" height="${size}" viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="19" fill="none" stroke="${color}" stroke-width="1.4" stroke-dasharray="2.4 2.2"/>
    <circle cx="20" cy="20" r="14.5" fill="${color}" opacity="0.08"/>
    <path d="M13 20.5l4.2 4.2L27.5 14.5" fill="none" stroke="${color}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}
function shuffle(arr){
  const a = arr.slice();
  for (let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function qs(name){ return new URLSearchParams(window.location.search).get(name); }

/* Highlights the correct bottom-nav icon based on the current file name.
   Call markActiveNav("home"|"learn"|"practice"|"pyq"|"profile") on page load. */
function markActiveNav(id){
  document.querySelectorAll(".navbtn").forEach(b => b.classList.toggle("active", b.dataset.tab === id));
}

/* ============================= REUSABLE QUIZ RUNNER =============================
   Used by practice.html (mixed/chapter MCQs) and every pyq-*.html page
   (a fixed previous-year set). Renders into the element with id="app".
   cfg = { title, tone, questions:[{q,opts,a,exp}], key, kind:"mcq"|"pyq", onExit }
*/
function runQuiz(cfg){
  const container = document.getElementById("app");
  let idx = 0, selected = null, correctCount = 0;
  const questions = cfg.questions;

  function drawQuestion(){
    const q = questions[idx];
    container.innerHTML = `
      <div class="quiz-progress-wrap">
        <div class="quiz-progress-top"><span>${esc(cfg.title)}</span><span>${idx+1} / ${questions.length}</span></div>
        <div class="quiz-track"><div class="quiz-fill" style="width:${(idx/questions.length)*100}%;background:${cfg.tone}"></div></div>
      </div>
      <div class="quiz-question">${esc(q.q)}</div>
      <div class="opt-list" id="optList"></div>
      <div id="expBox"></div>
      <div class="quiz-footer"><button class="btn-solid" id="nextBtn" style="width:100%;background:${cfg.tone};opacity:.4;" disabled>${idx+1===questions.length?"Finish":"Next question"}</button></div>`;
    const optList = container.querySelector("#optList");
    q.opts.forEach((opt,i) => {
      const b = document.createElement("button");
      b.className = "opt-btn";
      b.innerHTML = `<span>${esc(opt)}</span><span class="opt-icon"></span>`;
      b.onclick = () => choose(i);
      optList.appendChild(b);
    });
    selected = null;
    function choose(i){
      if (selected !== null) return;
      selected = i;
      if (i === q.a) correctCount++;
      const btns = optList.querySelectorAll(".opt-btn");
      btns.forEach((b,bi) => {
        const icon = b.querySelector(".opt-icon");
        if (bi === q.a) { b.classList.add("correct"); icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="#1F7A4D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M20 6L9 17l-5-5"/></svg>`; }
        else if (bi === i) { b.classList.add("wrong"); icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="#B23B33" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M18 6L6 18M6 6l12 12"/></svg>`; }
      });
      container.querySelector("#expBox").innerHTML = `<div class="exp-box"><b>Why: </b>${esc(q.exp)}</div>`;
      const nb = container.querySelector("#nextBtn"); nb.disabled = false; nb.style.opacity = "1";
    }
    container.querySelector("#nextBtn").onclick = () => {
      if (idx+1 < questions.length) { idx++; drawQuestion(); }
      else { recordQuiz(cfg.kind, cfg.key, correctCount, questions.length); drawResult(); }
    };
  }

  function drawResult(){
    const pct = Math.round((correctCount/questions.length)*100);
    const msg = pct >= 80 ? "Excellent work!" : pct >= 50 ? "Good effort — keep going." : "Time to revisit this chapter.";
    container.innerHTML = `<div class="result-wrap">
      <div style="display:flex;justify-content:center;margin:18px 0;">${ring(pct, cfg.tone, 110)}</div>
      <div class="result-title">${msg}</div><div class="result-sub">${correctCount} of ${questions.length} correct</div>
      <div class="btn-row">
        <a class="btn-ghost" href="${cfg.exitHref}" style="color:${cfg.tone};border-color:${cfg.tone}">Back</a>
        <button class="btn-solid" id="retryBtn" style="background:${cfg.tone}">Retry</button>
      </div></div>`;
    container.querySelector("#retryBtn").onclick = () => { idx = 0; correctCount = 0; drawQuestion(); };
  }

  drawQuestion();
}
