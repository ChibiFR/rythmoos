import { Point } from '../graphics';
import { Time } from '../timing';
import { Scene } from '../root';
import { RotationCenters } from '../physics';
import {
  GameObject,
  GameObjectResolvable,
  GameObjectTypes,
  Group,
  Rectangle,
  Circle,
  Shape,
  Label,
  Image
} from '../game-objects';
import Screen from './Screen';

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
      update();
    }

    for (const update of this.scene.updates) {
      update();
    }

    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    for (const gameObjectResolvableName in this.scene.getAll()) {
      const gameObjectResolvable = <GameObjectResolvable>this.scene.get(gameObjectResolvableName);

      if (gameObjectResolvable instanceof Group) {
        for (const gameObjectName in this.scene.getAll()) {
          const gameObject = <GameObject>gameObjectResolvable.get(gameObjectName);

          this.setRenderContext(gameObject);
          this.renderGameObject(gameObject);
          this.restoreRenderContext(gameObject);
        }
      } else {
        this.setRenderContext(gameObjectResolvable);
        this.renderGameObject(gameObjectResolvable);
        this.restoreRenderContext(gameObjectResolvable);
      }
    }

    this.animationFrame = requestAnimationFrame((frame: number) => {
      this.render(frame);
    });
  }

  private renderGameObject(gameObject: GameObject): void {
    gameObject.update();

    if (!gameObject.visible) return;

    if (gameObject instanceof Rectangle) {

      if (gameObject.fill) {
        this.context.fillStyle = gameObject.color;
        this.context.fillRect(
          gameObject.x,
          gameObject.y,
          gameObject.width,
          gameObject.height
        );
      } else {
        this.context.strokeStyle = gameObject.color;
        this.context.strokeRect(
          gameObject.x,
          gameObject.y,
          gameObject.width,
          gameObject.height
        );
      }

      return;
    }

    if (gameObject instanceof Circle) {
      if (gameObject.size === 0) return;

      this.context.beginPath();
      this.context.arc(gameObject.x, gameObject.y, gameObject.size / 2, 0, 2 * Math.PI);

      if (gameObject.fill) {
        this.context.fillStyle = gameObject.color;
        this.context.fill();
      } else {
        this.context.strokeStyle = gameObject.color;
        this.context.stroke();
      }

      return;
    }

    if (gameObject instanceof Shape) {
      this.context.beginPath();
      this.context.moveTo(gameObject.x, gameObject.y);

      for (const pathPoint of gameObject.model.path) {
        this.context.lineTo(pathPoint[0], pathPoint[1]);
      }

      if (gameObject.fill) {
        this.context.fillStyle = gameObject.color;
        this.context.fill();
      } else {
        this.context.strokeStyle = gameObject.color;
        this.context.stroke();
      }

      return;
    }

    if (gameObject instanceof Label) {
      this.context.font = `${gameObject.font.fontSize}px ${gameObject.font.fontName}`;

      if (gameObject.fill) {
        this.context.fillStyle = gameObject.font.color;
        this.context.fillText(gameObject.text, gameObject.x, gameObject.y);
      } else {
        this.context.strokeStyle = gameObject.font.color;
        this.context.strokeText(gameObject.text, gameObject.x, gameObject.y);
      }

      return;
    }

    if (gameObject instanceof Image) {
      if (gameObject.ready) {
        this.context.drawImage(gameObject.image, gameObject.x, gameObject.y);
      }
    }
  }

  private setRenderContext(gameObject: GameObject): void {
    if (gameObject.hasRenderContextSettings()) {
      this.context.save();
      gameObject.renderContextSettings(this.context);
    }

    if (gameObject.rotation) {
      let rotationCenter: Point;

      switch (gameObject.rotationCenter) {
        case RotationCenters.WORLD:
          rotationCenter = Screen.center;
          break;
        case RotationCenters.SELF:
        default:
          rotationCenter = gameObject.center;
          break
      }

      this.context.save();
      this.context.translate(rotationCenter.x, rotationCenter.y);
      this.context.rotate(gameObject.rotation * Math.PI / 180);
      this.context.translate(-rotationCenter.x, -rotationCenter.y);
    }

    if (gameObject.scale !== 1) {
      this.context.scale(gameObject.scale, gameObject.scale);
    }
  }

  private restoreRenderContext(gameObject: GameObject): void {
    if (gameObject.scale !== 1) {
      this.context.scale(1, 1);
    }

    if (gameObject.rotation) {
      this.context.restore();
    }

    if (gameObject.hasRenderContextSettings()) {
      this.context.restore();
    }
  }
}
