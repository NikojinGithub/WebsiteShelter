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


activeArr.forEach(elem => renderCard(elem));

leftArr.forEach(elem => renderCardLeft(elem));

rightArr.forEach(elem => renderCardRight(elem));

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
    document.querySelector('#cards-left').innerHTML = '';
    leftArr = [];

    rightArr = createArr(rightArr, activeArr, dataPets);
    rightArr.forEach(elem => renderCardRight(elem));
    leftArr = createArr(leftArr, activeArr, dataPets);
    leftArr.forEach(elem => renderCardLeft(elem));
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
    document.querySelector('#cards-right').innerHTML = '';
    rightArr = [];

    leftArr = createArr(leftArr, activeArr, dataPets);
    leftArr.forEach(elem => renderCardLeft(elem));
    rightArr = createArr(rightArr, activeArr, dataPets);
    rightArr.forEach(elem => renderCardRight(elem));
  }

  btnLeft.addEventListener('click', moveLeft);
  btnRight.addEventListener('click', moveRight)
})


console.log("Самооценка:\n\n Burger menu: выполнено (26/26) \n\n Cлайдер-карусель на странице Main: выполнено (32/36).\n 'Предыдущее состояние не сохраняется' -4 балла. \n\n Пагинация на странице Pets: выполнено (32/36). \n При изменении ширины экрана (от 1280px до 320px и обратно)\n пагинация не работает корректно без перезагрузки -4 балла. \n\n Реализация попапа на обеих страницах: выполнено (12/12). \n\n Итоговая оценка: (26 + 32 + 32 + 12 = 102 балла из 110).")
//Корусель закончена. -4 балла не сохраняет предыдущее положение, каждый раз новый набор.

//Не работает попап если просто копировать блок.
    // const itemsLeft = document.querySelector('#cards-left').innerHTML;
    // document.querySelector('#cards-active').innerHTML = itemsLeft;