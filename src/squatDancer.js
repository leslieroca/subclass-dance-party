var makeSquatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="squatDancer"></span>');
  this.setPosition(top, left);
};
  
makeSquatDancer.prototype = Object.create(makeDancer.prototype);
makeSquatDancer.prototype.constructor = makeSquatDancer;
  
makeSquatDancer.prototype.step = function () {
  var makeDancerProto = makeSquatDancer.prototype.__proto__;
  makeDancerProto.step.call(this);
  this.$node.fadeIn();
};

makeSquatDancer.prototype.lineup = function () {
  var styleSettings = {
    top: 502,
  };
  this.$node.css(styleSettings);
};