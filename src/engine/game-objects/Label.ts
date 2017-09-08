import GameObject from './GameObject';
import GameObjectTypes from './GameObjectTypes';
import { Point, Font } from '../graphics';

export default class Label extends GameObject {
  public text: string = '';
  public fill: boolean = true;
  public font: Font;

  constructor(name: string, point?: Point, visible?: boolean) {
    super(name, point, visible);

    this._type = GameObjectTypes.LABEL;
  }

  public setFont(font: Font): void {
    this.font = font;
  }

  public setFontSize(fontSize: number): void {
    this.font.fontSize = fontSize;
  }

  public setFontColor(color: string): void {
    this.font.color = color;
  }
}
