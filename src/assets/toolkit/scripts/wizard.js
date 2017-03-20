if ( $( ".js-wizardSlider" ).length ) {

  var utils = window.fizzyUIUtils;

  var carousel = document.querySelector('.js-wizardSlider');
  var flkty = new Flickity( carousel, {
    prevNextButtons: false,
    pageDots: false,
    draggable: false
  });

  // previous
  var previousButton = document.querySelector('.js-goBack');
  previousButton.addEventListener( 'click', function() {
    flkty.previous();
  });

  // next
  var nextButton = document.querySelector('.js-goForward');
  nextButton.addEventListener( 'click', function() {
    flkty.next();
  });
}
