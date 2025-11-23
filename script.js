let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function clicked(index) {
  if (board[index] !== '' || !gameActive) {
    return;
  }

  board[index] = currentPlayer;
  document.getElementById(index).textContent = currentPlayer;

  checkResult();
}

function checkResult() {
  let roundWon = false;

  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    document.getElementById('turn').textContent = `${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  if (!board.includes('')) {
    document.getElementById('turn').textContent = "It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('turn').textContent = "It's "+currentPlayer+"'s turn";
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  document.getElementById('turn').textContent = "It's "+currentPlayer+"'s turn"
  
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).textContent = '';
  }
}
