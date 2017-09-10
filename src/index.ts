import {
  Game,
  Scene,
  Group,
  Circle,
  Screen,
  Label,
  Font,
  Point,
  TextMeasure,
  Mouse,
  Time,
  Keyboard,
  Keys
} from './engine';

const g = new Game();
const s = new Scene();

g.setScene(s);

const circleGroup = new Group('group');
const bigCircle = new Circle('big circle');
const littleCircle = new Circle('small circle');
const cursor = new Circle('cursor');
const fpsCounter = new Label('fps counter');
const text = new Label('text');
const audio = new Audio();
let audioData = new Uint8Array(1024);
let av = 0;

cursor.visible = true;
cursor.fill = true;
cursor.color = '#dd1860';
cursor.size = 30;
cursor.setPoint(Mouse.cursor);
cursor.renderContextSettings = (context: CanvasRenderingContext2D) => {
  context.shadowColor = '#FFFFFF';
  context.shadowBlur = 15;
};

fpsCounter.visible = true;
fpsCounter.font.color = '#000000';
fpsCounter.font.fontSize = 14;
fpsCounter.setPoint(new Point(15, 20));

circleGroup.add(bigCircle);
circleGroup.add(littleCircle);
circleGroup.add(text);

bigCircle.visible = true;
bigCircle.color = '#f993d4';
bigCircle.size = Screen.height / 2.2;
bigCircle.setPoint(Screen.center);

littleCircle.visible = true;
littleCircle.color = 'rgba(249, 147, 212, 0.3)';
littleCircle.size = Screen.height / 1.8;
littleCircle.setPoint(Screen.center);

text.visible = true;
text.text = 'Rythmoos';
text.setFont(new Font('Arial', Screen.height * 0.07, '#FFFFFF'));
text.setPoint(new Point(
  Screen.width / 2 - TextMeasure.measureText(text.text, text.font) / 2,
  Screen.height / 2 + text.font.fontSize / 4
));
text.renderContextSettings = (context: CanvasRenderingContext2D) => {
  context.shadowColor = 'black';
  context.shadowBlur = Screen.height * 0.02;
};

s.add(circleGroup);
s.add(fpsCounter);
s.add(cursor);

const audioContext = new AudioContext();
const source = audioContext.createMediaElementSource(audio);
const audioAnalyser = audioContext.createAnalyser();

audioAnalyser.fftSize = 1024;
source.connect(audioAnalyser);
// audioAnalyser.connect(audioContext.destination);

g.update(() => {
  audioAnalyser.getByteFrequencyData(audioData);
  av = 0;

  audioData.forEach((val) => {
    av += val;
  });

  av /= 1024;

  bigCircle.size = (Screen.height / 2.2) + (av / 0.7);
  littleCircle.size = (Screen.height / 1.8) + (av / 0.7);

  fpsCounter.text = `FPS: ${Time.fps}`;

  if (Keyboard.key(Keys.ControlLeft).isDown() && Keyboard.key(Keys.KeyR).isDown()) {
    window.location.reload(true);
  }
});

audio.src = 'audio.mp3';
audio.loop = true;
audio.autoplay = true;

g.start();
