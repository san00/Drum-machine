//function to play drum sounds

function playSounds(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); // selects audio element associated with data-key.
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); // selects class associated with data-key.
  if (!audio) return; // stop running function if key selected without audio element.
  audio.currentTime = 0; // rewinds drum sounds to start - allows for successive key hits.
  audio.play(); // play drum sounds
  key.classList.add("playing"); //adds class to active keys for transition effects.
}

//function to remove transition

function removeTransition(event) {
  if (event.propertyName !== "transform") return; //skips, if not a transform
  this.classList.remove("playing");
}

//Listeners & queries
const key = document.querySelectorAll(".key"); 
key.forEach(key => key.addEventListener("transitionend", removeTransition)); //listen & remove transition effect from keys
window.addEventListener("keydown", playSounds); //listen & play sound when key pressed.