(function f() {
  $('.header-search').on('click', function () {
    $('.search').addClass('open');
  });
  $('button.icon-search').on('click', function () {
    $('.search').removeClass('open');
  });
  $(document).keypress(function(e) {
    if(e.which === 13) {
      $('.search').removeClass('open');
    }
  });
})();