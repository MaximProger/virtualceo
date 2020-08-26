$(document).ready(function () {
  // Reviews Slider
  $("#reviewsSlider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: "#reviewsNav",
    arrows: false,
  });

  $("#reviewsNav").slick({
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    asNavFor: "#reviewsSlider",
    focusOnSelect: true,
  });
});
