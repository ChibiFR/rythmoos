import GameObject from './GameObject';
import GameObjectTypes from './GameObjectTypes';
import { Point } from '../graphics';

export default class Circle extends GameObject {
  public size: number = 0;
  public color: string = '#000000';
  public fill: boolean = true;
  
  constructor(name: string, point?: Point, visible?: boolean) {
    super(name, point, visible);

    this._type = GameObjectTypes.CIRCLE;
  }
}
