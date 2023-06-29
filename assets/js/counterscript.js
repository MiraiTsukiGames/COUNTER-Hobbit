//create buttons variables
const increment = document.createElement('button');
const reset = document.createElement('button');
const decrement = document.createElement('button');
const el = document.createElement('div');

//set id elements
el.setAttribute('id','buttons');
increment.setAttribute('id','increment');
reset.setAttribute('id', 'reset');
decrement.setAttribute('id', 'decrement');

//append child elements
document.body.appendChild(el);
el.appendChild(increment);
el.appendChild(reset);
el.appendChild(decrement);

//button inner text
increment.innerText = '+';
reset.innerText = '0';
decrement.innerText = '-';

//Event listener
increment.addEventListener('click', incrementValue);
reset.addEventListener('click', resetValue);
decrement.addEventListener('click', decrementValue);

// variables counter
    const audio = new Audio("assets/sounds/click.m4a");
    let count = 0;
    let counter = document.getElementById('count');
    
    //button reset
    reset.disabled = true;


     //function increment
     function incrementValue() {
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
    
    //function reset
    function resetValue() {
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
   
     