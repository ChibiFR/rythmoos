import { Game, Mouse, Screen, Time, Rectangle, Circle, Label, Point, Font, Keyboard, KeyCodes } from './engine';

const g = new Game();

let keyPressedText = '';

const bg = new Rectangle('background', new Point(0, 0), true);
const fps = new Label('fps counter', new Point(15, 15), true);
const keyPressed = new Label('key pressed', new Point(0, 0), true);
const cursor = new Circle('cursor', Mouse.cursor, true);

Screen.onResize(() => {
  bg.width = Screen.width;
  bg.height = Screen.height;
});

bg.color = '#000000';
bg.fill = true;
bg.width = Screen.width;
bg.height = Screen.height;

fps.fill = true;
fps.font = new Font('Arial', 14, '#FFFFFF');
fps.text = `FPS: ${Time.fps}`;

keyPressed.fill = true;
keyPressed.setPoint(new Point(300, 18));
keyPressed.font = new Font('Arial', 12, '#FFFF55');
keyPressed.text = '';

cursor.fill = true;
cursor.size = 20;
cursor.color = '#FF0000';

g.scene.add(bg);
g.scene.add(fps);
g.scene.add(keyPressed);
g.scene.add(cursor);

g.renderer.attachUpdate(() => {
  fps.text = `FPS: ${Time.fps}`;
  cursor.setPoint(Mouse.cursor);

  if (Mouse.buttonDown) {
    cursor.color = '#0000FF';
  } else {
    cursor.color = '#FF0000';
  }

  keyPressedText = '';

  keyPressedText += Keyboard.key(KeyCodes.ArrowUp).isDown() ? 'Arrow up ' : '';
  keyPressedText += Keyboard.key(KeyCodes.ArrowDown).isDown() ? 'Arrow down ' : '';
  keyPressedText += Keyboard.key(KeyCodes.ArrowLeft).isDown() ? 'Arrow left ' : '';
  keyPressedText += Keyboard.key(KeyCodes.ArrowRight).isDown() ? 'Arrow right' : '';

  keyPressed.text = keyPressedText;
});

g.start();
