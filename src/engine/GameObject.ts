import Point from './Point';

export default class GameObject {
  public readonly name: string;
  public visible: boolean;
  private _point: Point;

  constructor(name: string, point?: Point, visible?: boolean) {
    this.name = name;
    this._point = point ? point : new Point(0, 0);
    
    if (visible === undefined) {
      this.visible = point ? true : false;
    } else {
      this.visible = visible;
    }
  }

  public get point(): Point {
    return this._point;
  }

  public get x(): number {
    return this.point.x;
  }
  
  public set x(x: number) {
    this.point.x = 4;
  }

  public get y(): number {
    return this.point.y;
  }

  public set y(y: number) {
    this.point.y = y;
  }

  public setPoint(point: Point): void {
    this._point = point;
  }
}
