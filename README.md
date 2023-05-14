# Moodle Scroll-Position speichern
[JS-Skript](moodle_scrollpos.user.js) für [Tampermonkey](https://www.tampermonkey.net/) oder [Greasemonkey](https://www.greasespot.net/) um in Moodle-Kursen (im Boost Design) die Scroll-Position zu speichern und beim erneuten Laden der Seite wiederherzustellen.
<details><summary><b>⚠️ Sicherheitswarnung ⚠️</b></summary> Tampermonkey und Greasemonkey sind Browser-Erweiterungen, die auf Webseiten zusätzliche Skripte ausführen können. Dies kann auch bösartig genutzt werden, es sollten nur Skripte aus vertrauenswürdigen Quellen installiert werden! <a href="moodle_scrollpos.user.js">Das Skript, von dem hier die Rede ist</a>, wird nur auf Seiten mit der URL <code>https://moodle.bbbaden.ch/course/view.php*</code> ausgeführt. Das <code>*</code> steht dabei für eine beliebe Zahlen-, Buchstaben- oder Zeichenfolge. So wird das Skript beispielsweise auf <code>https://moodle.bbbaden.ch/course/view.php?id=42</code> auch ausgeführt.</details>

## Installation

### Hinweis zu Greasemonkey
Auf Firefox scheint [Greasemonkey](https://addons.mozilla.org/de/firefox/addon/greasemonkey/) zuverlässiger zu funktionieren als Tampermonkey. Grundsätzlich machen beide das Gleiche, auch der Installationsprozess ist gleich.

### Anleitung
1. Erweiterung installieren
   * Tampermonkey
     * [Chrome/Brave/Vivaldi](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
     * [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd?hl=de-DE&gl=CH)
     * [Firefox](https://addons.mozilla.org/de/firefox/addon/tampermonkey/)
     * [Opera](https://addons.opera.com/de/extensions/details/tampermonkey-beta/)
   * Greasemonkey
     * [Firefox](https://addons.mozilla.org/de/firefox/addon/greasemonkey/)

2. Zuerst diesen Link und danach im Fenster, das automatisch aufgeht, auf `Installieren` klicken:

    <a target="_blank" href="https://raw.githubusercontent.com/BBBelektronik/moodle-scrollpos/main/moodle_scrollpos.user.js">https://raw.githubusercontent.com/BBBelektronik/moodle-scrollpos/main/moodle_scrollpos.user.js</a>

    <img src="images/install.png" width=400>
    
    **Hinweis:** Es kann sein, dass die Versionsnummer, die Beschreibung und der Skriptname vom Screenshot etwas abweicht. Bei Unsicherheit nochmal überprüfen, ob wirklich auch der richtige Link angeklickt wurde.

3. Auf Moodle gehen und ausprobieren 😊 Wenn alles geklappt hat, sollte nun in jedem Moodle-Kurs die letzte Scroll-Position bei einem neuen Laden der Seite wiederhergestellt werden.

## Limitations
Das Skript wurde erfolgreich getestet in
* **Firefox** `113.0.1 (64-bit)`
* **Vivaldi** `6.0.2979.18 (Stable channel) (64-bit)`
* **Microsoft Edge** `113.0.1774.42 (Official build) (64-bit)`
* **Google Chrome** `113.0.5672.93 (Official build) (64-Bit)`

Das Skript sollte theoretisch auch auf allen anderen Browsern, die über die Erweiterung Tampermonkey verfügen, funktionieren. Soweit sind keine Fälle bekannt, wo das nicht zutrifft.
