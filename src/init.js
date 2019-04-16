$(document).ready(function() {
  window.dancers = [];

  // For Cow (BlinkyDancer)
  $('.addDancerButton').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

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


  // For Aggie (Dancer 1)
  $('.addDancerOneButton').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

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


// For UCD Logo (Dancer 2)
$('.addDancerTwoButton').on('click', function(event) {
    
  var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

  var dancerMakerFunction = window[dancerMakerFunctionName];

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
  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i].lineUp();
  }
});