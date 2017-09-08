import { Time } from '../timing';
import { Scene } from '../root';
import { GameObject } from '../game-objects';

export default class Renderer {
  public context: CanvasRenderingContext2D;
  public scene: Scene;
  private animationFrame: number;
  private _updates: Function[];

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
    this.animationFrame = 0;
    this.scene = new Scene();
    this._updates = [];
  }

  public start(): void {
    if (!this.animationFrame) {
      this.animationFrame = requestAnimationFrame((frame: number) => {
        this.render(frame);
      });
    }
  }

  public attachUpdate(update: Function): void {
    this._updates.push(update);
  }

  private render(frame: number): void {
    Time._setFrame(frame);

    for (const update of this._updates) {
      update(frame);
    }

    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    for (const gameObjectName in this.scene.getAll()) {
      const gameObject = <GameObject>this.scene.get(gameObjectName);
      // Render gameObjects
    }

    this.animationFrame = requestAnimationFrame((frame: number) => {
      this.render(frame);
    });
  }
}
