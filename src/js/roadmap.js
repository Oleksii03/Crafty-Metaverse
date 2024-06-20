const contentBlock = document.querySelector('.content-block');
const btnMoreQ1 = document.querySelector('.js-list-more-btn');
const btnMoreQ2 = document.querySelector('.js-list-more-btn-q2');
const innerListQ1 = document.querySelector('.js-list');
const innerListQ2 = document.querySelector('.js-list-q2');
const imgQ1 = document.querySelector('.js-bg-circle-q1');

btnMoreQ1.addEventListener('click', onToggleInnerListQ1);
btnMoreQ2.addEventListener('click', onToggleInnerListQ2);

function onToggleInnerListQ1() {
  if (innerListQ2.classList.contains('active')) {
    onToggleInnerListQ2();
  }

  if (!innerListQ1.classList.contains('active')) {
    innerListQ1.classList.add('active');

    innerListQ1.style.maxHeight = innerListQ1.scrollHeight + 'px';
    btnMoreQ1.firstElementChild.textContent = 'Hide';
    return;
  }

  innerListQ1.style.maxHeight = 0;
  btnMoreQ1.firstElementChild.textContent = 'More';
  innerListQ1.classList.remove('active');
}

function onToggleInnerListQ2() {
  if (innerListQ1.classList.contains('active')) {
    onToggleInnerListQ1();
  }
  if (!innerListQ2.classList.contains('active')) {
    innerListQ2.classList.add('active');

    innerListQ2.style.maxHeight = innerListQ2.scrollHeight + 'px';

    btnMoreQ2.firstElementChild.textContent = 'Hide';
    return;
  }

  innerListQ2.style.maxHeight = 0;
  btnMoreQ2.firstElementChild.textContent = 'More';
  innerListQ2.classList.remove('active');
}
