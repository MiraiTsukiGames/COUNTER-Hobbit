//Array images
const image_array = [
    "assets/img/backgroundimage.jpg", 
    "assets/img/backgroundimage2.jpg",
    "assets/img/backgroundimage3.jpg",
    "assets/img/backgroundimage4.jpg"
];

//Body style
 document.body.style.backgroundImage = "url("+image_array[0]+")";
 
 //Function timer
window.onload = function() {

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





