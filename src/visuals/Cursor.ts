import { Mouse, Circle, Scene } from '../engine';

export default class Cursor {
  public element: Circle;

  constructor(scene: Scene) {
    this.element = new Circle('cursor');
    this.element.visible = true;
    this.element.fill = true;
    this.element.color = '#FF0000';
    this.element.size = 30;

    scene.add(this.element);
  }

  public update(): void {
    this.element.x = Mouse.cursorX;
    this.element.y = Mouse.cursorY;
  }
}
