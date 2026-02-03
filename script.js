var screen = document.querySelector(".screen");
var startGameButton = document.getElementById("startGameButton");
var homeScreen = document.getElementById("homeScreen");
var gameScreen = document.getElementById("gameScreen");
var turtleGameScreen = document.getElementById("turtleGameScreen");
var currentScreen = "start";

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

