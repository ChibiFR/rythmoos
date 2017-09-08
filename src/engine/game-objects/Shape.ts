import GameObject from './GameObject';
import GameObjectTypes from './GameObjectTypes';
import { Point, Model } from '../graphics';

export default class Shape extends GameObject {
  public readonly model: Model;
  public color: string = '#000000';
  public fill: boolean = true;

  constructor(name: string, point?: Point, visible?: boolean) {
    super(name, point, visible);

    this.model = new Model();
    this._type = GameObjectTypes.SHAPE;
  }
}
