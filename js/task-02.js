
/*Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients.*/
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (const el of ingredients)
{
  const listItem = document.createElement("li");
  listItem.textContent = el;
  listItem.classList.add("item");
  const list = document.querySelector("#ingredients");
  list.append(listItem);
}