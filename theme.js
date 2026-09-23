// Light/dark toggle. Applies the stored choice before paint, then wires the nav button.
(function () {
  var KEY = "theme";
  var root = document.documentElement;

  function apply(theme) {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
  }

  var saved = "";
  try { saved = localStorage.getItem(KEY) || ""; } catch (e) {}
  apply(saved);

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;

    function sync() {
      var dark = root.getAttribute("data-theme") === "dark";
      btn.textContent = dark ? "Light" : "Dark";
      btn.setAttribute("aria-pressed", String(dark));
      btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    }

    sync();

    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "" : "dark";
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      sync();
    });
  });
})();
