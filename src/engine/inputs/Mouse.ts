import { Screen } from '../rendering';
import { Point } from '../graphics';
import InputState from './InputState';

export default abstract class Mouse {
  private static _cursor: Point;
  private static _leftClick: InputState;
  private static _middleClick: InputState;
  private static _rightClick: InputState;

  public static _init(): void {
    this._cursor = new Point(Screen.width / 2, Screen.height / 2);
    this._leftClick = new InputState();
    this._middleClick = new InputState();
    this._rightClick = new InputState();

    this.initEvents();
  }

  public static get cursor(): Point {
    return this._cursor;
  }

  public static get cursorX(): number {
    return this.cursor.x;
  }

  public static get cursorY(): number {
    return this.cursor.y;
  }

  public static get buttonDown(): boolean {
    return (this.leftButtonDown || this.middleButtonDown || this.rightButtonDown);
  }

  public static get leftButtonDown(): boolean {
    return this._leftClick.isDown();
  }

  public static get middleButtonDown(): boolean {
    return this._middleClick.isDown();
  }

  public static get rightButtonDown(): boolean {
    return this._rightClick.isDown();
  }

  public static get leftButtonUp(): boolean {
    return this._leftClick.isUp();
  }

  public static get middleButtonUp(): boolean {
    return this._middleClick.isUp();
  }

  public static get rightButtonUp(): boolean {
    return this._rightClick.isUp();
  }

  private static initEvents(): void {
    Screen.on(['mousemove'], (e: MouseEvent) => {
      this._cursor.x = e.clientX;
      this._cursor.y = e.clientY;
    });

    Screen.on(['mousedown', 'mouseup'], (e: MouseEvent) => {
      e.preventDefault();

      switch(e.button) {
        case 0:
          this._leftClick._switch();
          break;
        case 1:
          this._middleClick._switch();
          break;
        case 2:
          this._rightClick._switch();
          break;
      }
    });

    Screen.on(['contextmenu'], (e: MouseEvent) => {
     e.preventDefault();
    });
  }
}
