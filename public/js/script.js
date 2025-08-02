// =================
// main slider
// =================
$('#mainslider').owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: false,
    center: true,
    autoplay: true,
  });


// =================
// navbar bars
// =================

$("#bars").click(function () {
  $(".frame-wrapper").slideToggle();
});

// =================
//  product slider
// =================
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      750:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:false,
          loop:false
      },
      1200:{
        items:4,
        nav:false,
        loop:false
    }
  }
})