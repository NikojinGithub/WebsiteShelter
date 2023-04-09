//Burger popup
const burgerButton = document.querySelector('.burger');
const burgerPopup = document.querySelector('.burger__nav')
const burgerBg = document.querySelector('.burger__bg')
const page = document.querySelector('.main');
const burgerLinks = document.querySelectorAll('.burger__link');

const openPopupBurger = (popup, button, bg, page) => {
  popup.classList.toggle('burger__nav_type_active');
  button.classList.toggle('burger_type_active');
  bg.classList.toggle('burger__bg_type_active');
  page.classList.toggle('main_type_fixed')
}

const closePopupBurger = (popup, button, bg, page) => {
  popup.classList.remove('burger__nav_type_active');
  button.classList.remove('burger_type_active');
  bg.classList.remove('burger__bg_type_active');
  page.classList.remove('main_type_fixed');
}

burgerButton.addEventListener('click', () => {
  openPopupBurger(burgerPopup, burgerButton, burgerBg, page)
});

burgerBg.addEventListener('click', (evt) => {
  if(evt.target === burgerBg){
    closePopupBurger(burgerPopup, burgerButton, burgerBg, page)
  }
});

burgerLinks.forEach(link => {
  link.addEventListener('click', () => {
    closePopupBurger(burgerPopup, burgerButton, burgerBg, page)
  })
});