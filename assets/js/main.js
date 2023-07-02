//create buttons variables
const el = document.createElement('div');
const decrement = document.createElement('button');
const reset = document.createElement('button');
const increment = document.createElement('button');

//set id elements
el.setAttribute('id','buttons');
decrement.setAttribute('id','decrement');
reset.setAttribute('id', 'reset');
increment.setAttribute('id', 'increment');

//append child elements
document.getElementById('container-page').appendChild(el);
el.appendChild(decrement);
el.appendChild(reset);
el.appendChild(increment);

//button inner text
increment.innerText = '+';
reset.innerText = '0';
decrement.innerText = '-';

//event listener
el.addEventListener('click', counter);

// variables counter
const audio = new Audio("assets/sounds/click.m4a");
let count = 0;
let display = document.getElementById('count');
let flash;


//button reset
reset.disabled = true;

//function counter
function counter(e) {
  const btn = e.target.id;
  audio.play();
  if (btn === 'increment') {
    count++;
  } else if (btn === 'decrement') {
    count--;
  } else {
    count = 0;
    flash = setInterval(flashText, 500);
    stopFlash();
    }
  display.textContent = count;

  if (count != 0) {
    reset.disabled = false;
  } else {
    reset.disabled = true;
  }
 
}

//Flash text function
function flashText() {
  display.style.visibility = (display.style.visibility == '' ? 'hidden' : '');
  display.style.color = "red";
  increment.disabled = true;
  decrement.disabled = true;
}

//stopFlash function
function stopFlash() {
setTimeout(() => {
  clearInterval(flash);

  //counter style reset
  display.style.color = "";

  //increment decrement button
  increment.disabled = false;
  decrement.disabled = false;
}, 10000);

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

      //function process
      function processChunk(){
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
 
  //media query condition
  if (mq.matches) {
  
    //call stop timer function
  stoptimer();

  //animation scale title
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

 //Change Background function
  ChangeBG();
  }
}

//variables
let mq = window.matchMedia("(max-width: 1280px)");

Mediaquery(mq); //Call the media query function
     