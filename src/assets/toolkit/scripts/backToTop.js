const backToTop = document.querySelector('#js-backToTop');

$(window).scroll(function() {
   if($(window).scrollTop() > $(window).height()) {
       backToTop.classList.remove('down-self');
   }
   else {
    backToTop.classList.add('down-self');
   }
});