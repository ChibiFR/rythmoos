import { Point } from '../graphics';
import { RotationCenters } from '../physics';
import GameObjectTypes from './GameObjectTypes';

export default class GameObject {
  public readonly name: string;
  public visible: boolean;
  protected _type: GameObjectTypes;
  protected _point: Point;
  protected _rotation: number;
  protected _rotationCenter: RotationCenters;
  protected _scale: number;
  protected _update: Function;
  protected _contextSettings: Function|null;

  constructor(name: string, point?: Point, visible?: boolean) {
    this.name = name;
    this._point = point ? point : new Point(0, 0);
    
    if (visible === undefined) {
      this.visible = point ? true : false;
    } else {
      this.visible = visible;
    }

    this._rotation = 0;
    this._rotationCenter = RotationCenters.SELF;
    this._scale = 1;

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

  public get center(): Point {
    return new Point(this._point.x, this._point.y);
  }

  public get rotation(): number {
    return this._rotation;
  }

  public set rotation(degrees: number) {
    this._rotation = degrees;
  }

  public get rotationCenter(): RotationCenters {
    return this._rotationCenter;
  }

  public set rotationCenter(rotationCenter: RotationCenters) {
    this._rotationCenter = rotationCenter;
  }

  public get scale(): number {
    return this._scale;
  }

  public set scale(scale: number) {
    this._scale = scale;
  }

  public get update(): Function {
    return this._update;
  }

  public set update(update: Function) {
    this._update = update;
  }
  
  public get renderContextSettings(): Function|null {
    return this._contextSettings;
  }

  public set renderContextSettings(contextSettings: Function|null) {
    this._contextSettings = contextSettings;
  }

  public setPoint(point: Point): void {
    this._point = point;
  }

  public rotate(degrees: number, center?: RotationCenters): void {
    this._rotation = degrees;
    this.rotationCenter = center !== undefined ? center : RotationCenters.SELF;
  }

  public setScale(scale: number): void {
    this._scale = scale;
  }
}
