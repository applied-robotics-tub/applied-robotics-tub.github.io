# Website bearbeiten – ohne Programmierkenntnisse

Diese Anleitung erklärt, wie du Texte, Termine, Projekte und den Vorstand
änderst. Du brauchst dafür nur einen Browser und Zugang zum GitHub-Repository.

## So funktioniert eine Änderung

1. Auf GitHub die passende Datei öffnen (Tabelle unten).
2. Oben rechts auf den Stift klicken („Edit this file“).
3. Text ändern.
4. Unten auf „Commit changes“ klicken und kurz beschreiben, was du geändert
   hast, z. B. „Termin 24.11. ergänzt“.
5. Nach 1–2 Minuten ist die Änderung online.

Wenn etwas schiefgeht, zeigt GitHub unter „Actions“ ein rotes Kreuz. Die alte
Version der Seite bleibt dann online. Über den Verlauf („History“) lässt sich
jede Änderung zurücknehmen.

## Wo steht was?

| Ich will …                              | Datei                         |
|-----------------------------------------|-------------------------------|
| einen Termin eintragen                  | `_data/termine.yml`           |
| das regelmäßige Treffen ändern          | `_data/termine.yml` (oben)    |
| ein Projekt hinzufügen                  | neue Datei in `_projekte/`    |
| ein Projektbild hochladen               | Ordner `assets/bilder/projekte/` |
| den Vorstand ändern                     | `_data/vorstand.yml`          |
| Texte der Startseite ändern             | `index.md`                    |
| Texte „Über uns“ ändern                 | `ueber-uns.md`                |
| Texte „Mitmachen“ und Fragen ändern     | `mitmachen.md`                |
| E-Mail-Adresse ändern                   | `_config.yml`                 |
| Status „in Gründung“, Mail-Vorlage      | `_data/texte.yml`             |
| englische Seiten ändern                 | Ordner `en/`                  |
| Menüpunkte ändern                       | `_data/navigation.yml`        |
| Impressum / Datenschutz                 | `impressum.md`, `datenschutz.md` |

## Drei Regeln, damit nichts kaputtgeht

1. **Einrückung beibehalten.** Die Leerzeichen am Zeilenanfang haben eine
   Bedeutung. Kopiere am besten einen bestehenden Eintrag und ändere nur den
   Text.
2. **Text in Anführungszeichen lassen.** `titel: "Mein Text"` – die
   Anführungszeichen am Anfang und Ende bleiben stehen. Brauchst du im Text
   selbst Anführungszeichen, nimm die deutschen „so“.
3. **Die Striche `---` am Dateianfang nicht löschen.** Alles zwischen den
   beiden `---`-Zeilen sind Einstellungen der Seite.

## Termin eintragen

In `_data/termine.yml` unter `liste:` einen Block wie diesen ergänzen:

```yaml
  - datum: 2026-11-24
    uhrzeit: "18:00–20:00 Uhr"
    titel: "Offenes Treffen"
    ort: "Raum und Gebäude"
    beschreibung: "Wir zeigen, woran wir arbeiten. Neue sind willkommen."
```

Das Datum immer als Jahr-Monat-Tag schreiben. Vergangene Termine verschwinden
automatisch von der Seite. Den Platzhalter-Termin mit dem Datum 2099-01-01
löschen, sobald es einen echten gibt.

## Projekt hinzufügen

1. Ein Foto in `assets/bilder/projekte/` hochladen („Add file“ → „Upload
   files“). Querformat, möglichst um 1200 × 800 Pixel, unter 400 KB.
   Dateiname ohne Leerzeichen und Umlaute, z. B. `greifarm.jpg`.
2. In `_projekte/` eine bestehende Datei öffnen, den Inhalt kopieren, über
   „Add file“ → „Create new file“ eine neue Datei anlegen (z. B.
   `greifarm.md`) und den Inhalt einfügen.
3. Felder ausfüllen. Bei `bild:` nur den Dateinamen eintragen
   (`"greifarm.jpg"`).
4. Bei `bild_alt:` beschreiben, was auf dem Foto zu sehen ist, so als würdest
   du es jemandem am Telefon erklären. Das lesen Screenreader vor.
5. Die Zeile `platzhalter: true` löschen.

Die Platzhalter-Projekte `platzhalter-projekt-1.md` bis `-3.md` löschen,
sobald echte Projekte da sind.

## Vorstand veröffentlichen

In `_data/vorstand.yml` steht bei jeder Person `veroeffentlichen: false`.
Solange das so ist, erscheint auf der Seite statt des Namens ein Platzhalter.
Auf `true` setzen erst, wenn die Gründungsversammlung den Vorstand gewählt hat
und die Person einverstanden ist, dass ihr Name online steht.

## Platzhalter

Alles, was noch fehlt, ist auf der Seite **gelb hinterlegt** und beginnt mit
`PLATZHALTER`. In Fließtexten steht darunter die Zeile `{: .platzhalter}` –
die beim Ausfüllen mit löschen.

Vor dem Verlinken der Seite auf GitHub oben in der Suche nach `PLATZHALTER`
suchen. Es sollte nichts mehr gefunden werden.

## Englische Version

Jede Seite gibt es zweimal: deutsch im Hauptordner, englisch im Ordner `en/`
(`index.md`, `about.md`, `projects.md`, `join.md`). Oben rechts auf der
Seite kann man zwischen DE und EN wechseln.

- **Seitentexte:** Wer die deutsche Seite ändert, ändert die englische
  Datei mit.
- **Termine, Projekte, Vorstand:** Hier steht beides in derselben Datei.
  Felder mit `_en` am Ende (z. B. `titel_en`) sind der englische Text. Bleibt
  ein `_en`-Feld leer, zeigt die englische Seite den deutschen Text.
- **Impressum und Datenschutz** gibt es nur auf Deutsch; die englische Seite
  verlinkt darauf.

## Wenn die Registrierung durch ist

In `_data/texte.yml` `status` und `status_text` ändern (Deutsch und
Englisch), in `ueber-uns.md` und `en/about.md` den Abschnitt „Organisation“
anpassen und in `index.md` und `en/index.md` den Steckbrief. Am
einfachsten: auf GitHub nach „Gründung“ und „formation“ suchen.
