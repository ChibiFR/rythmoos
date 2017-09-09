import { Point } from '../graphics';
import GameObjectTypes from './GameObjectTypes';

export default class GameObject {
  public readonly name: string;
  public visible: boolean;
  protected _type: GameObjectTypes;
  protected _point: Point;
  protected _update: Function;
  protected _contextSettings: ((context: CanvasRenderingContext2D) => void)|null;

  constructor(name: string, point?: Point, visible?: boolean) {
    this.name = name;
    this._point = point ? point : new Point(0, 0);
    
    if (visible === undefined) {
      this.visible = point ? true : false;
    } else {
      this.visible = visible;
    }

    this._update = () => {};

    this._contextSettings = null;

    this._type = GameObjectTypes.OTHER;
  }

  public get type(): GameObjectTypes {
    return this._type;
  }

  public get point(): Point {
    return this._point;
  }

  public get x(): number {
    return this.point.x;
  }
  
  public set x(x: number) {
    this._point.x = x;
  }

  public get y(): number {
    return this.point.y;
  }

  public set y(y: number) {
    this._point.y = y;
  }

  public get update(): Function {
    return this._update();
  }

  public set update(update: Function) {
    this._update = update;
  }
  
  public get renderContextSettings(): (context: CanvasRenderingContext2D) => void {
    return <(context: CanvasRenderingContext2D) => void>this._contextSettings;
  }

  public set renderContextSettings(contextSettings: (context: CanvasRenderingContext2D) => void) {
    this._contextSettings = contextSettings;
  }

  public setPoint(point: Point): void {
    this._point = point;
  }

  public hasRenderContextSettings(): boolean {
    return this._contextSettings !== null ? true : false;
  }
}
