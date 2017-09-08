export default abstract class Screen {
  private static _canvas: HTMLCanvasElement;
  private static _width: number;
  private static _height: number;

  public static _init(canvas: HTMLCanvasElement): void {
    this._canvas = canvas;
    this._width = canvas.width;
    this._height = canvas.height;

    window.addEventListener('resize', () => {
      this._canvas.width = window.innerWidth;
      this._canvas.height = window.innerHeight;
    });
  }

  public static get width(): number {
    return this._width;
  }

  public static get height(): number {
    return this._height;
  }

  public static on(eventNames: string[], eventHandler: Function): void {
    for (const eventName of eventNames) {
      window.addEventListener(eventName, (e: Event) => {
        eventHandler(e);
      });
    }
  }
}
