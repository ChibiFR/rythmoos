const { expect } = require('chai');
const { Profiler } = require('./lib/engine');

describe('Profiler', () => {
  describe('Profiler#getStepDurations', () => {
    it('should return step durations', (done) => {
      const p = new Profiler();

      p.start();

      setTimeout(() => {
        p.step();

        setTimeout(() => {
          p.step();

          setTimeout(() => {
            p.stop();

            const duration = p.getStep(0) - p.startTime;
            
            expect(duration).to.equal(p.getStepDuration(0));
            expect(duration).to.equal(p.getStepDurations()[0]);
            done();
          }, 8);
        }, 35);
      }, 25);
    });
  });
});
