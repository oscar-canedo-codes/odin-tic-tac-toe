import { Gameboard } from "../src/components/gameboard";

let gameboard;

describe("Gameboard Module", () => {
    beforeEach(() => {
        /* When you define the Gameboard object as an IIFE, it immediately returns an object that represents the single instance of the gameboard.
        
                Thus, instead of invoking Gameboard() like a regular function, you just reference it directly: */

        // SINGLETON -> A design pattern where only one instance of an object or class is created.
        gameboard = Gameboard;
    });

    test("should initialize an empty gameboard", () => {
        expect(gameboard.getBoard()).toEqual([
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ]);
    });

    test("should allow updating the board", () => {
        gameboard.updateBoard(0, "X");
        expect(gameboard.getBoard()[0]).toBe("X");

        gameboard.updateBoard(4, "O");
        expect(gameboard.getBoard()[4]).toBe("O");
    });

    test("Should not allow updates to an already occupied position", () => {
        gameboard.updateBoard(0, "X"); // Place 'X' in position 0
        expect(gameboard.updateBoard(0, "O")).toBe(false); // Attempt to place 'O' in the same spot should return false
        expect(gameboard.getBoard()[0]).toBe("X"); // Ensure the position still holds 'X'
    });
    test("should update the board correctly", () => {
        const board = Gameboard.getBoard();
        expect(board[0]).toBe(null); // Board should start with null in all positions
        Gameboard.updateBoard(0, "X");
        expect(board[0]).toBe("X"); // After the move, position 0 should be 'X'
        Gameboard.updateBoard(1, "O");
        expect(board[1]).toBe("O"); // After the move, position 1 should be 'O'
    });
});
