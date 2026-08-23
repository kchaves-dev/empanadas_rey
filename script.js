$(document).ready(function () {
  // Desplazamiento suave para los enlaces del menú
  $('a[href^="#"]').on('click', function (e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 70
      }, 400);
    }
  });

});