//Burger popup
const burgerButton = document.querySelector('.burger');
const burgerPopup = document.querySelector('.burger__nav')
const burgerBg = document.querySelector('.burger__bg')
const page = document.querySelector('.main');
const burgerLinks = document.querySelectorAll('.burger__link');

//popup
const popup = document.querySelector('.popup');
const popupButton = popup.querySelector('.popup__button');
const popupElement = popup.querySelector('.popup__elem');


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

//cards

const template = document.querySelector('#card');
const templateSection = document.querySelector('#cards-active');
const sectionLeft = document.querySelector('#cards-left');
const sectionRight = document.querySelector('#cards-right');

//Создание карточки - наполнение контентом
const createCard = (data) => {
  const card = template.content.querySelector('.cards__elem').cloneNode(true);
  const cardImg = card.querySelector('.cards__img');
  const cardName = card.querySelector('.cards__name');
  cardImg.src = data.img;
  cardImg.alt = data.name;
  cardName.textContent = data.name;

  const popupImg = popup.querySelector('.popup__img');
  const popupName = popup.querySelector('.popup__name');
  const popupBreed = popup.querySelector('.popup__breed');
  const popupDescription = popup.querySelector('.popup__description');
  const popupAge = popup.querySelector('.popup__age')
  const popupInoculations = popup.querySelector('.popup__inoculations')
  const popupDiseases = popup.querySelector('.popup__diseases')
  const popupParasites = popup.querySelector('.popup__parasites')

  card.addEventListener('click', () => {
    popupImg.src = data.img;
    popupName.textContent = data.name;
    popupBreed.textContent = data.breed;
    popupDescription.textContent = data.description;
    popupAge.textContent = data.age;
    popupInoculations.textContent = data.inoculations;
    popupDiseases.textContent = data.diseases;
    popupParasites.textContent = data.parasites;
    openPopup(popup);
  })


  return card;
}

//Отрисовка карточки на странице
const renderCard = (data) => {
  templateSection.append(createCard(data));
}

const renderCardLeft = (data) => {
  sectionLeft.append(createCard(data));
}

const renderCardRight = (data) => {
  sectionRight.append(createCard(data));
}

// dataPets.forEach(elem => {
//     renderCard(elem)
// });

activeArr.forEach(elem => renderCard(elem));

leftArr.forEach(elem => renderCardLeft(elem));

rightArr.forEach(elem => renderCardRight(elem));

//function open and close popup
const openPopup = (popup, page) => {
popup.classList.add('popup_type_active');
// page.classList.add('main_type_fixed');
}

const closePopup = (popup, page) => {
  popup.classList.remove('popup_type_active');
  // page.classList.remove('main_type_fixed');
}


//Close popup
popupButton.addEventListener('click', () => {
  closePopup(popup);
})

popup.addEventListener('click', (evt) => {
  if(evt.target === popup){
    closePopup(popup);
  }
})

//Courusel animation
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');
const couruselBlock = document.querySelector('.courusel');


//btnLeft
//Снимаем слушатель с кнопки на время анимации. После возвращаем обратно.
const moveLeft = () => {
  couruselBlock.classList.add('transition-left');
  btnLeft.removeEventListener('click', moveLeft);
  btnRight.removeEventListener('click', moveRight);
}

btnLeft.addEventListener('click', moveLeft);


//btnRight
//Снимаем слушатель с кнопки на время анимации. После возвращаем обратно.
const moveRight = () => {
  couruselBlock.classList.add('transition-right');
  btnRight.removeEventListener('click', moveRight);
  btnLeft.removeEventListener('click', moveLeft);
}

btnRight.addEventListener('click', moveRight)

//Действия по завершении анимации.
couruselBlock.addEventListener('animationend', (animationEvent) => {

  if(animationEvent.animationName === 'move-left') {
    couruselBlock.classList.remove('transition-left');

    //add right items to active cards.
    document.querySelector('#cards-active').innerHTML = '';
    activeArr = [];
    activeArr.push(...rightArr);
    activeArr.forEach(elem => renderCard(elem));

    //create new right card with random items.
    document.querySelector('#cards-right').innerHTML = '';
    rightArr = [];
    const randomNumber = Math.floor(Math.random() * 6);
    rightArr = createArr(rightArr, randomNumber);
    rightArr.forEach(elem => renderCardRight(elem));

  } else {
    couruselBlock.classList.remove('transition-right');

    //add left items to active cards.
    document.querySelector('#cards-active').innerHTML = '';
    activeArr = [];
    activeArr.push(...leftArr);
    activeArr.forEach(elem => renderCard(elem));

    //create new left card with random items.
    document.querySelector('#cards-left').innerHTML = '';
    leftArr = [];
    const randomNumber = Math.floor(Math.random() * 6);
    leftArr = createArr(leftArr, randomNumber);
    leftArr.forEach(elem => renderCardLeft(elem));
  }

  btnLeft.addEventListener('click', moveLeft);
  btnRight.addEventListener('click', moveRight)
})








//Не работает попап если просто копировать блок.
    // const itemsLeft = document.querySelector('#cards-left').innerHTML;
    // document.querySelector('#cards-active').innerHTML = itemsLeft;












//     document.querySelector('#item-active').innerHTML = '';
//     activeArr = [];
//     activeArr.push(...leftArr);
//     activeArr.forEach(elem => renderCard(elem));
//     couruselBlock.classList.remove('transition-right');
//     document.querySelector('#item-left').innerHTML = '';
//     leftArr = [];
//     const randomNumber = Math.floor(Math.random() * 6);
//     leftArr = createArr(leftArr, randomNumber);
//     leftArr.forEach(elem => renderCardLeft(elem));