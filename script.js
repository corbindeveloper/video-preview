console.log("page loaded...");

let homeVideo = document.getElementById("videoTooBig");
function stopPlay()  {
   homeVideo.pause();
}

function preplay() {
   if (homeVideo.paused) {
      homeVideo.play();
   }
}