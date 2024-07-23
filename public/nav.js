$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $(".navbar").css({
        "margin-top": "20px",
        "height": "100px",

      });
      $(".navbar-brand img").css({
        "width": "150px"
      });
    }
    if (scroll > 50) {
      $(".navbar").css({
        "margin-top": "0px",
        "height": "50px",
        "background": "#017acf",
        "color": "white !important",
        "padding": "10px"
      });
      $(".navbar-brand img").css({
        "width": "80px"
      });
    }


    else {
      $(".navbar").css("background", "transparent");
    }
  })
})