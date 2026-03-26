var screen = document.querySelector(".screen");
var startGameButton = document.getElementById("startGameButton");
var homeScreen = document.getElementById("homeScreen");
var gameScreen = document.getElementById("gameScreen");
var turtleGameScreen = document.getElementById("turtleGameScreen");
var currentScreen = "start";

//turtle game screen
var talkingTurtlePerson = document.getElementById("talkingTurtlePerson");
var talkingTurtlePersonBubble = document.getElementById("talkingTurtlePersonBubble");
var talkingNextButton = document.querySelector(".talkingNextButton");
var turtleGuessItemContainer = document.getElementById("turtleGuessItemContainer");
var turtleGuessItem1 = document.getElementById("turtleGuessItem1");
var turtleGuessItem2 = document.getElementById("turtleGuessItem2");
var turtleGuessItem3 = document.getElementById("turtleGuessItem3");

function updateScreen(screenValue) {
    currentScreen = screenValue;
    if (currentScreen == "gameMenu") {
        screen.style.backgroundColor = "pink";
        startGameButton.style.display = "none";
        gameScreen.style.display = "block";
    }

    if (currentScreen == "turtleGame") {
        screen.style.backgroundColor = "lightgreen";
        gameScreen.style.display = "none";
        turtleGameScreen.style.display = "block";
    }
}

function reverseAnimation(object, animation) {
    object.style.animation = "none";
    object.offsetHeight;
    object.style.animation = `${animation} 1s reverse forwards`;
}

function addAnimation(object, animation) {
    object.style.animation = "none";
    object.offsetHeight;
    object.style.animation = `${animation} 1s forwards`;
}

function talkingTurtleGameNext(text) {
    if (text == "talkingNext") {
        reverseAnimation(talkingTurtlePerson, "talkingPersonUp");
        reverseAnimation(talkingTurtlePersonBubble, "talkingBubbleUp");
        reverseAnimation(talkingNextButton, "talkingNextButtonUp");

        addAnimation(turtleGuessItemContainer, "turtleGuessItemContainerUp");
    }
}

function turtleGuessItemChoice(option) {
    reverseAnimation(turtleGuessItemContainer, "turtleGuessItemContainerUp");

}
