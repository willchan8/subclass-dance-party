$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var Dancer = new dancerMakerFunction(
      // $("body").height() * Math.random(),
      // $("body").width() * Math.random(),
      Math.max(50, (370 * Math.random())),
      Math.max(100, (1400 * Math.random())),
      1000
    );
    $('body').append(Dancer.$node);
    window.dancers.push(Dancer);
  });


  // For Dancer One
  $('.addDancerOneButton').on('click', function(event) {
    
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancerOne = new dancerMakerFunction(
      // $("body").height() * Math.random(),
      // $("body").width() * Math.random(),
      Math.max(50, (370 * Math.random())),
      Math.max(100, (1400 * Math.random())),
      2000
    );
    $('body').append(dancerOne.$node);
    window.dancers.push(dancerOne);
  });
});



// For Dancer Two
$('.addDancerTwoButton').on('click', function(event) {
    
  /* This function sets up the click handlers for the create-dancer
   * buttons on dancefloor.html. You should only need to make one small change to it.
   * As long as the "data-dancer-maker-function-name" attribute of a
   * class="addDancerButton" DOM node matches one of the names of the
   * maker functions available in the global scope, clicking that node
   * will call the function to make the dancer.
   */

  /* dancerMakerFunctionName is a string which must match
   * one of the dancer maker functions available in global scope.
   * A new object of the given type will be created and added
   * to the stage.
   */
  
  var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

  // get the maker function for the kind of dancer we're supposed to make
  var dancerMakerFunction = window[dancerMakerFunctionName];

  // make a dancer with a random position

  var DancerTwo = new dancerMakerFunction(
    // $("body").height() * Math.random(),
    // $("body").width() * Math.random(),
    Math.max(50, (370 * Math.random())),
    Math.max(100, (1400 * Math.random())),
    1500
  );
  $('body').append(DancerTwo.$node);
  window.dancers.push(DancerTwo);
});



// LineUp Button
$('.lineUpButton').on('click', function(event) {

  var top = 100;
  var left = 100;
  
  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i].lineUp(top, left);
    // window.dancers[i].top = top;
    // window.dancers[i].left = left;
    left += 120;
    if(left > 1600) {
      top += 120;
      left = 100;
    }
  }
  
});