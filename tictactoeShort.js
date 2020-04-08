/*global document*/
/*eslint no-unused-vars: "off"*/
var gameTable;
var state = 1;

function setUp() {
    state = 1;
    document.getElementById("reset").setAttribute("onClick", "setUp()");
    document.getElementById("winMsg").innerHTML = "";
    gameTable = document.getElementById("gameTable");
    gameTable.innerHTML = "";
    for (var i = 0; i < 3; i++) {
        var thisRow = document.createElement("tr");
        gameTable.appendChild(thisRow);
        for (var j = 0; j < 3; j++) {
            var thisSquare = document.createElement("td");
            thisSquare.setAttribute("class", "gameSquare");
            thisSquare.setAttribute("onClick", "squareClicked(" + i + "," + j + ")");
            thisSquare.innerHTML = " ";
            thisRow.appendChild(thisSquare);
        }
    }
}

function squareClicked(i, j) {
    if (state) {
        if (gameTable.rows[i].cells[j].innerHTML == " ") {
            if (state == 1) {
                gameTable.rows[i].cells[j].innerHTML = "X";
                checkWin("X");
            } else {
                gameTable.rows[i].cells[j].innerHTML = "O";
                checkWin("O");
            }
            state *= -1;
        }
    }
}

function checkWin(s) {
    var wins = [1, 1, 1, 1, 1, 1, 1, 1];
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (gameTable.rows[i].cells[j].innerHTML != s) {
                wins[i] = 0;
                wins[j + 3] = 0;
                if (i == j) {
                    wins[6] = 0;
                }
                if (i + j == 2) {
                    wins[7] = 0;
                }
            }
        }
    }
    if (Math.max.apply(null, wins)) {
        document.getElementById("winMsg").innerHTML = s + " is the Winner!!";
        state = 0;
    }
}