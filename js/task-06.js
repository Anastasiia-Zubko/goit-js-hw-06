/*Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.*/


const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
  if (inputEl.value.length === Number(inputEl.getAttribute("data-length"))) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
});