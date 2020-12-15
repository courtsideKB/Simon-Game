var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;

/* User Inputs */
$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

$(document).keypress(function () {
    if (!started) {
        $("#title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

/* Generate random number for sequence */

function nextSequence() {
    userClickedPattern = [];

    level++;
    $("#title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function playSound(name) {
    var media = new Audio('Sounds/' + name + ".mp3");
    media.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed")
    }, 100);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] != gamePattern[currentLevel]) {
        var media = new Audio("Sounds/wrong.mp3");
        media.play()
        $("body").addClass("game-over");;
        $("h1").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
    } else if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function () {
            nextSequence();
        }, 100);
    }
}