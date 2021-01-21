playSound = e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
  if (audio) {
    audio.currentTime = 0; // 처음으로 되돌리기
    audio.play();
    key.classList.add("playing");
  }
};

function clickSound(arg){
    const key = arg.parentNode;
    var keyCode = key.getAttribute('data-key');
    const audio = document.querySelector('audio[data-key="'+keyCode+'"]');
    if (audio) {
        audio.currentTime = 0; // 처음으로 되돌리기
        audio.play();
        key.classList.add("playing");
    }
}

removeTransition = e => {
  if (e.propertyName === "transform") {
    e.target.classList.remove("playing");
  }
};

window.addEventListener("keydown", playSound);

const pianoElList = document.querySelectorAll("li");
pianoElList.forEach(el => {
  el.addEventListener("transitionend", removeTransition);
});


var bStartEvent = false;
//touchstart 이벤트 발생 여부 플래그
var bMoveEvent = false;
//touchmove 이벤트 발생 여부 플래그
 

document.querySelector('button').addEventListener("touchstart", this.onStart.bind(this), false);
document.querySelector('button').addEventListener("touchmove", this.onMove.bind(this), false);
document.querySelector('button').addEventListener("touchend", this.onEnd.bind(this), false);
 
function onStart(e) {
    bStartEvent = true;
}
 
function onMove(e) {
    
    if(!bStartEvent) {
        return;
        //touchstart 이벤트가 발생하지 않으면 처리하지 않는다.
    }
    bMoveEvent = true;
    //touchMove 이벤트 발생 여부를 설정한다.
}
 
function onEnd(e) {
    if(bStartEvent && !bMoveEvent) {
        //클릭 이벤트로 판단한다.
        alert(e);
    }
    //각 플래그 값을 초기값으로 설정한다.
    bStartEvent = false;
    bMoveEvent = false;
}
