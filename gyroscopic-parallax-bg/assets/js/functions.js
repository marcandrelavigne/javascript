var xOffset = 0;
var yOffset = 0;
//a calculated offset for the x and y origins
//global var to keep it really simple for the demo, I know not ideal!

function orientationChanged (orientationEvent) {

	var beta = orientationEvent.beta;
	var gamma = orientationEvent.gamma;
	//get the rotation around the x and y axes from the orientation event

	if (window.orientation !== null) {
		//don't check for truthiness as window.orientation can be 0!
		var screenOrientation = window.orientation;

		if (screenOrientation === -90) {
			//rotated to the left 90 degrees

			beta = orientationEvent.gamma
			gamma = -1 * orientationEvent.beta
		}

		if (screenOrientation === 90) {
			beta = -1 * orientationEvent.gamma
			gamma = orientationEvent.beta
		}

		if (screenOrientation === 180) {
			beta = -1 * orientationEvent.beta
			gamma = -1 * orientationEvent.gamma
		}
	}

	var tanOfGamma = Math.tan(gamma*(Math.PI/180))
	var tanOfBeta = Math.tan((beta -45)*(Math.PI/180))
	//calculate the tan of the rotation around the X and Y axes
	//we treat beta = 45degrees as neutral
	//Math.tan takes radians, not degrees, as the argument

	var backgroundDistance = document.querySelector("#distance").value //50
	//set the distance of the background from the foreground
	//the smaller, the 'closer' an object appears

	var xImagePosition = (-1 * tanOfGamma * backgroundDistance) + xOffset
	var yImagePosition = (-1 * tanOfBeta * backgroundDistance) + yOffset
	//calculate the distance to shift the background image horizontally

	//now we need to adjust for the device's orientation


	homescreen.style.backgroundPosition = xImagePosition + "px " + yImagePosition + "px";
	//set the backgroundimage position to  xImagePosition yImagePosition
}


function changePhoto() {
	//changes the background photo
	var photoURL = document.querySelector("#photo").value
	var homescreen = document.querySelector("#homescreen");
	homescreen.style.backgroundImage = "url('" + photoURL + "')"
	setupBackgroundImage(homescreen)
}

function setupBackgroundImage(element) {

	//set up the background image for the element
	//call this when the page loads

	var imgURL = window.getComputedStyle(element).backgroundImage
	//get the current background-image

	//bg image format is url(' + url + ') so we strip the url() bit
	imgURL = imgURL.replace(/"/g,"").replace(/url\(|\)$/ig, "");

	//now we make a new image element and set this as its source
	var theImage = new Image();
	theImage.src = imgURL;

	//we'll set an onload listener, so that when the image loads, we position the background image of the element

	theImage.onload = function() {
		positionBackgroundImage(element, this.width, this.height)
	}

}

function positionBackgroundImage(element, imageWidth, imageHeight) {
	//this is called when an image loads

	var elRect = element.getBoundingClientRect();
	xOffset = -1 * (imageWidth - elRect.width)/2
	yOffset = -1 * (imageHeight - elRect.height)/2
	//these are global variables as we want to remember the offsets for later
	//ideally  we'd not use global vars, but done like this for simplicity

	element.style.backgroundPosition = xOffset + "px " + yOffset + "px"
	//change the background-position
}


window.addEventListener("deviceorientation", orientationChanged, false)
//add the event listener for deiceOrientation events
window.addEventListener("load", changePhoto, false)
//set up the initial image