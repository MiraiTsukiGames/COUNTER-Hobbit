//Media Query

function onMediaQueryChanges() {
    if (myMediaQuery.matches) { // If media query matches
        document.body.style.backgroundImage = "url('assets/img/imageMobile.jpg')";
        return;
    } 
  }
  
  let myMediaQuery = window.matchMedia('(max-width: 600px)');
  onMediaQueryChanges(myMediaQuery) // Call listener function at run time
  myMediaQuery.addListener(onMediaQueryChanges) // Attach listener function on state changes

  onMediaQueryChanges();
