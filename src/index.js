import Game from './Game';
import Time from './Time';
import Mouse from './Mouse';

const g = new Game();

// Draw black background
g.renderer.attachDraw((ctx) => {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, g.canvas.width, g.canvas.height);
});

// Draw a fps counter accurate to the microsecond.
g.renderer.attachDraw((ctx) => {
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '20px Arial';
  ctx.fillText(`FPS: ${Math.round(1000 / Time._deltaTime)}`, 20, 20);
});

// Draw the cursor as a small circle. Change color as a mouse button is pressed.
g.renderer.attachDraw((ctx) => {
  if (Mouse.isClicked()) {
    ctx.fillStyle = '#0000FF';
  } else {
    ctx.fillStyle = '#FF0000';
  }

  ctx.beginPath();
  ctx.arc(Mouse.cursorX, Mouse.cursorY, 10, 0, 2 * Math.PI);
  ctx.fill();
});

g.start();
