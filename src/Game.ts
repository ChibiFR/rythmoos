import Mouse from './Mouse';
import Screen from './Screen';
import Time from './Time';
import Renderer from './Renderer';

export default class Game {
  public canvas: HTMLCanvasElement;
  public renderer: Renderer;

  /**
   * Create a new Game.
   * @param canvas The canvas to create the game in.
   */
  constructor() {
    this.canvas = this.createCanvas();
    this.renderer = new Renderer(<CanvasRenderingContext2D>this.canvas.getContext('2d'));
  }

  public start(): void {
    Mouse._init();
    Screen._init(this.canvas);
    Time._init();

    this.renderer.start();
  }

  private createCanvas(): HTMLCanvasElement {
    const canvas = document.createElement('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    return canvas;
  }
}
