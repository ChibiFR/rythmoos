import GameObject from './GameObject';
import GameObjectTypes from './GameObjectTypes';
import { Point } from '../graphics';

export default class Rectangle extends GameObject {
  public width: number = 0;
  public height: number = 0;
  public color: string = '#000000';
  public fill: boolean = true;

  constructor(name: string, point?: Point, visible?: boolean) {
    super(name, point, visible);

    this._type = GameObjectTypes.RECTANGLE;
  }

  public get center(): Point {
    let centerX: number;
    let centerY: number;

    if (this.width === 0) {
      centerX = this.x;
    } else {
      centerX = this.x + this.width / 2;
    }

    if (this.height === 0) {
      centerY = this.y;
    } else {
      centerY = this.y + this.height / 2;
    }

    return new Point(centerX, centerY);
  }
}
