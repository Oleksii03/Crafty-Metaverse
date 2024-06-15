const contentBlock = document.querySelector('.content-block');
const btnMore = document.querySelector('.js-list-more-btn');
const innerList = document.querySelector('.js-list');

(function () {
  [...contentBlock.children].forEach((el, idx) => {
    if (!((idx + 1) % 2)) {
      el.style.marginLeft = 'auto';
    }
  });
})();

btnMore.addEventListener('click', e => {
  innerList.classList.toggle('active');

  if (innerList.classList.contains('active')) {
    innerList.style.maxHeight = innerList.scrollHeight + 'px';
    e.currentTarget.firstElementChild.textContent = 'Height ';
    return;
  }

  innerList.style.maxHeight = 0;
  e.currentTarget.firstElementChild.textContent = 'More';
});
