import KeyCodes from './KeyCodes';
import InputState from './InputState';
import { Screen } from '../rendering';

export default class Key {
  public readonly key: KeyCodes;
  public _state: InputState;

  constructor(key: KeyCodes) {
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
