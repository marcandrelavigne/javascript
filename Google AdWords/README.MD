# Google AdWords

<b>Pour tracker les clics sur les numéros de téléphone, adresses courriel et liens externes (Bouton Paypal, téléchargement d'un fichier, etc.) :</b>

Sur un lien :
<a onclick="goog_report_conversion ('tel:800-123-4567')" href="#">800-123-4567</a>
<a onclick="goog_report_conversion ('mailto:test@test.com')" href="#">test@test.com</a>

Sur un bouton :
<button onclick="goog_report_conversion('tel:800-123-4567')">Appelez-nous</button>

Sur une image :
<img src="my_phone_button.jpg" alt="Téléphone" width="32" height="32" onClick="goog_report_conversion('tel:800-123-4567')"/>
