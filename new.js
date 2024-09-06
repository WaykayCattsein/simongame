var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["green","red","yellow","blue"];
var level = 0;
var a = "a";


function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    level++;
    $("h1").text("Level " + level);
    $('.game-button').addClass("dis-none");


    setTimeout(function(){
        $('#' + randomChosenColor).addClass("pressed");
        setTimeout(removE, 1000);
    
        function removE(){
            $('#' + randomChosenColor).removeClass("pressed");
        };
        playSound(randomChosenColor);
    }, 1000);

    return(randomNumber);
}

$(".btn").click("click", handler);

function handler(){
    var userChosenColor = (this.id);
    userClickedPattern.push(userChosenColor);
    playSound(this.id);
    checkAnswer();
}

function playSound(name){
    var audio = new Audio("sounds/"+ name + ".mp3");
    audio.play();
    $('#' + name).addClass("pressed");
    setTimeout(function(){
        $('#' + name).removeClass("pressed");
    }, 100);
}

$(".game-button").click("click", function(){
        nextSequence();
        console.log(level);

        // alert("Yes");
    });

function checkAnswer(){

    if(userClickedPattern[userClickedPattern.length - 1] === gamePattern[userClickedPattern.length - 1]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
                nextSequence();
            }, 500);
            
            userClickedPattern = [];
        }
        else{
        }

    }
    else{
        startOver();
    }
}

function startOver(){
    $('.game-button').text("Restart");

    $('.game-button').removeClass("dis-none");
    $("h1").text("Game Over, Click the button to restart");
    $('body').addClass("game-over");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();

    setTimeout(function(){
        $('body').removeClass("game-over");
    }, 1000);

    playSound('wrong+.mp3');
    level = 0;
    userClickedPattern = [];
    gamePattern = [];
    a = 'a';
}