// * ===============================================
// * ======== Клик по кнопке старт игры ============
// * ===============================================

const btnStart = document.querySelector('#start-game');
const firstScreen = document.querySelector('#first-screen');
const mainScreen = document.querySelector('#main-screen');

btnStart.addEventListener('click', () => {
   firstScreen.style.display = 'none';
   mainScreen.style.display = 'block';
   gameStarted = true;
   // Выполняем функию анимации собаки
   dogAnimation();
   // Активируем функию рандома
   birdRandom();


   // if (countDuckFly < 10) {
   // Активируем функию рандома
   // birdRandom();
   // countDuckFly++;

   // if (countDuckFly === 10) {
   //    return
   // }
   // }
})


// * ===============================================
// * ============= Выбор уровня сложности =================
// * ===============================================


// присваиваем класс "active"
const chooseLevel = document.querySelector('#choose__level');

let chooseItems = chooseLevel.getElementsByClassName("welcome-info__item");

// Коэфициент скорости птицы, зависит от уровня сложности
let kV = 20;

for (let i = 0; i < chooseItems.length; i++) {
   chooseItems[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";

      if (this.innerText === 'Easy') {
         kV = 20;
      } else if (this.innerText === 'Medium') {
         kV = 10;
      } else if (this.innerText === 'Hard') {
         kV = 5;
      }
   })
}





// * ===============================================
// * =========== Заполнения поля HIT ===============
// * ===============================================


// Создание уточек

let birdsCount = 10;
let currentBird = 1;
const birdBlock = document.querySelector('#bird-block');

for (let i = 0; i < birdsCount; i++) {

   const xmlns = "http://www.w3.org/2000/svg";

   const span = document.createElement('span');
   const svg = document.createElementNS(xmlns, "svg");
   svg.setAttributeNS(null, "viewBox", viewBox = "0 0 216.561 216.561");

   svg.classList.add('hit-svg');

   svg.insertAdjacentHTML('afterbegin', `<path d="M210.686,65.28v-30h-18.201C186.15,14.867,167.089,0,144.62,0c-27.628,0-50.105,22.477-50.105,50.104
   c0,18.048,9.595,33.894,23.949,42.716c-4.759,0.923-9.668,1.408-14.673,1.408c-24.799,0-47.321-11.719-60.247-31.349l-4.691-7.123
   l-6.071,5.989C15.43,78.864,5.874,101.277,5.874,124.858c0,50.564,43.926,91.702,97.917,91.702
   c53.992,0,97.918-41.138,97.918-91.702c0-17.227-5.121-33.82-14.634-48.191c2.215-3.527,4.006-7.344,5.294-11.387H210.686z
    M152.02,46.947c-5.339,0-9.667-4.328-9.667-9.667s4.328-9.667,9.667-9.667c5.339,0,9.667,4.328,9.667,9.667
   S157.359,46.947,152.02,46.947z" />`)

   birdBlock.appendChild(span);
   span.appendChild(svg);
}


// присваиваем класс "active"
const hitSvgList = document.querySelectorAll('.hit-svg');

for (let i = 0; i < hitSvgList.length; i++) {
   hitSvgList[i].classList.add('active')
}

// запускаем очередь птиц
console.log(countDuckFly);