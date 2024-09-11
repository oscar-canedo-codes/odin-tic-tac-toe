import { GameController } from '../src/components/gameController';
import { Player } from '../src/components/player';

describe('Full Game Console Simulation', () => {
    test('should allow a full game to be played out', () => {
        const playerX = Player('Player 1', 'X');
        const playerO = Player('Player 2', 'O');
        const gameController = GameController(playerX, playerO);

        gameController.makeMove(0); // X
        gameController.makeMove(3); // O
        gameController.makeMove(1); // X
        gameController.makeMove(4); // O
        gameController.makeMove(2); // X wins

        expect(gameController.checkWinner()).toBe('X');
    });
});