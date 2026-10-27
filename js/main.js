(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const chapters = window.SKETCHBOOK || [];

  const WORKS = "assets/works";
  const VIDEO = "assets/video";
  const TAPES = ["rose", "mint", "sky", "lilac", "peach", ""];
  const TILTS = [-2, 1.4, -1, 2.2, -1.6, 0.8];
  const PAPERS = ["", "page--dots", "page--ruled", "page--grid"];
  const TAB_COLORS = ["#FBE1E9", "#F6C9D6", "#F2B5C7", "#F8CDBB", "#E8CBE6", "#F4D9C6"];

  const rand = (a, b) => a + Math.random() * (b - a);
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const el = (tag, attrs = {}, html = "") => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) if (v != null && v !== false) node.setAttribute(k, v);
    if (html) node.innerHTML = html;
    return node;
  };

  /* ------------------------------------------------------------------
     Torn paper edges: each [data-torn] element gets its own ragged clip
     ------------------------------------------------------------------ */

  const tornPath = (kind) => {
    const cfg = {
      scrap: { step: 7, amp: 3.2, side: 1.5 },
      strip: { step: 4, amp: 3, side: 2 },
      sheet: { step: 1.6, amp: 7, side: 0 },
    }[kind] || { step: 5, amp: 3, side: 1 };
    const pts = [];
    for (let x = 0; x <= 100; x += cfg.step) pts.push(`${Math.min(x, 100)}% ${rand(0, cfg.amp).toFixed(1)}px`);
    if (cfg.side) pts.push(`calc(100% - ${rand(0, cfg.side).toFixed(1)}px) 50%`);
    for (let x = 100; x >= 0; x -= cfg.step) pts.push(`${Math.max(x, 0)}% calc(100% - ${rand(0, cfg.amp).toFixed(1)}px)`);
    if (cfg.side) pts.push(`${rand(0, cfg.side).toFixed(1)}px 50%`);
    return `polygon(${pts.join(",")})`;
  };
  const tear = (root = document) => root.querySelectorAll("[data-torn]").forEach((node) => {
    node.style.clipPath = tornPath(node.dataset.torn);
  });
  tear();

  /* ------------------------------------------------------------------
     Sewing buttons: each [data-button] names a cut-out in assets/buttons/
     ------------------------------------------------------------------ */

  document.querySelectorAll("[data-button]").forEach((node) => {
    node.innerHTML = `<img src="assets/buttons/${node.dataset.button}.webp" alt="" decoding="async">`;
  });

  /* ------------------------------------------------------------------
     Build the sketchbook
     ------------------------------------------------------------------ */

  const doodle = `<svg viewBox="0 0 100 100" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M50 14c6 14 4 22 0 30-4-8-6-16 0-30Z"/><path d="M86 50c-14 6-22 4-30 0 8-4 16-6 30 0Z"/>
    <path d="M50 86c-6-14-4-22 0-30 4 8 6 16 0 30Z"/><path d="M14 50c14-6 22-4 30 0-8 4-16 6-30 0Z"/>
    <circle cx="50" cy="50" r="5"/><path d="M78 18l3 6 6 1-5 4 1 6-5-3-5 3 1-6-5-4 6-1Z"/></svg>`;

  const heart = `<svg class="cover__heart" viewBox="0 0 60 70" aria-hidden="true">
    <defs>
      <linearGradient id="silver" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#fbfbfd"/><stop offset=".35" stop-color="#c9c9d1"/>
        <stop offset=".6" stop-color="#9a9aa4"/><stop offset="1" stop-color="#e3e3e9"/>
      </linearGradient>
    </defs>
    <circle cx="30" cy="5" r="3.6" fill="none" stroke="url(#silver)" stroke-width="2"/>
    <path d="M30 66C10 52 3 38 8 26c5-11 17-11 22-1 5-10 17-10 22 1 5 12-2 26-22 40Z" fill="url(#silver)" stroke="#8a8a94" stroke-width=".8"/>
    <g fill="none" stroke="#85858f" stroke-width="1.1" stroke-linecap="round" opacity=".85">
      <path d="M30 42c-4 0-6-3-5-6s5-4 7-1-1 6-4 5"/>
      <path d="M30 42c-7 1-11-4-9-9s9-6 12-2"/>
      <path d="M30 42c6 1 10-3 9-8-1-4-6-6-9-4"/>
      <path d="M30 42v10M30 50c-4 0-7 2-8 5M30 48c3-1 6 1 7 4"/>
    </g>
  </svg>`;

  const book = document.getElementById("book");
  const journal = document.querySelector(".journal");
  const pages = [];
  const allPieces = [];
  const chapterStarts = [];

  const addPage = (node, kind) => { pages.push({ node, kind }); return pages.length - 1; };

  const coverPage = () => {
    const page = el("div", { class: "page page--cover", "data-density": "hard" });
    page.innerHTML = `
      <div class="cover">
        <div class="cover__strap">${'<i class="rivet"></i>'.repeat(5)}</div>
        <div class="cover__flap"></div>
        <div class="cover__cord"></div>
        ${heart}
        <div class="cover__tag"><p>Olivia's sketchbook</p><p>click to open</p></div>
      </div>`;
    return page;
  };

  const backCoverPage = () => {
    const page = el("div", { class: "page page--cover back-cover", "data-density": "hard" });
    page.innerHTML = `<div class="cover"><span class="back-cover__mark">NABI</span></div>`;
    return page;
  };

  const notesPage = (text) => {
    const page = el("div", { class: "page" });
    page.innerHTML = `<div class="page__inner notes">${doodle}<p>${esc(text)}</p></div>`;
    return page;
  };

  const pieceHTML = (item, index, n) => {
    const tape = TAPES[index % TAPES.length];
    const tilt = TILTS[index % TILTS.length];
    const corner = index % 3 === 2 && n === 1;
    const isVideo = item.type === "video";
    const thumb = isVideo ? `${VIDEO}/${item.src}-poster.webp` : `${WORKS}/thumb/${item.src}.webp`;
    const media = isVideo
      ? `<video src="${VIDEO}/${item.src}.mp4" poster="${thumb}" muted loop playsinline preload="metadata" ${reduceMotion ? "" : "autoplay"} width="${item.w}" height="${item.h}"></video><span class="piece__play">clip</span>`
      : `<img data-src="${thumb}" alt="${esc(item.alt)}" width="${item.w}" height="${item.h}" decoding="async">`;
    const year = item.year ? ` <span>${esc(item.year)}</span>` : "";
    return `
      <figure class="piece${corner ? " piece--corner" : ""}" style="--tilt:${tilt}deg">
        ${tape ? `<span class="tape tape--${tape}" style="--tape-tilt:${-tilt * 2}deg" aria-hidden="true"></span>` : ""}
        <button class="piece__button" type="button" data-piece="${item._i}" aria-label="View ${esc(item.title)} larger">${media}</button>
        <figcaption>${esc(item.title)}${year}</figcaption>
      </figure>`;
  };

  const piecesPage = (items, pageInChapter) => {
    const n = items.length;
    const allLandscape = items.every((it) => it.w > it.h * 1.1);
    const layout = n === 1 || allLandscape ? "rows" : "cols";
    const page = el("div", { class: `page ${PAPERS[pageInChapter % PAPERS.length]}` });
    page.innerHTML = `<div class="page__inner"><div class="pieces pieces--${layout}" style="--n:${n}">
      ${items.map((it, k) => pieceHTML(it, pageInChapter + k, n)).join("")}</div></div>`;
    return page;
  };

  addPage(coverPage(), "cover");
  const contents = el("div", { class: "page page--ruled" });
  addPage(contents, "contents");

  chapters.forEach((chapter) => {
    // every chapter opens on a right-hand page
    if (pages.length % 2 === 1) addPage(notesPage("notes & doodles"), "notes");

    const opener = el("div", { class: "page page--dots" });
    const count = chapter.pages.reduce((sum, p) => sum + p.length, 0);
    opener.innerHTML = `
      <div class="page__inner chapter" style="--wash: var(--${chapter.color})">
        <span class="chapter__wash" aria-hidden="true"></span>
        <span class="chapter__lace" aria-hidden="true"></span>
        <h3>${esc(chapter.title)}</h3>
        <p>${esc(chapter.note)}</p>
        <p class="chapter__count">${count} ${count === 1 ? "piece" : "pieces"}</p>
      </div>`;
    chapterStarts.push(addPage(opener, "chapter"));

    chapter.pages.forEach((items, p) => {
      items.forEach((item) => {
        item._i = allPieces.length;
        item._chapter = chapter;
        allPieces.push(item);
      });
      const idx = addPage(piecesPage(items, p), "pieces");
      items.forEach((item) => { item._page = idx; });
    });
  });

  addPage(notesPage("the end (for now)"), "notes");
  if ((pages.length + 1) % 2 === 1) addPage(notesPage("room for new work"), "notes");
  addPage(backCoverPage(), "cover");

  contents.innerHTML = `
    <div class="page__inner contents">
      <h3>Contents</h3>
      <ol>
        ${chapters.map((c, i) => `<li><button type="button" data-goto="${chapterStarts[i]}"><span>${esc(c.title)}</span><span class="contents__page">${chapterStarts[i]}</span></button></li>`).join("")}
      </ol>
      <p class="contents__found">if found, please return to Olivia</p>
    </div>`;

  pages.forEach(({ node, kind }, i) => {
    node.classList.add("page");
    if (kind !== "cover") {
      node.insertAdjacentHTML("beforeend", `<span class="page__holes" aria-hidden="true"></span><span class="page__num" aria-hidden="true">${i}</span>`);
    }
    book.appendChild(node);
  });

  /* ------------------------------------------------------------------
     Flipbook + divider tabs
     ------------------------------------------------------------------ */

  const status = document.querySelector(".book-controls__status");
  const prevBtn = document.querySelector('[data-flip="prev"]');
  const nextBtn = document.querySelector('[data-flip="next"]');
  const tabNav = document.querySelector(".journal__tabs");

  const tabDefs = [{ title: "Contents", tab: "contents", start: 1 }]
    .concat(chapters.map((c, i) => ({ title: c.title, tab: c.tab || c.title, start: chapterStarts[i] })));
  tabNav.innerHTML = tabDefs
    .map((t, i) => `<button class="tab" type="button" data-goto="${t.start}" style="--tc:${TAB_COLORS[i % TAB_COLORS.length]}" aria-label="${esc(t.title)}">${esc(t.tab)}</button>`)
    .join("");
  const tabs = [...tabNav.querySelectorAll(".tab")];

  let flip = null;

  const hydrate = (idx) => {
    for (let i = Math.max(0, idx - 2); i <= Math.min(pages.length - 1, idx + 5); i++) {
      pages[i].node.querySelectorAll("img[data-src]").forEach((img) => {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
      });
    }
  };

  const syncState = () => {
    const idx = flip.getCurrentPageIndex();
    const total = flip.getPageCount();
    const landscape = flip.getOrientation() === "landscape";
    journal.dataset.orient = landscape ? "landscape" : "portrait";
    journal.dataset.state = idx === 0 ? "closed" : idx === total - 1 ? "back" : "open";
  };

  const updateUI = () => {
    if (!flip) return;
    const idx = flip.getCurrentPageIndex();
    const total = flip.getPageCount();
    const landscape = flip.getOrientation() === "landscape";
    hydrate(idx);
    syncState();

    if (idx === 0) status.textContent = "the cover";
    else if (idx === total - 1) status.textContent = "the back cover";
    else status.textContent = landscape && idx < total - 1 ? `pages ${idx} and ${idx + 1}` : `page ${idx}`;
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx >= total - 1;
    nextBtn.querySelector("span").textContent = idx === 0 ? "open the book" : "turn the page";

    const visible = landscape ? idx + 1 : idx;
    let active = -1;
    tabDefs.forEach((t, i) => { if (visible >= t.start) active = i; });
    tabs.forEach((t, i) => t.setAttribute("aria-current", i === active ? "true" : "false"));
  };

  const goTo = (index) => {
    if (!flip) return;
    const current = flip.getCurrentPageIndex();
    if (Math.abs(index - current) <= 2 && !reduceMotion) {
      flip.flip(index);
    } else {
      flip.turnToPage(index);
      updateUI();
    }
  };

  if (window.St && window.St.PageFlip) {
    flip = new St.PageFlip(book, {
      width: 460,
      height: 620,
      size: "stretch",
      minWidth: 240,
      maxWidth: 500,
      minHeight: 330,
      maxHeight: 700,
      showCover: true,
      usePortrait: true,
      mobileScrollSupport: true,
      maxShadowOpacity: 0.3,
      flippingTime: reduceMotion ? 1 : 900,
      autoSize: true,
    });
    flip.loadFromHTML(book.querySelectorAll(".page"));
    flip.on("flip", updateUI);
    flip.on("changeOrientation", updateUI);
    flip.on("init", updateUI);
    // start sliding into place as soon as the cover begins to open
    flip.on("changeState", (e) => {
      const idx = flip.getCurrentPageIndex();
      const total = flip.getPageCount();
      if ((e.data === "flipping" || e.data === "user_fold") && (idx === 0 || idx === total - 1)) {
        journal.dataset.state = "open";
      } else if (e.data === "read") {
        syncState();
      }
    });
    updateUI();
  } else {
    pages.forEach((_, i) => hydrate(i));
  }

  prevBtn.addEventListener("click", () => flip && flip.flipPrev());
  nextBtn.addEventListener("click", () => flip && flip.flipNext());

  document.addEventListener("click", (e) => {
    const go = e.target.closest("[data-goto]");
    if (go) goTo(Number(go.dataset.goto));
  });

  let bookVisible = false;
  new IntersectionObserver(([entry]) => { bookVisible = entry.isIntersecting; }, { threshold: 0.3 }).observe(book);
  document.addEventListener("keydown", (e) => {
    if (!flip || !bookVisible || viewer.open || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.key === "ArrowRight") { e.preventDefault(); flip.flipNext(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); flip.flipPrev(); }
  });

  /* ------------------------------------------------------------------
     Viewer (enlarged piece)
     ------------------------------------------------------------------ */

  const viewer = document.querySelector(".viewer");
  const vMedia = viewer.querySelector(".viewer__media");
  const vTitle = viewer.querySelector(".viewer__title");
  const vMeta = viewer.querySelector(".viewer__meta");
  const vCaption = viewer.querySelector(".viewer__caption");
  let current = 0;

  const showPiece = (i) => {
    current = (i + allPieces.length) % allPieces.length;
    const item = allPieces[current];
    vMedia.innerHTML = item.type === "video"
      ? `<video src="${VIDEO}/${item.src}.mp4" poster="${VIDEO}/${item.src}-poster.webp" controls muted loop playsinline ${reduceMotion ? "" : "autoplay"} width="${item.w}" height="${item.h}" aria-label="${esc(item.alt)}"></video>`
      : `<img src="${WORKS}/full/${item.src}.webp" alt="${esc(item.alt)}" width="${item.w}" height="${item.h}">`;
    vTitle.textContent = item.title;
    vMeta.textContent = [item.year, item.medium, item._chapter.title].filter(Boolean).join(", ");
    vCaption.textContent = item.caption || "";
    vCaption.hidden = !item.caption;
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-piece]");
    if (!btn) return;
    showPiece(Number(btn.dataset.piece));
    viewer.showModal();
  });

  viewer.querySelector(".viewer__close").addEventListener("click", () => viewer.close());
  viewer.querySelectorAll("[data-step]").forEach((b) =>
    b.addEventListener("click", () => showPiece(current + Number(b.dataset.step))));
  viewer.addEventListener("click", (e) => { if (e.target === viewer) viewer.close(); });
  viewer.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") showPiece(current + 1);
    if (e.key === "ArrowLeft") showPiece(current - 1);
  });
  viewer.addEventListener("close", () => {
    vMedia.innerHTML = "";
    const target = allPieces[current]._page;
    if (flip && target != null) {
      const idx = flip.getCurrentPageIndex();
      const landscape = flip.getOrientation() === "landscape";
      const onScreen = target === idx || (landscape && target === idx + 1);
      if (!onScreen) { flip.turnToPage(target); updateUI(); }
    }
  });

  /* ------------------------------------------------------------------
     Cross-stitched name
     ------------------------------------------------------------------ */

  const stitchCanvas = document.querySelector(".stitch-name");
  const THREADS = ["#6B4637", "#74503F", "#633F31", "#7B5545", "#6E4939"];
  let stitchCells = [];
  let stitchCols = 0;
  let stitchRows = 0;

  const buildCells = (rows) => {
    const text = "Olivia Turner";
    const off = document.createElement("canvas");
    const ox = off.getContext("2d", { willReadFrequently: true });
    const fs = rows * 0.92;
    ox.font = `${fs}px "Mr Dafoe"`;
    const cols = Math.ceil(ox.measureText(text).width + fs * 0.5);
    off.width = cols;
    off.height = rows;
    ox.font = `${fs}px "Mr Dafoe"`;
    ox.fillText(text, fs * 0.22, rows * 0.72);
    const data = ox.getImageData(0, 0, cols, rows).data;
    const cells = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if (data[(y * cols + x) * 4 + 3] > 110) cells.push({ x, y, t: THREADS[(x * 7 + y * 13) % THREADS.length] });
      }
    }
    cells.sort((a, b) => a.x - b.x || a.y - b.y);   // stitched left to right
    stitchCells = cells;
    stitchCols = cols;
    stitchRows = rows;
  };

  const sizeStitchCanvas = () => {
    const cssW = stitchCanvas.parentElement.clientWidth;
    const cell = cssW / stitchCols;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    stitchCanvas.width = Math.round(cssW * dpr);
    stitchCanvas.height = Math.round(stitchRows * cell * dpr);
    stitchCanvas.style.height = `${stitchRows * cell}px`;
    const ctx = stitchCanvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, cell };
  };

  const drawStitch = (ctx, cell, { x, y, t }) => {
    const px = x * cell;
    const py = y * cell;
    const p = cell * 0.16;
    const a = [px + p, py + cell - p, px + cell - p, py + p];   // bottom leg  /
    const b = [px + p, py + p, px + cell - p, py + cell - p];   // top leg     \
    ctx.lineCap = "round";

    ctx.strokeStyle = "rgba(60,35,25,.28)";
    ctx.lineWidth = cell * 0.36;
    ctx.beginPath();
    ctx.moveTo(a[0] + cell * 0.08, a[1] + cell * 0.1); ctx.lineTo(a[2] + cell * 0.08, a[3] + cell * 0.1);
    ctx.moveTo(b[0] + cell * 0.08, b[1] + cell * 0.1); ctx.lineTo(b[2] + cell * 0.08, b[3] + cell * 0.1);
    ctx.stroke();

    ctx.strokeStyle = t;
    ctx.lineWidth = cell * 0.32;
    ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(a[2], a[3]); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(b[0], b[1]); ctx.lineTo(b[2], b[3]); ctx.stroke();

    // twist highlight on the top leg
    ctx.strokeStyle = "rgba(255,236,222,.32)";
    ctx.lineWidth = cell * 0.08;
    ctx.beginPath(); ctx.moveTo(b[0] + cell * 0.1, b[1]); ctx.lineTo(b[2] - cell * 0.05, b[3] - cell * 0.14); ctx.stroke();
  };

  let stitchAnim = 0;
  const renderStitches = (animate) => {
    cancelAnimationFrame(stitchAnim);
    const { ctx, cell } = sizeStitchCanvas();
    if (!animate) {
      stitchCells.forEach((c) => drawStitch(ctx, cell, c));
      return;
    }
    const duration = 2200;
    let done = 0;
    let start = 0;
    const step = (now) => {
      if (!start) start = now;
      const target = Math.min(stitchCells.length, Math.ceil(((now - start) / duration) * stitchCells.length));
      for (; done < target; done++) drawStitch(ctx, cell, stitchCells[done]);
      if (done < stitchCells.length) stitchAnim = requestAnimationFrame(step);
    };
    stitchAnim = requestAnimationFrame(step);
  };

  const rowsForWidth = () => (window.innerWidth < 640 ? 22 : 30);

  (async () => {
    try { await document.fonts.load('40px "Mr Dafoe"'); } catch (_) { /* fall back to whatever loaded */ }
    buildCells(rowsForWidth());
    renderStitches(!reduceMotion);
  })();

  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (!stitchCells.length) return;
      const rows = rowsForWidth();
      if (rows !== stitchRows) buildCells(rows);
      renderStitches(false);
    }, 150);
  });

  /* ------------------------------------------------------------------
     Smoke: colored puffs drift in and out; the cursor stirs them
     ------------------------------------------------------------------ */

  const smoke = document.querySelector(".smoke");
  const PINKS = ["#F49BBE", "#F7B3CB", "#F08CB2"];
  const SMOKE_COLORS = PINKS.concat(["#95C6F3", "#C4A6F2", "#9EE0BE", "#FFB89A", "#F8DF7E"]);
  const PUFFS = window.innerWidth < 640 ? 5 : 8;
  // 1 at the top of the home page, fading to 0 by the time you scroll past it
  const homeness = () => Math.max(0, 1 - window.scrollY / (vh * 0.85));
  let vw = window.innerWidth;
  let vh = window.innerHeight;

  const pointer = { x: -9999, y: -9999, vx: 0, vy: 0, t: 0 };
  window.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    const now = performance.now();
    const dt = Math.max(8, now - pointer.t) / 1000;
    pointer.vx = (e.clientX - pointer.x) / dt;
    pointer.vy = (e.clientY - pointer.y) / dt;
    if (pointer.t === 0 || Math.abs(pointer.vx) > 1e4) { pointer.vx = 0; pointer.vy = 0; }
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.t = now;
  }, { passive: true });
  window.addEventListener("resize", () => { vw = window.innerWidth; vh = window.innerHeight; });

  const spawn = (p, initial) => {
    p.size = rand(0.45, 0.72) * Math.max(vw, vh);
    p.x = rand(-0.05, 1.05) * vw;
    p.y = rand(-0.05, 1.05) * vh;
    p.vx = rand(-14, 14);
    p.vy = rand(-10, 6);
    p.rot = rand(0, 360);
    p.vrot = rand(-3, 3);
    p.dur = rand(16, 30);
    p.peak = rand(0.32, 0.55);
    p.life = initial ? rand(0, p.dur) : -rand(1, 9);   // negative life = a quiet gap before it drifts in
    p.ox = 0; p.oy = 0; p.ovx = 0; p.ovy = 0; p.spin = 0; p.vspin = 0;
    p.el.style.setProperty("--size", `${p.size}px`);
    // pink is always in the mix, and dominates while you're on the home page
    const pool = Math.random() < 0.35 + homeness() * 0.35 ? PINKS : SMOKE_COLORS;
    p.el.style.setProperty("--c", pool[Math.floor(rand(0, pool.length))]);
    // resolved relative to css/style.css, where the variable is used
    p.el.style.setProperty("--m", `url("../assets/textures/smoke-${1 + Math.floor(rand(0, 4))}.webp")`);
  };

  const puffs = Array.from({ length: PUFFS }, () => {
    const node = el("span", { class: "puff" });
    smoke.appendChild(node);
    const p = { el: node };
    spawn(p, true);
    return p;
  });

  let boost = 1;
  const placePuff = (p) => {
    const t = Math.max(0, p.life) / p.dur;
    const opacity = p.life < 0 ? 0 : Math.min(0.85, p.peak * boost * Math.pow(Math.sin(Math.PI * Math.min(1, t)), 1.4));
    p.el.style.opacity = opacity.toFixed(3);
    p.el.style.transform = `translate3d(${p.x + p.ox}px, ${p.y + p.oy}px, 0) rotate(${p.rot + p.spin}deg)`;
  };

  if (reduceMotion) {
    puffs.forEach((p) => { p.life = p.dur / 2; placePuff(p); });
  } else {
    let last = performance.now();
    const tick = (now) => {
      // allow big steps so the smoke keeps its pace when frames come slowly;
      // only clamp long pauses (e.g. returning to a background tab)
      const dt = Math.min(0.25, (now - last) / 1000);
      last = now;
      pointer.vx *= Math.exp(-dt * 6);
      pointer.vy *= Math.exp(-dt * 6);
      boost = 1 + homeness() * 0.9;   // richer smoke on the home page, subtle elsewhere

      for (const p of puffs) {
        p.life += dt;
        if (p.life > p.dur) { spawn(p, false); }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += p.vrot * dt;

        // stir: the cursor pushes and swirls nearby smoke
        const cx = p.x + p.ox;
        const cy = p.y + p.oy;
        const dx = cx - pointer.x;
        const dy = cy - pointer.y;
        const d = Math.hypot(dx, dy) || 1;
        const reach = p.size * 0.5;
        if (d < reach) {
          const f = 1 - d / reach;
          p.ovx += (pointer.vx * 0.9 + (dx / d) * 120) * f * dt;
          p.ovy += (pointer.vy * 0.9 + (dy / d) * 120) * f * dt;
          p.vspin += ((dx * pointer.vy - dy * pointer.vx) / (d * 900)) * f;
        }
        // drift back and settle
        p.ovx += -p.ox * 0.5 * dt;
        p.ovy += -p.oy * 0.5 * dt;
        p.ovx *= Math.exp(-dt * 1.4);
        p.ovy *= Math.exp(-dt * 1.4);
        p.vspin *= Math.exp(-dt * 1.2);
        p.ox += p.ovx * dt;
        p.oy += p.ovy * dt;
        p.spin += p.vspin * dt * 10;

        placePuff(p);
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
