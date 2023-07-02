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

//Event listener
increment.addEventListener('click', incrementValue);
reset.addEventListener('click', resetValue);
decrement.addEventListener('click', decrementValue);

// variables counter
const audio = new Audio("assets/sounds/click.m4a");
let count = 0;
let counter = document.getElementById('count');
let flash;


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
       flash = setInterval(flashText, 500);

       //counter style
       counter.style.color = "red";
       count = 0;
      counter.innerHTML = count;

      //reset, increment, decrement button
      reset.disabled = true;
      increment.disabled = true;
      decrement.disabled = true;
        stopFlash();
      
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

//Flash text function
function flashText() {
  counter.style.visibility = (counter.style.visibility == '' ? 'hidden' : '');
}

//stopFlash function
function stopFlash() {
setTimeout(() => {
  clearInterval(flash);

  //counter style reset
  counter.style.color = "";

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


//function change background
function ChangeBG() {

  //variables
  let i = image_array.length;
  let j = 0;
  let delay = 5000;
  
  
      //function process
      function processChunk(){
        let timeValue;
          document.body.style.backgroundImage = "url("+image_array[0]+")";
          if (i > 0) {
          document.body.style.backgroundImage = "url("+image_array[j]+")";
              i--;
              j++;
          } else {
              i = image_array.length;
              j = 0;
              }
          
      //timeout
   timeValue = setTimeout(processChunk, delay);
      }
   timeValue = setTimeout(processChunk, 0);
}

//call the function
ChangeBG();

//funzione stop timer
function stoptimer() {
  clearTimeout(timeValue);
}



//media query
function Mediaquery(mq) {
 
  //media query condition
  if (mq.matches) {
  
    //stop timer function
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
     