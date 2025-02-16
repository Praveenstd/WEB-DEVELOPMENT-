/* script.js */
const board = document.getElementById("board");
const status = document.getElementById("status");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
let cells = [];
let currentPlayer = "X";
let boardState = ["", "", "", "", "", "", "", "", ""];

function createBoard() {
    board.innerHTML = "";
    cells = [];
    boardState.forEach((_, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = index;
        cell.addEventListener("click", handleMove);
        board.appendChild(cell);
        cells.push(cell);
    });
}

function handleMove(event) {
    const index = event.target.dataset.index;
    if (boardState[index] !== "" || checkWinner()) return;
    boardState[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    if (checkWinner()) {
        showPopup(`Player ${currentPlayer} Wins!`);
    } else if (boardState.every(cell => cell !== "")) {
        showPopup("It's a Draw!");
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        status.textContent = `Player ${currentPlayer}'s Turn`;
    }
}

function showPopup(message) {
    popupMessage.textContent = message;
    popup.style.display = "flex";
}

function closePopup() {
    popup.style.display = "none";
    resetGame();
}

function resetGame() {
    boardState = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    status.textContent = "Player X's Turn";
    createBoard();
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winPatterns.some(pattern => 
        pattern.every(index => boardState[index] === currentPlayer)
    );
}

createBoard();
