

// mobile menu variables
const mobileMenu = {};
const mainMenu = document.querySelector('.main-menu');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');
const logo = document.querySelector('.logo');
const bookNow = document.querySelector('.slider-button');
const card = document.querySelectorAll('.card-inner');

// let sliderImages = document.querySelectorAll(".slide"),
//   arrowLeft = document.querySelector("#arrow-left"),
//   arrowRight = document.querySelector("#arrow-right"),
//   current = 0;



card.forEach((card) => {
  card.addEventListener('click',() => {
    card.classList.toggle('is-flipped');
  });
});

mobileMenu.init = function () {

  openMenu.addEventListener('click', show);
  closeMenu.addEventListener('click', close);


  function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    bookNow.style.visibility = 'hidden';
  }

  function close() {
    mainMenu.style.top = '-100%';
    // logo.style.display = 'none';
    bookNow.style.visibility = 'visible';
  }

};


$(function () {
  mobileMenu.init();
});


//SLIDER JS

function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides(slideIndex -= 1);
  } else {
    showSlides(slideIndex += 1);
  }
  if (n === -1) {
    myTimer = setInterval(function () { plusSlides(n + 2) }, 4000);
  } else {
    myTimer = setInterval(function () { plusSlides(n + 1) }, 4000);
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () { plusSlides(n + 1) }, 5000);
  showSlides(slideIndex = n);
}

function showSlides (n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", " ");
  }
  slides[slideIndex-1].style.display = "block";

  // dots[slideIndex-1].className += "active";
}

window.addEventListener("load", function () {
  showSlides(slideIndex);
  myTimer = setInterval(function () { plusSlides(1) }, 4000);
})

// var autoSlideIndex = 0;
// showAutoSlides();

// function showAutoSlides () {
//   var i;
//   var autoSlides = document.getElementsByClassName("slides");
//   for (i = 0; i < autoSlides.length; i++) {
//     autoSlides[i].style.display = "none";
//   }
//   autoSlideIndex++;
//   if (autoSlideIndex > autoSlides.length) {autoSlideIndex = 1}
//   autoSlides[autoSlideIndex-1].style.display = "block";
//   setTimeout(showAutoSlides, 2000);
// }



// var slideIndex = 1;

// var myTimer;

// var slideshowContainer;

// window.addEventListener("load", function () {
//   showSlides(slideIndex);
  // myTimer = setInterval(function () { plusSlides(1) }, 4000);

  //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  // slideshowContainer = document.getElementsByClassName('slider')[0];

  //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

  // slideshowContainer.addEventListener('mouseenter', pause)
  // slideshowContainer.addEventListener('mouseleave', resume)
// })

// NEXT AND PREVIOUS CONTROL
// function plusSlides(n) {
//   clearInterval(myTimer);
//   if (n < 0) {
//     showSlides(slideIndex -= 1);
//   } else {
//     showSlides(slideIndex += 1);
//   }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

//   if (n === -1) {
//     myTimer = setInterval(function () { plusSlides(n + 2) }, 4000);
//   } else {
//     myTimer = setInterval(function () { plusSlides(n + 1) }, 4000);
//   }
// }

//Controls the current slide and resets interval if needed
// function currentSlide(n) {
//   clearInterval(myTimer);
//   myTimer = setInterval(function () { plusSlides(n + 1) }, 4000);
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("slide");
//   // var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  // slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
// }

// pause = () => {
//   clearInterval(myTimer);
// }

// resume = () => {
//   clearInterval(myTimer);
//   myTimer = setInterval(function () { plusSlides(slideIndex) }, 4000);
// }


// Clear all images
// function reset() {
//   for (let i = 0; i < sliderImages.length; i++) {
//     sliderImages[i].style.display = "none";
//   }
// }

// Init slider
// function startSlide() {
//   reset();
//   sliderImages[0].style.display = "block";
// }

// // Show prev
// function slideLeft() {
//   reset();
//   sliderImages[current - 1].style.display = "block";
//   current--;
// }

// // Show next
// function slideRight() {
//   reset();
//   sliderImages[current + 1].style.display = "block";
//   current++;
// }


// // Left arrow click
// arrowLeft.addEventListener("click", function () {
//   if (current === 0) {
//     current = sliderImages.length;
//   } 
//   slideLeft();
// });

// // Right arrow click
// arrowRight.addEventListener("click", function () {
//   if (current === sliderImages.length - 1) {
//     current = -1;
//   }
//   slideRight();
// });


// startSlide();

function enableBtn() {
  document.getElementById("submitBtn").disabled = false;
}