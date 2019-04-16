var dancerOne = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.attr("src", "src/pics/aggielogo.png");
  // this.$node.attr("height", "200");
  // this.$node.attr("width", "200");
  this.$node.attr("alt", "Aggie");
  this.$node.addClass('dancerOne');
  this.$node.removeClass('Dancer');

};

dancerOne.prototype = Object.create(Dancer.prototype);
dancerOne.prototype.constructor = dancerOne;


dancerOne.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.fadeIn('slow');
  this.$node.fadeOut('slow');
};
