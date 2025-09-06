function celebrate() {
  document.getElementById("message").innerHTML = 
    "Dear <b>FELICIA AKUSIKA EWORYI</b>, wishing you joy, success, and happiness always! 🎂🎁🎈";

  let song = document.getElementById("song");
  song.play();

  // stop music after 30 seconds
  setTimeout(() => {
    song.pause();
    song.currentTime = 0; // rewind to start
  }, 30000);

  launchConfetti();
}
