import { Gameboard } from "../components/gameboard";
import { Player } from "../components/player"

export const GameController = () => {
    const players = [Player("Player 1", "X"), Player("Player 2", "O")];
    let currentPlayerIndex = 0;

    const getCurrentPlayer = () => players[currentPlayerIndex];

    const switchTurn = () => {
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    };

    const makeMove = (index) => {
        const currentPlayer = getCurrentPlayer();
        const isMoveValid = Gameboard.updateBoard(index, currentPlayer.getMarker());

        console.log("Board State After Move:", Gameboard.getBoard()); // Log board state

        if (isMoveValid) {
            if (!checkWinner()) {
                switchTurn();
            }
        }
    };


    const checkWinner = () => {
        const board = Gameboard.getBoard();
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
            [0, 4, 8], [2, 4, 6]              // Diagonals
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];  // Return 'X' or 'O'
            }
        }

        // Check for tie condition
        if (board.every(cell => cell !== null)) {
            return 'Tie';  // Return 'Tie' if all cells are filled
        }

        return null;
    };


    const resetGame = () => {
        Gameboard.resetBoard();
        currentPlayerIndex = 0;
    };

    return { makeMove, getCurrentPlayer, checkWinner, resetGame };
};
