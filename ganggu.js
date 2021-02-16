playSound = e => {
    var keyCode = e.keyCode;
    var audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    var key = document.querySelector(`img[data-key="${keyCode}"]`);
    if (key == null) {
      key = document.querySelector(`img[data-key="72"]`);
    }
    if (audio && key.classList.length == 0) {
      audio.currentTime = 0; // 처음으로 되돌리기
      audio.play();
      if (keyCode == 74 ){
        key.classList.add("dbplaying");
      }
      else if (keyCode == 85) {
          key.classList.add("triplaying");
      }
      else {
        key.classList.add("playing");
      }
      /* setTimeout(function(){
        key.classList.remove("playing");
      }, 500); */
    }
  };
  
  var isdbClick = null;
  
  function clickSound(arg){
    //one click
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
  function dbclickSound(arg, code){
    const key = arg;
    var keyCode = code;
    const audio = document.querySelector('audio[data-key="'+keyCode+'"]');
    if (audio) {
      audio.currentTime = 0; // 처음으로 되돌리기
      audio.play();
      key.classList.add("dbplaying");
      key.addEventListener("animationend",
        function(){
          key.classList.remove("dbplaying");
          cleardbclick();
      });
    }
  }
  
  function cleardbclick() {
    clearTimeout(isdbClick);
    isdbClick = null;
  }
  
  removeTransition = e => {
    var key = document.querySelector(`img[data-key="${e.keyCode}"]`);
    if (key != null) { 
      key.classList.remove("playing");
    }
    else {
      key = document.querySelector(`img[data-key="72"]`);
      key.classList.remove("dbplaying");
      key.classList.remove("triplaying");
    }
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