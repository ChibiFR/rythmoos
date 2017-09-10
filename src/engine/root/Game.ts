import { Mouse, Keyboard } from '../inputs';
import { Screen, Renderer } from '../rendering';
import { TextMeasure } from '../graphics';
import { Time } from '../timing';
import Scene from './Scene';

export default class Game {
  public canvas: HTMLCanvasElement;
  public renderer: Renderer;
  private _scene: Scene;

  /**
   * Create a new Game.
   * @param canvas The canvas to create the game in.
   */
  constructor() {
    this.canvas = this.createCanvas();
    this.renderer = new Renderer(<CanvasRenderingContext2D>this.canvas.getContext('2d'));
    this._scene = this.renderer.scene;

    Time._init();
    Mouse._init();
    Keyboard._init();
    TextMeasure._init();
    Screen._init(this.canvas);
  }

  public get scene() {
    return this._scene;
  }

  public setScene(scene: Scene): void {
    this._scene = scene;
    this.renderer.scene = this._scene;
  }

  public start(): void {
    this.renderer.start();
  }

  private createCanvas(): HTMLCanvasElement {
    const canvas = document.createElement('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    return canvas;
  }

  public update(update: Function): void {
    this.scene.attachUpdate(update);
  }

  public globalUpdate(update: Function): void {
    this.renderer.attachUpdate(update);
  }
}
