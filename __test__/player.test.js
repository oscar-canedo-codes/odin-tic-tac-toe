import { Player } from '../src/components/player';

describe('Player module', () => {
    test('should create a player with a name and marker', () => {
        const playerX = Player('Bert', 'X');
        expect(playerX.getName()).toBe('Bert');
        expect(playerX.getMarker()).toBe('X');

        const playerO = Player('Ernie', 'O');
        expect(playerO.getName()).toBe('Ernie');
        expect(playerO.getMarker()).toBe('O');
    });
});