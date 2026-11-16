// Clubhaus: fills the page from data.json (progress, parts, contact links, Tally form).
(function () {
  var fmt = function (n) { return Number(n).toLocaleString("en-US"); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var $ = function (sel) { return document.querySelector(sel); };
  var $$ = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };

  function renderProgress(list) {
    var el = $("#progress");
    if (!el || !list) return;
    el.innerHTML = list.map(function (p) {
      var pct = p.goal ? Math.min(100, (p.current / p.goal) * 100) : 0;
      var unit = p.unit ? p.unit + " " : "";
      return '<div class="bar"><div class="top"><span>' + esc(p.label) + "</span><span>" +
        unit + fmt(p.current) + " / " + fmt(p.goal) + "</span></div>" +
        '<div class="track" role="progressbar" aria-label="' + esc(p.label) + '" aria-valuemin="0" aria-valuemax="' +
        p.goal + '" aria-valuenow="' + p.current + '"><div class="fill" style="width:' + pct + '%"></div></div></div>';
    }).join("");
  }

  function renderParts(list) {
    var el = $("#parts");
    if (!el || !list) return;
    var label = { open: "Open", part: "In progress", claimed: "Claimed" };
    var groups = [], byGroup = {};
    list.forEach(function (p) {
      var g = p.group || "Other";
      if (!byGroup[g]) { byGroup[g] = []; groups.push(g); }
      byGroup[g].push(p);
    });
    el.innerHTML = groups.map(function (g) {
      var items = byGroup[g];
      var hasFeatured = items.some(function (p) { return p.featured; });
      return '<div class="pgroup' + (hasFeatured ? "" : " extra") + '"><h3 class="mono">' + esc(g) +
        '</h3><ul class="parts">' + items.map(function (p) {
          var st = label[p.status] ? p.status : "open";
          var by = p.by ? '<span class="meta">Thanks to ' + esc(p.by) + "</span>" : "";
          return '<li' + (p.featured ? "" : ' class="extra"') + '><span class="name">' + esc(p.name) +
            (st === "open" ? "" : '<span class="status ' + st + '">' + label[st] + '</span>') + '</span><span class="cost">' + esc(p.cost) +
            '</span>' + by + "</li>";
        }).join("") + "</ul></div>";
    }).join("");

    var more = $("#parts-more");
    var hidden = list.filter(function (p) { return !p.featured; }).length;
    if (!more || !hidden) { el.classList.add("all"); return; }
    more.textContent = "See all " + list.length + " parts";
    more.hidden = false;
    more.onclick = function () {
      var open = el.classList.toggle("all");
      more.setAttribute("aria-expanded", open ? "true" : "false");
      more.textContent = open ? "Show fewer" : "See all " + list.length + " parts";
    };
  }

  function applySettings(s) {
    s = s || {};
    $$("[data-whatsapp]").forEach(function (a) {
      if (s.whatsappUrl) { a.href = s.whatsappUrl; a.hidden = false; } else { a.hidden = true; }
    });
    $$("[data-email]").forEach(function (a) {
      if (s.email) { a.href = "mailto:" + s.email; if (a.hasAttribute("data-show")) a.textContent = s.email; a.hidden = false; }
      else { a.hidden = true; }
    });
    var box = $("#tally");
    if (box && s.tallyFormId) {
      var id = encodeURIComponent(s.tallyFormId);
      box.innerHTML = '<iframe title="Join Clubhaus" loading="lazy" src="https://tally.so/embed/' + id +
        '?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"></iframe>';
      var t = document.createElement("script");
      t.src = "https://tally.so/widgets/embed.js";
      t.async = true;
      t.onload = function () { if (window.Tally) window.Tally.loadEmbeds(); };
      document.body.appendChild(t);
    }
  }

  fetch("data.json", { cache: "no-store" })
    .then(function (r) { return r.json(); })
    .then(function (d) {
      renderProgress(d.progress);
      renderParts(d.parts);
      applySettings(d.settings);
    })
    .catch(function () { applySettings({}); });

  var y = $("#year");
  if (y) y.textContent = new Date().getFullYear();
})();
