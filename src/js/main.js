import 'bootstrap';
$(document).ready(function () {
  //show navigation menu background gradient
  $(".navbar-toggler").click(function () {
    $("#nav-main").toggleClass("nav-background");
  })

  //toggle btn-project-active class between portfolio buttons
  $(".btn-project").click(function () {
    if ($(this)[0] !== $(".btn-project-active")[0]) {
      $(".btn-project").not($(this)).removeClass("btn-project-active");
      $(this).toggleClass("btn-project-active");
    }
  })
});
