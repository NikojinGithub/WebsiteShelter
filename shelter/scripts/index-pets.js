const sectionPetsOne = document.querySelector('#pets-one');
const sectionPetsTwo = document.querySelector('#pets-two');
const sectionPetsThree = document.querySelector('#pets-three');
const sectionPetsFour = document.querySelector('#pets-four');
const sectionPetsFive = document.querySelector('#pets-five');
const sectionPetsSix = document.querySelector('#pets-six');
const sectionPetsSeven = document.querySelector('#pets-seven');
const sectionPetsEight = document.querySelector('#pets-eight');
const sectionPetsNine = document.querySelector('#pets-nine');
const sectionPetsTen = document.querySelector('#pets-ten');
const sectionPetsEleven = document.querySelector('#pets-eleven');
const sectionPetsTwelve = document.querySelector('#pets-twelve');
const sectionPetsThirteen = document.querySelector('#pets-thirteen');
const sectionPetsFourteen = document.querySelector('#pets-fourteen');
const sectionPetsFifteen = document.querySelector('#pets-fifteen');
const sectionPetsSixteen = document.querySelector('#pets-sixteen');

const sliderPets = document.querySelector('.slider-pets');

const rightBtnPets = document.querySelector('#pets-right-btn');
const leftBtnPets = document.querySelector('#pets-left-btn');
const pageCount = document.querySelector('#pets-count-btn');
const lastPageButton = document.querySelector('#pets-end-btn');
const firstPageButton = document.querySelector('#pets-begin-btn');

//Отрисовка карточки на странице
const renderCard = (template, data) => {
  template.append(createCard(data));
}

setOfCards[0].forEach(elem => renderCard(sectionPetsOne, elem));
setOfCards[1].forEach(elem => renderCard(sectionPetsTwo, elem));
setOfCards[2].forEach(elem => renderCard(sectionPetsThree, elem));
setOfCards[3].forEach(elem => renderCard(sectionPetsFour, elem));
setOfCards[4].forEach(elem => renderCard(sectionPetsFive, elem));
setOfCards[5].forEach(elem => renderCard(sectionPetsSix, elem));
setOfCards[0].sort(() => Math.random() - 0.5).forEach(elem => renderCard(sectionPetsSeven, elem));
setOfCards[1].sort(() => Math.random() - 0.5).forEach(elem => renderCard(sectionPetsEight, elem));
setOfCards[2].sort(() => Math.random() - 0.5).forEach(elem => renderCard(sectionPetsNine, elem));
setOfCards[3].sort(() => Math.random() - 0.5).forEach(elem => renderCard(sectionPetsTen, elem));
setOfCards[4].sort(() => Math.random() - 0.5).forEach(elem => renderCard(sectionPetsEleven, elem));
setOfCards[5].sort(() => Math.random() - 0.5).forEach(elem => renderCard(sectionPetsTwelve, elem));
setOfCards[0].sort(() => Math.random() - 0.5).forEach(elem => renderCard(sectionPetsThirteen, elem));
setOfCards[1].sort(() => Math.random() - 0.5).forEach(elem => renderCard(sectionPetsFourteen, elem));
setOfCards[2].sort(() => Math.random() - 0.5).forEach(elem => renderCard(sectionPetsFifteen, elem));
setOfCards[3].sort(() => Math.random() - 0.5).forEach(elem => renderCard(sectionPetsSixteen, elem));

let offset = 0;
let pageNumber = 1;

//Адаптация слайдера в зависимости о размеров страницы. Не работает без перезагрузки.
//Если использовать слушать checksize на window, то не работает из за проблем с фиксированным
//числом пикселей при движении слайдера. Попробовать в %?

//Движение слайдера при размере 1231+
if (window.matchMedia('(min-width: 1231px)').matches) {

  rightBtnPets.addEventListener('click', () => {
    offset += 1233;
    sliderPets.setAttribute('style', `left: -${offset}px`);
    pageNumber++;
    pageCount.textContent = pageNumber;
  })

  leftBtnPets.addEventListener('click', () => {
    offset -= 1233;
    sliderPets.setAttribute('style', `left: -${offset}px`);
    pageNumber--;
    pageCount.textContent = pageNumber;
  })

  firstPageButton.addEventListener('click', () => {
    offset = 0;
    sliderPets.setAttribute('style', `left: -${offset}px`);
    pageNumber = 1;
    pageCount.textContent = pageNumber;
  })

  lastPageButton.addEventListener('click', () => {
    offset = 1233*5;
    sliderPets.setAttribute('style', `left: -${offset}px`);
    pageNumber = 6;
    pageCount.textContent = pageNumber;
  })

  //enable and disable buttons
  rightBtnPets.addEventListener('click', () => {
    if(pageNumber > 1){
      leftBtnPets.classList.remove('friends__button_type_disabled');
      firstPageButton.classList.remove('friends__button_type_disabled');
    } if(pageNumber === 6) {
      rightBtnPets.classList.add('friends__button_type_disabled');
      lastPageButton.classList.add('friends__button_type_disabled');
    }
  })

  leftBtnPets.addEventListener('click', () => {
    if(pageNumber === 1){
      leftBtnPets.classList.add('friends__button_type_disabled');
      firstPageButton.classList.add('friends__button_type_disabled');
    }if(pageNumber < 6){
      rightBtnPets.classList.remove('friends__button_type_disabled');
      lastPageButton.classList.remove('friends__button_type_disabled');
    }
  })

}

//Движение слайдера при размере 766-1230
if (window.matchMedia('(min-width: 766px) and (max-width: 1230px)').matches) {

  rightBtnPets.addEventListener('click', () => {
    offset += 1222;
    sliderPets.setAttribute('style', `left: -${offset}px`);
    pageNumber++;
    pageCount.textContent = pageNumber;
  })

  leftBtnPets.addEventListener('click', () => {
    offset -= 1222;
    sliderPets.setAttribute('style', `left: -${offset}px`);
    pageNumber--;
    pageCount.textContent = pageNumber;
  })

  firstPageButton.addEventListener('click', () => {
    offset = 0;
    sliderPets.setAttribute('style', `left: -${offset}px`);
    pageNumber = 1;
    pageCount.textContent = pageNumber;
  })


  lastPageButton.addEventListener('click', () => {
    offset = 1222*7;
    sliderPets.setAttribute('style', `left: -${offset}px`);
    pageNumber = 8;
    pageCount.textContent = pageNumber;
  })


  //enable and disable buttons

  rightBtnPets.addEventListener('click', () => {
    if(pageNumber > 1){
      leftBtnPets.classList.remove('friends__button_type_disabled');
      firstPageButton.classList.remove('friends__button_type_disabled');
    } if(pageNumber === 8) {
      rightBtnPets.classList.add('friends__button_type_disabled');
      lastPageButton.classList.add('friends__button_type_disabled');
    }
  })

  leftBtnPets.addEventListener('click', () => {
    if(pageNumber === 1){
      leftBtnPets.classList.add('friends__button_type_disabled');
      firstPageButton.classList.add('friends__button_type_disabled');
    }if(pageNumber < 8){
      rightBtnPets.classList.remove('friends__button_type_disabled');
      lastPageButton.classList.remove('friends__button_type_disabled');
    }
  })

}

//Движение слайдера при размере 320-765
if (window.matchMedia('(min-width: 320px) and (max-width: 765px)').matches){

  rightBtnPets.addEventListener('click', () => {
    offset += 330.5;
    sliderPets.setAttribute('style', `left: -${offset}px`);
    pageNumber++;
    pageCount.textContent = pageNumber;
  })

  leftBtnPets.addEventListener('click', () => {
    offset -= 330.5;
    sliderPets.setAttribute('style', `left: -${offset}px`);
    pageNumber--;
    pageCount.textContent = pageNumber;
  })

  firstPageButton.addEventListener('click', () => {
    offset = 0;
    sliderPets.setAttribute('style', `left: -${offset}px`);
    pageNumber = 1;
    pageCount.textContent = pageNumber;
  })

  lastPageButton.addEventListener('click', () => {
    offset = 330.5*15;
    sliderPets.setAttribute('style', `left: -${offset}px`);
    pageNumber = 16;
    pageCount.textContent = pageNumber;
  })


  //enable and disable buttons
  rightBtnPets.addEventListener('click', () => {
    if(pageNumber > 1){
      leftBtnPets.classList.remove('friends__button_type_disabled');
      firstPageButton.classList.remove('friends__button_type_disabled');
    } if(pageNumber === 16) {
      rightBtnPets.classList.add('friends__button_type_disabled');
      lastPageButton.classList.add('friends__button_type_disabled');
    }
  })

  leftBtnPets.addEventListener('click', () => {
    if(pageNumber === 1){
      leftBtnPets.classList.add('friends__button_type_disabled');
      firstPageButton.classList.add('friends__button_type_disabled');
    }if(pageNumber < 16){
      rightBtnPets.classList.remove('friends__button_type_disabled');
      lastPageButton.classList.remove('friends__button_type_disabled');
    }
  })

}

//Включение и выключение кнопок при переходе на первую\последнюю страницы.
firstPageButton.addEventListener('click', () => {
  leftBtnPets.classList.add('friends__button_type_disabled');
  firstPageButton.classList.add('friends__button_type_disabled');
  rightBtnPets.classList.remove('friends__button_type_disabled');
  lastPageButton.classList.remove('friends__button_type_disabled');
})

lastPageButton.addEventListener('click', () => {
  rightBtnPets.classList.add('friends__button_type_disabled');
  lastPageButton.classList.add('friends__button_type_disabled');
  leftBtnPets.classList.remove('friends__button_type_disabled');
  firstPageButton.classList.remove('friends__button_type_disabled');
})

//Заготовка под адаптивный слайдер

//Функция с проверкой размера окна
// function checkWindowSize() {
//   if (window.matchMedia('(min-width: 770px)').matches) {
//     // Ваш код, который должен выполняться при ширине экрана более 770 пикселей
//   } else {
//     // Ваш код, который должен выполняться при ширине экрана менее 770 пикселей
//   }
// }

// // Выполняем проверку размера окна при загрузке страницы
// checkWindowSize();

// // При изменении размера окна, выполняем проверку снова
// window.addEventListener('resize', checkWindowSize);