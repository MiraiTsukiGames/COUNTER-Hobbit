//Array images
const image_array = [
    "assets/img/backgroundimage.jpg", 
    "assets/img/backgroundimage2.jpg",
    "assets/img/backgroundimage3.jpg",
    "assets/img/backgroundimage4.jpg"
];


document.body.style.backgroundImage = "url("+image_array[0]+")";

 
function ChangeBG() {
    
    let i = image_array.length;
    let j = 0;
    let delay = 5000;

        function processChunk(){

            if (i > 0) {
            document.body.style.backgroundImage = "url("+image_array[j]+")";
           
                i--;
                j++;

            } else {

                i = image_array.length;
                j = 0;

            }
            
         setTimeout(processChunk, delay);
        }

        setTimeout(processChunk, 0);
}



//Media Query

function onMediaQueryChanges() {
    if (myMediaQuery.matches) { // If media query matches
        document.body.style.backgroundImage = "url('assets/img/imageMobile.jpg')";
        clearTimeout();
    } else {
        ChangeBG();
    }
  }
  
  let myMediaQuery = window.matchMedia('(max-width: 930px) and (orientation: portrait)');
  onMediaQueryChanges(myMediaQuery) // Call listener function at run time
  myMediaQuery.addListener(onMediaQueryChanges) // Attach listener function on state changes

  onMediaQueryChanges();

