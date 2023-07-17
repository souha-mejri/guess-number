'use strict';
var guessNumber = Math.floor(Math.random() * 20) + 1;
console.log(guessNumber);


//btn
document.querySelector(".check")
//msg
document.querySelector(".message")
//input
document.querySelector(".guess")
document.querySelector(".score")
var score = 20;


document.querySelector(".check").addEventListener('click', () => {

    var input = document.querySelector(".guess").value;

    if (input < 1 || input > 20) {
        document.querySelector(".message").innerHTML = "Number out of range. Please enter a number between 1 and 20.";
        return;


    }


    if (input < guessNumber) {
        document.querySelector(".message").innerHTML = "Number is low";
        document.querySelector("body").style.backgroundColor = "red";
        let score = 20;
        score--;
        document.querySelector(".score").innerHTML = score;

    }
    else if (input > guessNumber) {
        document.querySelector(".message").innerHTML = "number is high";
        document.querySelector("body").style.backgroundColor = "red";
        score--;
    }
    else {
        document.querySelector(".message").innerHTML = "number is equal";
        document.querySelector("body").style.backgroundColor = "green";

    }
    setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "";
    }, 1000);



}


);

