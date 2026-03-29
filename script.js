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
var talkingSealPerson = document.getElementById("talkingSealPerson");
var talkingSealPersonBubble = document.getElementById("talkingSealPersonBubble");
var sealNextButton = document.getElementById("sealNextButton");
var sealRemoveNetContainer = document.getElementById("sealRemoveNetContainer");
var sealNet1 = document.getElementById("sealNet1");
var sealNet2 = document.getElementById("sealNet2");
var sealNet3 = document.getElementById("sealNet3");
var sealNet4 = document.getElementById("sealNet4");


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
        addAnimation(turtleNextButton, "nextButtonUp");
    }

    if (currentScreen == "sealGame") {
        screen.style.backgroundColor = "#5d8bc3";
        gameScreen.style.display = "none";
        sealGameScreen.style.display = "block";

        addAnimation(sealNextButton, "nextButtonUp");
    }
}

turtleNextCount = 0;
sealNextCount = 0;

function talkingNext(text) {
    if (text == "turtle") {
        if (turtleNextCount == 0){
            reverseAnimation(talkingTurtlePerson, "talkingPersonUp");
            reverseAnimation(talkingTurtlePersonBubble, "talkingBubbleUp");
            reverseAnimation(turtleNextButton, "nextButtonUp");

            addAnimation(turtleGuessItemContainer, "turtleGuessItemContainerUp");
            turtleNextCount += 1;

        } else if (turtleNextCount == 1) {
            reverseAnimation(turtleEnding, "turtleEndingUp");
            reverseAnimation(turtleEndingBubble, "turtleEndingBubbleUp");
            reverseAnimation(turtleNextButton, "nextButtonUp");

            setTimeout(() => {
                updateScreen("gameMenu");

            }, 1000);

            turtleNextCount += 1;
        }
    }

    if (text == "seal") {
        if (sealNextCount == 0){
            reverseAnimation(talkingSealPerson, "talkingPersonUp");
            reverseAnimation(talkingSealPersonBubble, "talkingBubbleUp");
            reverseAnimation(sealNextButton, "nextButtonUp");
            
            addAnimation(sealRemoveNetContainer, "sealRemoveNetContainerUp");
        }
    }
}

function turtleGuessItemChoice(option) {
    reverseAnimation(turtleGuessItemContainer, "turtleGuessItemContainerUp");

    addAnimation(turtleEnding, "turtleEndingUp");
    addAnimation(turtleEndingBubble, "turtleEndingBubbleUp");
    addAnimation(turtleNextButton, "nextButtonUp");
}

function sealRemoveNet(netNumber) {
    addAnimation(netNumber, "netFallDown");
    setTimeout(() => {
        netNumber.style.display = "none";
    }, 1000);

    if (netNumber == sealNet4) {
        setTimeout(() => {
            reverseAnimation(sealRemoveNetContainer, "sealRemoveNetContainerUp");
        }, 1000);
    }
}
