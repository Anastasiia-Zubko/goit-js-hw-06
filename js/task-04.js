/*Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.*/
let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
    document.getElementById("value").innerHTML = counterValue;
});

buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
    document.getElementById("value").innerHTML = counterValue;
});