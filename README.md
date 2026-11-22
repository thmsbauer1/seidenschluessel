# Der Krefelder Seidenschlüssel

Adventskalender-Krimi für Philip (Advent 2026): 24 Türen, ein Fall in Krefeld, der Woche für Woche weiter in die Stadtgeschichte zurückführt (heute, Seidenstadt, Mittelalter, Römer).

- Jede Tür: Bild, Kapitel, Rätsel (Rechnen, Wissen, Logik, Geheimcode), Tipp von der Krähe Konrad, Beweisstück fürs Notizbuch. Einige Türen haben eine Befragung von Mama oder Papa.
- Türen öffnen sich ab dem jeweiligen Dezembertag. Die Ziffern aus Tür 6, 12, 18 und 23 ergeben den Code der Truhe in Tür 24.
- Bilder liegen in `bilder/tuerNN.jpg`. Fehlt ein Bild, zeigt die Seite einen Platzhalter.
- „Für Mama und Papa“ (unten im Kalender, PIN in `index.html`): Vorschau aller Türen auf diesem Gerät, Fortschritt löschen, Anmeldung am Familienspeicher und Stand eines Kindes ansehen.
- Fortschritt liegt zuerst auf dem Gerät und wird über `familie-sync.js` mit dem Familienspeicher (Supabase, Tabelle `app_progress`, App `seidenschluessel`) abgeglichen. Gelöste Türen landen mit Fehlversuchen und Tipp-Nutzung in `activity_log`.
- Familienkarten: Unter jedem Kapitel steht eine gemeinsame Sache für die Familie (Tür 5, 12, 19 und 25 sind Ausflüge). „Haben wir gemacht“ gilt für alle Familienmitglieder und liegt in der Tabelle `family_checks` (eine Zeile je Karte, `app = seidenschluessel`, `item = tuer-N`).
