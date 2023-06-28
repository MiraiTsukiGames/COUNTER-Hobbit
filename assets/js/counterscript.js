// variables 
    const audio = new Audio("assets/sounds/click.m4a");
    let count = 0;
    const decrement = document.getElementById('decrement');
    const increment = document.getElementById('increment');
    const reset = document.getElementById('reset');
    let counter = document.getElementById('count');
    

    //Event buttons
    increment.addEventListener('click', incrementValue);
     reset.addEventListener('click', resetCount);
     decrement.addEventListener('click', decrementValue);


     //function increment
     function incrementValue() {
      audio.play();
      count++;
      counter.innerHTML = count;
      
      //reset button
      reset.disabled = false;

}
    
    //function reset
    function resetCount() {
      audio.play();
      count = 0;
      counter.innerHTML = count;

      //reset button
      reset.disabled = true;

}
    
    //function decrement
    function decrementValue() {
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
   
     