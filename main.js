playSound = e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`img[data-key="${e.keyCode}"]`);
  if (audio) {
    audio.currentTime = 0; // 처음으로 되돌리기
    audio.play();
    key.classList.add("playing");
    /* setTimeout(function(){
      key.classList.remove("playing");
    }, 500); */
  }
};

function clickSound(arg){
    const key = arg;
    var keyCode = key.getAttribute('data-key');
    const audio = document.querySelector('audio[data-key="'+keyCode+'"]');
    if (audio) {
        audio.currentTime = 0; // 처음으로 되돌리기
        audio.play();
        /* key.classList.add("playing");
        setTimeout(function(){
          key.classList.remove("playing");
        }, 500); */
    }
}

removeTransition = e => {
  const key = document.querySelector(`img[data-key="${e.keyCode}"]`);
  if (key != null) { key.classList.remove("playing");}
};

window.addEventListener("keydown", playSound);
window.addEventListener("keyup", removeTransition);

/* const pianoElList = document.querySelectorAll("img");
pianoElList.forEach(el => {
  el.addEventListener("transitionend", removeTransition);
}); */

//Touch Event Handling
/* document.querySelector('button').addEventListener('touchstart', function(ev) {
  ev.preventDefault();
  for (var index = 0; index < ev.targetTouches.length; index++) {
    const element = ev.target;
    alert(element);
  }
}, false); */