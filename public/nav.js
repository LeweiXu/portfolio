// Instant page switching. The three pages are still real URLs serving full HTML; this
// just swaps <main> in place so a click does not repaint the whole document. Without JS
// the links work as ordinary links, which is also what crawlers follow.
(function () {
  var PAGES = ["index.html", "experience.html", "projects.html"];
  var HEAD_TAGS = [
    "meta[name='description']",
    "link[rel='canonical']",
    "meta[property='og:url']",
    "meta[property='og:title']",
    "meta[property='og:description']"
  ];

  if (!window.fetch || !window.history || !history.pushState || !document.querySelector) return;

  var cache = {};
  var parser = new DOMParser();

  function pageOf(url) {
    var path = new URL(url, location.href).pathname;
    var file = path.substring(path.lastIndexOf("/") + 1);
    return file === "" ? "index.html" : file;
  }

  function load(page) {
    if (cache[page]) return Promise.resolve(cache[page]);
    return fetch(page, { credentials: "same-origin" })
      .then(function (res) {
        if (!res.ok) throw new Error(res.status);
        return res.text();
      })
      .then(function (html) {
        cache[page] = parser.parseFromString(html, "text/html");
        return cache[page];
      });
  }

  function swap(doc, page) {
    var current = document.querySelector("main");
    var next = doc.querySelector("main");
    if (!current || !next) return false;

    current.replaceWith(document.importNode(next, true));
    document.title = doc.title;

    HEAD_TAGS.forEach(function (selector) {
      var mine = document.head.querySelector(selector);
      var theirs = doc.head.querySelector(selector);
      if (!mine || !theirs) return;
      var attr = mine.tagName === "LINK" ? "href" : "content";
      mine.setAttribute(attr, theirs.getAttribute(attr));
    });

    Array.prototype.forEach.call(document.querySelectorAll(".nav-links a"), function (link) {
      if (pageOf(link.getAttribute("href")) === page) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    return true;
  }

  function go(page, push) {
    load(page).then(function (doc) {
      if (!swap(doc, page)) throw new Error("no main");
      if (push) history.pushState({ page: page }, "", page === "index.html" ? "./" : page);
      window.scrollTo(0, 0);
      var main = document.querySelector("main");
      main.setAttribute("tabindex", "-1");
      main.focus();
    }).catch(function () {
      location.href = page;
    });
  }

  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    var link = e.target.closest && e.target.closest("a");
    if (!link || link.target || link.hasAttribute("download")) return;

    var url = new URL(link.href, location.href);
    if (url.origin !== location.origin) return;

    var page = pageOf(url.href);
    if (PAGES.indexOf(page) === -1) return;

    e.preventDefault();
    if (page === pageOf(location.href)) {
      window.scrollTo(0, 0);
      return;
    }
    go(page, true);
  });

  window.addEventListener("popstate", function () {
    go(pageOf(location.href), false);
  });

  // Pull the other pages down up front so the first click is already instant.
  window.addEventListener("load", function () {
    PAGES.forEach(function (page) {
      if (page !== pageOf(location.href)) load(page).catch(function () {});
    });
  });
})();
