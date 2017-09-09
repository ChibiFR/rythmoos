import { Label, Point, Scene, Time, Font } from '../engine';

export default class FPSCounter {
  public element: Label;

  constructor(scene: Scene) {
    this.element = new Label('fps counter');
    this.element.visible = true;
    this.element.setFont(new Font('Arial', 12, '#FFFFFF'));
    this.element.text = 'FPS: 0';
    this.element.setPoint(new Point(15, 15));

    scene.add(this.element);
  }

  public update(): void {
    this.element.text = `FPS: ${Time.fps}`;
  }
}
