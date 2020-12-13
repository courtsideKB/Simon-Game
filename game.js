var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
});

function playSound(name) {
    var media = new Audio('Sounds/' + name + ".mp3");
    media.play();
}

/* Generate random number for sequence */

function nextSequence() {
    var randomNumber = Math.random()
    randomNumber = Math.floor(randomNumber * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
 
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}



