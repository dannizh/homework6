var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log("Ending");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = document.querySelector("#volumeSlider").value + "%";
	console.log(vol);

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this);
	console.log(this.value);
	document.querySelector("#volume").innerHTML = document.querySelector("#volumeSlider").value + "%";
	let vol =  document.querySelector("#volumeSlider").value * 0.01;
	console.log(vol);
});
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if(video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = 'Unmute';
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = 'Mute';
	}
});

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate *= 0.9;
	console.log("Slow down " + video.playbackRate * 100 + "%");
});

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate /= 0.9;
	console.log("Speed up " + video.playbackRate * 100 + "%");
});

document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 5;
	console.log("Current " + video.currentTime + "s");
	video.loop = true;
});

document.querySelector("#old").addEventListener("click", function(){
	video.style.filter = "grayscale(100%)";
	console.log("Old School");
});

document.querySelector("#original").addEventListener("click", function(){
	video.style.filter = "grayscale(0%)";
	console.log("Original");
});
