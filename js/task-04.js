const incrementCount = document.querySelector(`[data-action="decrement"]`);
const decrementCount = document.querySelector(`[data-action="increment"]`);
const totalCount = document.getElementById("value");
let total = 0;
totalCount.innerHTML = total;
const handleIncrement = () => {
  total++;
  totalCount.innerHTML = total;
};
const handleDecrement = () => {
  total--;
  totalCount.innerHTML = total;
};

incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);