"use strict";

var scrollTo = function (sectionEl = "", callback = function () {}) {
  $("html, body").animate(
    {
      scrollTop: sectionEl ? calculateOffset(sectionEl) : 0,
    },
    800,
    "swing",
    callback()
  );
};
var calculateOffset = function (el) {
  if ($(el).length == 0) return;
  if ($(window).width() >= 980) return Math.floor($(el).offset().top - 69);
  return Math.floor($(el).offset().top);
};
// on ready state
$(function () {
  // breakpoint and up
  $(window).resize(function () {
    if ($(window).width() >= 980) {
      // when you hover a toggle show its dropdown menu
      $(".navbar .dropdown-toggle").hover(function () {
        $(this).parent().toggleClass("show");
        $(this).parent().find(".dropdown-menu").toggleClass("show");
      });

      // hide the menu when the mouse leaves the dropdown
      $(".navbar .dropdown-menu").mouseleave(function () {
        $(this).removeClass("show");
      });

      // do something here
    }
  });
  $(document).scroll(function () {
    var scroll = $(this).scrollTop();
    var navbar = $(".main-navbar");
    var scrollUpBtn = $(".scroll-up");
    // if (scroll > 0) {
    //   scrollUpBtn.fadeIn();
    // } else {
    //   scrollUpBtn.fadeOut();
    // }
    // if ($(window).width() >= 992) {
    //   if (scroll > 140) {
    //     if (!navbar.hasClass("fixed")) {
    //       $("body").css({ "padding-top": navbar.height() + "px" });
    //       navbar.addClass("fixed");
    //       // $(".search-toggle").addClass("d-none");
    //     }
    //   } else {
    //     navbar.removeClass("fixed");
    //     $("body").css({ "padding-top": "0px" });
    //     $(".search-toggle").removeClass("d-none");
    //   }
    // }
    if (scroll == 0) {
      $("ul.navigator li").removeClass("active");
      $("#navIntro").addClass("active");
    } else $("#navIntro").removeClass("active");
    
    if (scroll >= calculateOffset(".our-partners") - 500) {
      $("ul.navigator li").removeClass("active");
      $("#navOurPartners").addClass("active");
    } else $("#navOurPartners").removeClass("active");

    if (scroll >= calculateOffset(".our-advantages") - 400) {
      $("ul.navigator li").removeClass("active");
      $("#navAdvantages").addClass("active");
    } else $("#navAdvantages").removeClass("active");

    
    if (scroll >= calculateOffset(".who-we-are") - 500) {
      $("ul.navigator li").removeClass("active");
      $("#navWhoWe").addClass("active");
    } else $("#navWhoWe").removeClass("active");

   
   
    if (scroll >= calculateOffset(".tour") - 400) {
      $("ul.navigator li").removeClass("active");
      $("#navTour").addClass("active");
    } else $("#navTour").removeClass("active");

    if (scroll >= calculateOffset(".our-services") - 400) {
      $("ul.navigator li").removeClass("active");
      $("#navServices").addClass("active");
    } else $("#navServices").removeClass("active");

    if (scroll >= calculateOffset(".our-program") - 400) {
      $("ul.navigator li").removeClass("active");
      $("#navProg").addClass("active");
    } else $("#navProg").removeClass("active");
  
    if (scroll >= calculateOffset(".customers-opinions") - 400) {
      $("ul.navigator li").removeClass("active");
      $("#navCust").addClass("active");
    } else $("#navCust").removeClass("active");

    if (scroll >= calculateOffset(".strategic-partners") - 400) {
      $("ul.navigator li").removeClass("active");
      $("#navStrategicPartners").addClass("active");
    } else $("#navStrategicPartners").removeClass("active");
  });



  


  $(".search-toggle").on("click", function (e) {
    // $(".search-box").toggle();
    //show search action
     
      $(".search-box").fadeToggle("fast", function() {
      $(".search-box input").focus();
      // Animation complete.
      
      });
      
  $(document).click(function(e) {
  if (!$(e.target).is('.searchbox, .searchbox *')) {
  $(".searchbox").hide();
  //$(".search-input").val("");
  }
  });
  $('.closeSearch').click(function(e) {
  $(".searchbox").hide();
  $(".search-input").val("");
  });

    $(".search-box").toggleClass("open-search");

    // $("body").toggleClass("header-popup-open");
    e.stopPropagation();
   
    
  });
  $(document).click(function(e) {
  if (!$(e.target).is('.search-box input, .search-toggle*')) {
  $(".search-box").hide();
  $("body").removeClass("header-popup-open");
  console.log("hhhhhhhhhhh");
  $(".search-box").toggleClass("open-search");
  $(".search-box input").val("");




}
  });





  $(".scroll-down").on("click", function () {
    scrollTo(".our-partners");
  });
  // $(".scroll-up").on("click", function () {
  //   scrollTo();
  // });
  $("#navIntro a").on("click", function () {
    scrollTo(false, function () {
      $("ul.navigator li").removeClass("active");
      $("#navIntro").addClass("active");
    });
  });
  $("#navOurPartners a").on("click", function () {
    scrollTo(".our-partners", function () {
      $("ul.navigator li").removeClass("active");
      $("#navOurPartners").addClass("active");
    });
  });
  $("#navAdvantages a").on("click", function () {
    scrollTo(".our-advantages", function () {
      $("ul.navigator li").removeClass("active");
      $("#navAdvantages").addClass("active");
    });
  });
  
  $("#navWhoWe a").on("click", function () {
    scrollTo(".who-we-are", function () {
      $("ul.navigator li").removeClass("active");
      $("#navWhoWe").addClass("active");
    });
  });
  $("#navTour a").on("click", function () {
    scrollTo(".tour", function () {
      $("ul.navigator li").removeClass("active");
      $("#navTour").addClass("active");
    });
  });
  $("#navServices a").on("click", function () {
    scrollTo(".our-services", function () {
      $("ul.navigator li").removeClass("active");
      $("#navServices").addClass("active");
    });
  });
  $("#navProg a").on("click", function () {
    scrollTo(".our-program", function () {
      $("ul.navigator li").removeClass("active");
      $("#navProg").addClass("active");
    });
  });
  $("#navCust a").on("click", function () {
    scrollTo(".customers-opinions", function () {
      $("ul.navigator li").removeClass("active");
      $("#navCust").addClass("active");
    });
  });
  $("#navStrategicPartners a").on("click", function () {
    scrollTo(".strategic-partners", function () {
      $("ul.navigator li").removeClass("active");
      $("#navStrategicPartners").addClass("active");
    });
  });
});






$( "a.collapse-btn" ).click(function() {
  $( this ).parent("div").toggleClass("show-collapse");
  console.log("hello");
});


