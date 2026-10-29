window.addEventListener('load', function () {

    setBodyLoaded();

    startBeaverAnimation();

});


function setBodyLoaded() {

    var body = document.getElementsByTagName('body')[0];

    body.classList.add('loaded');

}


/* ========================================
   ПРЫГАЮЩИЙ БОБЁР
======================================== */

function startBeaverAnimation() {

    const beaver = document.getElementById('beaver');

    if (!beaver) {
        return;
    }

    // Продолжительность анимации
    const animationDuration = 5000;

    // Интервал между прыжками
    const jumpInterval = 550;

    // Время начала
    const startTime = Date.now();

    // Перемещение бобра
    function moveBeaver() {

        const elapsed = Date.now() - startTime;

        // Если прошло 10 секунд
        if (elapsed >= animationDuration) {

            finishBeaverAnimation();

            return;
        }

        // Размеры экрана
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // Размер бобра
        const beaverWidth = beaver.offsetWidth;
        const beaverHeight = beaver.offsetHeight;

        // Максимальные координаты
        const maxX = Math.max(0, screenWidth - beaverWidth);
        const maxY = Math.max(0, screenHeight - beaverHeight - 40);

        // Случайные координаты
        const randomX = Math.random() * maxX;
        const randomY = 40 + Math.random() * maxY;

        // Перемещаем бобра
        beaver.style.left = randomX + 'px';
        beaver.style.top = randomY + 'px';

    }

    // Завершение анимации
    function finishBeaverAnimation() {

        clearInterval(beaverInterval);

        // Удаляем случайные координаты
        beaver.style.left = '';
        beaver.style.top = '';

        // Отправляем бобра в левый нижний угол
        beaver.classList.add('finished');

    }

    // Первый прыжок
    moveBeaver();

    // Повторяем прыжки
    const beaverInterval = setInterval(
        moveBeaver,
        jumpInterval
    );

    // Через 10 секунд завершаем анимацию
    setTimeout(function () {

        clearInterval(beaverInterval);

        beaver.style.left = '';
        beaver.style.top = '';

        beaver.classList.add('finished');

    }, animationDuration);

}