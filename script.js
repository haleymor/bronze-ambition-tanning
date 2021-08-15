

// mobile menu variables
const mobileMenu = {};
const mainMenu = document.querySelector('.main-menu');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');
const logo = document.querySelector('.logo');
const bookNow = document.querySelector('.slider-button');
const card = document.querySelectorAll('.card-inner');

let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;


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

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
