describe('squatDancer', function() {

  var squatDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    squatDancer = new makeSquatDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    console.log("squatDancer = ", timeBetweenSteps);
    expect(squatDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(squatDancer.$node, 'toggle');
    squatDancer.step();
    expect(squatDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(squatDancer, 'step');
      expect(squatDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(squatDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(squatDancer.step.callCount).to.be.equal(2);
    });
  });
});
