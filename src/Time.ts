export default abstract class Time {
  private static _deltaTime: number;
  private static _time: number;
  private static _fps: number;

  public static _init() {
    this._deltaTime = 0;
    this._time = 0;
    this._fps;
  }

  public static _setFrame(frame: number) {
    this._deltaTime = frame - this._time;
    this._time = frame;
    this._fps = Math.round(1000 / this._deltaTime);
  }

  public static get deltaTime(): number {
    return this._deltaTime;
  }

  public static get time(): number {
    return this._time;
  }

  public static get fps(): number {
    return this._fps;
  }
}
