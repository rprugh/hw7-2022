var video;

function addListeners() {
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
	});

	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});

	document.querySelector('#slower').addEventListener("click", function() {
		video.playbackRate *= 0.9;
		if (Math.abs(video.playbackRate - 1) < 0.000001) video.playbackRate = 1;
		console.log("Speed is " + video.playbackRate);
	});

	document.querySelector('#faster').addEventListener("click", function() {
		video.playbackRate /= 0.9;
		if (Math.abs(video.playbackRate - 1) < 0.000001) video.playbackRate = 1;
		console.log("Speed is " + video.playbackRate);
	})
	

}

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('video');
	video.load();
	addListeners();
});




