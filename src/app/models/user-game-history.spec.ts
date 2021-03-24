import { v4 as uuidv4 } from 'uuid';

import { UserGameHistory } from './user-game-history';

describe('UserHistory', () => {
  it('should create an instance', () => {
    expect(new UserGameHistory(uuidv4(), new Date())).toBeTruthy();
  });
});
