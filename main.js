//play drum sounds

function playSounds(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  audio.play(); // play audio
}

//Listen for events when key pressed
window.addEventListener("keydown", playSounds);
