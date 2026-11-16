/* site.js builds the page from content.js. You should not need to edit this file. */
(function () {
  "use strict";
  var app = document.getElementById("app");
  var S = window.SITE;

  if (!S) {
    app.innerHTML =
      '<div class="error"><h1>The page content could not be loaded</h1>' +
      "<p>The file content.js has a typing mistake, usually a missing quote, comma or bracket " +
      "in the most recent edit. Undo that edit or fix the mistake, then reload.</p></div>";
    return;
  }

  /* ---------- small helpers ---------- */
  function esc(v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function list(a) { return Array.isArray(a) ? a : []; }
  function ext(url) { return /^https?:/i.test(url) ? ' target="_blank" rel="noopener"' : ""; }
  function link(l) { return '<a href="' + esc(l.url) + '"' + ext(l.url) + ">" + esc(l.label) + "</a>"; }
  function points(a) {
    a = list(a);
    return a.length ? '<ul class="points">' + a.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" : "";
  }
  function section(id, title, inner, wide) {
    if (!inner) return "";
    return '<section class="section" id="' + id + '"><div class="wrap"><h2>' + esc(title) +
      '</h2><div class="body' + (wide ? " body-wide" : "") + '">' + inner + "</div></div></section>";
  }

  /* ---------- hero ---------- */
  function hero() {
    var facts = list(S.facts).map(function (f) {
      return "<div><dt>" + esc(f.label) + "</dt><dd>" + esc(f.value) + "</dd></div>";
    }).join("");
    var actions = "";
    if (S.email) actions += '<a class="btn btn-solid" href="mailto:' + esc(S.email) + '">Email me</a>';
    if (S.cv) actions += '<a class="btn btn-line" href="' + esc(S.cv) + '" target="_blank" rel="noopener">Download CV (PDF)</a>';
    actions += list(S.links).map(link).join("");
    return '<header class="hero" id="top"><div class="wrap hero-grid"><div>' +
      "<h1>" + esc(S.name) + "</h1>" +
      (S.headline ? '<p class="hero-headline">' + esc(S.headline) + "</p>" : "") +
      (S.intro ? '<p class="hero-intro">' + esc(S.intro) + "</p>" : "") +
      '<div class="actions">' + actions + "</div>" +
      (facts ? '<dl class="facts">' + facts + "</dl>" : "") + "</div>" +
      (S.photo ? '<div class="aside"><img src="' + esc(S.photo) + '" alt="Portrait of ' + esc(S.name) + '" width="432" height="432"></div>' : "") +
      "</div>" + trace() + "</header>";
  }

  /* ---------- the fading trace ----------
     A Rayleigh fading channel simulated with a sum of sinusoids (Jakes model).
     The seed is fixed so the picture is the same on every visit. */
  function trace() {
    var seed = 20270;
    function rnd() {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
    var N = 24, paths = [], i, k;
    for (i = 0; i < N; i++) paths.push({ a: Math.cos(2 * Math.PI * rnd()), p: 2 * Math.PI * rnd() });
    var W = 1200, H = 230, L = 46, R = 12, T = 16, B = 30;
    var top = 8, bot = -32, thresh = -10, n = 900, span = 26;
    function y(db) { return T + (top - db) / (top - bot) * (H - T - B); }
    function x(j) { return L + j / (n - 1) * (W - L - R); }
    var db = [];
    for (k = 0; k < n; k++) {
      var t = k / (n - 1) * span, re = 0, im = 0;
      for (i = 0; i < N; i++) {
        var ph = 2 * Math.PI * t * paths[i].a + paths[i].p;
        re += Math.cos(ph); im += Math.sin(ph);
      }
      var p = (re * re + im * im) / N;
      db.push(Math.max(bot, 10 * Math.log10(p + 1e-9)));
    }
    var d = "", fades = "", open = false, yt = y(thresh);
    for (k = 0; k < n; k++) {
      var px = x(k).toFixed(1), py = y(db[k]).toFixed(1);
      d += (k ? "L" : "M") + px + " " + py;
      if (db[k] < thresh) {
        if (!open) { fades += "M" + px + " " + yt.toFixed(1); open = true; }
        fades += "L" + px + " " + py;
      } else if (open) { fades += "L" + px + " " + yt.toFixed(1) + "Z"; open = false; }
    }
    if (open) fades += "L" + x(n - 1).toFixed(1) + " " + yt.toFixed(1) + "Z";
    var grid = "", ticks = [0, -10, -20, -30];
    ticks.forEach(function (v) {
      if (v !== thresh) grid += '<line class="trace-grid" x1="' + L + '" x2="' + (W - R) + '" y1="' + y(v) + '" y2="' + y(v) + '"/>';
      grid += '<text x="' + (L - 8) + '" y="' + (y(v) + 4) + '" text-anchor="end">' + (v === 0 ? "0 dB" : "−" + (-v)) + "</text>";
    });
    return '<figure class="trace"><div class="wrap">' +
      '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Simulated received signal power over time in a Rayleigh fading channel, with several deep fades below minus 10 decibels">' +
      grid +
      '<line class="trace-thresh" x1="' + L + '" x2="' + (W - R) + '" y1="' + yt + '" y2="' + yt + '"/>' +
      '<path class="trace-fade draw" d="' + fades + '"/>' +
      '<path class="trace-line draw" pathLength="1" style="--len:1" d="' + d + '"/>' +
      '<text class="thresh-label" x="' + (W - R) + '" y="' + (yt - 6) + '" text-anchor="end">fade threshold</text>' +
      '<text x="' + L + '" y="' + (H - 8) + '">received power, relative to the mean</text>' +
      '<text x="' + (W - R) + '" y="' + (H - 8) + '" text-anchor="end">time</text>' +
      "</svg>" +
      "<figcaption>A simulated Rayleigh fading channel: received power over time, with the deep fades shaded. " +
      "Modeling channels like this one is the subject of my M.Sc. thesis.</figcaption>" +
      "</div></figure>";
  }

  /* ---------- sections ---------- */
  function about() {
    var chips = list(S.interests).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
    var fit = list(S.fit).map(function (f) {
      return "<li><h3>" + esc(f.title) + "</h3><p>" + esc(f.text) + "</p></li>";
    }).join("");
    return (chips ? '<ul class="chips" aria-label="Research interests">' + chips + "</ul>" : "") +
      (fit ? '<ul class="fit">' + fit + "</ul>" : "");
  }

  function education() {
    return list(S.education).map(function (e) {
      return '<article class="entry"><div class="entry-head"><h3>' + esc(e.degree) + '</h3><span class="when">' + esc(e.dates) +
        '</span></div><p class="sub">' + esc(e.school) + "</p>" + points(e.details) + "</article>";
    }).join("");
  }

  function research() {
    return list(S.research).map(function (r) {
      return '<article class="entry">' +
        (r.status ? '<span class="status">' + esc(r.status) + "</span>" : "") +
        "<h3>" + esc(r.title) + "</h3>" +
        (r.authors ? '<p class="sub">' + esc(r.authors) + "</p>" : "") +
        (r.venue ? '<p class="sub">' + esc(r.venue) + "</p>" : "") +
        (r.text ? '<p class="text">' + esc(r.text) + "</p>" : "") +
        (r.link ? '<p class="more">' + link({ url: r.link, label: r.linkLabel || "Read more" }) + "</p>" : "") +
        "</article>";
    }).join("");
  }

  function experience() {
    return list(S.experience).map(function (e) {
      return '<article class="entry"><div class="entry-head"><h3>' + esc(e.role) + '</h3><span class="when">' + esc(e.dates) +
        '</span></div><p class="sub">' + esc(e.org) + "</p>" + points(e.points) + "</article>";
    }).join("");
  }

  function projects() {
    var all = list(S.projects);
    if (!all.length) return "";
    var areas = [];
    all.forEach(function (p) { if (p.area && areas.indexOf(p.area) < 0) areas.push(p.area); });
    var filters = "";
    if (areas.length > 1) {
      filters = '<div class="filters" role="group" aria-label="Show projects by area">' +
        '<button type="button" data-area="" aria-pressed="true">All</button>' +
        areas.map(function (a) { return '<button type="button" data-area="' + esc(a) + '" aria-pressed="false">' + esc(a) + "</button>"; }).join("") +
        "</div>";
    }
    var rows = all.map(function (p) {
      var meta = [p.area, p.context, p.date].filter(Boolean).map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("");
      var inner = points(p.points) +
        (p.tools ? '<p class="tools">Tools: ' + esc(p.tools) + "</p>" : "");
      var links = list(p.links).length ? '<div class="linkrow">' + list(p.links).map(link).join("") + "</div>" : "";
      return '<article class="project' + (p.image ? " has-thumb" : "") + '" data-area="' + esc(p.area) + '"><div class="project-main">' +
        "<h3>" + esc(p.title) + "</h3>" +
        (meta ? '<p class="meta">' + meta + "</p>" : "") +
        (p.summary ? '<p class="summary">' + esc(p.summary) + "</p>" : "") +
        (inner ? "<details><summary>More detail</summary>" + inner + "</details>" : "") +
        links + "</div>" +
        (p.image ? '<button type="button" class="thumb" data-full="' + esc(p.image) + '" data-caption="' + esc(p.imageAlt || p.title) +
          '" aria-label="Enlarge image: ' + esc(p.imageAlt || p.title) + '"><img src="' + esc(p.image) + '" alt="' + esc(p.imageAlt || "") + '"></button>' : "") +
        "</article>";
    }).join("");
    return filters + rows + '<p class="count" id="count" aria-live="polite"></p>';
  }

  function awards() {
    return list(S.awards).map(function (a) {
      return '<article class="entry"><div class="entry-head"><h3>' + esc(a.title) + '</h3><span class="when">' + esc(a.year) +
        '</span></div><p class="sub">' + esc(a.where) + "</p></article>";
    }).join("");
  }

  function skills() {
    var rows = list(S.skills).map(function (s) { return "<dt>" + esc(s.group) + "</dt><dd>" + esc(s.items) + "</dd>"; }).join("");
    var e = S.english, scores = "";
    if (e && e.overall) {
      scores = '<div class="scores"><strong>' + esc(e.test) + " " + esc(e.overall) + " overall</strong>" +
        list(e.parts).map(function (p) { return "<span>" + esc(p.label) + " " + esc(p.value) + "</span>"; }).join("") + "</div>";
    }
    return (rows ? '<dl class="skills">' + rows + "</dl>" : "") + scores;
  }

  function service() {
    return list(S.service).map(function (s) {
      return '<article class="entry"><div class="entry-head"><h3>' + esc(s.role) + "</h3>" +
        (s.dates ? '<span class="when">' + esc(s.dates) + "</span>" : "") + "</div>" + points(s.points) + "</article>";
    }).join("");
  }

  function contact() {
    var links = list(S.links).map(link).join("");
    if (S.cv) links += '<a href="' + esc(S.cv) + '" target="_blank" rel="noopener">CV (PDF)</a>';
    return '<div class="contact">' +
      (S.contactNote ? "<p>" + esc(S.contactNote) + "</p>" : "") +
      (S.email ? '<a class="email" href="mailto:' + esc(S.email) + '">' + esc(S.email) + "</a>" : "") +
      (S.location ? '<p class="sub">' + esc(S.location) + "</p>" : "") +
      (links ? '<div class="linkrow">' + links + "</div>" : "") + "</div>";
  }

  /* ---------- assemble ---------- */
  var parts = [
    ["about", "Research interests", about(), false],
    ["education", "Education", education(), false],
    ["research", "Research and publications", research(), false],
    ["experience", "Experience", experience(), false],
    ["projects", "Projects", projects(), true],
    ["awards", "Honours and awards", awards(), false],
    ["skills", "Skills", skills(), false],
    ["service", "Leadership and memberships", service(), false],
    ["contact", "Contact", contact(), false]
  ].filter(function (p) { return p[2]; });

  var short = { about: "Interests", education: "Education", research: "Research", experience: "Experience",
    projects: "Projects", awards: "Awards", skills: "Skills", service: "Leadership", contact: "Contact" };

  var nav = '<nav class="nav" aria-label="Sections"><div class="wrap"><a class="nav-name" href="#top">' + esc(S.name) +
    '</a><div class="nav-links">' +
    parts.map(function (p) { return '<a href="#' + p[0] + '">' + short[p[0]] + "</a>"; }).join("") + "</div></div></nav>";

  app.innerHTML = nav + hero() + '<main id="main">' +
    parts.map(function (p) { return section(p[0], p[1], p[2], p[3]); }).join("") + "</main>" +
    '<footer class="footer"><div class="wrap">' + esc(S.name) +
    (S.updated ? ". Last updated " + esc(S.updated) + "." : "") + "</div></footer>" +
    '<dialog id="viewer" aria-label="Enlarged image"><img alt=""><p></p><button type="button">Close</button></dialog>';
  if (S.name) document.title = S.name;

  /* ---------- behaviour ---------- */
  var buttons = [].slice.call(document.querySelectorAll(".filters button"));
  var rows = [].slice.call(document.querySelectorAll(".project"));
  var count = document.getElementById("count");
  function applyFilter(area) {
    var shown = 0;
    rows.forEach(function (r) {
      var on = !area || r.getAttribute("data-area") === area;
      r.hidden = !on; if (on) shown++;
    });
    buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-area") === area)); });
    if (count) count.textContent = area ? "Showing " + shown + " of " + rows.length + " projects." : "";
  }
  buttons.forEach(function (b) { b.addEventListener("click", function () { applyFilter(b.getAttribute("data-area")); }); });

  var viewer = document.getElementById("viewer");
  if (viewer && viewer.showModal) {
    [].slice.call(document.querySelectorAll(".thumb")).forEach(function (t) {
      t.addEventListener("click", function () {
        viewer.querySelector("img").src = t.getAttribute("data-full");
        viewer.querySelector("img").alt = t.getAttribute("data-caption");
        viewer.querySelector("p").textContent = t.getAttribute("data-caption");
        viewer.showModal();
      });
    });
    viewer.addEventListener("click", function (e) { if (e.target === viewer || e.target.tagName === "BUTTON") viewer.close(); });
  }

  if ("IntersectionObserver" in window) {
    var navLinks = [].slice.call(document.querySelectorAll(".nav-links a"));
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          navLinks.forEach(function (a) {
            if (a.getAttribute("href") === "#" + en.target.id) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    [].slice.call(document.querySelectorAll("main .section")).forEach(function (s) { io.observe(s); });
  }
})();
