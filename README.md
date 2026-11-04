# Tisch & Tag

Deutschsprachige Essensplanung mit Rezepten, Budget, Einkaufsliste, Vorräten und einer Schnellfunktion für ein einzelnes Essen. Browserdaten werden pro Gerät gespeichert. Die Anwendung ist als Progressive Web App vorbereitet.

## Auf dem Handy

Nach erfolgreicher GitHub-Pages-Bereitstellung: https://milo2802.github.io/tisch-und-tag/

Im Handy-Browser öffnen. iPhone: in Safari über Teilen → Zum Home-Bildschirm hinzufügen. Android: in Chrome über das Menü installieren bzw. zum Startbildschirm hinzufügen. Installation und Offlineverhalten hängen vom Browser ab und wurden noch nicht auf einem physischen Handy abgenommen. Der Rechner muss für die veröffentlichte Version nicht laufen. Einstellungen → Daten exportieren / wiederherstellen ermöglicht den Umzug; keine automatische Gerätesynchronisation.

## Lokal starten

Node.js 22 oder neuer. `node server.mjs` starten und http://127.0.0.1:8080 öffnen. Alternativ am Mac `Starten.command` öffnen; dieses startet zusätzlich den Zugang im lokalen WLAN. Keine npm-Pakete erforderlich.

`npm test` prüft Kernberechnungen. `node --check dist/app.js` prüft die Oberflächensyntax. GitHub Actions prüft vor dem Pages-Deployment und veröffentlicht nur `dist/`. In Repository Settings → Pages „GitHub Actions“ als Quelle wählen. Der Workflow läuft bei Push nach `main` oder manuell.

## Funktionsumfang

- Wochenplan mit ausgewählten Tagen und Mahlzeiten, manueller Wahl oder automatischen Vorschlägen, Fixierung, Austausch und Portionsänderung.
- Schnelles Essen: separates Budget für eine Mahlzeit, Portionen, Zeitlimit, optional proteinreich, Vorratsberücksichtigung und eigene Einkaufsliste. Wochenplan bleibt erhalten.
- Einkaufskosten für ganze Packungen und anteiliger Zutatenwert getrennt. Preise manuell korrigierbar mit Datum.
- Vorräte werden bei Einkäufen berücksichtigt und erst mit „Gekocht“ verbraucht. Manuell verknüpfte Restemahlzeiten zählen Zutaten einmal.
- Eigene Rezepte, Favoriten, Tags, Notizen, Bewertung, Kochmodus und skalierte Zutaten.
- Textimport mit bearbeitbarem Entwurf. Unbekannte Mengen werden nicht erfunden.
- Einkaufsliste nach Bereichen mit Herkunftsgerichten, manuellen Ergänzungen, Abhaken, Druck und Textexport.
- Lokale Speicherung, JSON-Export, Wiederherstellung und Löschung.

## Architektur und Daten

`dist/core.js`: unabhängige Berechnungen, Zutatenkatalog, Planer, Schnellvorschläge und Textparser. `dist/app.js`: deutsche Oberfläche. `dist/manifest.json`, `sw.js` und PNG-Appicons: Installation/Offline-Grundgerüst. `server.mjs`: optionale Node-Schnittstelle zum echten Abruf freigegebener Rezeptseiten. Persönliche Daten liegen in localStorage, nicht im Repository. Keine Konten, Cloud-Datenbank oder geräteübergreifende Synchronisation.

## Preis-, Bild- und Rezeptquellen

Acht eigene Beispielrezepturen. Alle mitgelieferten Preise sind frei gewählte Beispielwerte vom 04.11.2026, keine beobachteten aktuellen Supermarktpreise oder Live-Angebote. Nährwerte sind Schätzungen pro Portion. Unsplash-Bilder sind illustrative Serviervorschläge, keine exakten Rezeptfotos. Bild-URLs stehen in app.js; vor kommerzieller Weiterverwendung die konkrete Bildauswahl und Lizenzbedingungen prüfen. Bei Teilplanung werden Werte nicht als vollständige Tagesernährung dargestellt.

## Optionaler Website-Import

`.env.example` als `.env` kopieren. Mit `node --env-file=.env server.mjs` starten. `IMPORT_ALLOWED_HOSTS` enthält exakt die freigegebenen Hostnamen. Der Server verarbeitet echte Recipe-JSON-LD-Daten aus HTML; DNS- und IPv4-Prüfung mit festgehaltener Zieladresse, keine Redirects, keine privaten Netzwerkziele, Zeit- und Größenlimits. Unbekannte Mengen müssen korrigiert werden. Portionen, Zeiten und Ernährungsangaben im Entwurf prüfen.

GitHub Pages betreibt keinen Node-Server. Daher funktioniert dort der Textimport ohne zusätzliche Dienste; Linkimporte benötigen ein separat eingerichtetes Backend. Ein externer Endpunkt ist in Einstellungen konfigurierbar und braucht eine gezielte CORS-Freigabe für die App-Origin. Keine API-Schlüssel im Frontend hinterlegen. Für öffentlichen Serverbetrieb zusätzlich Rate-Limits und TLS/Reverse-Proxy konfigurieren.

Instagram-/TikTok-API, Transkripte und Screenshot-Auswertung sind nicht eingerichtet. Bei blockierten Quellen wird die Caption-/Texteingabe angeboten. Keine Login-Umgehung, keine erfundenen Ergebnisse und keine kostenpflichtigen KI-Aufrufe. Hosting kann Kosten verursachen.

## Grenzen der ersten Version

- Tages- und Mahlzeitenauswahl gelten kombiniert; keine unterschiedliche Mahlzeitenmatrix pro Tag.
- Automatische Planung berücksichtigt Ernährung, Zeit und aktive Nährwertregeln, sucht aber heuristisch nach günstigen Packungen. Keine Garantie für globale Budgetoptimalität. Unpassende Slots bleiben mit Erklärung leer. Einstellungen werden nicht still verändert.
- Meal Prep/Reste sind manuell verknüpfbar. Kein Kochhäufigkeitsziel und keine automatische Resteoptimierung.
- Alle 14 Allergengruppen auswählbar; Getreide-/Nussarten noch nicht separat. Laktosefrei schließt konservativ sämtliche Milchzutaten aus. Zusammensetzung eigener Zutaten bleibt ungeprüft; bei Allergenausschlüssen werden solche Rezepte nicht automatisch gewählt. Etiketten und Spurenhinweise prüfen; keine Kreuzkontaminationsgarantie.
- Nur Katalogzutaten haben Packungsgrößen, Preise und geprüfte Allergenstruktur. Eigene Zutatenkosten können unvollständig sein und werden in der Schnellfunktion nicht als budgetkonform angeboten.
- Grenzen für Kalorienarm/-reich, Proteinreich und Low Carb gelten pro Portion. Keine Tagesziele oder Keto-Regel; „Ausgewogen“ ist eine Präferenz. Flexitarisch hat keine Fleischhäufigkeitsregel.
- Einheitennormalisierung kg→g und l→ml beim Textimport. Keine erfundene Umrechnung zwischen Stück, Gewicht und Volumen. Unterschiedliche Katalogvarianten bleiben getrennt.
- Duplikaterkennung anhand identischer Titel. Keine semantische Ähnlichkeitsprüfung.
- Lokale Browserdaten können durch Browserbereinigung verloren gehen; regelmäßig exportieren. Offline-Fotos/-Schrift hängen von vorherigem Abruf ab; Systemschrift dient als Fallback.

## Prüfungen

Acht Tests prüfen Portionsskalierung, ganze Packungen, Vorräte, Reste, Ernährung/Allergene/ungeprüfte Zutaten, ausgewählte Planungsfelder, Fixierungen, Textimport und Schnellsuche. Zusätzlich wurde im Browser Planung, Datenerhalt nach Neuladen, Textimport mit vorheriger Korrektur und Schnellsuche (5 Euro / eine Portion / proteinreich) geprüft. Physische Handyinstallation und Website-Import an einer freigegebenen externen Rezeptquelle stehen noch aus.
