"use strict";
$(document).ready(function () {
  $(".owl-carousel.banner").owlCarousel({
    loop: true,
    navigation: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    items: 1,
    nav: true,
    dots: false,
    autoplayTimeout: 8000,
    autoplay: true,
  });
  $(".owl-carousel.brand").owlCarousel({
    loop: true,
    navigation: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    items: 6,
    nav: true,
    dots: false,
    autoplayTimeout: 3000,
    autoplay: true,
  });
  $(".owl-carousel.trending").owlCarousel({
    loop: true,
    navigation: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    items: 4,
    nav: true,
    dots: false,
  });
  $(".dropdown").on("click", function () {
    var dropdownContent = $(this).find(".dropdown-content");
    $(".dropdown-content").not(dropdownContent).removeClass("show");
    dropdownContent.toggleClass("show");
  });
  //click outstite dropdown-content then close it
  $(document).on("click", function (event) {
    var dropdownContents = $(".dropdown-content");
    dropdownContents.each(function () {
      var dropdown = $(this).closest(".dropdown");
      if (dropdown.length && !dropdown.has(event.target).length) {
        $(this).removeClass("show");
      }
    });
  });
  //close promo
  $(".wrap-promo .close").click(() => {
    $(".wrap-promo").hide();
  });
});
