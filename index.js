let play = document.getElementById('play');
let audio = document.getElementById('audio');
let count = 0;
function playMusic(){
    if(count == 0){
        count = 1;
        audio.play()
    }else{
        count = 0;
        audio.pause()
    }
}
const div = document.getElementById('headphones');

div.addEventListener('click', () => {
  div.classList.add('bounce');

  // Remove the class after animation ends to allow re-triggering
  div.addEventListener('animationend', () => {
    div.classList.remove('bounce');
  }, { once: true });
});

