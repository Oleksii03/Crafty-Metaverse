const contentBlock = document.querySelector('.content-block');

(function () {
  [...contentBlock.children].forEach((el, idx) => {
    if (!((idx + 1) % 2)) {
      el.style.marginLeft = 'auto';
    }
  });
})();
