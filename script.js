var screen = document.querySelector(".screen");
var startGameButton = document.getElementById("startGameButton");
var homeScreen = document.getElementById("homeScreen");
var gameScreen = document.getElementById("gameScreen");
var turtleGameScreen = document.getElementById("turtleGameScreen");
var sealGameScreen = document.getElementById("sealGameScreen");
var currentScreen = "start";

//title screen
var gameTitleContainer = document.getElementById("gameTitleContainer");

//turtle game screen
var talkingTurtlePerson = document.getElementById("talkingTurtlePerson");
var talkingTurtlePersonBubble = document.getElementById("talkingTurtlePersonBubble");
var turtleNextButton = document.getElementById("turtleNextButton");
var turtleGuessItemContainer = document.getElementById("turtleGuessItemContainer");
var turtleGuessItem1 = document.getElementById("turtleGuessItem1");
var turtleGuessItem2 = document.getElementById("turtleGuessItem2");
var turtleGuessItem3 = document.getElementById("turtleGuessItem3");
var turtleEnding = document.getElementById("turtleEnding");
var turtleEndingBubble = document.getElementById("turtleEndingBubble");

//seal game screen
var sealNextButton = document.getElementById("sealNextButton");


//animation functions
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

function updateScreen(screenValue) {
    currentScreen = screenValue;
    if (currentScreen == "gameMenu") {
        screen.style.backgroundColor = "pink";
        startGameButton.style.display = "none";
        gameTitleContainer.style.display = "none";
        turtleGameScreen.style.display = "none";
        sealGameScreen.style.display = "none";

        gameScreen.style.display = "block";
    }

    if (currentScreen == "turtleGame") {
        screen.style.backgroundColor = "#34487C";
        gameScreen.style.display = "none";
        turtleGameScreen.style.display = "block";
    
        addAnimation(talkingTurtlePerson, "talkingPersonUp");
        addAnimation(talkingTurtlePersonBubble, "talkingBubbleUp");
        addAnimation(turtleNextButton, "turtleNextButtonUp");
    }

    if (currentScreen == "sealGame") {
        screen.style.backgroundColor = "#5d8bc3";
        gameScreen.style.display = "none";
        sealGameScreen.style.display = "block";

        addAnimation(sealNextButton, "sealNextButtonUp");
    }
}

turtleNextCount = 0

function talkingNext(text) {
    if (text == "turtle") {
        if (turtleNextCount == 0){
            reverseAnimation(talkingTurtlePerson, "talkingPersonUp");
            reverseAnimation(talkingTurtlePersonBubble, "talkingBubbleUp");
            reverseAnimation(turtleNextButton, "turtleNextButtonUp");

            addAnimation(turtleGuessItemContainer, "turtleGuessItemContainerUp");
            turtleNextCount += 1;

        } else if (turtleNextCount == 1) {
            reverseAnimation(turtleEnding, "turtleEndingUp");
            reverseAnimation(turtleEndingBubble, "turtleEndingBubbleUp");
            reverseAnimation(turtleNextButton, "turtleNextButtonUp");

            setTimeout(() => {
                updateScreen("gameMenu");

            }, 1000);

            turtleNextCount += 1;
        }
    }
}

function turtleGuessItemChoice(option) {
    reverseAnimation(turtleGuessItemContainer, "turtleGuessItemContainerUp");

    addAnimation(turtleEnding, "turtleEndingUp");
    addAnimation(turtleEndingBubble, "turtleEndingBubbleUp");
    addAnimation(turtleNextButton, "turtleNextButtonUp")
}
