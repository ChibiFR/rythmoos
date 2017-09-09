import { Point } from '../graphics';
import GameObjectTypes from './GameObjectTypes';

export default class GameObject {
  public readonly name: string;
  public visible: boolean;
  protected _type: GameObjectTypes;
  protected _point: Point;

  constructor(name: string, point?: Point, visible?: boolean) {
    this.name = name;
    this._point = point ? point : new Point(0, 0);
    
    if (visible === undefined) {
      this.visible = point ? true : false;
    } else {
      this.visible = visible;
    }

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

  public setPoint(point: Point): void {
    this._point = point;
  }
}
