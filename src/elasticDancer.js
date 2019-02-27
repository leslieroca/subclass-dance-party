var makeElasticDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="elasticDancer"></span>');
  this.setPosition(top, left);
};
  
makeElasticDancer.prototype = Object.create(makeDancer.prototype);
makeElasticDancer.prototype.constructor = makeElasticDancer;
  
makeElasticDancer.prototype.step = function() {
  var makeDancerProto = makeElasticDancer.prototype.__proto__;
  makeDancerProto.step.call(this);
  this.$node.show();
};

makeElasticDancer.prototype.lineup = function () {
  var styleSettings = {
    top: 100,
  };
  this.$node.css(styleSettings);
};