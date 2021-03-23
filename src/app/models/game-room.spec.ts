import { GameRoom } from './game-room';
import { GameType } from './../enums';

describe('GameRoom', () => {
  it('should create an instance', () => {
    expect(new GameRoom(GameType.MusicalChairs)).toBeTruthy();
  });
});
