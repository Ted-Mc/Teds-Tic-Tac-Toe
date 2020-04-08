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
                checkWin("X", i, j);
            } else {
                gameTable.rows[i].cells[j].innerHTML = "O";
                checkWin("O", i, j);
            }
            state *= -1;
        }
    }
}

function checkWin(s, r, c) {
    if (gameTable.rows[r].cells[0].innerHTML == s) {
        if (gameTable.rows[r].cells[1].innerHTML == s) {
            if (gameTable.rows[r].cells[2].innerHTML == s) {
                declareWinner(s);
                return;
            }
        }
    } else if (gameTable.rows[0].cells[c].innerHTML == s) {
        if (gameTable.rows[1].cells[c].innerHTML == s) {
            if (gameTable.rows[2].cells[c].innerHTML == s) {
                declareWinner(s);
                return;
            }
        }
    }

    if (r == c) {
        if (gameTable.rows[0].cells[0].innerHTML == s) {
            if (gameTable.rows[1].cells[1].innerHTML == s) {
                if (gameTable.rows[2].cells[2].innerHTML == s) {
                    declareWinner(s);
                    return;
                }
            }
        }
    }
    else if (r + c == 2) {
        if (gameTable.rows[2].cells[0].innerHTML == s) {
            if (gameTable.rows[1].cells[1].innerHTML == s) {
                if (gameTable.rows[0].cells[2].innerHTML == s) {
                    declareWinner(s);
                    return;
                }
            }
        }
    }
}

function declareWinner(s) {
    document.getElementById("winMsg").innerHTML = s + " is the Winner!!";
    state = 0;
}
