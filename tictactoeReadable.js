/*global document*/
/*eslint no-unused-vars: "off"*/
var boardSize = 3;
var gameTable;
var oTurn = false;
var gameOver = false;
var goodSoFar = true;
var arr;
function setUp() {
    arr = new Array(5).fill(3);
    console.log(arr);
    document.getElementById("reset").setAttribute("onClick", "reset()");
    // Build the Game Table square-by-square
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

function squareClicked(i, j) {
    if (gameOver){
        return;
    }
    //console.log(i, j);
    if (gameTable.rows[i].cells[j].innerHTML == " ") {
        if (oTurn) {
            gameTable.rows[i].cells[j].innerHTML = "O";
        } else {
            gameTable.rows[i].cells[j].innerHTML = "X";
        }
        oTurn = !oTurn;
        checkForWinner();
    }
}

function checkForWinner() {
    if (checkRows("X")) {
        declareWinner("X");
    }
    else if (checkRows("O")) {
        declareWinner("O");
    }
    else if (checkColumns("X")) {
        declareWinner("X");
    }
    else if (checkColumns("O")) {
        declareWinner("O");
    }
    else if (checkDiagonals("X")) {
        declareWinner("X");
    }
    else if (checkDiagonals("O")) {
        declareWinner("O");
    } 
}

function checkRows(s){   
    for (var i = 0; i < boardSize; i++){
        goodSoFar = true;  // Assume all squares on this row are X's (or O's)
        // Now check for squares that aren't
        for (var j = 0; j < boardSize; j++){
            if (gameTable.rows[i].cells[j].innerHTML != s){
                goodSoFar = false;
            }
        }
        if (goodSoFar){  // The row was all X's (or O's)
            return true;
        }
    }
}

function checkColumns(s){
    for (var i = 0; i < boardSize; i++){
        goodSoFar = true;
        for (var j = 0; j < boardSize; j++){
            if (gameTable.rows[j].cells[i].innerHTML != s){
                goodSoFar = false;
            }
        }
        if (goodSoFar){
            return true;
        } 
    }
}

function checkDiagonals(s){
    // Check the main diagonal
    goodSoFar = true;
    for (var i = 0; i < boardSize; i++){
        if (gameTable.rows[i].cells[i].innerHTML != s){
                goodSoFar = false;
        }
    }
    if (goodSoFar){
         return true;
    }
    
    // Check the other diagonal
    goodSoFar = true; 
    for (i = 0; i < boardSize; i++){
        if (gameTable.rows[boardSize - 1 - i].cells[i].innerHTML != s){
                goodSoFar = false;
        }
    }
    if (goodSoFar){
         return true;
    }
}

function declareWinner (s){
    document.getElementById("winMsg").innerHTML = s + " is the Winner!!";
    gameOver = true;
}

function reset (){
    gameTable.innerHTML = "";
    setUp();
    document.getElementById("winMsg").innerHTML = "";
    gameOver = false;
    oTurn = false;
}