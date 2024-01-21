"use strict";
$(document).ready(function () {
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
  //slider
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
});
