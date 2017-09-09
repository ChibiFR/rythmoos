export default abstract class Screen {
  private static _canvas: HTMLCanvasElement;
  private static _width: number;
  private static _height: number;
  private static _onResize: (event: Event) => void;

  public static _init(canvas: HTMLCanvasElement): void {
    this._canvas = canvas;
    this._width = window.innerWidth;
    this._height = window.innerHeight;
    
    this._onResize = (event: Event): void => {};

    window.addEventListener('resize', (event: Event) => {
      this._width = window.innerWidth;
      this._height = window.innerHeight;
      this._canvas.width = this.width;
      this._canvas.height = this.height;

      this._onResize(event);
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

  public static onResize(handler: Function): void {
    this._onResize = <(event: Event) => void>handler;
  }
}
