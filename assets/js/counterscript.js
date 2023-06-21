// variables 
    const audio = new Audio("assets/sounds/click.m4a");
    let count = 0;
    const decrement = document.getElementById('decrement');
    const increment = document.getElementById('increment');
    const reset = document.getElementById('reset');
    let counter = document.getElementById('count');

    //Reset disabled
     reset.disabled = true;
    
     //Event buttons
     decrement.addEventListener('click', decrementValue);
     reset.addEventListener('click', resetCount);
     increment.addEventListener('click', incrementValue);

     //function decrement
     function decrementValue(){
      audio.play();
      count--;
      counter.innerHTML = count;

      //Condition reset button 
      if (count !== 0) {
        reset.disabled = false;
      } else {
        reset.disabled = true;
      }
    }
    
    //function reset
    function resetCount(){
      audio.play();
      count = 0;
      counter.innerHTML = count;
      reset.disabled = true;
    }
    
    //function increment
    function incrementValue(){
      audio.play();
      count++;
      counter.innerHTML = count;

      //Condition reset button
      if (count !== 0) {
        reset.disabled = false;
      } else {
        reset.disabled = true;
      }
    }
   
     