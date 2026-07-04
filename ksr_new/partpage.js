/* Shared renderer for part1.html / part2.html / part3.html.
   Each of those pages sets `const PART_ID = "p1";` (etc.) before including this file. */
(function () {
  const p = PARTS.find(x => x.id === PART_ID);
  document.querySelector(".topbar-title").textContent = p.code + " — " + p.title;
  markActiveNav("learn");

  const container = document.getElementById("app");
  let openChapter = window.location.hash ? window.location.hash.substring(1) : null;

  function draw() {
    const rows = p.chapters.map((c, i) => {
      const isRead = progress.readChapters.includes(c.id);
      const isOpen = openChapter === c.id;
      const chapterMcqs = MCQ.filter(m => m.ch === c.id);
      const pointsHtml = c.points.map((pt, pi) => `
        <div class="kp-item">
          <div class="kp-num" style="background:${p.color}20;color:${p.color}">${pi+1}</div>
          <div class="kp-text">${esc(pt)}</div>
        </div>`).join("");

      return `
        <div style="margin-bottom:10px;" id="${c.id}">
          <button class="chapter-row" data-id="${c.id}" style="${isOpen ? "border-radius:14px 14px 0 0;" : ""}">
            ${isRead ? sealSvg(p.color, 26) : `<div class="dot-num">${i+1}</div>`}
            <div style="flex:1;">
              <div class="chapter-title">${esc(c.title)}</div>
              <div class="chapter-rule">${esc(c.rule)}</div>
            </div>
            <svg class="chev ${isOpen ? "open" : ""}" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 6l6 6-6 6"/></svg>
          </button>
          <div class="lesson-panel ${isOpen ? "open" : ""}">
            <div class="lesson-summary">${esc(c.summary)}</div>
            <div class="kp-title">Key points</div>
            <div class="kp-list">${pointsHtml}</div>
            <a class="btn-solid btn-block" style="background:${p.color}" href="practice.html?chapter=${c.id}">Practice this chapter (${chapterMcqs.length} MCQs)</a>
          </div>
        </div>`;
    }).join("");

    container.innerHTML = `<div style="padding:12px 16px 24px;">${rows}</div>`;

    container.querySelectorAll(".chapter-row").forEach(b => {
      b.onclick = () => {
        const id = b.dataset.id;
        if (openChapter === id) { openChapter = null; }
        else { openChapter = id; markChapterRead(id); }
        history.replaceState(null, "", openChapter ? "#"+openChapter : window.location.pathname);
        draw();
        if (openChapter) document.getElementById(openChapter).scrollIntoView({ behavior:"smooth", block:"start" });
      };
    });
  }

  draw();
  if (openChapter) {
    markChapterRead(openChapter);
    setTimeout(() => document.getElementById(openChapter)?.scrollIntoView({ block:"start" }), 50);
  }
})();
