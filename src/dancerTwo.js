var DancerTwo = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  
  Dancer.call(this, top, left, timeBetweenSteps);

  console.log(this);
  this.$node.addClass('DancerTwo');
  this.$node.removeClass('Dancer');


};

DancerTwo.prototype = Object.create(Dancer.prototype);
DancerTwo.prototype.constructor = DancerTwo;


DancerTwo.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};