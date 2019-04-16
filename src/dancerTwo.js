var DancerTwo = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.attr("src", "src/pics/ucdlogo.png");
  this.$node.attr("alt", "UCD Logo");
  this.$node.addClass('DancerTwo');
  this.$node.removeClass('Dancer');
};

DancerTwo.prototype = Object.create(Dancer.prototype);
DancerTwo.prototype.constructor = DancerTwo;

DancerTwo.prototype.step = function() {
  this.oldStep();
};