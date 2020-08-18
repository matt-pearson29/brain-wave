//Variables setup for the app//
    var random = [];
    var litID = [];
    var lit;
    var clicked = [];
    var i;
    var j=0;
    var count = 1;
    var on;
    var off;
    var strict;
    var x;
   
    
    
//displays the rules of the game in a alert box//
function rulesFunction() {
   alert("HOW TO PLAY\n Click the on or off buttons to power on or off the game.\n Click the start button to start the game\n The level counter will display 01\n A random sequence of colors will flash\n Repeat the sequence by clicking on the colors\n If the sequence is correct then the level will increase by one\n In default mode if the wrong sequence\n is entered the level will go back\n to the previous correct level\n if in strict mode the game will start from the beginning."); 
};

function change1() {

//sets the time interval lengths//
        if (count <= 10) {
            off = 400;
            on = 1500;

        }

        else {
            off = 250;
            on = 700;
        }
//sets the random button flashes for the games turn.//
               x = setInterval(function () {

                if (random[j] == 1) {

                    lit = 'lighton1';
                    $('#btn1').addClass(lit);
                    
                    litID.push(1);


                    setTimeout(function () {

                        $('#btn1').removeClass(lit);

                    }, off);

                }

                else if (random[j] == 2) {

                    lit = 'lighton2';
                    $('#btn2').addClass(lit);
                    
                    litID.push(2);


                    setTimeout(function () {

                        $('#btn2').removeClass(lit);

                    }, off);

                }

                else if (random[j] == 3) {

                    lit = 'lighton3';
                    $('#btn3').addClass(lit);
                    
                    litID.push(3)


                    setTimeout(function () {

                        $('#btn3').removeClass(lit);

                    }, off);

                }

                else if (random[j] == 4) {

                    lit = 'lighton4';
                    $('#btn4').addClass(lit);
                    
                    litID.push(4);


                    setTimeout(function () {

                        $('#btn4').removeClass(lit);

                    }, off);

                }
                else if (random[j] == 5) {

                    lit = 'lighton5';
                    $('#btn5').addClass(lit);
                
                    litID.push(5);


                    setTimeout(function () {

                        $('#btn5').removeClass(lit);

                    }, off);

                }
                else if (random[j] == 6) {

                    lit = 'lighton6';
                    $('#btn6').addClass(lit);
                    
                    litID.push(6);


                    setTimeout(function () {

                        $('#btn6').removeClass(lit);

                    }, off);

                }
                else if (random[j] == 7) {

                    lit = 'lighton7';
                    $('#btn7').addClass(lit);
                    
                    litID.push(7);


                    setTimeout(function () {

                        $('#btn7').removeClass(lit);

                    }, off);

                }
                else  {

                    lit = 'lighton8';
                    $('#btn8').addClass(lit);
                    
                    litID.push(8);


                    setTimeout(function () {

                        $('#btn8').removeClass(lit);

                    }, off);
                }

                 j++;

                   if (j>=count) {
                       clearInterval(x);
                   }

            }, on);

    }
/*function to check against the random sequence and player clicked sequence. Display wrong sequence clicked
 in default mode, reset in strict mode or the player has won the game. Or needs to progress to the next level.*/

    function checking() {

        if (litID.length == clicked.length){

                if (litID.join() == clicked.join()) {

                        if (count == 30) {

                            setTimeout(function () {
                                alert("CONGRATULATIONS You have WON!");
                                location.reload();
                            }, 1000);
                        }

                        else {
                            setTimeout(function () {
                                $('#count').text(count + 1);
                                count++;
                                litID = [];
                                clicked = [];
                                j = 0;
                                change1();

                            }, 1000);
                        }
                }

                else {
                    if (strict == 1) {

                        location.reload();

                    }

                    else {
                        setTimeout(function () {
                            $('#count').text('!!');

                            lightupID = [];
                            clicked = [];
                            j = 0;
                            change1();
                        }, 1000);
                    }
                }
    }
  }

  //Turns the game on.//
$('#on').on('click', function () {
        $('#count').text('0');

        for (i=0; i<30; i++) {
        random[i] = Math.ceil((Math.random() * 8));
        }
//selects default or strict mode//
        $('#strict').on('click', function () {
            strict=1;
        
        });

//turns the game off//
$('#off').on('click', function () {
        location.reload();
    });

//starts the game//
$('#startbtn').on('click', function () {

            $('#count').text(' 1');

            change1();

        });

//player to play game//
$('#btn1').on('click', function () {

            $('#btn1').addClass('lighton1');
            

            clicked.push(1);

            setTimeout(function () {
                $('#btn1').removeClass('lighton1');
            
            }, 250);

            checking();

        });

        $('#btn2').on('click', function () {

            $('#btn2').addClass('lighton2');
            

            clicked.push(2);

            setTimeout(function () {
                $('#btn2').removeClass('lighton2');

            }, 250);

            checking();
        });

        $('#btn3').on('click', function () {

            $('#btn3').addClass('lighton3');
            

            clicked.push(3);

            setTimeout(function () {
                $('#btn3').removeClass('lighton3');

            }, 250);

            checking();
        });

        $('#btn4').on('click', function () {

            $('#btn4').addClass('lighton4');
            

            clicked.push(4);

            setTimeout(function () {
                $('#btn4').removeClass('lighton4');

            }, 250);

            checking();
        });

        $('#btn5').on('click', function () {

            $('#btn5').addClass('lighton5');
            
            clicked.push(5);

            setTimeout(function () {
                $('#btn5').removeClass('lighton5');

            }, 250);

            checking();
        });

        $('#btn6').on('click', function () {

            $('#btn6').addClass('lighton6');
            

            clicked.push(6);

            setTimeout(function () {
                $('#btn6').removeClass('lighton6');

            }, 250);

            checking();
        });

        $('#btn7').on('click', function () {

            $('#btn7').addClass('lighton7');
            

            clicked.push(7);

            setTimeout(function () {
                $('#btn7').removeClass('lighton7');

            }, 250);

            checking();
        });

        $('#btn8').on('click', function () {

            $('#btn8').addClass('lighton8');
            

            clicked.push(8);

            setTimeout(function () {
                $('#btn8').removeClass('lighton8');

            }, 250);

            checking();
        });

    });








