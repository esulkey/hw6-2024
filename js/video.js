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
        console.log("Current Time: " + video.currentTime);
    });
	document.querySelector("#mute").addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            console.log("Unmuted");
        } else {
            video.muted = true;
            console.log("Muted");
        }
    });
	document.querySelector("#slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        document.querySelector("#volume").textContent = this.value;
		console.log("Volume: " + video.volume * 100);
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







window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
    console.log('auto play is set to ' + video.autoplay);
    console.log('loop is set to ' + video.loop);

    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
    });

    document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause();
    });

    document.querySelector("#slower").addEventListener("click", function() {
        console.log("Slow Down");
        video.playbackRate -= 0.1; // Slow down by 10%
        console.log("New Speed: " + video.playbackRate); // Log the new speed to the console
    });

    document.querySelector("#faster").addEventListener("click", function() {
        console.log("Speed Up");
        video.playbackRate += 0.1; // Speed up by 10%
        console.log("New Speed: " + video.playbackRate); // Log the new speed to the console
    });

    document.querySelector("#skip").addEventListener("click", function() {
        console.log("Skip Ahead");
        video.currentTime += 10; // Advance video by 10 seconds
        if (video.currentTime > video.duration) {
            video.currentTime = video.duration; // If video length has been exceeded, go to the end
        }
        console.log("Current Time: " + video.currentTime); // Log the current location of the video
    });

    document.querySelector("#mute").addEventListener("click", function() {
        console.log("Mute/Unmute");
        if (video.muted) {
            video.muted = false; // Unmute the video
            this.textContent = "Mute"; // Update button text to "Mute"
        } else {
            video.muted = true; // Mute the video
            this.textContent = "Unmute"; // Update button text to "Unmute"
        }
    });

    document.querySelector("#slider").addEventListener("input", function() {
        console.log("Volume Changed");
        video.volume = this.value / 100; // Convert slider value (0-100) to volume (0-1)
        document.querySelector("#volume").textContent = this.value + '%'; // Update volume information with '%' sign
    });

    document.querySelector("#vintage").addEventListener("click", function() {
        console.log("Switching to Old School");
        video.classList.add("oldSchool"); // Add the oldSchool class to the video element
    });

    document.querySelector("#orig").addEventListener("click", function() {
        console.log("Switching to Original");
        video.classList.remove("oldSchool"); // Remove the oldSchool class from the video element
    });
});