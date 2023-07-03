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

//event listener
document.addEventListener('click', counter);
resetBtn.addEventListener('click', stopFlash);

// variables counter
const audio = new Audio("assets/sounds/click.m4a");
let count = 0;
let display = document.getElementById('count');
let flash;

//button reset
resetBtn.disabled = true;

//function counter
function counter(e) {
 const btn = e.target.id;
    if (btn === 'increment') {
      count++;
    } else if (btn === 'decrement') {
      count--;
    } else if (btn === 'reset') {
      count = 0;
      flash = setInterval(blinkText, 1000);
    }
    display.textContent = count;
    if (count!= 0) {
      audio.play();
      resetBtn.disabled = false;
    } else {
      resetBtn.disabled = true;
      audio.pause();
    }
  }

  function blinkText() {
    display.style.color = 'red';
    display.style.opacity = 0;
    decrementBtn.disabled = true;
    incrementBtn.disabled = true;
    setTimeout(() => {
      display.style.color = '';
      display.style.opacity = 1;
    }, 500);
  }

  function stopFlash() {
    setTimeout(() => {
      decrementBtn.disabled = false;
      incrementBtn.disabled = false;
      clearInterval(flash);
    }, 5000);
    
  }

//Array images
const image_array = [
  "assets/img/backgroundimage.jpg", 
  "assets/img/backgroundimage2.jpg",
  "assets/img/backgroundimage3.jpg",
  "assets/img/backgroundimage4.jpg"
];

//variables images
let i = image_array.length;
let j = 0;
let delay = 5000;
let timeValue;

//function change background
function ChangeBG() {
  timeValue = setInterval(processChunk, delay);
  document.body.style.backgroundImage = "url("+image_array[0]+")";

  // function process
  function processChunk() {
    if (i > 0) {
      document.body.style.backgroundImage = "url("+image_array[j]+")";
      i--;
      j++;
    } else {
      i = image_array.length;
      j = 0;
    }
  }
}


//funzione stop timer
function stoptimer() {
  setTimeout(()=> {
    clearInterval(timeValue);
  });
}


//media query
function Mediaquery(mq) {
  if (mq.matches) {
    stoptimer();
    document.querySelector(`h1`).animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(1.5)' }
      ],
      {
        duration: 1000,
        iterations: Infinity,
        direction: 'alternate'
      }
    );
  } else {
    ChangeBG();
  }
}

//variables
let mq = window.matchMedia("(max-width: 1280px)");

Mediaquery(mq); //Call the media query function
     