var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img src="src/pics/cow.jpg" alt="Davis Cow" class="Dancer" height="100" width="100"></img>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;

  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  this.$node.removeAttr("style");
  this.$node.addClass("lineUp");
};