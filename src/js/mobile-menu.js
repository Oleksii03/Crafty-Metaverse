const openMenuBtn = document.querySelector('.js-menu-open');
const closeMenuBtn = document.querySelector('.js-menu-close');
const menu = document.querySelector('.js-menu');

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  document.body.classList.toggle('to-freeze');
  menu.classList.toggle('is-visible');
}
