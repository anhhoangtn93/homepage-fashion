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
  initOwlCarousel(".owl-carousel.services", {
    loop: false,
    nav: false,
    autoplay: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      641: {
        items: 2,
        margin: 0,
      },
      769: {
        items: 3,
        margin: 0,
      },
      1025: {
        items: 3,
        margin: 30,
      },
      1200: {
        items: 4,
        margin: 30,
      },
    },
  });
  initOwlCarousel(".owl-carousel.services-bottom", {
    loop: false,
    nav: false,
    autoplay: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      641: {
        items: 2,
        margin: 0,
      },
      769: {
        items: 2,
        margin: 0,
      },
      1025: {
        items: 3,
        margin: 0,
      },
      1200: {
        items: 3,
        margin: 0,
      },
    },
  });
  initOwlCarousel(".owl-carousel.banner", {
    items: 1,
    autoplay: false,
    navText: [
      "<i class='icon fkt-angle-left'>",
      "<i class='icon fkt-angle-right'>",
    ],
    responsive: {
      0: {
        nav: false,
        dots: true,
      },
      641: {
        nav: false,
        dots: true,
      },
      769: {
        nav: true,
        dots: false,
      },
      1025: {
        nav: true,
        dots: false,
      },
    },
  });
  initOwlCarousel(".owl-carousel.brand", {
    nav: true,
    items: 6,
    autoplay: false,
    navText: [
      "<i class='icon fkt-angle-left'>",
      "<i class='icon fkt-angle-right'>",
    ],
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: false,
      },
      641: {
        items: 2,
        nav: false,
        dots: false,
      },
      769: {
        items: 3,
        nav: false,
        dots: false,
      },
      1025: {
        items: 3,
        nav: false,
        dots: false,
      },
      1200: {
        items: 4,
        nav: false,
        dots: false,
      },
      1440: {
        items: 6,
        nav: true,
        dots: false,
        margin: 30,
      },
    },
  });
  initOwlCarousel(".owl-carousel.four-item", {
    margin: 20,
    loop: false,
    autoplay: false,
    responsive: {
      0: {
        items: 2,
      },
      641: {
        items: 2,
      },
      769: {
        items: 3,
      },
      1025: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  });
  initOwlCarousel(".owl-carousel.three-item", {
    margin: 20,
    autoplay: false,
    nav: false,
    dots: false,
    loop:false,
    responsive: {
      0: {
        items: 2,
      },
      641: {
        items: 2,
      },
      769: {
        items: 2,
      },
      1025: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });
  initOwlCarousel(".owl-carousel.six-item", {
    loop: true,
    items: 6,
    margin: 0,
    autoplay: false,
    loop: false,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      641: {
        items: 2,
      },
      769: {
        items: 3,
      },
      1025: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1440: {
        items: 6,
      },
    },
  });

  //handle dropdown
  $(".dropdown").on("click", function () {
    let parent = $(this).parent();
    if (parent.hasClass("dropdown-click-disable")) {
      return;
    }
    parent.addClass("dropdown-active");
    let dropdownContent = $(this).find(".dropdown-content");
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
    $(".wrap-promo").css({ visibility: "hidden", opacity: 0 });
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
  $(".color").on("click", function () {
    let _this = this;
    let wrap = _this.closest(".product_color");
    $(wrap).find(".color.active").removeClass("active");
    $(_this).addClass("active");
  });
  //open mobile-menu
  $("#menu-bar").on("click", function () {
    $("body").addClass("m-menu-active");
    $(".mobile-menu-overlay").addClass("active");
    $("#mobile-menu").addClass("active");
  });
  //close mobile-menu
  const closeMobileMenu = () => {
    $("body").removeClass("m-menu-active");
    $(".mobile-menu-overlay").removeClass("active");
    $("#mobile-menu").removeClass("active");
  };
  $(".close-mobile-menu").on("click", function () {
    closeMobileMenu();
  });
  $(".mobile-menu-overlay").on("click", function () {
    closeMobileMenu();
  });
  //handle mobile-menu
  $(".mobile-menu-nav .item").on("click", function () {
    $(".mobile-menu-nav .item .menu-content")
      .not($(this).find(".menu-content"))
      .removeClass("active");
    $(this).find(".menu-content").toggleClass("active");
    $(".mobile-menu-nav .dropDownContent")
      .not($(this).find(".dropDownContent"))
      .removeClass("show");
    $(this).find(".dropDownContent").toggleClass("show");
  });
  $(".mobile-menu-nav .dropDownContent").click(function (event) {
    event.stopPropagation();
  });
});
