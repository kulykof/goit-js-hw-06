const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

const list = document.querySelectorAll(" #categories>li");
list.forEach((el) => {
  console.log(
    `Category: ${el.firstElementChild.innerText}, Elements: ${el.lastElementChild.children.length}`
  );
});