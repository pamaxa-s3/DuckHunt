
var gamePole = document.querySelector('#gamePole');
// Выбераем собаку по селектору
var dog = document.querySelector('#dog');
// Выбераем птицу по селектору
var bird = document.querySelector(".bird");
console.log(bird);
// В переменной дистанция храниться значение 50
var distance = 50;
// Функция анимации собаки
function dogAnimation() {
    // Ходьба собаки
	function dog1() {
		dog.style.background = "url(img/dog/dog-2.png) no-repeat";
	}
	function dog2() {
		dog.style.background = "url(img/dog/dog-3.png) no-repeat";
	}
	function dog3() {
		dog.style.background = "url(img/dog/dog-4.png) no-repeat";
	}
	function dog4() {
		dog.style.background = "url(img/dog/dog-5.png) no-repeat";
	}
	function dog5() {
		dog.style.background = "url(img/dog/dog-6.png) no-repeat";
	}
	// Прыжок собаки
	function dog6() {
		dog.style.background = "url(img/dog/dog-7.png) no-repeat";
		dog.style.left = "550px";
		dog.style.top = "300px";
	}
	function dog7() {
		dog.style.background = "url(img/dog/dog-8.png) no-repeat";
		dog.style.left = "600px";
		dog.style.top = "350px";
	}
	// Убераем собаку
	function dog8() {
		dog.style.display = "none";
	}
        // Выполняеться анимация каждого кадра по времени
	    setTimeout(dog1, 500);
       	setTimeout(dog2, 1000);
       	setTimeout(dog3, 1500);
       	setTimeout(dog4, 2000);
       	setTimeout(dog5, 2500);
       	setTimeout(dog6, 3000);
       	setTimeout(dog7, 3500);
       	setTimeout(dog8, 3700);
    
    // Функция ходьбы собаки 
	var animation = setInterval(function() {
		// Значение дистанция увеличиваеться на 2px
        distance = distance + 2;
        // Добавляем по 2px влево
   		dog.style.left = distance + "px";
   		// Условие если дистанция больше 500 тогда...
		if(distance == 500) {
			// Отменяем работу фунции
			clearInterval(animation);
		}
	}, 10);

}

// Выполняем функию анимации собаки
dogAnimation();

// Рандомное повление птицы снизу в верх
function randomAppearanceBelow(min, max) {
	// Ранддомное значение от минимума до макимума
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    // Округляем до ближайшего целого числа
    rand = Math.round(rand);
    // возвращаем результат
    return rand;
  }

// Рандомное повление птицы
function birdRandom() {
	// Рандомное появление птицы от 50 да 1150 пикселя в ширену
    var random = randomAppearanceBelow(50, 1150);
	// Отображаем птицу
	bird.style.display = "block";

    // Птица появлеться на высоте в 400 пикселей
	var dx = 400;
    // Птица взлетает вверх
    var birdTop = setInterval(function() {
    	// От значениея dx отнимаеться по 1 пикселю каждые 10 милисикунд
        dx = dx - 1;
            // Топ равен значению переменной dx
		    bird.style.top = dx + "px";
            // Если птица достигла высоты в 100 пикселей тогда удалем птицу
		    if(dx == 100) {
		    	// Удаляем птицу
           		bird.remove();
		    }
    // Интервал в 10 милисикунд
	}, 10);

// В переменной clickСount храниться поумолчанию значение 0, подсчет кликов
var clickСount = 0;
// Клик по птице левой кнопкой мыши
bird.onclick = function() {
	// В старую переменную clickСount записываем новое значение
	clickСount = clickСount + 1;
    // Анимация падения птицы
	function birdFall1() {
		bird.style.background = "url(img/bird/bird-8.png) no-repeat";
	}
	function birdFall2() {
		bird.style.background = "url(img/bird/bird-9.png) no-repeat";
	}
        // Функция сработает через 50 милисикунд
	    setTimeout(birdFall1, 50);
	    // Цыкл если i больше 2 тогда вызываем функцию 
	    let i = 0;
		while (i < 2) { // выводит 0, затем 1, затем 2
		  i++;
		  // Вызываем функцию
		birdDown();
	}
    // Функция сработает через 200 милисикунд
	setTimeout(birdFall2, 200);
}
// Функция падения птицы
function birdDown() {
	// В переменной timerTop храниться функция setInterval
   	var timerTop = setInterval(function() {
   		// Увеличиваем tоp на 1 пиксель больше
	  	bird.style.top = bird.offsetTop + 1 + "px";
        // Если clickСount равняеться или больше одного тогда тогда отменяем работу таймеров
	  	if(clickСount >= 1) {
        	clearInterval(timer);
			clearInterval(timer2);
			clearInterval(birdTop);

		    clearTimeout(myset1);
		    clearTimeout(myset2);
		    clearTimeout(myset3);
		    clearTimeout(myset4);
		    clearTimeout(myset5);
		    clearTimeout(myset6);
		    clearTimeout(myset7);
		    clearTimeout(myset8);
		    clearTimeout(myset9);
		    clearTimeout(myset10);
		    clearTimeout(myset11);
		    clearTimeout(myset12);
		    clearTimeout(myset13);
		    clearTimeout(myset14);
        }
        // Если птица достигда высоты в 350 пикселей тогда удаляем ее
	  	if(bird.offsetTop == 350) {
	  		// Удаляем птицу
	  		bird.remove();
	  	}
	// Через 10 милисикунд
	}, 10);
    // Таймер, через 1 секунду таймер timerTop перестаней работать
	setTimeout(function() {
   	// Отменяем работу таймеру
	clearInterval(timerTop);
   // Через 1 секунду 
   }, 1000);
}

	
 
setTimeout(function() {
	function random(max) {
    // случайное число от 0 да максимума
    var ran = 1 + Math.random() * (max + 1);
    // округляем до целого числа
    ran = Math.floor(ran);
    // return - вернуть рузультат
    return ran;
}
    bird.style.left = random(1200) + "px";
    
}, 200)

	  
		
           
     // Анимация полета птицы в лево
	function bird1() {
		bird.style.background = "url(img/bird/bird-6.png) no-repeat";
	}
	function bird2() {
		bird.style.background = "url(img/bird/bird-7.png) no-repeat";
	}
	function bird3() {
		bird.style.background = "url(img/bird/bird-5.png) no-repeat";
	}
    // Анимация полета птицы в право
	function bird4() {
		bird.style.background = "url(img/bird/bird-6.png) no-repeat";
		bird.style.transform = "scale(-1, 1)";
	}
	function bird5() {
		bird.style.background = "url(img/bird/bird-7.png) no-repeat";
		bird.style.transform = "scale(-1, 1)";
	}
	function bird6() {
		bird.style.background = "url(img/bird/bird-5.png) no-repeat";
		bird.style.transform = "scale(-1, 1)";
	}
	
    // Анимация полета птицы в верх
    function bird7() {
		bird.style.background = "url(img/bird/bird-1.png) no-repeat";
	}
	function bird8() {
		bird.style.background = "url(img/bird/bird-2.png) no-repeat";

	}
	function bird9() {
		bird.style.background = "url(img/bird/bird-3.png) no-repeat";
	}

    // Таймера к полету птицы
    var myset = setTimeout(bird1, 200);
	var myset1 = setTimeout(bird2, 400);
	var myset2 = setTimeout(bird3, 600);
    var myset3 = setTimeout(bird4, 800);
    var myset4 = setTimeout(bird5, 1000);
    var myset5 = setTimeout(bird6, 1200);
    var myset6 = setTimeout(bird7, 1400);
    var myset7 = setTimeout(bird8, 1600);
    var myset8 = setTimeout(bird9, 1800);
    var myset9 = setTimeout(bird7, 2000);
    var myset10 = setTimeout(bird8, 2200);
    var myset11 = setTimeout(bird9, 2400);
    var myset12 = setTimeout(bird7, 2600);
    var myset13 = setTimeout(bird8, 2800);
    var myset14 = setTimeout(bird9, 3000);   
   
        
    // Через 10 милисикунд птица нечнет лететь влево
	var timer = setInterval (function() {
	  	bird.style.left = bird.offsetLeft + 2 + "px";
	}, 10);
    // Таймер, через 1 секунду таймер timerTop перестаней работать
    setTimeout(function() {
    	// Отменяем работу таймера
	 	clearInterval(timer);
    }, 1000);
     // Через 20 милисикунд птица нечнет лететь вправо
   	var timer2 = setInterval (function() {
	  	bird.style.left = bird.offsetLeft - 2 + "px";
	}, 20);
    // Таймер, через 2 секунду таймер timerTop перестаней работать
	setTimeout(function() {
		// Отменяем работу таймера
	 	clearInterval(timer2);
   	}, 2000);


}
// Активируем функию рандома
birdRandom();



