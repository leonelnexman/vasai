const inputElement = document.querySelector('.content__input input');
const svgElement = document.querySelector('.content__input svg');

// Добавляем слушатель на событие ввода
inputElement.addEventListener('input', function() {
    // Проверяем количество символов
    if (inputElement.value.length > 7) {
        svgElement.classList.add('visible');
    } else {
        svgElement.classList.remove('visible');
    }
});