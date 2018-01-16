import 'bootstrap';
$(document).ready(function () {
  //show navigation menu background gradient
  $(".navbar-toggler").click(function () {
    $("#nav-main").toggleClass("nav-background");
  })

  //toggle btn-project-active class between portfolio buttons
  $(".btn-project").click(function () {
    if (this !== $(".btn-project-active")[0]) {
      $(".btn-project-active").removeClass("btn-project-active");
      $(this).toggleClass("btn-project-active");
    }

    switch (this.id) {
      case "btn-project-1":
        toggleCarousel($("#btn-project-1")[0], $(".carousel-1")[0]);
        break;
      case "btn-project-2":
        toggleCarousel($("#btn-project-2")[0], $(".carousel-2")[0]);
        break;
      case "btn-project-3":
        toggleCarousel($("#btn-project-3")[0], $(".carousel-3")[0]);
        break;
      case "btn-project-4":
        toggleCarousel($("#btn-project-4")[0], $(".carousel-4")[0]);
        break;
      case "btn-project-5":
        toggleCarousel($("#btn-project-5")[0], $(".carousel-5")[0]);
        break;
    }
  })
  $("a").on('click', function (event) {
    smoothScroll(this, event);
  });
});

function toggleCarousel(btn, car) {
  if (car !== $(".carousel-active")[0]) {
    $(".carousel-active").removeClass("carousel-active");
    $(".carousel-active").removeClass("testy");
    $(car).addClass("testy");
    $(car).addClass("carousel-active");
  }
}

function smoothScroll(elem, e) {
  if (elem.hash !== "") {
    e.preventDefault();
    var hash = elem.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {
      window.location.hash = hash;
    });
  }
}
