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

//chiama la funzione
ChangeBG();

//media query
function Mediaquery(mq) {
    //Condizione per il media query
    if (mq.matches) {
    window.onload = clearTimeout(timeValue);
    } else {
   //chiama la funzione change background
   window.onload = ChangeBG();
    }
  }
  //variabile 
  let mq = window.matchMedia("(max-width: 1280px) and (orientation: portrait)");
  Mediaquery(mq); // chiama la funzione media query
