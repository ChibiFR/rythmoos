import GameObject from './GameObject';
import GameObjectTypes from './GameObjectTypes';
import { Point, Model } from '../graphics';

export default class Rectangle extends GameObject {
  public readonly model: Model;
  public width: number = 0;
  public height: number = 0;
  public color: string = '#000000';
  public fill: boolean = true;

  constructor(name: string, point?: Point, visible?: boolean) {
    super(name, point, visible);

    this.model = new Model();
    this._type = GameObjectTypes.SHAPE;
  }
}
