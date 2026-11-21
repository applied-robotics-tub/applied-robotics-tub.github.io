/* Applied Robotics TU Berlin – kleine Helfer. Die Seite funktioniert auch ohne JavaScript. */
(function () {
  "use strict";
  var root = document.documentElement;

  /* ---------- Farbschema: Standard dunkel, umschaltbar auf hell ---------- */
  function farbschema() {
    var knopf = document.querySelector("[data-schema-knopf]");
    if (!knopf) return;
    function beschriften() {
      var hell = root.dataset.theme === "light";
      knopf.textContent = hell ? knopf.dataset.labelDunkel : knopf.dataset.labelHell;
      knopf.title = hell ? knopf.dataset.titelDunkel : knopf.dataset.titelHell;
    }
    knopf.hidden = false;
    beschriften();
    knopf.addEventListener("click", function () {
      var hell = root.dataset.theme !== "light";
      if (hell) root.dataset.theme = "light"; else delete root.dataset.theme;
      try { localStorage.setItem("farbschema", hell ? "hell" : "dunkel"); } catch (e) {}
      beschriften();
    });
  }

  /* ---------- Vergangene Termine ausblenden ---------- */
  function termine() {
    var heute = new Date();
    var heuteText = heute.getFullYear() + "-" + String(heute.getMonth() + 1).padStart(2, "0") + "-" + String(heute.getDate()).padStart(2, "0");

    document.querySelectorAll("[data-termine]").forEach(function (liste) {
      var nurNaechster = liste.hasAttribute("data-nur-naechster");
      var gezeigt = 0;
      liste.querySelectorAll("[data-termin]").forEach(function (termin) {
        var vorbei = termin.dataset.termin < heuteText;
        var verstecken = vorbei || (nurNaechster && gezeigt >= 1);
        termin.hidden = verstecken;
        if (!verstecken) gezeigt++;
      });
      if (gezeigt === 0) {
        liste.hidden = true;
        var leer = liste.parentNode.querySelector("[data-termine-leer]");
        if (leer) leer.hidden = false;
      }
    });
  }

  /* ---------- E-Mail-Adresse kopieren ---------- */
  function kopieren() {
    if (!navigator.clipboard) return;
    document.querySelectorAll("[data-kopieren]").forEach(function (knopf) {
      var original = knopf.textContent;
      var status = knopf.parentNode.querySelector("[data-kopieren-status]");
      knopf.hidden = false;
      knopf.addEventListener("click", function () {
        navigator.clipboard.writeText(knopf.dataset.kopieren).then(function () {
          knopf.textContent = knopf.dataset.labelKopiert;
          if (status) status.textContent = knopf.dataset.labelKopiert;
          setTimeout(function () { knopf.textContent = original; if (status) status.textContent = ""; }, 2000);
        });
      });
    });
  }

  farbschema();
  termine();
  kopieren();
})();
