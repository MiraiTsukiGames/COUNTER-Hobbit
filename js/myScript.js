var counter = 0; //counter

//increment function
function increment() {
    counter++;
    document.getElementById("counter").innerHTML = counter;
}

//decrement function
function decrement() {
    if (counter > 0) {
    counter--;
    document.getElementById("counter").innerHTML = counter;
    }

}

//reset function
function reset() {
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
}