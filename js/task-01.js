const categories = document.querySelectorAll(".item");
console.log("Number of categories: ", categories.length);
for (let li of categories) {
  console.log("Category: ", li.firstElementChild.textContent);
  console.log("Elements: ", li.lastElementChild.childElementCount);
}