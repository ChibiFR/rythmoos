export default class InputState {
  private _pressed: boolean;

  constructor() {
    this._pressed = false;
  }

  public _switch(): void {
    this._pressed = !this._pressed;
  }

  public isUp(): boolean {
    return this._pressed === false;
  }

  public isDown(): boolean {
    return this._pressed === true;
  }
}
