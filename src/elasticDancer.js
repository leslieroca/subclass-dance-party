var makeElasticDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};
  
makeElasticDancer.prototype = Object.create(makeDancer.prototype);
makeElasticDancer.prototype.constructor = makeElasticDancer;
  
makeElasticDancer.prototype.step = function() {
  var makeDancerProto = makeElasticDancer.prototype.__proto__;
  makeDancerProto.step.call(this);
  this.$node.toggle();
};