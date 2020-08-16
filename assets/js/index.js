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
let level= 0;

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById ("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const strictButton = ("strict");
const onButton =("on");
const startButton =("startbtn");

//displays the rules of the game in a alert box//
function rulesFunction() {
   alert("HOW TO PLAY\n Check the on/off box to power on\n Click the start button to start the game\n The level counter will display 01\n A random sequence of colors will flash\n Repeat the sequence by clicking on the colors\n If the sequence is correct then the level will increase by one\n In default mode if the wrong sequence\n is entered the level will go back\n to the previous correct level\n if in strict mode the game will start from the beginning."); 
}; 

//Turns the game on and off.//
function turnon() {
  if (onButton.checked ==true){ 
    on = true
    document.getElementById("level")
    .innerHTML ="0";
}else {
      on = false 
      level.innerHTML =" ";
      
  }
  {console.log("checked")};
};

//selects default or strict mode//
function strictM() {
    if (strictButton.checked ==true){
        strict = true;
    } else{
        strict = false;
    }
    {console.log("strict mode on")};
};


function startButtonFunction() {
  if (on || win) {
    play();
  }
  {console.log("button has been pressed")};
};

function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
  on = false;

  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) (one);
      if (order[flash] == 2) (two);
      if (order[flash] == 3) (three);
      if (order[flash] == 4) (four);
      flash++;
    }, 200);
  }
}

function one() {
  
  btn1.style.backgroundColor = "lightgreen";
};

function two() {
  
  topRight.style.backgroundColor = "tomato";
};

function three() {
  
  bottomLeft.style.backgroundColor = "yellow";
};

function four() {
  
  bottomRight.style.backgroundColor = "lightskyblue";
};

function clearColor() {
  btn1.style.backgroundColor = "darkgreen";
  topRight.style.backgroundColor = "darkred";
  bottomLeft.style.backgroundColor = "goldenrod";
  bottomRight.style.backgroundColor = "darkblue";
}

function flashColor() {
  btn1.style.backgroundColor = "lightgreen";
  topRight.style.backgroundColor = "tomato";
  bottomLeft.style.backgroundColor = "yellow";
  bottomRight.style.backgroundColor = "lightskyblue";
}

btn1.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(1);
    check();
    one();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

topRight.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(2);
    check();
    two();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

bottomLeft.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(3);
    check();
    three();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

bottomRight.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(4);
    check();
    four();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

  if (playerOrder.length == 3 && good) {
    winGame();
  }

  if (good == false) {
    flashColor();
    turnCounter.innerHTML = "NO!";
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();

      if (strict) {
        play();
      } else {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 800);
      }
    }, 800);

    noise = false;
  }

  if (turn == playerOrder.length && good && !win) {
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = turn;
    intervalId = setInterval(gameTurn, 800);
  }

}

function winGame() {
  flashColor();
  turnCounter.innerHTML = "WIN!";
  on = false;
  win = true;
}






