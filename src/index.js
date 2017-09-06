import Renderer from './Renderer';
import Time from './Time';


// Set body style
document.body.style.background = '#000000';
document.body.style.cursor = 'none';


// Create canvas + style and Renderer
const c = document.createElement('canvas');
const r = new Renderer(c);

c.width = window.innerWidth;
c.height = window.innerHeight;


// Track cursor
const mouse = {
  x: null,
  y: null
};

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Track fps
let fps = 0;


// Attach draw and updates

// Update fps
r.attachUpdate(() => {
  fps = Math.round(1000 / Time.deltaTime);
});

// Draw fps counter
r.attachDraw((ctx) => {
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '20px Arial';
  ctx.fillText(`FPS: ${fps}`, 15, 15);
});

// Draw cursor
r.attachDraw((ctx) => {
  if (mouse.x !== null) {
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 10, 0, 2 * Math.PI);
    ctx.fill();
  }
});


// Start main loop
document.body.appendChild(c);
r.start();
