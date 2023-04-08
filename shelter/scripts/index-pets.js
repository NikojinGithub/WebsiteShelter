const sectionPetsOne = document.querySelector('#pets-one');
const sectionPetsTwo = document.querySelector('#pets-two');
const sectionPetsThree = document.querySelector('#pets-three');
const sectionPetsFour = document.querySelector('#pets-four');
const sectionPetsFive = document.querySelector('#pets-five');
const sectionPetsSix = document.querySelector('#pets-six');
const sectionPetsSeven = document.querySelector('#pets-seven');
const sectionPetsEight = document.querySelector('#pets-eight');


const sliderPets = document.querySelector('.slider-pets');

const popup = document.querySelector('.popup');
const popupButton = popup.querySelector('.popup__button');
const popupElement = popup.querySelector('.popup__elem');

const rightBtnPets = document.querySelector('#pets-right-btn');
const leftBtnPets = document.querySelector('#pets-left-btn');
const pageCount = document.querySelector('#pets-count-btn');
const lastPageButton = document.querySelector('#pets-end-btn');
const firstPageButton = document.querySelector('#pets-begin-btn');


const template = document.querySelector('#card');


//Создание карточки - наполнение контентом
const createCard = (data) => {
  const card = template.content.querySelector('.cards__elem').cloneNode(true);
  const cardImg = card.querySelector('.cards__img');
  const cardName = card.querySelector('.cards__name');
  cardImg.src = data.img;
  cardImg.alt = data.name;
  cardName.textContent = data.name;

  // const popupImg = popup.querySelector('.popup__img');
  // const popupName = popup.querySelector('.popup__name');
  // const popupBreed = popup.querySelector('.popup__breed');
  // const popupDescription = popup.querySelector('.popup__description');
  // const popupAge = popup.querySelector('.popup__age')
  // const popupInoculations = popup.querySelector('.popup__inoculations')
  // const popupDiseases = popup.querySelector('.popup__diseases')
  // const popupParasites = popup.querySelector('.popup__parasites')

  // card.addEventListener('click', () => {
  //   popupImg.src = data.img;
  //   popupName.textContent = data.name;
  //   popupBreed.textContent = data.breed;
  //   popupDescription.textContent = data.description;
  //   popupAge.textContent = data.age;
  //   popupInoculations.textContent = data.inoculations;
  //   popupDiseases.textContent = data.diseases;
  //   popupParasites.textContent = data.parasites;
  //   openPopup(popup);
  // })


  return card;
}

//Отрисовка карточки на странице
const renderCard = (template, data) => {
  template.append(createCard(data));
}

const renderCardLeft = (data) => {
}

const renderCardRight = (data) => {
}



// dataPets.forEach(elem => {
//     renderCard(elem)
// });

// setOfCards.forEach(item => {
//   item.forEach(elem => renderCard(sectionsArray[count], elem));
// })

setOfCards[0].forEach(elem => renderCard(sectionPetsOne, elem));
setOfCards[1].forEach(elem => renderCard(sectionPetsTwo, elem));
setOfCards[2].forEach(elem => renderCard(sectionPetsThree, elem));
setOfCards[3].forEach(elem => renderCard(sectionPetsFour, elem));
setOfCards[4].forEach(elem => renderCard(sectionPetsFive, elem));
setOfCards[5].forEach(elem => renderCard(sectionPetsSix, elem));
// // setOfCards[6].forEach(elem => renderCard(sectionPetsSeven, elem));
// setOfCards[1].sort(() => Math.random() - 0.5).forEach(elem => renderCard(sectionPetsSeven, elem));
// setOfCards[2].sort(() => Math.random() - 0.5).forEach(elem => renderCard(sectionPetsEight, elem));
// setOfCards[3].forEach(elem => renderCard(sectionPetsTwo, elem));
// setOfCards[4].forEach(elem => renderCard(sectionPetsTwo, elem));
// setOfCards[5].forEach(elem => renderCard(sectionPetsTwo, elem));
// setOfCards[1].forEach(elem => renderCard(sectionPetsTwo, elem));
// setOfCards[2].forEach(elem => renderCard(sectionPetsTwo, elem));
// setOfCards[3].forEach(elem => renderCard(sectionPetsTwo, elem));

// leftArr.forEach(elem => renderCardLeft(elem));

// rightArr.forEach(elem => renderCardRight(elem));


//Button move animation

// const movePetsright = () => {
//   couruselPets.classList.add('transition-left-pets');
//   rightBtnPets.addEventListener('click', movePetsright)
// }

// rightBtnPets.addEventListener('click', movePetsright)

// couruselPets.addEventListener('animationend', (animationEvent) => {
//  if(animationEvent.animationName === 'move-left-pets'){
//   couruselPets.classList.remove('transition-left-pets');
//  }
// })

let offset = 0;
let pageNumber = 1;

// const movePetsRight = () => {
//   offset += 1370;
//   sliderPets.setAttribute('style', `left: -${offset}px`);
// }


// rightBtnPets.addEventListener('click', movePetsRight)

rightBtnPets.addEventListener('click', () => {
  offset += 1371;
  sliderPets.setAttribute('style', `left: -${offset}px`);
  pageNumber++;
  pageCount.textContent = pageNumber;
})

leftBtnPets.addEventListener('click', () => {
  offset -= 1371;
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
  offset = 1371*7;
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

// if (window.matchMedia('(min-width: 770px)').matches){
//   offset += 1370;
//   } if(window.matchMedia('(width: 768px)').matches){
//     offset += 10;
//   }

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