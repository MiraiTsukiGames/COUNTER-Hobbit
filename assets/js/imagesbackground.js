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
  
  
  //media query
  function Mediaquery(mq) {
    if (mq.matches) {
      clearInterval(timeValue);
    
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