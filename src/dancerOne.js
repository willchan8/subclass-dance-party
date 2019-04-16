var dancerOne = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.attr("src", "src/pics/aggielogo.png");
  this.$node.attr("alt", "Aggie");
  this.$node.addClass('dancerOne');
  this.$node.removeClass('Dancer');
};

dancerOne.prototype = Object.create(Dancer.prototype);
dancerOne.prototype.constructor = dancerOne;

dancerOne.prototype.step = function() {
  this.oldStep();
};
