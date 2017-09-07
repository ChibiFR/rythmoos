const { expect } = require('chai');
const Time = require('./lib/engine/Time').default;

describe('Time', () => {
  describe('Time#_setFrame', () => {
    it('should update the times correctly', () => {
      Time._init();

      Time._setFrame(10);
      expect(Time.time).to.equal(10);

      Time._setFrame(15);
      expect(Time.deltaTime).to.equal(5);
    });
  });
});
