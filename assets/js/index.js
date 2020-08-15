//Variables setup for the app//
let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let on = false;
let win;

const turnCounter =("count");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById ("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const strictButton = document.getElementById("strict");
const onButton =("on");
const startButton = document.getElementById("startbtn");

//displays the rules of the game in a alert box//
function rulesFunction() {
   alert("HOW TO PLAY\n Check the on/off box to power on\n Click the start button to start the game\n The level counter will display 01\n A random sequence of colors will flash\n Repeat the sequence by clicking on the colors\n If the sequence is correct then the level will increase by one\n In default mode if the wrong sequence\n is entered the level will go back\n to the previous correct level\n if in strict mode the game will start from the beginning."); 
}; 

function turnon() {
  if (onButton.checked ==true){ 
    on = true;
    document.getElementById(count).innerHTML = "00";
}else {
      on == false
      count.innerHTML = "";
  }
  {console.log("checked")};
};

//Turns the game on and off.//

//selects default or strict mode//




