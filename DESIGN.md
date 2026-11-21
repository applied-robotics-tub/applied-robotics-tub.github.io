# Design-Richtung

Stand: umgesetzt am 08.11.2026.

## Idee

Die Seite ist eine Werkstattseite, keine Landingpage. Vorbilder sind das
Datenblatt eines Bauteils und die Beschriftung an einer Industriemaschine:
eine schmale Spalte mit Bezeichnungen links, Inhalte rechts davon,
Haarlinien statt Kästen, eine einzige Signalfarbe. Robotergelb kennt man von
Industrierobotern, Warnmarkierungen und Not-Halt-Gehäusen. Es ist die einzige
Farbe auf der Seite, alles andere ist Graphit.

Dunkel ist das Standard-Design. Hell bleibt als umschaltbare Variante.

## Farben

| Rolle               | Dunkel (Standard) | Hell      | Verwendung |
|---------------------|-------------------|-----------|------------|
| Hintergrund         | `#141412`         | `#f4f4f1` | Seitenfläche. Leicht warm getönt, nie reines Schwarz/Weiß |
| Fläche              | `#1d1c19`         | `#e9e8e2` | abgesetzte Zeilen, Fußbereich, Bildflächen |
| Linie               | `#33322c`         | `#cfcdc3` | Haarlinien zwischen Zeilen und Abschnitten |
| Text                | `#ebeae3`         | `#171611` | Fließtext und Überschriften |
| Text leise          | `#a29f93`         | `#5a584e` | Bezeichnungen, Metadaten |
| Signal (Akzent)     | `#f2c300`         | `#f2c300` | nur Primär-Knopf, Fokusrahmen, Linkunterstreichung, aktiver Menüpunkt |
| Platzhalter         | `#ff7a93`         | `#b0123a` | gestrichelte Markierung fehlender Inhalte (verschwindet mit den Inhalten) |

Gelb wird nie als Textfarbe auf hellem Grund verwendet. Links sind
textfarben mit gelber Unterstreichung, so funktionieren sie in beiden Modi.
Text auf Gelb ist immer `#171611`.

## Schrift

Eine Familie mit zwei Rollen: **Archivo**, eine Grotesk mit Breitenachse,
ursprünglich für technische Drucksachen und Tabellen gedacht. Sie wird
selbst gehostet, nicht über Google Fonts geladen. Damit bleibt die
Datenschutzerklärung unverändert.

- **Anzeige:** Archivo schmal (`font-stretch` ca. 70 %), Gewicht 700, für H1
  und H2. Wirkt wie Maschinenbeschriftung, ohne Großbuchstaben-Sperrung.
- **Text:** Archivo normal breit, 400 / 600. Zahlen in Terminen
  tabellarisch (`font-variant-numeric: tabular-nums`).

Kein Monospace mehr als Deko.

| Stufe   | Größe (mobil → Desktop) | Verwendung |
|---------|-------------------------|------------|
| Anzeige | 44 → 88 px, Zeilenhöhe 0,95 | H1 Startseite |
| H1      | 36 → 56 px              | H1 Unterseiten |
| H2      | 26 → 34 px              | Abschnittstitel |
| H3      | 18 px, 600              | Zeilentitel |
| Text    | 17 px, Zeilenhöhe 1,55  | Fließtext |
| Klein   | 14 px                   | Bezeichnungen, Metadaten, Fuß |

## Layout

- **Linksbündig, asymmetrisch.** Ab Tablet-Breite ein 12er-Raster:
  Abschnittstitel in Spalte 1–3, Inhalt in 4–12 (Datenblatt-Prinzip).
  Mobil steht der Titel über dem Inhalt.
- **Startseite:** große schmale Überschrift über die volle Breite,
  Einleitung darunter in der Inhaltsspalte. Ein Primär-Knopf, daneben ein
  einfacher Textlink.
- **Tabellen und Zeilen statt Karten**, wo Inhalte tabellarisch sind:
  Termine (Datum | Zeit | Ort | Was), Vorstand (Funktion | Name | Aufgaben),
  Lernbereiche (Begriff | Erklärung), Abgrenzungen als einfache Liste.
- **Karten nur für Projekte**, weil ein Projekt ein abgegrenztes Objekt mit
  Bild ist. Ohne Rahmen und ohne Schatten: Bild, darunter Text, Trennlinie.
- **Schritte** auf „Mitmachen“ sind eine echte Reihenfolge und bleiben
  nummeriert, aber als normale Ziffern („1“), nicht „01“.

## Radius, Schatten, Linien

- Radius: 0 für Struktur, Bilder und Tabellen. 2 px nur für Knöpfe.
- Schatten: keine.
- Linien: 1 px Haarlinie zwischen Zeilen, 2 px Textfarbe über einem
  Abschnittstitel. Keine farbigen Seitenränder.

## Abstände

Grundeinheit 8 px, gestaffelt statt überall gleich:
Zeilen innerhalb einer Liste 12–16 px, zwischen Blöcken eines Abschnitts
32 px, zwischen Abschnitten 80–112 px (Desktop) bzw. 56 px (mobil).
Dichte Inhalte wie Termine und Vorstand stehen enger.

## Bewegung

Nur als Reaktion auf eine Nutzeraktion, nur `transform` und `opacity`,
120–160 ms `ease-out`. Beispiele: Knopf beim Drücken 1 px nach unten,
Unterstreichung beim Hover. Keine Einblend-Animationen beim Scrollen.
Bei `prefers-reduced-motion` gar keine.

## Abgleich mit typischen KI-Mustern

- Keine Systemschrift-only, kein Inter, keine Serifen-Headline.
- Kein Creme/Terrakotta, kein Lila/Indigo, kein Neon-Cyan mit Glow, kein
  reines Schwarz/Weiß.
- Nichts zentriert, kein Badge über der Headline, kein Knopf-Paar,
  keine 3-Feature-Karten.
- Keine Karten außer bei Projekten, keine einheitlichen Radien/Schatten,
  keine farbigen Kartenränder.
- Keine Icons über Überschriften, keine Zahlenreihen, keine Scroll-Animationen.

## Selbstkontrolle nach der Umsetzung

Die drei generischsten Stellen nach dem ersten Durchgang und was geändert wurde:

1. **Abschluss-Block „Vorbeikommen“ mit zweitem gelbem Knopf** am Ende der
   Startseite – das klassische Landingpage-Schlussbanner. Entfernt; der
   Mail-Link steht jetzt als Textlink direkt unter dem nächsten Termin, wo die
   Frage „wie komme ich hin?“ tatsächlich entsteht.
2. **Fünf gleich gebaute Abschnitte hintereinander** (Titel links, Inhalt
   rechts, gleicher Abstand). „Was wir nicht sind“ ist jetzt Teil von „Für
   wen“ als schmale Nebenspalte, dadurch ist die Seite dichter und weniger
   gleichförmig.
3. **Einleitungssatz unter „Was du lernst“**, der nur die Überschrift
   wiederholte („Praktische Grundlagen in vier Bereichen …“). Gestrichen.
