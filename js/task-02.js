const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");
const optionsLink = (options) => {
  return options.map((item) => {
    const ingredientItemLi = document.createElement("li");
    ingredientItemLi.classList.add("item");
    ingredientItemLi.textContent = item;
    return ingredientItemLi;
  });
};

ingredientsEl.append(...optionsLink(ingredients));

console.log(ingredientsEl);