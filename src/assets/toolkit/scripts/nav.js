if ( $( '.js-nav' ).length ) {

  $( '#profile-link' ).click(function(event) {
    event.preventDefault();
    $('#profile-options').toggleClass('up-1rem');
    $('#profile-options').toggleClass('down-1rem');
  });

  $( '#cart-link' ).click(function(event) {
    event.preventDefault();
    $('.js-fader').addClass('fade-100');
    $('#cart-options').removeClass('right-self');
  });

  $( '#close-cart, .js-fader' ).click(function(event) {
    event.preventDefault();
    $('.js-fader').removeClass('fade-100');
    $('#cart-options').addClass('right-self');
  });

  $(document).ready(function(event){
    var previousScroll = 0;
    $(window).scroll(function(){
      var currentScroll = $(this).scrollTop();
      if (currentScroll > 10 && currentScroll < $(document).height() - $(window).height()){
        if (currentScroll > previousScroll){
          window.setTimeout(hideNav, 10);
        } if (currentScroll < (previousScroll - 40)) {
          window.setTimeout(showNav, 10);
        }
        previousScroll = currentScroll;
      }
      if (currentScroll < 40) {
          window.setTimeout(top, 10);
        }
    });
    function hideNav() {
      $('.js-nav').addClass('up-self');
    }
    function showNav() {
      $('.js-nav').removeClass('up-self');
    }
    function top() {
    $('.js-nav').removeClass('up-self');
  }
  });
}
