//popup
const popup = document.querySelector('.popup');
const popupButton = popup.querySelector('.popup__button');
const popupElement = popup.querySelector('.popup__elem');
const mainPage = document.querySelector('.main');

//cards
const template = document.querySelector('#card');
const templateSection = document.querySelector('#cards-active');
const sectionLeft = document.querySelector('#cards-left');
const sectionRight = document.querySelector('#cards-right');

//Создание карточки - наполнение контентом - наполнение попапа.
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
    popupImg.alt = data.name;
    popupName.textContent = data.name;
    popupBreed.textContent = `${data.type} - ${data.breed}`;
    popupDescription.textContent = data.description;
    popupAge.textContent = data.age;
    popupInoculations.textContent = data.inoculations;
    popupDiseases.textContent = data.diseases;
    popupParasites.textContent = data.parasites;
    openPopup(popup, mainPage);
  })

  return card;
};

//function open and close popup
const openPopup = (popup, page) => {
  popup.classList.add('popup_type_active');
  page.classList.add('main_type_disabled');
};

const closePopup = (popup, page) => {
  popup.classList.remove('popup_type_active');
  page.classList.remove('main_type_disabled');
};

//Close popup
popupButton.addEventListener('click', () => {
  closePopup(popup, mainPage);
});

popup.addEventListener('click', (evt) => {
  if(evt.target === popup){
    closePopup(popup, mainPage);
  }
});