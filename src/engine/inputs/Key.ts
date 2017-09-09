import Keys from './Keys';
import InputState from './InputState';
import { Screen } from '../rendering';

export default class Key {
  public readonly key: Keys;
  public _state: InputState;

  constructor(key: Keys) {
    this.key = key;
    this._state = new InputState();
  }

  public isDown(): boolean {
    return this._state.isDown();
  }

  public isUp(): boolean {
    return this._state.isUp();
  }
}
