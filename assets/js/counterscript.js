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
   let timeValue = setTimeout(processChunk, delay);
      }
   timeValue = setTimeout(processChunk, 0);
}

ChangeBG();
//funzione stop timer
function stoptimer() {
  clearTimeout(timeValue);
}



//media query
function Mediaquery(mq) {
  //Condizione per il media query
  if (mq.matches) {
  stoptimer();
  } else {
 //chiama la funzione change background
  ChangeBG();
  }
}
//variabile 
let mq = window.matchMedia("(max-width: 1280px)");
Mediaquery(mq); // chiama la funzione media query
     