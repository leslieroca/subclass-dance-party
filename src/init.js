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

    var image = $('<img src= "src/bongo.gif" width="150" height="150" class="animated infinite bounce delay-2s"></img>'); 

    var dancer = new makeBlinkyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $(dancer.$node).append(image);
    $('body').append(dancer.$node);

  });

  $('.addSquatDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var image = $('<img src= "src/polar.gif" width="200" height="200" class="animated infinite bounce delay-2s"></img>'); 

    var squatDancer = new makeSquatDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(squatDancer);
    $(squatDancer.$node).append(image);
    $('body').append(squatDancer.$node);
    
  });

  $('.addElasticDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var image = $('<img src= "src/tenor.gif" width="200" height="200" class="animated infinite bounce delay-2s"></img>'); 

    var elasticDancer = new makeElasticDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(elasticDancer);
    $(elasticDancer.$node).append(image);
    $('body').append(elasticDancer.$node);
    
  });

  $('.lineupButton').on('click', function(event) {
    var lastDancer = 100;
    var lastBlinkyDancer = 100;
    var lastSquatDancer = 100;
    var lastElasticDancer = 100;

    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i] instanceof makeBlinkyDancer) {
        window.dancers[i].lineup();
        window.dancers[i].$node.css('left', lastBlinkyDancer);
        lastBlinkyDancer += 150; 
      }
      if (window.dancers[i] instanceof makeSquatDancer) {
        window.dancers[i].lineup();
        window.dancers[i].$node.css('left', lastSquatDancer);
        lastSquatDancer += 200;
      }
      if (window.dancers[i] instanceof makeElasticDancer) {
        window.dancers[i].lineup();
        window.dancers[i].$node.css('left', lastElasticDancer);
        lastElasticDancer += 200;
      }

    }
  });
  $(document).ready(function(){
    $('.squat').hover(function(){
        $(this).addClass('animated bounce');
    });
});

});
