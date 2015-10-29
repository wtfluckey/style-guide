$( document ).ready(function() {
  var sections = $('.js-anchor')
    , nav = $('#js-nav');

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
      var top = $(this).offset().top - 400,
          bottom = top + $(window).height();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });
});
