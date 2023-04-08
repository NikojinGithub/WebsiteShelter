const sectionPetsOne = document.querySelector('#pets-one');
const sectionPetsTwo = document.querySelector('#pets-two');
const sectionPetsThree = document.querySelector('#pets-three');
const sectionPetsFour = document.querySelector('#pets-four');
const sectionPetsFive = document.querySelector('#pets-five');
const sectionPetsSix = document.querySelector('#pets-six');
const sectionPetsSeven = document.querySelector('#pets-seven');
const sectionPetsEight = document.querySelector('#pets-eight');

const couruselPets = document.querySelector('.courusel-pets');

const popup = document.querySelector('.popup');
const popupButton = popup.querySelector('.popup__button');
const popupElement = popup.querySelector('.popup__elem');

const rightBtnPets = document.querySelector('#pets-right-btn');


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
const renderCard = (data) => {
  sectionPetsOne.append(createCard(data));
  sectionPetsTwo.append(createCard(data));
  sectionPetsThree.append(createCard(data));
}

const renderCardLeft = (data) => {
}

const renderCardRight = (data) => {
}



// dataPets.forEach(elem => {
//     renderCard(elem)
// });

dataPets.forEach(elem => renderCard(elem));

// leftArr.forEach(elem => renderCardLeft(elem));

// rightArr.forEach(elem => renderCardRight(elem));


//Button move animation

const movePetsright = () => {
  couruselPets.classList.add('transition-left-pets');
  rightBtnPets.addEventListener('click', movePetsright)
}

rightBtnPets.addEventListener('click', movePetsright)

couruselPets.addEventListener('animationend', (animationEvent) => {
 if(animationEvent.animationName === 'move-left-pets'){
  couruselPets.classList.remove('transition-left-pets');

 
 }
})