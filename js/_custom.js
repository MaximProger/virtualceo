$(document).ready(function () {
  // Videos Player
  $(".videos-video").on("click", function () {
    $(this).children(".videos-play").hide();
    $(this).children(".videos-img").addClass("active");
    let currentSrc =
      $(this).children(".videos-img").attr("src") + "?autoplay=1";
    $(this).children(".videos-img").attr("src", currentSrc);
  });
});
