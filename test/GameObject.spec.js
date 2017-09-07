const { expect } = require('chai');
const { GameObject, Point } = require('./lib/engine');

describe('GameObject', () => {
  describe('GameObject#constructor', () => {
    it('should create a game object with name only', () => {
      const go = new GameObject('a name');

      expect(go.name).to.equal('a name');
      expect(go.visible).to.be.false;
    });

    it('should set a game object as visible if a point is set', () => {
      const go = new GameObject('a name', new Point(45, 18));

      expect(go.x).to.equal(45);
      expect(go.visible).to.be.true;
    });

    it('should set a game object as invisible when set so', () => {
      const go = new GameObject('a name', new Point(45, 18), false);

      expect(go.visible).to.be.false;
    });
  });
});
