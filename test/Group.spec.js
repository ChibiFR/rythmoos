const { expect } = require('chai');
const { Group, GameObject, Point } = require('./lib/engine');

const group = new Group();
const go = new GameObject('a name');

describe('Group', () => {
  describe('Group#add', () => {
    it('should add new objects', () => {
      expect(group.add(go)).to.be.true;
      expect(group.add(new GameObject('another name'))).to.be.true;
    });

    it('should return false when duplicating a name', () => {
      const duplicatedName = new GameObject('a name', new Point(45, 18));

      expect(group.add(duplicatedName)).to.be.false;
      expect(group.get('a name')).to.equal(go);
    });
  });

  describe('Group#get', () => {
    it('should return the object if contained', () => {
      expect(group.get(go.name)).to.equal(go);
    });

    it('should return null when the object is not in the group', () => {
      expect(group.get('a wrong name')).to.be.null;
    });
  });

  describe('Group#remove', () => {
    it('should remove objects', () => {
      group.remove('a name');

      expect(group.get('a name')).to.be.null;
    });
  });
});
