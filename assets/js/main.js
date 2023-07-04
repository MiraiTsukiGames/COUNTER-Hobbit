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
    let flash = setInterval(() => {
      display.style.color = 'red';
      display.style.color = '';
      display.style.color = 'red';
    }, 500);
    
    setTimeout(() => {
      clearInterval(flash);
      decrementBtn.disabled = false;
      incrementBtn.disabled = false;
      resetBtn.disabled = false;
      display.style.color = '';
    }, 2000);
  } else {
    audio.pause();
  }
  display.textContent = count;
});



// variables counter
const audio = new Audio("assets/sounds/click.m4a");
let count = 0;
let display = document.getElementById('count');


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


//funzione stop timer images
function stoptimer() {
  setTimeout(()=> {
    clearInterval(timeValue);
  });
}


//media query
function Mediaquery(mq) {
  if (mq.matches) {
    stoptimer();
  
 let animationText = document.querySelector('h1');
  animationId = requestAnimationFrame(() => {
    animationText.animate(
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
  });
} else {
    ChangeBG();
    cancelAnimationFrame(animationId);
  }
}

//variables media query
let mq = window.matchMedia("(max-width: 1280px)");
let animationId;

Mediaquery(mq); //Call the media query function
     