// Select all the cells
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

// Add click listener to each cell
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        // If cell is empty
        if (cell.textContent === '') {
            // Place current player's mark
            cell.textContent = currentPlayer;

            // Check for win
            if (checkWinner()) {
                alert(currentPlayer + ' wins!');
                resetGame();
            } 
            // Check for draw
            else if (isDraw()) {
                alert('It\'s a draw!');
                resetGame();
            } 
            else {
                // Switch player
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

// Check win conditions
function checkWinner() {
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], // columns
        [0,4,8], [2,4,6]           // diagonals
    ];

    return winPatterns.some(pattern => {
        return pattern.every(index =>
            cells[index].textContent === currentPlayer
        );
    });
}

// Check for draw
function isDraw() {
    return [...cells].every(cell => cell.textContent !== '');
}

// Reset the game
function resetGame() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}

// Handle reset button
document.getElementById('resetButton').addEventListener('click', resetGame);
