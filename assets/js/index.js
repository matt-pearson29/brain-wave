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

        //set interval length
        if (count <= 10) {
            off = 400;
            on = 800;

        }

        else {
            off = 250;
            on = 500;
        }

               x = setInterval(function () {

                if (random[j] == 1) {

                    lit = 'light1';
                    $('#btn1').addClass(lit);
                    
                    litID.push(1);


                    setTimeout(function () {

                        $('#btn1').removeClass(lit);

                    }, off);

                }

                else if (random[j] == 2) {

                    lit = 'light2';
                    $('#btn2').addClass(lit);
                    
                    litID.push(2);


                    setTimeout(function () {

                        $('#btn2').removeClass(lit);

                    }, off);

                }

                else if (random[j] == 3) {

                    lit = 'light3';
                    $('#btn3').addClass(lit);
                    
                    litID.push(3)


                    setTimeout(function () {

                        $('#btn3').removeClass(lit);

                    }, off);

                }

                else if (random[j] == 4) {

                    lit = 'light4';
                    $('#btn4').addClass(lit);
                    
                    litID.push(4);


                    setTimeout(function () {

                        $('#btn4').removeClass(lit);

                    }, off);

                }
                else if (random[j] == 5) {

                    lit = 'light5';
                    $('#btn5').addClass(lit);
                
                    litID.push(5);


                    setTimeout(function () {

                        $('#btn5').removeClass(lit);

                    }, off);

                }
                else if (random[j] == 6) {

                    lit = 'light6';
                    $('#btn6').addClass(lit);
                    
                    litID.push(6);


                    setTimeout(function () {

                        $('#btn6').removeClass(lit);

                    }, off);

                }
                else if (random[j] == 7) {

                    lit = 'light7';
                    $('#btn7').addClass(lit);
                    
                    litID.push(7);


                    setTimeout(function () {

                        $('#btn7').removeClass(lit);

                    }, off);

                }
                else  {

                    lit = 'light8';
                    
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


    function checking() {

        if (litID.length == clicked.length) {

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

                            litID = [];
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

            $('#count').text('1');

            change1();

        });

//player to play game//
$('#btn1').on('click', function () {

            $('#btn1').addClass('light1');
            

            clicked.push(1);

            setTimeout(function () {
                $('#btn1').removeClass('light1');

            }, 250);

            checking();

        });

        $('#btn2').on('click', function () {

            $('#btn2').addClass('light2');
            

            clicked.push(2);

            setTimeout(function () {
                $('#btn2').removeClass('light2');

            }, 250);

            checking();
        });

        $('#btn3').on('click', function () {

            $('#btn3').addClass('light3');
            

            clicked.push(3);

            setTimeout(function () {
                $('#btn3').removeClass('light3');

            }, 250);

            checking();
        });

        $('#btn4').on('click', function () {

            $('#btn4').addClass('light4');
            

            clicked.push(4);

            setTimeout(function () {
                $('#btn4').removeClass('light4');

            }, 250);

            checking();
        });

        $('#btn5').on('click', function () {

            $('#btn5').addClass('light5');
            
            clicked.push(5);

            setTimeout(function () {
                $('#btn5').removeClass('light5');

            }, 250);

            checking();
        });

        $('#btn6').on('click', function () {

            $('#btn6').addClass('light6');
            

            clicked.push(6);

            setTimeout(function () {
                $('#btn6').removeClass('light6');

            }, 250);

            checking();
        });

        $('#btn7').on('click', function () {

            $('#btn7').addClass('light7');
            

            clicked.push(7);

            setTimeout(function () {
                $('#btn7').removeClass('light7');

            }, 250);

            checking();
        });

        $('#btn8').on('click', function () {

            $('#btn8').addClass('light8');
            

            clicked.push(8);

            setTimeout(function () {
                $('#btn8').removeClass('light8');

            }, 250);

            checking();
        });

    });








