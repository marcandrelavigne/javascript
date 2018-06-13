// Colorize console logs
var colors = {
	"red": "color: red;",
	"yellow": "color: yellow;",
	"green": "color: green;",
}

// Put %c before log comment, followed by the color variable
console.log('%cI did not hit her!', colors.red);
console.log('%cIt’s not true!', colors.yellow);
console.log('%cOh hi, Mark!', colors.green);