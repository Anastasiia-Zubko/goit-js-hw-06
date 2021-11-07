/*Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
и количество элементов в категории (всех вложенных в него <li>).*/

const allCategories = document.querySelectorAll(".item");
console.log("Number of categories: " + allCategories.length);

const categoriesTitles = [];
allCategories.forEach((el) => {
    categoriesTitles.push(`Category: ${el.querySelector("h2").textContent}
    Elements: ${ el.querySelectorAll("ul>li").length } \n`);
});
console.log(...categoriesTitles);