'use strict';
$(document).ready(function () {
    const productCategory = { new: [0, 1, 2, 3, 4, 5, 6, 7, 8], featured: [1, 3, 5, 7], bestSeller: [0, 2, 4, 6] };
    $('.dropdown').on('click', function () {
        var dropdownContent = $(this).find('.dropdown-content');
        $('.dropdown-content').not(dropdownContent).removeClass('show');
        dropdownContent.toggleClass('show');
    });
    //click outstite dropdown-content then close it
    $(document).on('click', function (event) {
        var dropdownContents = $('.dropdown-content');
        dropdownContents.each(function () {
            var dropdown = $(this).closest('.dropdown');
            if (dropdown.length && !dropdown.has(event.target).length) {
                $(this).removeClass('show');
            }
        });
    });
    //open sideBar
    $('.menu_bar').on('click', function () {
        $('#sideBar').addClass('active');
        $('body').css('overflow', 'hidden');
    });
    //close sideBar
    const closeSideBar = () => {
        $('#sideBar').removeClass('active');
        $('body').css('overflow', 'auto');
    }
    $('.closeSideBar').on('click', function () {
        closeSideBar();
    });
    //handle menu sideBar
    $('.sideBar_menu .item').on('click', function () {
        $('.sideBar_menu .dropDownContent').not($(this).find(".dropDownContent")).removeClass('show');
        $(this).find(".dropDownContent").toggleClass("show");
    })
    $(".sideBar_menu .dropDownContent").click(function (event) {
        event.stopPropagation();
    });
    $(".sideBar_menu .dropDownItem").click(function (event) {
        event.stopPropagation();
        closeSideBar();
    });
    //handle product in category
    const handleProductInCategory = (el) => {
        $('.grid_item').hide();
        if (el.hasClass('new')) {
            productCategory.new.forEach(item => {
                $('.productId_' + item).show();
            });
        } else if (el.hasClass('featured')) {
            productCategory.featured.forEach(item => {
                $('.productId_' + item).show();
            });
        } else if (el.hasClass('bestSeller')) {
            productCategory.bestSeller.forEach(item => {
                $('.productId_' + item).show();
            });
        }
    };
    //Select category list
    $('.category_list .category_item').on('click', function () {
        let _this = $(this);
        $('.category_list .category_item').removeClass('active');
        _this.addClass('active');
        handleProductInCategory(_this);
    });
    //trigger fist category item
    $('.category_list .category_item').eq(0).trigger('click');
    //handle SlideShow
    let carouselWidth = $('.carousel-inner')[0].scrollWidth;
    let cardWidth = $('.carousel-item').width();
    let scrollPosition = 0;
    if (window.matchMedia("(min-width: 769px)").matches) {
        $('.carousel-control-next').on('click', function () {
            if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
                scrollPosition = scrollPosition + cardWidth;
                $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
            }

        });
        $('.carousel-control-prev').on('click', function () {
            if (scrollPosition > 0) {
                scrollPosition = scrollPosition - cardWidth;
                $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
            }
        })
    }


});


