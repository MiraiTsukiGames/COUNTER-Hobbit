// variables 
    const audioElement = new Audio("assets/sounds/click.wav");
    let count = 0;
    const decrement = document.getElementById('decrement');
    const increment = document.getElementById('increment');
    const reset = document.getElementById('reset');
    let counter = document.getElementById('count');


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

     //function increment
   increment.onclick = function(){
      audioElement.play();
      count++;
      counter.innerHTML = count;
      }