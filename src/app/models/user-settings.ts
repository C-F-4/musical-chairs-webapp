import { v4 as uuidv4 } from "uuid";
import { Theme } from './../enums';
import { IUserSettings } from "../interfaces";

export class UserSettings implements IUserSettings {
  id: string;
  selectedTheme: Theme;

  constructor(theme?: Theme) {
    this.id = uuidv4();
    this.selectedTheme = theme || Theme.Default;
  }
}
