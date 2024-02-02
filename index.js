"use strict";
$(document).ready(function () {
  const initOwlCarousel = (selector, options) => {
    $(selector).owlCarousel(
      $.extend(
        {
          loop: true,
          navigation: true,
          slideSpeed: 300,
          paginationSpeed: 400,
          nav: true,
          dots: false,
          autoplay: true,
          autoplayTimeout: 5000,
        },
        options
      )
    );
  };
  initOwlCarousel(".owl-carousel.banner", { items: 1, autoplayTimeout: 8000 });
  initOwlCarousel(".owl-carousel.brand", { items: 6, autoplayTimeout: 3000 });
  initOwlCarousel(".owl-carousel.four-item", {
    items: 4,
    margin: 20,
    autoplay: false,
  });
  initOwlCarousel(".owl-carousel.three-item", {
    items: 3,
    margin: 20,
    autoplay: false,
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
  //handle tab
  $(".tab").on("click", function () {
    let _this = this;
    let container = _this.closest(".container");
    let index = $(_this).index();
    let carousels = $(container).find(".owl-carousel");

    $(container).find(".tab.active").removeClass("active");
    $(_this).addClass("active");
    $(carousels).removeClass("active-tab");
    $(carousels).eq(index).addClass("active-tab");
  });
  //Product colors
  $(".color").on("click", function() {
    
    let _this = this;
    let wrap = _this.closest(".product_color");
    $(wrap).find(".color.active").removeClass("active");
    $(_this).addClass("active");
  });
});
