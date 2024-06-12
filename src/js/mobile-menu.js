const menuBtn = document.querySelector('.js-menu-open');
const header = document.querySelector('.js-header');
const menu = document.querySelector('.js-menu');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  document.body.classList.toggle('to-freeze');
  menu.classList.toggle('is-visible');
  onAnimationMenuBtn();
}

(() => {
  menu.style.paddingTop = header.offsetHeight + 15 + 'px';
})();

function onAnimationMenuBtn() {
  [...menuBtn.children].forEach(el => {
    el.classList.toggle('active');
  });
}
