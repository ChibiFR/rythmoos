import { Game, Mouse, Screen, Time } from './engine';

const g = new Game();

g.renderer.attachUpdate(() => {
  g.renderer.context.fillStyle = '#000000';
  g.renderer.context.fillRect(0, 0, Screen.width, Screen.height);
});

g.renderer.attachUpdate(() => {
  g.renderer.context.fillStyle = '#ffffff';
  g.renderer.context.font = '20px Arial';
  g.renderer.context.fillText(`FPS: ${Time.fps}`, 20, 30);
});

g.renderer.attachUpdate(() => {
  g.renderer.context.fillStyle = Mouse.buttonDown ? '#0000FF' : '#FF0000';
  g.renderer.context.beginPath();
  g.renderer.context.arc(Mouse.cursorX, Mouse.cursorY, 10, 0, 2 * Math.PI);
  g.renderer.context.fill();
});

g.start();
