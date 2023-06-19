// variables 
    const audioElement = new Audio("assets/sounds/click.wav");
    let count = 0;
    const decrement = document.getElementById('decrement');
    const increment = document.getElementById('increment');
    const reset = document.getElementById('reset');
    let counter = document.getElementById('count');

<<<<<<< HEAD
    //function decrement
    
    decrement.onclick = function(){
    audioElement.play();
    count--;
    counter.innerHTML = count;
    }
    

    reset.onclick = function(){
      audioElement.play();
      count = 0;
      counter.innerHTML = count;
      }
=======
let count = 0;
var sound = new Audio url("https://miraitsukigames.github.io/Hobbit-Counter/assets/sounds/click.m4a");
function increment() {
sound.play();
count++;
document.getElementById("count").innerHTML = count;
}

function decrement() {
  count--;
  document.getElementById("count").innerHTML = count;
}
>>>>>>> 792a9e7757559db119994dc781f9cc0d4edd3f32

     //function increment
   increment.onclick = function(){
      audioElement.play();
      count++;
      counter.innerHTML = count;
      }