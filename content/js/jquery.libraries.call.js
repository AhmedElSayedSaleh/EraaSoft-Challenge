$(document).ready(function () {
  $("#mainOwl").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
        mouseDrag: true,
        // touchDrag: true,
      },
      768: {
        items: 3,
        mouseDrag: false,
        touchDrag: false,
        nav: false,
        dots: false,
      },
    },
  });
});
