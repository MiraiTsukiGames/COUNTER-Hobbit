var count = 0; //Value

//increment function
function increment() {
    count++;
    document.getElementById("count").innerHTML = count;
}

//decrement function
function decrement() {
    if (count > 0) {
    count--;
    }
    document.getElementById("count").innerHTML = count;
}

//reset function
function resetValue() {
    count = 0;
    document.getElementById("count").innerHTML = count;
}