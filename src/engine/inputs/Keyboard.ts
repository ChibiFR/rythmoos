import Key from './Key';
import KeyCodes from './KeyCodes';
import { Screen } from '../rendering';
import { Collection } from '../utils';

export default abstract class Keyboard {
  private static _keys: Collection<Key>;
  
  public static _init(): void {
    this._keys = {};
    
    for (const key in KeyCodes) {
      this._keys[key] = new Key(<KeyCodes>key);
    }

    Screen.on(['keydown'], (e: KeyboardEvent) => {
      e.preventDefault();

      if (KeyCodes[<any>e.code] && this._keys[e.code].isUp()) {
        this._keys[e.code]._state._switch();
      }
    });

    Screen.on(['keyup'], (e: KeyboardEvent) => {
      e.preventDefault();

      if (KeyCodes[<any>e.code] && this._keys[e.code].isDown()) {
        this._keys[e.code]._state._switch();
      }
    });

    Screen.on(['keypress'], (e: KeyboardEvent) => {
      e.preventDefault();
    });
  }

  public static getKey(key: KeyCodes): Key {
    return this._keys[key];
  }

  public static key(key: KeyCodes): Key {
    return this.getKey(key);
  }

  public static isDown(key: KeyCodes): boolean {
    return this._keys[key].isDown();
  }

  public static isUp(key: KeyCodes): boolean {
    return this._keys[key].isUp();
  }
}
