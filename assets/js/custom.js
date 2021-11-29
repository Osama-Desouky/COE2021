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















// scroll magic 


// example


gsap.registerPlugin(MotionPathPlugin);

// const tween = gsap.timeline();
// tween.to(".who-we-sub-img1", {
//   duration: 1,
//   ease: "power1.inOut",
//   motionPath: {
//     path: [{x: 100, y: -200}], // you probably want more points here...or just use an SVG <path>!
//     curviness: 2,
//     autoRotate: true
//   }
// });

// const controller = new ScrollMagic.Controller();
// const scene = new ScrollMagic.Scene({

//   triggerElement: ".who-we-are",
//   duration: 500,
//   triggerHook:0


// })
// .setTween(tween)
// .addIndicators()
// .setPin(".who-we-are")
// .addTo(controller);



/*
start ------ programs ---------- animate
*/

/*
 ------- program images background
*/
const tween1 = gsap.timeline();
tween1.from(".program-images", 1 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: -800, y: 0}],
    curviness: 1,
  }
});
const controller1 = new ScrollMagic.Controller();
const scene1 = new ScrollMagic.Scene({

  triggerElement: ".our-program",
  duration: 1200,
  triggerHook:0
})
.setTween(tween1)
// .addIndicators()
.setPin(".our-program")
.addTo(controller1);




/*
--------- start image itc
*/
const tween2 = gsap.timeline();
tween2.from(".program-images .prog1-img", 2 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: -200,y:-400,rotate:-50}],
    curviness: 1,
  }
});
const controller2 = new ScrollMagic.Controller();
const scene2 = new ScrollMagic.Scene({

  triggerElement: ".our-program",
  duration: 1200,
  triggerHook:0
})
.setTween(tween2)
// .addIndicators()
.addTo(controller2);
// image itc

/**
 ------ image learn
 */
const tween3 = gsap.timeline();
tween3.from(".program-images .prog2-img", 2 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: -150,y:-100,rotate:40}], 
    curviness: 1,
  }
});
const controller3 = new ScrollMagic.Controller();
const scene3 = new ScrollMagic.Scene({
  triggerElement: ".our-program",
  duration: 1200,
  triggerHook:0
})
.setTween(tween3)
// .addIndicators()
.addTo(controller3);
// end image learn

/**
 ------ image plane with gift
 */
const tween4 = gsap.timeline();
tween4.from(".program-images .prog3-img", 2 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: -100,y:-200,rotate:-40}],
    curviness: 1,
  }
});
const controller4 = new ScrollMagic.Controller();
const scene4 = new ScrollMagic.Scene({
  triggerElement: ".our-program",
  duration: 1200,
  triggerHook:0
})
.setTween(tween4)
// .addIndicators()
.addTo(controller4);
// end image plane with gift

/**
 ------ image eng. location
 */
const tween5 = gsap.timeline();
tween5.from(".program-images .prog4-img", 1 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: -200,y:100,rotate:-50}],
    curviness: 1,
  }
});
const controller5 = new ScrollMagic.Controller();
const scene5 = new ScrollMagic.Scene({
  triggerElement: ".our-program",
  duration: 1200,
  triggerHook:0
})
.setTween(tween5)
// .addIndicators()
.addTo(controller5);
// end image eng. location


/*
------------ details-content
*/
const tween6 = gsap.timeline();
tween6.from(".our-program .details-content", 2 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: 1200,scale:1.6}],
    curviness: 1,
  }
});
const controller6 = new ScrollMagic.Controller();
const scene6 = new ScrollMagic.Scene({
  triggerElement: ".our-program",
  duration: 1200,
  triggerHook:0
})
.setTween(tween6)
// .addIndicators()
.addTo(controller6);
// end details-content


/*
------------ progs background
*/
const tween7 = gsap.timeline();
const before = $('.our-program .prog-bg')
console.log(before);
tween7.from(before, 0.5 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [{x:0,y:0 , rotate:-70  , backgroundSize:3308 , width:3300 , height:3665 , top:-200 ,backgroundPositionX:350 , backgroundPositionY:-250 }],
    curviness: 1,
  }
});
const controller7 = new ScrollMagic.Controller();
const scene7 = new ScrollMagic.Scene({
  triggerElement: ".our-program",
  duration: 1000,
  triggerHook:0
})
.setTween(tween7)
// .addIndicators()
.addTo(controller7);
// end background







/*
start ------ our-advantages ---------- animate
*/

/*
 ------- advantages card 1
*/
const advTween1 = gsap.timeline();
advTween1.from(".advantages1", 1 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: 800, y: -500 , opacity:0}],
    curviness: 1,
  }
});
const advController1 = new ScrollMagic.Controller();
const advScene1 = new ScrollMagic.Scene({
  triggerElement: ".our-advantages",
  duration: 700,
  triggerHook:0.2
})
.setTween(advTween1)
// .addIndicators()
.addTo(advController1);


/*
 ------- advantages card 2
*/
const advTween2 = gsap.timeline();
advTween2.from(".advantages2", 2 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: 0, y: -500 , opacity:0}],
    curviness: 1,
  }
});
const advController2 = new ScrollMagic.Controller();
const advScene2 = new ScrollMagic.Scene({
  triggerElement: ".our-advantages",
  duration: 1100,
  triggerHook:0.2
})
.setTween(advTween2)
// .addIndicators()
.addTo(advController2);


/*
 ------- advantages card 3
*/
const advTween3 = gsap.timeline();
advTween3.from(".advantages3", 3 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: -800, y: -500 , opacity:0}],
    curviness: 1,
  }
});
const advController3 = new ScrollMagic.Controller();
const advScene3 = new ScrollMagic.Scene({
  triggerElement: ".our-advantages",
  duration: 1500,
  triggerHook:0.2
})
.setTween(advTween3)
// .addIndicators()
.setPin(".our-advantages")
.addTo(advController3);






/*
start ------ who-we-are ---------- animate
*/

/*
 ------- who-we-are content
*/
const whoTween1 = gsap.timeline();
whoTween1.from(".who-we-content", 1 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: 1500, y: 700 , scale:1.5}],
    curviness: 1,
  }
});
const whoController1 = new ScrollMagic.Controller();
const whoScene1 = new ScrollMagic.Scene({
  triggerElement: ".who-we-are",
  duration: 800,
  triggerHook:0
})
.setTween(whoTween1)
// .addIndicators()
// .setPin(".who-we-are")
.addTo(whoController1);


/*
 ------- who-we-are main img
*/
const whoTween2 = gsap.timeline();
whoTween2.from(".who-we-main-img", 1 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: -1000, y: 300 , scale:1.5}],
    curviness: 1,
  }
});
const whoController2 = new ScrollMagic.Controller();
const whoScene2 = new ScrollMagic.Scene({
  triggerElement: ".who-we-are",
  duration: 500,
  triggerHook:0
})
.setTween(whoTween2)
// .addIndicators()
// .setPin(".who-we-are")
.addTo(whoController2);

/*
 ------- who-we-are img1
*/
const whoTween3 = gsap.timeline();
whoTween3.from(".who-we-sub-img1", 1 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: -500, y: -50 , opacity:0 ,  scale:.2}],
    curviness: 1,
  }
});
const whoController3 = new ScrollMagic.Controller();
const whoScene3 = new ScrollMagic.Scene({
  triggerElement: ".who-we-are",
  duration: 1200,
  triggerHook:0
})
.setTween(whoTween3)
// .addIndicators()
// .setPin(".who-we-are")
.addTo(whoController3);

/*
 ------- who-we-are img2
*/
const whoTween4 = gsap.timeline();
whoTween4.from(".who-we-sub-img2", 1 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: -500, y: -150 ,  opacity:0 ,  scale:.2}],
    curviness: 1,
  }
});
const whoController4 = new ScrollMagic.Controller();
const whoScene4 = new ScrollMagic.Scene({
  triggerElement: ".who-we-are",
  duration: 1400,
  triggerHook:0
})
.setTween(whoTween4)
// .addIndicators()
// .setPin(".who-we-are")
.addTo(whoController4);

/*
 ------- who-we-are img3
*/
const whoTween5 = gsap.timeline();
whoTween5.from(".who-we-sub-img3", 1 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [
      {x: -500, y: -500 ,  opacity:0,  scale:.2}
    ],
    curviness: 1,
  }
});
const whoController5 = new ScrollMagic.Controller();
const whoScene5 = new ScrollMagic.Scene({
  triggerElement: ".who-we-are",
  duration: 1600,
  triggerHook:0
})
.setTween(whoTween5)
// .addIndicators()
.setPin(".who-we-are")
.addTo(whoController5);




// serTween
// serController
// serScene

/*
start ------ our services ---------- animate 
*/

/*
 ------- details-sec
*/
const serTween = gsap.timeline();
serTween.from(".our-services .details-sec", 1 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [
      {y:200,  opacity:0,  scale:1.5}
    ],
    curviness: 1,
  }
});
const serController = new ScrollMagic.Controller();
const serScene = new ScrollMagic.Scene({
  triggerElement: ".our-services",
  duration: 400,
  triggerHook:0,
  offset: 100
})
.setTween(serTween)
.addTo(serController);



/*
 ------- details-content
*/
const serTween2 = gsap.timeline();
serTween2.from(".details-sec .details-content", 1 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [
      {y:1000,  opacity:0,  scale:.2}
    ],
    curviness: 1,
  }
});
const serController2 = new ScrollMagic.Controller();
const serScene2 = new ScrollMagic.Scene({
  triggerElement: ".our-services",
  duration: 1200,
  triggerHook:0,
  offset: 100
})
.setTween(serTween2)
.setPin(".our-services")
.addTo(serController2);



/*
 ------- details-content
*/
const serTween3 = gsap.timeline();
serTween3.from(".details-sec .service-image", 1 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [
      { y:500 , opacity:0,  scale:.2}
    ],
    curviness: 1,
  }
});
const serController3 = new ScrollMagic.Controller();
const serScene3 = new ScrollMagic.Scene({
  triggerElement: ".our-services",
  duration: 1000,
  triggerHook:0,
  offset: 100
})
.setTween(serTween3)
.addTo(serController3);





/*
start ------ tour---------- animate 
*/

/*
 ------- item2
*/

const tourTween1 = gsap.timeline();
tourTween1.fromTo(".tour .item2" , 

      {y:-500 , x:-200,  opacity:0.1,  scale:.5 , duration: 1 , },
      {y:-550 , x:0 , opacity:1,  scale:1 , duration: 1 }

);
const tourController1 = new ScrollMagic.Controller();
const tourScene1 = new ScrollMagic.Scene({
  triggerElement: ".tour",
  duration: 2000,
  triggerHook:0,
  offset: 100
})
.setTween(tourTween1)
// .addIndicators()
.setPin(".tour")
.addTo(tourController1);


/*
 ------- item2
*/

const tourTween2 = gsap.timeline();
tourTween2.to(".tour .item1", 1 , {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [
      {y:50 , x:300,  opacity:0.2,  scale:.5}
    ],
    curviness: 0,
  }
});
const tourController2 = new ScrollMagic.Controller();
const tourScene2 = new ScrollMagic.Scene({
  triggerElement: ".tour",
  duration: 1000,
  triggerHook:0,
  offset: 100
})
.setTween(tourTween2)
// .addIndicators()
// .setPin(".tour")
.addTo(tourController2);



/*
 ------- item2 line
*/

const lineTween2 = gsap.timeline();
lineTween2.fromTo(".tour .item1 .item-marker .mark-line" , 
    {y:0 , x:0,  opacity:1,  scale:1 , duration: 1 , },
    {rotate:33 , scale:1.8 , translateX:-90 ,translateY:-5 , duration: 1 , }

);
const lineController2 = new ScrollMagic.Controller();
const lineScene2 = new ScrollMagic.Scene({
  triggerElement: ".tour",
  duration: 2000,
  triggerHook:0,
  offset: 100
})
.setTween(lineTween2)
// .addIndicators()
// .setPin(".tour")
.addTo(lineController2);


// transform: rotate(25deg) scale(1.8) translate3d(-65px, 38px, 0px);



/*
shape1
*/
const shapeTween1 = gsap.timeline();
shapeTween1.fromTo(".floated-icon.chart-up" , 

      {y:0 , x:0,  opacity:1,  scale:1 , duration: 1 , },
      {y:100 , x:20 , opacity:1,  scale:1 , duration: 1 }

);
const shapeController1 = new ScrollMagic.Controller();
const shapeScene1 = new ScrollMagic.Scene({
  triggerElement: ".tour",
  duration: 1000,
  triggerHook:0,
  offset: 100
})
.setTween(shapeTween1)
// .addIndicators()
// .setPin(".tour")
.addTo(shapeController1);



/*
shape2
*/
const shapeTween2 = gsap.timeline();
shapeTween2.fromTo(".floated-icon.chart-fav" , 

      {y:0 , x:0,  opacity:1,  scale:1 , duration: 1 , },
      {y:-100 , x:20 , opacity:1,  scale:1.2 , duration: 1 }

);
const shapeController2 = new ScrollMagic.Controller();
const shapeScene2 = new ScrollMagic.Scene({
  triggerElement: ".tour",
  duration: 1000,
  triggerHook:0,
  offset: 100
})
.setTween(shapeTween2)
// .addIndicators()
// .setPin(".tour")
.addTo(shapeController2);


/*
shape3
*/
const shapeTween3 = gsap.timeline();
shapeTween3.fromTo(".floated-icon.graph" , 

      {y:0 , x:0,  opacity:1,  scale:1 , duration: 1 , },
      {y:-80 , x:-100 , opacity:.8,  scale:1 , duration: 1 }

);
const shapeController3 = new ScrollMagic.Controller();
const shapeScene3 = new ScrollMagic.Scene({
  triggerElement: ".tour",
  duration: 1000,
  triggerHook:0,
  offset: 100
})
.setTween(shapeTween3)
// .addIndicators()
// .setPin(".tour")
.addTo(shapeController3);