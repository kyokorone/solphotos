const images = [
	"street1",
	"ezgif.com-gif-maker",
	"ezgif.com-gif-maker-event",
	"ezgif.com-gif-maker-bday",
	"artsy",
	"ezgif.com-gif-maker-girl"
];

let x = 0;

function changeImage() {
	var imageContainer = document.getElementById("image-container");
	setTimeout(() => {
		if (x > 4) {
			x = 0;
		}
		imageContainer.src = `photos/${images[x]}.webp`;
		x++;
	}, 1000);
}

