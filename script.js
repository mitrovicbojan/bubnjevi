window.addEventListener("keydown", (event) => {
  let code = event.keyCode;
  let audio = document.querySelector(`audio[data-key="${code}"]`);
  audio.currentTime = 0;
  audio.play();
});
