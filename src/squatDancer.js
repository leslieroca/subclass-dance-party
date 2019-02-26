var makeSquatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};
  
makeSquatDancer.prototype = Object.create(makeDancer.prototype);
makeSquatDancer.prototype.constructor = makeSquatDancer;
  
makeSquatDancer.prototype.step = function () {
  var makeDancerProto = makeSquatDancer.prototype.__proto__;
  makeDancerProto.step.call(this);
  this.$node.toggle();
};