let moveCounter = 0;
let gameOver = false;
let winner = "None";
let start = false;

let gameState = [];
for (var i = 0; i < 3; i++) {
    gameState[i] = [Math.random(), Math.random(), Math.random()];
}

function gameStart() {
    start = true;
    alert("Game started.");
    document.getElementById("turn").innerHTML = "Player 1's turn."
}

// game state checker

function gameStateCheck() {
    for (var i = 0; i < 3; i++) {
        if (gameState[i][0] == gameState[i][1] && gameState[i][0] == gameState[i][2]) {
            gameOver = true;
            if (gameState[i][0] == 1) {
                winner = "Player 1 (X)";
            }
            else {
                winner = "Player 2 (O)";
            }
        }
        else if (gameState[0][i] == gameState[1][i] && gameState[0][i] == gameState[2][i]) {
            gameOver = true;
            if (gameState[0][i] == 1) {
                winner = "Player 1 (X)";
            }
            else {
                winner = "Player 2 (O)";
            }
        }
        else if (gameState[0][0] == gameState[1][1] && gameState[0][0] == gameState[2][2]) {
            gameOver = true;
            if (gameState[0][0] == 1) {
                winner = "Player 1 (X)";
            }
            else {
                winner = "Player 2 (O)";
            }
        }
        else if (gameState[0][2] == gameState[1][1] && gameState[0][2] == gameState[2][0]) {
            gameOver = true;
            if (gameState[0][2] == 1) {
                winner = "Player 1 (X)";
            }
            else {
                winner = "Player 2 (O)";
            }   
        }
    }
    if (moveCounter == 9 && gameOver == false) {
        winner = "Tie";
        document.getElementById("tie").innerHTML = "It was a tie."
        gameOver == true;
    }
    if (gameOver == true) {
        document.getElementById("gameEnd").innerHTML = "Congratulations " + winner + "!";
        start = false;
    }
    if (moveCounter % 2 == 0 && !gameOver) {
        document.getElementById("turn").innerHTML = "Player 1's turn."
    }
    else if (moveCounter % 2 == 1 && !gameOver) {
        document.getElementById("turn").innerHTML = "Player 2's turn."
    }
}

console.log(start);
console.log(gameOver);
console.log(gameState);

function m1() {
    if (start == true) {
    if (moveCounter % 2 == 0) {
       document.getElementById("b1").innerHTML = "X";
       gameState[0][0] = 1;
    }
    else {
        document.getElementById("b1").innerHTML = "O";
        gameState[0][0] = 0;
    }
    moveCounter++;
    gameStateCheck();
    }
    else {
        alert("Game has not started/is over.");
    }
}

function m2() {
    if (start == true) {
    if (moveCounter % 2 == 0) {
       document.getElementById("b2").innerHTML = "X";
       gameState[0][1] = 1;
    }
    else {
        document.getElementById("b2").innerHTML = "O";
        gameState[0][1] = 0;
    }
    moveCounter++;
    gameStateCheck();
    }
    else {
        alert("Game has not started/is over.");
    }
}

function m3() {
    if (start == true) {
    if (moveCounter % 2 == 0) {
       document.getElementById("b3").innerHTML = "X";
       gameState[0][2] = 1;
    }
    else {
        document.getElementById("b3").innerHTML = "O";
        gameState[0][2] = 0;
    }
    moveCounter++;
    gameStateCheck();
    }
    else {
        alert("Game has not started/is over.");
    }
}

function m4() {
    if (start == true) {
    if (moveCounter % 2 == 0) {
       document.getElementById("b4").innerHTML = "X";
       gameState[1][0] = 1;
    }
    else {
        document.getElementById("b4").innerHTML = "O";
        gameState[1][0] = 0;
    }
    moveCounter++;
    gameStateCheck();
}
    else {
        alert("Game has not started/is over.");
    }
}

function m5() {
    if (start == true) {
    if (moveCounter % 2 == 0) {
       document.getElementById("b5").innerHTML = "X";
       gameState[1][1] = 1;
    }
    else {
        document.getElementById("b5").innerHTML = "O";
        gameState[1][1] = 0;
    }
    moveCounter++;
    gameStateCheck();
}
    else {
        alert("Game has not started/is over.");
    }
}

function m6() {
    if (start == true) {
    if (moveCounter % 2 == 0) {
       document.getElementById("b6").innerHTML = "X";
       gameState[1][2] = 1;
    }
    else {
        document.getElementById("b6").innerHTML = "O";
        gameState[1][2] = 0;
    }
    moveCounter++;
    gameStateCheck();
}
    else {
        alert("Game has not started/is over.");
    }
}

function m7() {
    if (start == true) {
    if (moveCounter % 2 == 0) {
       document.getElementById("b7").innerHTML = "X";
       gameState[2][0] = 1;
    }
    else {
        document.getElementById("b7").innerHTML = "O";
        gameState[2][0] = 0;
    }
    moveCounter++;
    gameStateCheck();
}
    else {
        alert("Game has not started/is over.");
    }
}

function m8() {
    if (start == true) {
    if (moveCounter % 2 == 0) {
       document.getElementById("b8").innerHTML = "X";
       gameState[2][1] = 1;
    }
    else {
        document.getElementById("b8").innerHTML = "O";
        gameState[2][1] = 0;
    }
    moveCounter++;
    gameStateCheck();
}
    else {
        alert("Game has not started/is over.");
    }
}

function m9() {
    if (start == true) {
    if (moveCounter % 2 == 0) {
       document.getElementById("b9").innerHTML = "X";
       gameState[2][2] = 1;
    }
    else {
        document.getElementById("b9").innerHTML = "O";
        gameState[2][2] = 0;
    }
    moveCounter++;
    gameStateCheck();
}
    else {
        alert("Game has not started/is over.");
    }
}
