const menuBtn = document.querySelector('.js-menu-open');
const headerHeight = document.querySelector('.js-header').offsetHeight;
const menu = document.querySelector('.js-menu');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  document.body.classList.toggle('to-freeze');
  menu.classList.toggle('is-visible');
  onAnimationMenuBtn();
}

(() => {
  menu.style.paddingTop = headerHeight + 'px';
})();

function onAnimationMenuBtn() {
  [...menuBtn.children].forEach(el => {
    el.classList.toggle('active');
  });
}
