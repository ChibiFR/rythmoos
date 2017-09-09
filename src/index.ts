import { Game, Rectangle, Screen, Point, Mouse } from './engine';

import FPSCounter from './visuals/FPSCounter';
import Cursor from './visuals/Cursor';
import HitKeys from './visuals/HitKeys';
import HitCircle from './visuals/HitCircle';

const g = new Game();

// Background
const bg = new Rectangle('background', new Point(0, 0), true);
bg.color = '#000000';
bg.width = Screen.width;
bg.height = Screen.height;
g.scene.add(bg);

// Game elements
const hitCircle = new HitCircle(g.scene);
const hitKeys = new HitKeys(g.scene);
const cursor = new Cursor(g.scene);
const fpscounter = new FPSCounter(g.scene);

// Update bg size on resize
Screen.onResize(() => {
  bg.width = Screen.width;
  bg.height = Screen.height;
});

// Update all game objects
g.renderer.attachUpdate(() => {
  if (hitCircle.element.x - hitCircle.element.size / 2 < Mouse.cursorX &&
    hitCircle.element.x + hitCircle.element.size / 2 > Mouse.cursorX &&
    hitCircle.element.y - hitCircle.element.size / 2 < Mouse.cursorY &&
    hitCircle.element.y + hitCircle.element.size / 2 > Mouse.cursorY
  ) {
    hitCircle.element.color = '#1DBBFF';
  } else {
    hitCircle.element.color = '#0133DD';
  }

  fpscounter.update();
  hitCircle.update();
  cursor.update();
  hitKeys.update();
});

g.start();
