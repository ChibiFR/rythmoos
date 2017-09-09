import { Rectangle, Label, Scene, Font, Screen, Point, Keyboard, Keys } from '../engine';

export default class HitKeys {
  public qElement: Rectangle;
  public qLabel: Label;
  public wElement: Rectangle;
  public wLabel: Label;

  constructor(scene: Scene) {
    this.qElement = new Rectangle('qrectangle');
    this.qElement.visible = true;
    this.qElement.fill = true;
    this.qElement.color = '#CCDDCC';
    this.qElement.width = 60;
    this.qElement.height = 60;
    this.qLabel = new Label('qlabel');
    this.qLabel.visible = true;
    this.qLabel.text = 'Q';
    this.qLabel.fill = true;
    this.qLabel.setFont(new Font('Arial', 16, '#000000'));

    this.wElement = new Rectangle('wrectangle');
    this.wElement.visible = true;
    this.wElement.fill = true;
    this.wElement.color = '#CCDDCC';
    this.wElement.width = 60;
    this.wElement.height = 60;
    this.wLabel = new Label('wlabel');
    this.wLabel.visible = true;
    this.wLabel.text = 'W';
    this.wLabel.fill = true;
    this.wLabel.setFont(new Font('Arial', 16, '#000000'));

    this.qElement.setPoint(new Point(20, Screen.height - 80));
    this.qLabel.setPoint(new Point(60, Screen.height - 30));

    this.wElement.setPoint(new Point(100, Screen.height - 80));
    this.wLabel.setPoint(new Point(140, Screen.height - 30));

    scene.add(this.qElement);
    scene.add(this.qLabel);
    scene.add(this.wElement);
    scene.add(this.wLabel);
  }

  public update(): void {
    if (Keyboard.key(Keys.KeyQ).isDown()) {
      this.qElement.color = '#113311';
      this.qLabel.setFontColor('#FFFFFF');
    } else {
      this.qElement.color = '#CCDDCC';
      this.qLabel.setFontColor('#000000');
    }

    if (Keyboard.key(Keys.KeyW).isDown()) {
      this.wElement.color = '#113311';
      this.wLabel.setFontColor('#FFFFFF');
    } else {
      this.wElement.color = '#CCDDCC';
      this.wLabel.setFontColor('#000000');
    }
  }
}
