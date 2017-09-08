const { expect } = require('chai');
const { Scene, GameObject, Point } = require('./lib/engine');

const scene = new Scene();
const go = new GameObject('a name');

describe('Scene', () => {
  describe('Scene#add', () => {
    it('should add new objects', () => {
      expect(scene.add(go)).to.be.true;
      expect(scene.add(new GameObject('another name'))).to.be.true;
    });

    it('should return false when duplicating a name', () => {
      const duplicatedName = new GameObject('a name', new Point(45, 18));

      expect(scene.add(duplicatedName)).to.be.false;
      expect(scene.get('a name')).to.equal(go);
    });
  });

  describe('Scene#contains', () => {
    it('should return true when object is in the scene', () => {
      expect(scene.contains(go.name)).to.be.true;
    });

    it('should return false when object is not in the scene', () => {
      expect(scene.contains('qwery')).to.be.false;
    });
  });

  describe('Scene#get', () => {
    it('should return the object if contained', () => {
      expect(scene.get(go.name)).to.equal(go);
    });

    it('should return null when the object is not in the scene', () => {
      expect(scene.get('a wrong name')).to.be.null;
    });
  });

  describe('Scene#remove', () => {
    it('should remove objects', () => {
      scene.remove('a name');

      expect(scene.contains('a name')).to.be.false;
    });
  });
});
