/**
*
* -----------------------------------------------------------------------------
*
* Template : Moyna - Creative Personal Portfolio Template
* Author : thecodude
* Author URI : http://thecodude.com/
*
* -----------------------------------------------------------------------------
*
**/

(function($) {
    "use strict";
    
    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 1) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }
    });

    // Smooth About
    if ($('.contactBtn').length){
        $(".contactBtn").on(' click ', function() {
            $('html, body').animate({
                scrollTop: $(".tcd-contact-form").offset().top
            }, 1200);
        });
    }

    // scrollTop init
    var totop = $('#toTop');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });

    // totop scroller
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    // onepage nav
    $(".nav-menu li").on("click", function () {
        if ($(".showhide").is(":visible")) {
            $(".showhide").trigger("click");
        }
    });

    if ($.fn.onePageNav) {
        $(".nav-menu").onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            offsetHeight: 70,
            filter: '',
            easing: 'swing',
        });
    }

    // Slider init
    var eiSlider = $('#ei-slider');
    if(eiSlider.length){
        eiSlider.eislideshow({
            easing      : 'easeOutExpo',
            titleeasing : 'easeOutExpo',
            titlespeed  : 1200
        });
    }

    // Portfolio 
    var portfoliofilter = $('.portfolio-filter');
    if(portfoliofilter.length){
        $('.grid').imagesLoaded(function() {
            $('.portfolio-filter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item',
                }
            });
        });
    }

    // portfolio Filter
    var portfoliofilterButton = $('.portfolio-filter button');

    if(portfoliofilterButton.length){
        portfoliofilterButton.on('click', function(e) {
           $(this).siblings('.active').removeClass('active');
           $(this).addClass('active');
           event.preventDefault();
        });
    }

    // Counter Number
    var counterNumber = $('.counter-number');
    if(counterNumber.length){
        counterNumber.counterUp({
            delay: 10,
            time: 1000
        });
    }

    //canvas menu
    $('#nav-expander').on('click',function(e){
        e.stopPropagation();
        $('body').toggleClass('nav-expanded');
    });

    $('body,html').on('click',function(e){
        $('body').removeClass('nav-expanded');
    });

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();  

    $('#nav-close').on('click',function(e){
        e.preventDefault();
        $('body').removeClass('nav-expanded');
    });

    // Blog Carousel
    var blogCarousel = $('.blog-carousel');
    if (blogCarousel.length) {
        blogCarousel.owlCarousel({
            items:3,
            autoPlay: true,
            loop: true,
            margin: 30,
            navSpeed: 1000,
            nav:true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                768:{
                    items:2,
                    nav:false
                },
                992:{
                    items:3,
                },
            }
        });
    }

    // Team Carousel
    var teamCarousel = $('.team-carousel');
    if (teamCarousel.length) {
        teamCarousel.owlCarousel({
            items:4,
            autoPlay: true,
            loop: true,
            margin: 30,
            navSpeed: 1500,
            nav:true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                768:{
                    items:2,
                    nav:false
                },
                992:{
                    items:4,
                },
            }
        });
    }

    // Home Slider
    var homeSlider = $('.home-slider');
    if (homeSlider.length) {
        homeSlider.owlCarousel({
            items:1,
            autoPlay: true,
            loop: true,
            margin: 0,
            autoHeight:true,
            navSpeed: 800,
            nav:true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        });
    }

    // Testi Carousel
    var testiCarousel = $('.testi-carousel');
    if (testiCarousel.length) {
        testiCarousel.owlCarousel({
            items:1,
            autoPlay: true,
            loop: true,
            margin: 30,
            navSpeed: 1000,
            nav:true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        });
    }
	
})(jQuery);