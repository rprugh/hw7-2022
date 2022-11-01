var video;

function addListeners() {
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		document.getElementById("volume").innerHTML = (video.volume * 100).toString() + '%';
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
	});

	document.querySelector('#skip').addEventListener("click", function() {
		video.currentTime = (video.currentTime + 10 > video.duration) ? 0 : video.currentTime + 10;
		console.log("Current Time is " + video.currentTime);
	});

	document.querySelector('#mute').addEventListener("click", function(event) {
		video.mute = (video.mute) ? false : true;
		event.target.innerHTML = event.target.innerHTML == "Mute" ? "Unmute" : "Mute";
		console.log("Video Mute is: " + video.mute);
	});

	document.querySelector('#slider').addEventListener("change", function(event) {
		video.volume = event.target.value / 100;
		document.getElementById("volume").innerHTML = (video.volume * 100).toString() + '%';
	});

	document.querySelector('#vintage').addEventListener("click", function() {
		video.classList.add('oldSchool');
	});

	document.querySelector('#orig').addEventListener("click", function() {
		video.classList.remove('oldSchool');
	});

}

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('video');
	video.loop = false;
	video.autoplay = false;
	video.load();
	addListeners();
});




