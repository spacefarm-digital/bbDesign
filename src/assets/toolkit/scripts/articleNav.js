if ( $( "main" ).length ) {

  var articleNav = $(".js-articleNav"),
      main = $("main");

  $(window).scroll(function(event) {
    var scrollTop = $(window).scrollTop(),
        elementOffset = $('main').offset().top,
        elementHeight = $('main').height(),
        distance = (elementOffset - scrollTop);

      if (distance < 20 && distance > -(elementHeight-400)) {
        articleNav.removeClass('left-self-lg');
        articleNav.removeClass('left-90-lg');

        if (distance < -300) {
          articleNav.removeClass('left-self-lg');
          articleNav.addClass('left-90-lg');
        }

      }

      else {
        articleNav.addClass('left-self-lg');
        articleNav.removeClass('left-90-lg');
      }

  });

  articleNav.mouseover(function(event) {
    $(this).removeClass("left-90-lg");
    $(this).removeClass("left-self-lg");
  });
}
