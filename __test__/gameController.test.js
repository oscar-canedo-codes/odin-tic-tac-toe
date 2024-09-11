import { GameController } from "../src/components/gameController";
import { Player } from "../src/components/player";

describe("Game Controller Module", () => {
    let gameController, playerX, playerO;

    beforeEach(() => {
        playerX = Player("Player 1", "X");
        playerO = Player("Player 2", "O");
        gameController = GameController(playerX, playerO);
    });

    test("should start the game with Player X's turn", () => {
        expect(gameController.getCurrentPlayer().getMarker()).toBe("X");
    });

    test("should alternate turns between players", () => {
        gameController.makeMove(0);
        expect(gameController.getCurrentPlayer().getMarker()).toBe("O");
        gameController.makeMove(1);
        expect(gameController.getCurrentPlayer().getMarker()).toBe("X");
    });

    test('should detect a winning condition', () => {
        gameController.makeMove(0);
        gameController.makeMove(3);
        gameController.makeMove(1);
        gameController.makeMove(4);
        gameController.makeMove(2);
        expect(gameController.checkWinner()).toBe('X');
    });

    test('should detect a tie', () => {
        gameController.makeMove(0);
        gameController.makeMove(1);
        gameController.makeMove(2);
        gameController.makeMove(4);
        gameController.makeMove(3);
        gameController.makeMove(5);
        gameController.makeMove(7);
        gameController.makeMove(6);
        gameController.makeMove(8);
        expect(gameController.checkWinner()).toBe('Tie');
    });
});
