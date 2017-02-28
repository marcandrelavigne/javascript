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

<b>Afficher le nombre d'années passées depuis une certain date</b>
```javascript
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

$('.age').text('Depuis plus de ' + getAge("2014/06/21") + ' ans');
```

<b>Remplacer le balises <pre><img></pre> par des balises <pre><svg></svg></pre></b>
```javascript
/* ========================================================
Replace all SVG images with inline SVG
Add the class .svg to the img tag and voilà!
========================================================= */

jQuery('img.svg').each(function(){
var $img = jQuery(this);
var imgID = $img.attr('id');
var imgClass = $img.attr('class');
var imgURL = $img.attr('src');

jQuery.get(imgURL, function(data) {

// Get the SVG tag, ignore the rest
var $svg = jQuery(data).find('svg');

// Add replaced image's ID to the new SVG
if(typeof imgID !== 'undefined') {
$svg = $svg.attr('id', imgID);
}
// Add replaced image's classes to the new SVG
if(typeof imgClass !== 'undefined') {
$svg = $svg.attr('class', imgClass+' replaced-svg');
}

// Remove any invalid XML tags as per http://validator.w3.org
$svg = $svg.removeAttr('xmlns:a');

// Replace image with new SVG
$img.replaceWith($svg);

}, 'xml');

});
```
