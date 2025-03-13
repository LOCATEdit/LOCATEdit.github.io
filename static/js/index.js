// window.HELP_IMPROVE_VIDEOJS = false;

// var INTERP_BASE = "./static/interpolation/stacked";
// var NUM_INTERP_FRAMES = 240;

// var interp_images = [];
// function preloadInterpolationImages() {
//   for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
//     var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
//     interp_images[i] = new Image();
//     interp_images[i].src = path;
//   }
// }

// function setInterpolationImage(i) {
//   var image = interp_images[i];
//   image.ondragstart = function() { return false; };
//   image.oncontextmenu = function() { return false; };
//   $('#interpolation-image-wrapper').empty().append(image);
// }


// $(document).ready(function() {
//     // Check for click events on the navbar burger icon
//     $(".navbar-burger").click(function() {
//       // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//       $(".navbar-burger").toggleClass("is-active");
//       $(".navbar-menu").toggleClass("is-active");

//     });

//     var options = {
// 			slidesToScroll: 1,
// 			slidesToShow: 1,
// 			loop: true,
// 			infinite: true,
// 			autoplay: false,
// 			autoplaySpeed: 3000,
//     }

// 		// Initialize all div with carousel class
//     var carousels = bulmaCarousel.attach('.carousel', options);

//     // Loop on each carousel initialized
//     for(var i = 0; i < carousels.length; i++) {
//     	// Add listener to  event
//     	carousels[i].on('before:show', state => {
//     		console.log(state);
//     	});
//     }

//     // Access to bulmaCarousel instance of an element
//     var element = document.querySelector('#my-element');
//     if (element && element.bulmaCarousel) {
//     	// bulmaCarousel instance is available as element.bulmaCarousel
//     	element.bulmaCarousel.on('before-show', function(state) {
//     		console.log(state);
//     	});
//     }

//     /*var player = document.getElementById('interpolation-video');
//     player.addEventListener('loadedmetadata', function() {
//       $('#interpolation-slider').on('input', function(event) {
//         console.log(this.value, player.duration);
//         player.currentTime = player.duration / 100 * this.value;
//       })
//     }, false);*/
//     preloadInterpolationImages();

//     $('#interpolation-slider').on('input', function(event) {
//       setInterpolationImage(this.value);
//     });
//     setInterpolationImage(0);
//     $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

//     bulmaSlider.attach();

// })

// Disable VideoJS improvement (if needed)
window.HELP_IMPROVE_VIDEOJS = false;

// ----- Interpolation Preloading and Slider -----
var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;
var interp_images = [];

// Preload interpolation images into an array
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

// Set the interpolation image in the designated container
function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}

// ----- Document Ready -----
$(document).ready(function() {

  // Navbar burger toggle
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // ----- Initialize Bulma Carousel -----
  // Choose the desired options (slidesToShow: 2 as per your second snippet)
  var carouselOptions = {
    slidesToScroll: 1,
    slidesToShow: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pagination: false
  };

  // Initialize all carousels with the specified options
  var carousels = bulmaCarousel.attach('.carousel', carouselOptions);

  // (Optional) Log carousel events if needed
  for (var i = 0; i < carousels.length; i++) {
    carousels[i].on('before:show', state => {
      console.log("Carousel state:", state);
    });
  }

  // ----- Preload Interpolation Images and Setup Slider -----
  preloadInterpolationImages();
  setInterpolationImage(0);
  $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);
  $('#interpolation-slider').on('input', function(event) {
    setInterpolationImage(this.value);
  });

  // ----- Initialize Bulma Slider -----
  bulmaSlider.attach();

  // ----- Initialize Modals -----
  // Open modal when a trigger is clicked
  $('.js-modal-trigger').each(function() {
    var target = $(this).data('target');
    $(this).click(function() {
      $('#' + target).addClass('is-active');
    });
  });

  // Close modal when background or close elements are clicked
  $('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button').click(function() {
    $(this).closest('.modal').removeClass('is-active');
  });

  // Close modals on Escape key press
  $(document).on('keydown', function(e) {
    if (e.key === "Escape") {
      $('.modal').removeClass('is-active');
    }
  });
});
