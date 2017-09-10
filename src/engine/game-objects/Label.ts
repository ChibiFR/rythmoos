import GameObject from './GameObject';
import GameObjectTypes from './GameObjectTypes';
import { Point, Font, TextMeasure } from '../graphics';

export default class Label extends GameObject {
  public text: string = '';
  public fill: boolean = true;
  public font: Font;

  constructor(name: string, point?: Point, visible?: boolean) {
    super(name, point, visible);

    this._type = GameObjectTypes.LABEL;

    this.font = new Font();
  }

  public get center(): Point {
    let centerX: number = TextMeasure.measureText(this.text, this.font);
    let centerY: number = this.font.fontSize;

    if (centerX === 0) {
      centerX = this.point.x;
    } else {
      centerX = this.point.x + centerX / 2;
    }

    if (centerY === 0) {
      centerY = this.point.y;
    } else {
      centerY = this.point.y + centerY / 2;
    }

    return new Point(centerX, centerY);
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
