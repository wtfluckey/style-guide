$( document ).ready(function() {

  $(".view-code-link").click(function() {
    $(this).siblings('.highlight').slideToggle();
  });
});
