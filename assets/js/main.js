//variables
const el = document.createElement('div');
const decrementBtn = document.createElement('button');
const resetBtn = document.createElement('button');
const incrementBtn = document.createElement('button');
const container = document.getElementById('container-page');


//set id elements
el.setAttribute('id','buttons');
decrementBtn.setAttribute('id','decrement');
resetBtn.setAttribute('id', 'reset');
incrementBtn.setAttribute('id', 'increment');

//append child elements
container.appendChild(el);
el.appendChild(decrementBtn);
el.appendChild(resetBtn);
el.appendChild(incrementBtn);

//button inner text
incrementBtn.innerText = '+';
resetBtn.innerText = '0';
decrementBtn.innerText = '-';

//event delegation
el.addEventListener('click', event => {
  const btn = event.target.id;
  if (btn === 'increment' &&!incrementBtn.disabled) {
    audio.play();
    count++;
  } else if (btn === 'decrement' &&!decrementBtn.disabled) {
    audio.play();
    count--;
  } else if (btn === 'reset' &&!resetBtn.disabled) {
    audio.play();
    count = 0;
    decrementBtn.disabled = true;
    incrementBtn.disabled = true;
    resetBtn.disabled = true;
    flash = setInterval(changeColor, 500);
    setTimeout(stopTimeout, 5000);
  } else {
    audio.pause();
  }
  display.textContent = count;
});

function changeColor() {
  color = color === 'red'? '' : 'red';
  display.style.color = color;
}

function stopTimeout() {
  clearInterval(flash);
  decrementBtn.disabled = false;
  incrementBtn.disabled = false;
  resetBtn.disabled = false;
  display.style.color = '';
}


// variables counter
const audio = new Audio("assets/sounds/click.m4a");
let count = 0;
let display = document.getElementById('count');
let color = 'red';
let flash;


     