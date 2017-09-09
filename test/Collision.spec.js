const { expect } = require('chai');
const { Collision, Circle, Rectangle } = require('./lib/engine');

describe('Collision', () => {
  describe('Collision#boxCollide', () => {
    it('should detect box collisions', () => {
      const r1 = new Rectangle('');
      const r2 = new Rectangle('');
      const r3 = new Rectangle('');

      r1.x = 50;
      r1.y = 50;
      r1.width = 50;
      r1.height = 50;

      r2.x = 65;
      r2.y = 70;
      r2.width = 89;
      r2.height = 124;

      r3.x = 854;
      r3.y = 8798;
      r3.width = 74114;
      r3.height = 56451;

      expect(Collision.boxCollide(r1, r2)).to.be.true;
      expect(Collision.boxCollide(r1, r3)).to.be.false;
    });
  });

  describe('Collision#circleCollide', () => {
    it('should detect circle collisions', () => {
      const c1 = new Circle('');
      const c2 = new Circle('');
      const c3 = new Circle('');

      c1.x = 50;
      c1.y = 50;
      c1.size = 50;

      c2.x = 65;
      c2.y = 70;
      c2.size = 74;

      c3.x = 854;
      c3.y = 8798;
      c3.size = 12;

      expect(Collision.circleCollide(c1, c2)).to.be.true;
      expect(Collision.circleCollide(c1, c3)).to.be.false;
    });
  });

  describe('Collision#collision', () => {
    it('should detect the right collision type', () => {
      const c1 = new Circle('');
      const c2 = new Circle('');
      const r1 = new Rectangle('');
      const r2 = new Rectangle('');

      c1.x = 65;
      c1.y = 70;
      c1.size = 74;

      c2.x = 854;
      c2.y = 8798;
      c2.size = 12;

      r1.x = 50;
      r1.y = 50;
      r1.width = 50;
      r1.height = 50;

      r2.x = 65;
      r2.y = 70;
      r2.width = 89;
      r2.height = 124;

      expect(Collision.collide(r1, r2)).to.be.true;
      expect(Collision.collide(c1, c2)).to.be.false;
      expect(Collision.collide(r1, c1)).to.be.true;
      expect(Collision.boxCollide(r2, c2)).to.be.false;
    });
  });
});
