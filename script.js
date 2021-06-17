function oddOrEven() {
    let number = document.getElementById('number').value; //gets the value of all elements with the "number" ID
    if (number % 2 == 0) {
        document.getElementById('result').innerHTML = number + " is an Even Number."; // changes the HTML text at all the values with the "result" ID
    } else {
        document.getElementById('result').innerHTML = number + " is an Odd Number.";
    }
}
//innerHTML property makes changes to the HTML page from Javascript
//getElementById takes its value from whatever property has a