import { Alert } from './alert';
import { AlertType } from './../enums';

describe('Alert', () => {
  it('should create an instance', () => {
    expect(new Alert(AlertType.FormSuccess)).toBeTruthy();
  });
});
