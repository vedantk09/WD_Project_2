let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function handleCellClick(index) {
    if (!gameOver && !board[index]) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].textContent = currentPlayer;
        document.getElementsByClassName('cell')[index].classList.add(currentPlayer);
        if (checkWinner()) {
            document.getElementById('status').textContent = `Player ${currentPlayer} wins!`;
            gameOver = true;
        } else if (board.every((cell) => cell !== '')) {
            document.getElementById('status').textContent = "It's a draw!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    }
    document.getElementById('status').textContent = "Player X's turn";
}

resetBoard();