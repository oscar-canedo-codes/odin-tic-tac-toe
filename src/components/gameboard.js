let board = Array(9).fill(null);  // Initialize a 3x3 board with nulls

export const Gameboard = {
    getBoard: () => board,

    updateBoard: (index, marker) => {
        if (board[index] === null) {  // Only allow updating if the cell is null
            board[index] = marker;
            return true;
        }
        return false;
    },

    resetBoard: () => {
        board = Array(9).fill(null);  // Reset the board to all null values
    }
};
