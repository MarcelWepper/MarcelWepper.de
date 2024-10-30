import React from "react";


import "./Home.css";
import Picture from "./Pics/Kontakt.jpg";

export default class Contact extends React.Component {
  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div class>

          <div className="HeroText">
            <h1> Kontakt und Datenschutz</h1>{" "}
          </div>
        
        <div className="KontaktText">
          <h1> Angaben gemäß § 5 TMG: </h1>
          <br />

          <h2> Kontakt </h2>
          <p> MarcelWepper(at)gmail.com </p>

          <h2> Streitschlichtung </h2>
          <p>
            {" "}
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr{" "}
          </p>
          <p> Unsere E-Mail-Adresse finden Sie oben im Impressum. </p>
          <p>
            {" "}
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.{" "}
          </p>

          <h2> Haftung für Inhalte </h2>
          <p>
            {" "}
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.{" "}
          </p>

          <p>
            {" "}
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.{" "}
          </p>

          <h2> Haftung für Links </h2>
          <p>
            {" "}
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.{" "}
          </p>

          <p>
            {" "}
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.{" "}
          </p>

          <h2> Urheberrecht </h2>
          <p>
            {" "}
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.{" "}
          </p>

          <p>
            {" "}
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.{" "}
          </p>

          <p> Quelle: https://www.e-recht24.de/impressum-generator.html </p>

          <h2> Datenschutzerklärung </h2>
          <p> Verantwortliche Stelle im Sinne der Datenschutzgesetze ist: </p>

          <p> Marcel-René Wepper</p>
          <p> Eckenbertstraße 49</p>
          <p> 67549 Worms </p>

          <h2> Erfassung allgemeiner Informationen </h2>

          <p>
            {" "}
            Wenn Sie auf unsere Webseite zugreifen, werden automatisch
            Informationen allgemeiner Natur erfasst. Diese Informationen
            (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das
            verwendete Betriebssystem, den Domainnamen Ihres Internet Service
            Providers und Ähnliches. Hierbei handelt es sich ausschließlich um
            Informationen, welche keine Rückschlüsse auf Ihre Person zulassen.
            Diese Informationen sind technisch notwendig, um von Ihnen
            angeforderte Inhalte von Webseiten korrekt auszuliefern und fallen
            bei Nutzung des Internets zwingend an. Anonyme Informationen dieser
            Art werden von uns statistisch ausgewertet, um unseren
            Internetauftritt und die dahinter stehende Technik zu optimieren.{" "}
          </p>

          <h2> Kontaktformular </h2>

          <p>
            {" "}
            Treten Sie per E-Mail oder Kontaktformular mit uns in Kontakt,
            werden die von Ihnen gemachten Angaben zum Zwecke der Bearbeitung
            der Anfrage sowie für mögliche Anschlussfragen gespeichert.{" "}
          </p>

          <h2> Löschung bzw. Sperrung der Daten </h2>

          <p>
            {" "}
            Wir halten uns an die Grundsätze der Datenvermeidung und
            Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten daher
            nur so lange, wie dies zur Erreichung der hier genannten Zwecke
            erforderlich ist oder wie es die vom Gesetzgeber vorgesehenen
            vielfältigen Speicherfristen vorsehen. Nach Fortfall des jeweiligen
            Zweckes bzw. Ablauf dieser Fristen werden die entsprechenden Daten
            routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt
            oder gelöscht.{" "}
          </p>

          <h2>
            {" "}
            Ihre Rechte auf Auskunft, Berichtigung, Sperre, Löschung und
            Widerspruch{" "}
          </h2>

          <p>
            {" "}
            Sie haben das Recht, jederzeit Auskunft über Ihre bei uns
            gespeicherten personenbezogenen Daten zu erhalten. Ebenso haben Sie
            das Recht auf Berichtigung, Sperrung oder, abgesehen von der
            vorgeschriebenen Datenspeicherung zur Geschäftsabwicklung, Löschung
            Ihrer personenbezogenen Daten. Bitte wenden Sie sich dazu an unseren
            Datenschutzbeauftragten. Die Kontaktdaten finden Sie ganz unten.{" "}
          </p>

          <p>
            {" "}
            Damit eine Sperre von Daten jederzeit berücksichtigt werden kann,
            müssen diese Daten zu Kontrollzwecken in einer Sperrdatei
            vorgehalten werden. Sie können auch die Löschung der Daten
            verlangen, soweit keine gesetzliche Archivierungsverpflichtung
            besteht. Soweit eine solche Verpflichtung besteht, sperren wir Ihre
            Daten auf Wunsch.{" "}
          </p>

          <p>
            {" "}
            Sie können Änderungen oder den Widerruf einer Einwilligung durch
            entsprechende Mitteilung an uns mit Wirkung für die Zukunft
            vornehmen.{" "}
          </p>

          <h3> Änderung unserer Datenschutzbestimmungen </h3>

          <p>
            {" "}
            Wir behalten uns vor, diese Datenschutzerklärung gelegentlich
            anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen
            entspricht oder um Änderungen unserer Leistungen in der
            Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer
            Services. Für Ihren erneuten Besuch gilt dann die neue
            Datenschutzerklärung.{" "}
          </p>

          <p>
            {" "}
            Die Datenschutzerklärung wurde mit dem
            Datenschutzerklärungs-Generator der activeMind AG erstellt.{" "}
          </p>

          <h1> Cookie Richtlinien </h1>

          <h2>
            {" "}
            Diese Cookie-Erklärung wurde zuletzt am Septmeber 06, 2019
            aktualisiert und gilt für Bürger der Europäischen Wirtschaftszone.
          </h2>

          <h2>1 Einführung</h2>
          <p>
            Unsere Website, https://marcelwepper.de (im folgenden: "Die
            Website") verwendet Cookies und ähnliche Technologien (der
            Einfachheit halber werden all diese unter "Cookies"
            zusammengefasst). Cookies werden außerdem von uns beauftragten
            Drittparteien platziert. In dem unten stehendem Dokument informieren
            wir dich über die Verwendung von Cookies auf unserer Website.
          </p>

          <h2>2 Was sind Cookies</h2>
          <p>
            Ein Cookie ist eine einfache kleine Datei, die gemeinsam mit den
            Seiten einer Internetadresse versendet und vom Webbrowser auf dem PC
            oder einem anderen Gerät gespeichert werden kann. Die darin
            gespeicherten Informationen können während folgender Besuche zu
            unseren oder den Servern relevanter Drittanbieter gesendet werden.
          </p>

          <h2>3 Was sind Skripte?</h2>
          <p>
            Ein Script ist ein Stück Programmcode, das benutzt wird, um unserer
            Website Funktionalität und Interaktivität zu ermöglichen. Dieser
            Code wird auf unseren Servern oder auf deinem Gerät ausgeführt.
          </p>

          <h2>4 Was ist ein Webbeacon?</h2>
          <p>
            Ein Web-Beacon (auch Pixel-Tag genannt), ist ein kleines
            unsichtbares Textfragment oder Bild auf einer Website, das benutzt
            wird, um den Verkehr auf der Website zu überwachen. Um dies zu
            ermöglichen werden diverse Daten von dir mittels Web-Beacons
            gespeichert.
          </p>

          <h2>5 Zustimmung</h2>
          <p>
            Wenn du unsere Website das erste Mal besuchst, zeigen wir dir ein
            Pop-Up mit einer Erklärung über Cookies. Sobald du auf "Alle
            Cookies" klickst, gibst du uns dein Einverständnis alle in diesem
            Pop-Up und in der Cookie-Erklärung beschriebenen Cookies und Plugins
            zu verwenden. Du kannst die Verwendung von Cookies über Ihren
            Browser deaktivieren, aber bitte beachte, dass unsere Website dann
            unter Umständen nicht richtig funktioniert.
          </p>

          <h2>6 Drittparteien:</h2>
          <p>
            Wir haben Vereinbarungen über die Verwendung von Cookies mit anderen
            Firmen getroffen, die Cookies platzieren. Allerdings können wir
            nicht garantieren, dass diese Drittparteien Ihre persönlichen Daten
            in verlässlicher oder sicherer Weise handhaben. Gruppen wie Google
            werden als unabhänige Datenkontrolleure im Sinne der allgemeinen
            Datenschutzverordnung betrachtet. Wir empfehlen Ihnen die
            Datenschutzerklärungen dieser Firmen zu lesen.
          </p>

          <h2>7 Cookies</h2>
          <h3>7.1 Technische oder funktionelle Cookies</h3>
          <p>
            Einige Cookies stellen sicher, dass Teile unserer Website richtig
            funktionieren und deine Nutzervorlieben bekannt bleiben. Durch das
            Platzieren funktionaler Cookies machen wir es dir einfacher unsere
            Website zu besuchen. Auf diese Weise musst du bei Besuchen unserer
            Website nicht wiederholt die gleichen Informationen eingeben, oder
            deine Gegenstände bleiben beispielsweise in deinem Warenkorb bis du
            bezahlst. Wir können diese Cookies ohne dein Einverständnis
            platzieren.
          </p>

          <h3>7.2 Werbecookies</h3>
          <p>Wir verwenden keine Werbecookies auf dieser Website.</p>

          <h3>7.3 Soziale-Medien-Buttons</h3>
          <p>
            On our website we have included buttons for Linkedin, Whatsapp und
            Instagram to promote webpages (e.g. “like”, “pin”) or share (e.g.
            “tweet”) on social networks like Linkedin, Whatsapp und Instagram.
            These buttons work using pieces of code coming from Linkedin,
            Whatsapp und Instagram themselves. This code places cookies. These
            social media buttons also can store and process certain information,
            so a personalized advertisement can be shown to you.
          </p>

          <p>
            Please read the privacy statement of these social networks (which
            can change regularly) to read what they do with your (personal) data
            which they process using these cookies. The data that is retrieved
            is anonymized as much as possible. Linkedin, Whatsapp und Instagram
            are located in the United States.
          </p>

          <h2>8. Platzierte Cookies</h2>
          <h4>Google Analytics</h4>
          <p>Zweck: Leistung</p>
          <p>Aufbewahrungsfrist: Von dieser Sitzung bis zu zwei Jahren</p>
          <p>
            Beschreibung: Wir verwenden Google Analytics, einen Webanalysedienst
            von Google. Google Analytics verwendet Cookies, die es uns
            ermöglichen, die Nutzung unserer Website zu analysieren und Berichte
            über die Websiteaktivitäten und die Internetnutzung
            zusammenzustellen.
          </p>
          <p>Verwendete Namen</p>
          <p>
            ga, _gid, _gat, _gaexp, _utm, __utmc, UTMD_, __utmv, __utmz,
            _gat_gtag_UA_ID, gadwp_wg_default_view, gadwp_wg_default_swmetric,
            gadwp_wg_default_metric, gadwp_wg_default_dimension,
            gadwp_ir_default_dimension, gadwp_ir_default_swmetric,
            gadwp_ir_default_metric
          </p>
          <br />
          <h4>FontAwesome</h4>
          <p>Zweck: Leistung</p>
          <p>Aufbewahrungsfrist: Von dieser Sitzung bis zu zwei Jahren</p>
          <p>
            Beschreibung: Wir verwenden FontAwesome, um Ihnen eine schöne
            grafische Darstellung anbieten zu können.
          </p>
          <p>Verwendete Namen</p>
          <p>__stripe_mid, __stripe_sid, __utmx, __utmxx, _ga, _gid</p>
          <br />
          <h4>CookieConsent</h4>
          <p>Zweck: Leistung</p>
          <p>Aufbewahrungsfrist: Von dieser Sitzung bis zu einem Jahr.</p>
          <p>
            Beschreibung: Wir verwenden CookieConsent, um Ihren Einverständnis
            bezüglich den Cookies zu speichern.
          </p>
          <p>Verwendete Namen</p>
          <p>CookieConsent</p>
        </div>
      </div>
    );
  }
}
