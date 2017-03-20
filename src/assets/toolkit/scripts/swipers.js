if ( $( ".swiper" ).length ) {
  var positionSwipers = function() {
    var size = $(".container").css("marginLeft");

    $(".swiper ul, .swiper > a").css({"padding-left": size});
  }

  $(document).ready(function() {
    positionSwipers();
    window.onresize = positionSwipers;
  });
}
