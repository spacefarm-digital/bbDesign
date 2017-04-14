document.addEventListener('keydown', function(e) {
  if (e.keyCode === 9) {
    $('body').addClass('a11y');
  }
});

document.addEventListener('click', function(e) {
  $('body').removeClass('a11y');
});
