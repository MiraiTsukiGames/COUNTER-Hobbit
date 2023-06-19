// variables 

let count = 0;
var sound = url("https://miraitsukigames.github.io/Hobbit-Counter/assets/sounds/click.m4a");
function increment() {
sound.play();
count++;
document.getElementById("count").innerHTML = count;
}

function decrement() {
  count--;
  document.getElementById("count").innerHTML = count;
}

