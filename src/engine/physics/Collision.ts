import { Rectangle, Circle, GameObject } from '../game-objects';

export default abstract class Collision {
  public static boxCollide(element1: Rectangle, element2: Rectangle): boolean {
    return (
      element1.x < element2.x + element2.width &&
      element1.x + element1.width > element2.x &&
      element1.y < element2.y + element2.height &&
      element1.height + element1.y > element2.y
    );
  }

  public static circleCollide(element1: Circle, element2: Circle): boolean {
    const dx: number = element1.x - element2.x;
    const dy: number = element1.y - element2.y;
    const d: number = Math.sqrt(dx * dx + dy * dy);

    return (
      d < element1.size / 2 + element2.size / 2
    );
  }

  public static collide(element1: Rectangle|Circle, element2: Rectangle|Circle): boolean {
    if (element1 instanceof Circle && element2 instanceof Circle) {
      return this.circleCollide(element1, element2);
    } else {
      let w1: number;
      let h1: number;
      let w2: number;
      let h2: number;

      if (element1 instanceof Circle) {
        w1 = element1.size;
        h1 = element1.size;
      } else {
        w1 = element1.width;
        h1 = element1.height;
      }

      if (element2 instanceof Circle) {
        w2 = element2.size;
        h2 = element2.size;
      } else {
        w2 = element2.width;
        h2 = element2.height;
      }

      return this.boxCollide(
        <Rectangle>{x: element1.x, y: element1.y, width: w1, height: h1},
        <Rectangle>{x: element2.x, y: element2.y, width: w2, height: h2}
      );
    }
  }
}
