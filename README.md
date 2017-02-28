# Javascript

<h2>Accessibility</h2>
- <b>Mobile Phone Number :</b> Permet d'afficher le lien sur le numéro de téléphone lorsque la page est visionné sur mobile seulement. (Nécessite jQuery)

<h2>Forms</h2>
- <b>Autofill :</b> Permet d'afficher un bouton secret servant à auto-populer les champs du formulaire.

<h2>Google Maps</h2>
- <b>Geolocate :</b> Géolocalisation pour Google Maps. (https)
- <b>Gmaps :</b> Code custom pour Google Maps.

<h2>SVG</h2>
- <b>Img to Inline SVG :</b> Transforme les balises Img en SVG à l'aide de la classe .svg


# jQuery Snippets

<h2>Afficher le nombre d'années passées depuis une certain date</h2>
```javascript
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m &lt; 0 || (m === 0 &amp;&amp; today.getDate() &lt; birthDate.getDate())) {
    age--;
  }
  return age;
};

$('.age').text('Depuis plus de ' + getAge("2014/06/21") + ' ans');
```
