export function footer() {
  const contactBox = document.querySelector('.js-contact-box');
  const contactHiddenBox = document.querySelector('.js-contact-box-hidden');
  const addressHiddenBox = document.querySelector('.js-address-box-hidden');

  console.log();

  contactBox.addEventListener('click', onOpenContact);

  function onOpenContact(e) {
    let targetEl = e.target.closest('.js-contact');

    if (
      targetEl.classList.contains('footer__box-center_top') &&
      !contactHiddenBox.classList.contains('contact-box-hidden_active')
    ) {
      contactHiddenBox.classList.add('contact-box-hidden_active');
      addressHiddenBox.classList.remove('address-box-hidden_active');
      return;
    } else if (
      targetEl.classList.contains('footer__box-center_top') &&
      contactHiddenBox.classList.contains('contact-box-hidden_active')
    ) {
      contactHiddenBox.classList.remove('contact-box-hidden_active');
      return;
    }

    if (
      targetEl.classList.contains('footer__box-center_bottom') &&
      !addressHiddenBox.classList.contains('address-box-hidden_active')
    ) {
      addressHiddenBox.classList.add('address-box-hidden_active');
      contactHiddenBox.classList.remove('contact-box-hidden_active');
    } else {
      addressHiddenBox.classList.remove('address-box-hidden_active');
    }
  }
}
