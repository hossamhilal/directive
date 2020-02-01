// $(window).on('load', function () {
//     $('.loader').fadeOut(500, function () {
//         $(this).remove();
//     });      
// });


/*global $ */
$(document).ready(function ($) {
    'use strict';
 
    // Open navbarSide when button is clicked
    $('.nav-btn').on('click', function () {
        $('.header-nav').toggleClass('show');
        $('.header-overlay').toggleClass('show');
        $('body').toggleClass('no-scroll');
    });

    $('.header-overlay').on('click', function () {
        $(this).removeClass('show');
        $('.header-nav').removeClass('show');     
        $('body').removeClass('no-scroll');
    });

    // Show Search 
    $('.show-search').on('click', function () {
        $('.search-popup').addClass('show');
    });

    // Close Search 
    $('.close-search').on('click', function () {
        $('.search-popup').removeClass('show');
    });

    // Header Owl
    $('.header-owl').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    // Scroll Down
    $('.scroll-down-btn').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ 
            scrollTop: $($(this).attr('href')).offset().top
        }, 800, 'linear');
    });



    // INPUT FOCUS ANIMATION 
    $('.field .form-control').focus(function(){
        $(this).parent('.field').addClass('focused');
    });

    $('.field .form-control').each(function() { 
        if ($(this).val() != "") {
            $(this).parent('.field').addClass('focused');   
        }
    });

    $('.field .form-control').focusout(function(){
        if($(this).val() === "")
        $(this).parent('.field').removeClass('focused');
    });


    // MIX IT UP FILTER 
    $('.products-filter-list a').click(function(e){
        e.preventDefault();
    });

    var mixer = mixitup('.products-filter-content', {
        selectors: {
            target: '.col-12'
        },
        animation: {
            duration: 400
        }
    });


    // Team Owl
    $('.team-owl').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: false,
        loop: true,
        nav: true,
        dots:false,
        center: true,
        navText: ["<i class='icofont-caret-right'></i>", "<i class='icofont-caret-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            425: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    $('.team-data h3').text($('.team-owl .owl-item.active.center h3').text());
    $('.team-data p').text($('.team-owl .owl-item.active.center p').text()); 

    $(document).on('click','.team-owl .owl-prev , .team-owl .owl-next',function(){
        var oldTit = $('.team-owl .owl-item.active.center h3').text(),
            oldTxt = $('.team-owl .owl-item.active.center p').text() ;
        $('.team-data h3').text(oldTit);
        $('.team-data p').text(oldTxt);
    });

    // Sponsors Owl
    $('.sponsors-owl').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        navText: ["<i class='icofont-hand-drawn-right'></i>", "<i class='icofont-hand-drawn-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

});


