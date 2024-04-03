var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")
	video.autoplay=false;
	video.loop=false;
	console.log ('auto play is set to '+ video.autoplay)
	console.log('loop is set to ' + video.loop)

	document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
		//console.log("Volume: " + (video.volume * 100) + "%");
		document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
	});
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});
	document.querySelector("#slower").addEventListener("click", function() {
		console.log("Slow Down");
		video.playbackRate -= 0.1;
		console.log("New Speed: " + video.playbackRate);
	});
	document.querySelector("#faster").addEventListener("click", function() {
        console.log("Speed Up");
        video.playbackRate += 0.1;
        console.log("New Speed: " + video.playbackRate);
    });
	document.querySelector("#skip").addEventListener("click", function() {
        console.log("Skip Ahead");
        video.currentTime += 10;
        if (video.currentTime > video.duration) {
            video.currentTime = video.duration;
        }
        console.log("Video current time is " + video.currentTime);
    });
	document.querySelector("#mute").addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
			this.textContent = "Mute";
            console.log("Unmuted");
        } else {
            video.muted = true;
			this.textContent = "Unmute";
            console.log("Muted");
        }
    });
	document.querySelector("#slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        document.querySelector("#volume").textContent = this.value;
		console.log("Volume: " + (video.volume * 100) + "%");
    });
	document.querySelector("#vintage").addEventListener("click", function() {
        console.log("Switching to Old School");
        video.classList.add("oldSchool");
    });

    document.querySelector("#orig").addEventListener("click", function() {
        console.log("Switching to Original");
        video.classList.remove("oldSchool");
    });
});