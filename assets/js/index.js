//Variables setup for the app//
let order = [];
let playerOrder = [];
let flash;
let count;
let good;
let compTurn;
let intervalId;
let strict = false;
let on = false;
let win;

const turnCounter = document.querySelector("#count");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#startbtn");

//displays the rules of the game in a alert box//
function rulesFunction() {
   alert("HOW TO PLAY\n Check the on/off box to power on\n Click the start button to start the game\n The level counter will display 01\n A random sequence of colors will flash\n Repeat the sequence by clicking on the colors\n If the sequence is correct then the level will increase by one\n In default mode if the wrong sequence\n is entered the level will go back\n to the previous correct level\n if in strict mode the game will start from the beginning."); 
} 

//Turns the game on and off.//
onButton.addEventListener('click', (event) => {
  if (onButton.checked == true) {
    on = true;
    turnCounter.innerHTML = "00";
  } else {
    on = false;
    turnCounter.innerHTML = "";
    clearColor();
    clearInterval(intervalId);
  }
});
//selects default or strict mode//
strictButton.addEventListener('click', (event) => {
  if (strictButton.checked == true) {
    strict = true;
  } else {
    strict = false;
  }
});



