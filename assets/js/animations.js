//Array images
const image_array = new Array (
    "assets/img/backgroundimage.jpg", 
    "assets/img/backgroundimage2.jpg",
    "assets/img/backgroundimage3.jpg",
    "assets/img/backgroundimage4.jpg"
);

//Body style
 document.body.style.backgroundImage = "url("+image_array[0]+")";


 //Function timer
function Timer(){

    var i = image_array.length;
    var j = 0;

    setInterval(

        function(){

            if (i > 0) {

                document.body.style.backgroundImage = "url("+image_array[j]+")";

                i--;
                j++;

            } else {

                i = image_array.length;
                j = 0;

            }

        }

        , 5000
    );
}

Timer();

