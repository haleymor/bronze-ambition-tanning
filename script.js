

// mobile menu variables
const mobileMenu = {};
const mainMenu = document.querySelector('.main-menu');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');
const logo = document.querySelector('.logo');
const bookNow = document.querySelector('.slider-button');
const card = document.querySelectorAll('.card-inner');


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
