$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:`<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-arrow-left"></i></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-arrow-right"></i></button>`,
        dots: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
                }
              },

              {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
                }
              },

              
        ]

    });
  });

  $(document).ready(function(){
    $('.image-slider1').slick({
        slidesToShow: 4,
        // prevArrow:`<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-arrow-left"></i></button>`,
        // nextArrow:`<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-arrow-right"></i></button>`,
        // dots: true, 
        arrows: false, 
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
                }
              },
        ]

    });
  });