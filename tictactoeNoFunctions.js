/*global document*/
/*eslint no-unused-vars: "off"*/
var boardSize = 3;
var gameTable;
var oTurn = false;
var gameOver = false;

function setUp() {
    document.getElementById("reset").setAttribute("onClick", "reset()");
    gameTable = document.getElementById("gameTable");
    for (var i = 0; i < boardSize; i++) {
        var thisRow = document.createElement("tr");
        gameTable.appendChild(thisRow);
        for (var j = 0; j < boardSize; j++) {
            var thisSquare = document.createElement("td");
            thisSquare.setAttribute("class", "gameSquare");
            thisSquare.setAttribute("onClick", "squareClicked(" + i + "," + j + ")");
            thisSquare.innerHTML = " ";
            thisRow.appendChild(thisSquare);
        }
    }
}

function squareClicked(r, c) {
    if (gameOver) {
        return;
    }
    if (gameTable.rows[r].cells[c].innerHTML == " ") {
        if (oTurn) {
            gameTable.rows[r].cells[c].innerHTML = "O";
        } else {
            gameTable.rows[r].cells[c].innerHTML = "X";
        }
        oTurn = !oTurn;

        for (var i = 0; i < boardSize; i++) {
            if (gameTable.rows[i].cells[0].innerHTML == "X" && gameTable.rows[i].cells[1].innerHTML == "X" && gameTable.rows[i].cells[2].innerHTML == "X") {
                document.getElementById("winMsg").innerHTML = "X is the Winner!!";
                gameOver = true;
            } else if (gameTable.rows[i].cells[0].innerHTML == "O" && gameTable.rows[i].cells[1].innerHTML == "O" && gameTable.rows[i].cells[2].innerHTML == "O") {
                document.getElementById("winMsg").innerHTML = "O is the Winner!!";
                gameOver = true;
            }
        }

        for (i = 0; i < boardSize; i++) {
            if (gameTable.rows[0].cells[i].innerHTML == "X" && gameTable.rows[1].cells[i].innerHTML == "X" && gameTable.rows[2].cells[i].innerHTML == "X") {
                document.getElementById("winMsg").innerHTML = "X is the Winner!!";
                gameOver = true;
            } else if (gameTable.rows[0].cells[i].innerHTML == "O" && gameTable.rows[1].cells[i].innerHTML == "O" && gameTable.rows[2].cells[i].innerHTML == "O") {
                document.getElementById("winMsg").innerHTML = "O is the Winner!!";
                gameOver = true;
            }
        }

        if (gameTable.rows[0].cells[0].innerHTML == "X" && gameTable.rows[1].cells[1].innerHTML == "X" && gameTable.rows[2].cells[2].innerHTML == "X") {
            document.getElementById("winMsg").innerHTML = "X is the Winner!!";
            gameOver = true;
        } else if (gameTable.rows[0].cells[0].innerHTML == "O" && gameTable.rows[1].cells[1].innerHTML == "O" && gameTable.rows[2].cells[2].innerHTML == "O") {
            document.getElementById("winMsg").innerHTML = "O is the Winner!!";
            gameOver = true;
        }

        if (gameTable.rows[0].cells[2].innerHTML == "X" && gameTable.rows[1].cells[1].innerHTML == "X" && gameTable.rows[2].cells[0].innerHTML == "X") {
            document.getElementById("winMsg").innerHTML = "X is the Winner!!";
            gameOver = true;
        } else if (gameTable.rows[0].cells[2].innerHTML == "O" && gameTable.rows[1].cells[1].innerHTML == "O" && gameTable.rows[2].cells[0].innerHTML == "O") {
            document.getElementById("winMsg").innerHTML = "O is the Winner!!";
            gameOver = true;
        }
    }
}

function reset() {
    gameTable.innerHTML = "";
    setUp();
    document.getElementById("winMsg").innerHTML = "";
    gameOver = false;
    oTurn = false;
}
