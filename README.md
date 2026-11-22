# Website Applied Robotics TU Berlin

Statische Website der studentischen Vereinigung Applied Robotics TU Berlin
(in Gründung). Gebaut mit Jekyll, das GitHub Pages ohne eigenes Build-Setup
direkt ausführt.

**Inhalte bearbeiten:** siehe [ANLEITUNG.md](ANLEITUNG.md), gedacht für
Leute ohne Programmierkenntnisse.

## Aufbau

```
_config.yml           Name, E-Mail, URL
_data/
  termine.yml         regelmäßiges Treffen + Einzeltermine
  vorstand.yml        Vorstand (Veröffentlichung pro Person schaltbar)
  navigation.yml      Menüs je Sprache
  texte.yml           Status, Mail-Vorlage, UI-Beschriftungen je Sprache
_projekte/            eine Markdown-Datei pro Projektkarte
index.md, ueber-uns.md, projekte.md, mitmachen.md
en/                   englische Seiten (index, about, projects, join)
impressum.md, datenschutz.md, 404.md
_layouts/             Seitenvorlagen (HTML + Liquid)
_includes/            Bausteine: Kopf, Fuß, Projektkarte, Termin, Mailbox
assets/css/style.css  gesamtes Styling; Farben als Variablen oben
assets/js/seite.js    Farbschema, vergangene Termine ausblenden, Mail kopieren
```

Seiteninhalte stehen im Front Matter bzw. Markdown-Teil der Seiten, die
Layouts enthalten keine Texte. Fehlende Inhalte beginnen mit `PLATZHALTER`
und werden automatisch rosa markiert (`_includes/text.html` für
Datenfelder, `{: .platzhalter}` für Absätze in Markdown).

## Veröffentlichen

**GitHub Pages (empfohlen):** Repository anlegen, Dateien hochladen,
unter *Settings → Pages* „Deploy from a branch“, Branch `main`, Ordner `/`
wählen. Liegt die Seite nicht unter `<name>.github.io`, sondern unter
`<name>.github.io/<repo>/`, in `_config.yml` `baseurl: "/<repo>"` setzen.
Danach `url` eintragen.

**Netlify:** Repository verbinden, `netlify.toml` übernimmt die Einstellungen.

## Lokale Vorschau (optional)

Benötigt Ruby ≥ 3.0 (z. B. `brew install ruby`).

```sh
bundle install
bundle exec jekyll serve
# → http://localhost:4000
```

## Zweisprachigkeit (DE/EN)

- Deutsche Seiten im Hauptordner, englische in `en/` mit `lang: en`.
  Seiten mit gleicher `ref:` sind Übersetzungen voneinander; daraus entstehen
  der Sprachumschalter (`_includes/kopf.html`) und die
  `<link rel="alternate" hreflang>`-Tags (`_layouts/default.html`).
- UI-Texte, Status, Haftungshinweis und Mail-Vorlage je Sprache in
  `_data/texte.yml`, Menüs in `_data/navigation.yml`.
- Termine, Vorstand und Projekte sind eine Datei für beide Sprachen;
  `_includes/feld.html` nimmt auf englischen Seiten `feld_en` und fällt
  sonst auf das deutsche Feld zurück.
- Impressum und Datenschutzerklärung nur auf Deutsch, im englischen Fuß
  als „(German)“ verlinkt.
- Weitere Sprache: Block in `texte.yml`/`navigation.yml`, Ordner mit
  Seiten gleicher `ref`, Felder `_<sprache>` in den Daten.

## Gestaltungsgrundsätze

- Keine Logos, Wappen, Farben oder Schriften der TU Berlin. Der Hinweis im
  Fuß („keine Einrichtung der TU Berlin“) bleibt stehen.
- Schrift (Archivo) liegt selbst unter assets/fonts/, keine extern geladenen Ressourcen. Details in DESIGN.md. Das hält auch die
  Datenschutzerklärung schlank. Wer externe Schriften, Videos oder Analyse
  einbaut, muss `datenschutz.md` anpassen.
- Kontraste mindestens WCAG AA, alle Funktionen per Tastatur erreichbar,
  Seite funktioniert ohne JavaScript.
