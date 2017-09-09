import Key from './Key';
import Keys from './Keys';
import { Screen } from '../rendering';
import { Collection } from '../utils';

export default abstract class Keyboard {
  private static _keys: Collection<Key>;
  
  public static _init(): void {
    this._keys = {};
    
    for (const key in Keys) {
      this._keys[key] = new Key(<Keys>key);
    }

    Screen.on(['keydown'], (e: KeyboardEvent) => {
      e.preventDefault();

      if (Keys[<any>e.code] && this._keys[e.code].isUp()) {
        this._keys[e.code]._state._switch();
      }
    });

    Screen.on(['keyup'], (e: KeyboardEvent) => {
      e.preventDefault();

      if (Keys[<any>e.code] && this._keys[e.code].isDown()) {
        this._keys[e.code]._state._switch();
      }
    });

    Screen.on(['keypress'], (e: KeyboardEvent) => {
      e.preventDefault();
    });
  }

  public static getKey(key: Keys): Key {
    return this._keys[key];
  }

  public static key(key: Keys): Key {
    return this.getKey(key);
  }

  public static isDown(key: Keys): boolean {
    return this._keys[key].isDown();
  }

  public static isUp(key: Keys): boolean {
    return this._keys[key].isUp();
  }
}
