import GameObject from './GameObject';
import GameObjectTypes from './GameObjectTypes';
import { Point } from '../graphics';

export default class Image extends GameObject {
  protected _ready: boolean;
  protected _URL: string;
  protected _image: HTMLImageElement;

  constructor(name: string, point?: Point, visible?: boolean) {
    super(name, point, visible);

    this._ready = false;
    this._image = document.createElement('img');

    this._image.addEventListener('load', () => {
      this._ready = true;
    });

    this._type = GameObjectTypes.IMAGE;
  }

  public get ready(): boolean {
    return this._ready;
  }

  public get URL() {
    return this._URL;
  }

  public set URL(URL: string) {
    this._ready = false;
    this._URL = URL;
    this._image.src = this._URL;
  }

  public get image(): HTMLImageElement {
    return this._image;
  }

  public setURL(URL: string): void {
    this.URL = URL;
  }

  public get center(): Point {
    let centerX: number;
    let centerY: number;

    if (this.image.width === 0) {
      centerX = this.x;
    } else {
      centerX = this.x + this.image.width / 2;
    }

    if (this.image.height === 0) {
      centerY = this.y;
    } else {
      centerY = this.y + this.image.height / 2;
    }

    return new Point(centerX, centerY);
  }
}
