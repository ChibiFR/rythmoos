import { Game, Mouse, Screen, Time, Rectangle, Circle, Label, Point, Font, Keyboard, KeyCodes } from './engine';

const g = new Game();

let keyPressedText = '';

const bg = new Rectangle('background', new Point(0, 0), true);
const fps = new Label('fps counter', new Point(15, 15), true);
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

cursor.fill = true;
cursor.size = 20;
cursor.color = '#FF0000';

g.scene.add(bg);
g.scene.add(fps);
g.scene.add(cursor);

g.renderer.attachUpdate(() => {
  fps.text = `FPS: ${Time.fps}`;
  cursor.setPoint(Mouse.cursor);

  if (Mouse.buttonDown) {
    cursor.color = '#0000FF';
  } else {
    cursor.color = '#FF0000';
  }

  if (Keyboard.getKey(KeyCodes.ArrowDown).isDown() ||
      Keyboard.getKey(KeyCodes.KeyS).isDown()) {
    fps.y += 0.2 * Time.deltaTime;
  }

  if (Keyboard.getKey(KeyCodes.ArrowLeft).isDown() ||
      Keyboard.getKey(KeyCodes.KeyA).isDown()) {
    fps.x -= 0.2 * Time.deltaTime;
  }

  if (Keyboard.getKey(KeyCodes.ArrowRight).isDown() ||
      Keyboard.getKey(KeyCodes.KeyD).isDown()) {
    fps.x += 0.2 * Time.deltaTime;
  }

  if (Keyboard.getKey(KeyCodes.ArrowUp).isDown() ||
      Keyboard.getKey(KeyCodes.KeyW).isDown()) {
    fps.y -= 0.2 * Time.deltaTime;
  }
});

g.start();
