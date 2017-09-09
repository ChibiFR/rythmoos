import { Circle, Scene, Point, Screen, Keyboard, Mouse, KeyCodes } from '../engine';

export default class HitCircle {
  public border: Circle;
  public element: Circle;
  public hit: boolean;

  constructor(scene: Scene) {
    this.hit = false;

    this.border = new Circle('hit circle border');
    this.border.setPoint(new Point(Math.random() * Screen.width, Math.random() * Screen.height));
    this.border.color = '#FFFFFF';
    this.border.visible = true;
    this.border.size = 84;
    
    this.element = new Circle('hit circle');
    this.element.setPoint(new Point(this.border.x, this.border.y));
    this.element.color = '#0133DD';
    this.element.visible = true;
    this.element.size = 80;

    scene.add(this.border);
    scene.add(this.element);
  }

  public update(): void {
    if (this.hit) {
      if (Keyboard.key(KeyCodes.KeyQ).isUp() && Keyboard.key(KeyCodes.KeyW).isUp()) {
        this.hit = false;
      }
    }

    if (Keyboard.key(KeyCodes.KeyQ).isDown() || Keyboard.key(KeyCodes.KeyW).isDown()) {
      if (!this.hit &&
          this.element.x - this.element.size / 2 < Mouse.cursorX &&
          this.element.y - this.element.size / 2 < Mouse.cursorY &&
          this.element.x + this.element.size / 2 > Mouse.cursorX &&
          this.element.y + this.element.size / 2 > Mouse.cursorY
      ) {
        const point = new Point(Math.random() * Screen.width, Math.random() * Screen.height);
        this.border.setPoint(point);
        this.element.setPoint(point);
        this.hit = true;
      }
    }
  }
}
