const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listMain = document.querySelector("#ingredients");
const pseudoList = [];
for (let item of ingredients) {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = item;;
  ingredientsItem.classList.add("item");
  pseudoList.push(ingredientsItem);
}
listMain.append(...pseudoList);


