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
      console.log(kV);
   });
}

console.log(kV);

// * ===============================================
// * ======== Клик по кнопке старт игры ============
// * ===============================================

const btnStart = document.querySelector('#start-game');
const firstScreen = document.querySelector('#first-screen');
const mainScreen = document.querySelector('#main-screen');

btnStart.addEventListener('click', () => {
   firstScreen.style.display = 'none';
   mainScreen.style.display = 'block';

   // Выполняем функию анимации собаки
   dogAnimation();
   // Активируем функию рандома
   birdRandom();
})